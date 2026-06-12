pub mod adaptive;
pub(crate) mod events;
pub mod fixed_step;

pub use adaptive::AdaptiveODESolver;
pub use fixed_step::FixedStepODESolver;

use ndarray::Array1;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::erk::ExplicitRungeKuttaMethod;
use crate::types::{EnsembleODEProblem, ODEProblem, ODESolution, RhsODEFn, SolverError};

/// A single-step ODE integration method.
///
/// Implementors provide the per-step integration logic, enabling both
/// fixed-step and adaptive-step solvers to work with any method family
/// (e.g. explicit Runge–Kutta, implicit RK, BDF).
///
/// # Scratch space
///
/// The associated [`Scratch`](ODEMethod::Scratch) type holds pre-allocated
/// buffers that the solver creates once via [`prepare`](ODEMethod::prepare)
/// and reuses on every step via
/// [`step_with_scratch`](ODEMethod::step_with_scratch).  The convenience
/// methods [`step`](ODEMethod::step) and
/// [`step_with_error`](ODEMethod::step_with_error) allocate scratch
/// internally and are suitable for one-off steps (e.g. event bisection).
pub trait ODEMethod<T: Float>: Sized {
    /// Scratch buffer type, allocated once by the solver and reused on every step.
    type Scratch;

    /// Allocate scratch buffers for `n_vars`-dimensional state vectors.
    ///
    /// Called once by the solver before the integration loop.
    fn prepare(&self, n_vars: usize) -> Self::Scratch;

    /// Take a single step from `t` to `t + dt` using pre-allocated scratch.
    fn step_with_scratch<F: RhsODEFn<T>>(
        &self,
        f: &F,
        t: T,
        dt: T,
        u: &Array1<T>,
        scratch: &mut Self::Scratch,
    ) -> Array1<T>;

    /// Take a single step from `t` to `t + dt`, allocating scratch internally.
    ///
    /// The default implementation calls [`prepare`](ODEMethod::prepare)
    /// and [`step_with_scratch`](ODEMethod::step_with_scratch).
    fn step<F: RhsODEFn<T>>(&self, f: &F, t: T, dt: T, u: &Array1<T>) -> Array1<T> {
        let mut scratch = self.prepare(u.len());
        self.step_with_scratch(f, t, dt, u, &mut scratch)
    }

    /// Take a single step and return an error estimate for adaptive stepping.
    ///
    /// Returns `(new_state, error_per_component)`.  The default implementation
    /// delegates to [`step_with_scratch`](ODEMethod::step_with_scratch) and
    /// returns a zero error vector (which disables adaptive stepping).
    fn step_with_error_with_scratch<F: RhsODEFn<T>>(
        &self,
        f: &F,
        t: T,
        dt: T,
        u: &Array1<T>,
        scratch: &mut Self::Scratch,
    ) -> (Array1<T>, Array1<T>) {
        let u_new = self.step_with_scratch(f, t, dt, u, scratch);
        (u_new, Array1::zeros(u.len()))
    }

    /// Take a single step and return an error estimate, allocating scratch internally.
    fn step_with_error<F: RhsODEFn<T>>(
        &self,
        f: &F,
        t: T,
        dt: T,
        u: &Array1<T>,
    ) -> (Array1<T>, Array1<T>) {
        let mut scratch = self.prepare(u.len());
        self.step_with_error_with_scratch(f, t, dt, u, &mut scratch)
    }

    /// Whether this method supports adaptive step-size control.
    fn supports_adaptive(&self) -> bool {
        false
    }

    /// The (lower) order `p` of this method.
    ///
    /// For embedded pairs used in adaptive stepping this is the *lower* order
    /// (e.g. `4` for a 4(5) pair) so that the step-size controller can use
    /// `p + 1` as the error exponent. For fixed-order methods it is simply the
    /// order of the scheme.
    fn order(&self) -> usize;
}

/// Default fixed-step solver backed by an explicit Runge–Kutta method.
pub type FixedStepRK<T = f64> = FixedStepODESolver<ExplicitRungeKuttaMethod<f64>, T>;

/// Default adaptive solver backed by an explicit Runge–Kutta embedded pair.
pub type AdaptiveRK<T = f64> = AdaptiveODESolver<ExplicitRungeKuttaMethod<f64>, T>;

/// A solver that can integrate an [`ODEProblem`].
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznoor::{ODEProblem, ODESolver, FixedStepODESolver, RUNGE_KUTTA_4};
///
/// let f = |t: f64, u: &ndarray::Array1<f64>| array![2.0 * t + u[0]];
/// let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1)).unwrap();
///
/// let config = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
/// let sol = config.solve(&prob).unwrap();
/// ```
pub trait ODESolver<T, F>
where
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
{
    /// Integrate the given ODE problem and return the solution.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::EventError`] if an event function returns
    /// an invalid value. Implementations may return other variants (e.g.
    /// [`SolverError::InvalidStepSize`], [`SolverError::AdaptiveNotSupported`]).
    fn solve(&self, prob: &ODEProblem<T, F>) -> Result<ODESolution<T>, SolverError>;
}

/// A solver that can integrate an ensemble of ODE problems in parallel.
///
/// Each of the `n_members` initial conditions in [`EnsembleODEProblem`] is
/// solved independently on the rayon thread pool using the same solver
/// configuration.
///
/// Requires the `parallel` Cargo feature.
///
/// ```
/// # #[cfg(feature = "parallel")] {
/// use ndarray::array;
/// use ndarray::Array1;
/// use raznoor::{EnsembleODEProblem, EnsembleODESolver, FixedStepODESolver, RUNGE_KUTTA_4};
///
/// let f = |t: f64, u: &Array1<f64>| array![2.0 * t + u[0]];
/// let u0 = array![[1.0], [0.5], [0.0]];
/// let ensemble = EnsembleODEProblem::new(f, u0, (1.0, 1.1)).unwrap();
/// let solver = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
/// let results = solver.solve_batch(&ensemble);
///
/// assert_eq!(results.len(), 3);
/// assert!(results.iter().all(|r| r.is_ok()));
/// # }
/// ```
pub trait EnsembleODESolver<T, F>
where
    T: Float + FromPrimitive + Send + Sync,
    F: RhsODEFn<T> + Clone + Send + Sync,
{
    /// Solve all members of the ensemble in parallel and return per-member results.
    ///
    /// Each element of the returned vector corresponds to one ensemble member.
    /// Failures from individual members do not abort the rest of the batch.
    fn solve_batch(
        &self,
        ensemble: &EnsembleODEProblem<T, F>,
    ) -> Vec<Result<ODESolution<T>, SolverError>>;
}
