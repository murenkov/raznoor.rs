pub mod adaptive;
pub(crate) mod core;
pub(crate) mod events;
pub mod fixed_step;

pub use adaptive::AdaptiveODESolver;
pub use fixed_step::FixedStepODESolver;

use num_traits::Float;
use num_traits::FromPrimitive;

use crate::types::{EnsembleODEProblem, ODEProblem, ODESolution, RhsODEFn, SolverError};

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
