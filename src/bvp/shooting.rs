//! Boundary value problem (BVP) solvers using the shooting method.
//!
//! This module implements a simple (single) shooting approach: the BVP is
//! converted into a sequence of initial value problems (IVPs) whose initial
//! conditions are iteratively adjusted via Newton's method until the boundary
//! conditions are satisfied.
//!
//! The inner IVP is integrated using any [`ODEMethod`] implementation
//! (e.g. explicit Runge–Kutta, implicit RK, or BDF) with a fixed step size,
//! reusing the existing [`ODEMethod::step_with_scratch`] infrastructure.
//!
//! # Example
//!
//! ```
//! use ndarray::array;
//! use raznoor::{BVPProblem, BVPSolver, ShootingSolver, RUNGE_KUTTA_4};
//!
//! // Convert the second-order ODE  u'' = -u  to first-order form:
//! //   u[0]' = u[1]
//! //   u[1]' = -u[0]
//! // Boundary conditions:  u(0) = 0,  u(π/2) = 1
//! let f = |_t: f64, u: &ndarray::Array1<f64>| array![u[1], -u[0]];
//! let bc = |ya: &ndarray::Array1<f64>, yb: &ndarray::Array1<f64>| {
//!     array![ya[0] - 0.0, yb[0] - 1.0]
//! };
//! let guess = array![0.0, 1.0];
//!
//! let prob = BVPProblem::new(f, bc, guess, (0.0, std::f64::consts::FRAC_PI_2));
//!
//! let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.01, 100, 1e-6).unwrap();
//! let sol = solver.solve(&prob).unwrap();
//!
//! // The solution at t = π/2 should be approximately 1.0.
//! let u_last = sol.u[[sol.t.len() - 1, 0]];
//! assert!((u_last - 1.0).abs() < 0.01);
//! ```

use ndarray::Array1;
use ndarray::Array2;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::linalg;
use crate::solver::ODEMethod;
use crate::solver::grid::generate_time_grid;
use crate::types::{ODESolution, RhsODEFn, SolverError};

/// A boundary value problem for a system of ordinary differential equations.
///
/// Defines the first-order ODE system `u' = f(t, u)` on the interval
/// `t ∈ [t0, tf]` with boundary conditions `bc(u(t0), u(tf)) = 0`.
///
/// # Fields
///
/// * `f` — The right-hand side function `f(t, u)` defining the ODE system.
/// * `bc` — The boundary condition function `bc(ya, yb)`. Returns an
///   `n`-dimensional residual vector that must be zero at the solution.
/// * `tspan` — The time span `(t0, tf)` over which to solve.
/// * `guess` — An initial guess for the full `n`-dimensional state vector
///   at the left boundary `t0`.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future
/// releases.
#[non_exhaustive]
pub struct BVPProblem<T, F, BC> {
    /// The right-hand side function `f(t, u)` defining the ODE `u' = f(t, u)`.
    pub f: F,
    /// The boundary condition function `bc(ya, yb)` returning an
    /// `n`-dimensional residual.
    pub bc: BC,
    /// Initial guess for the state vector at `t0`.
    pub guess: Array1<T>,
    /// The time span `(t0, tf)` over which to solve.
    pub tspan: (T, T),
}

impl<T, F, BC> BVPProblem<T, F, BC> {
    /// Create a new boundary value problem.
    #[must_use]
    pub const fn new(f: F, bc: BC, guess: Array1<T>, tspan: (T, T)) -> Self {
        Self {
            f,
            bc,
            guess,
            tspan,
        }
    }
}

/// A solver for boundary value problems.
///
/// Implementors convert a [`BVPProblem`] into an [`ODESolution`] by
/// iteratively adjusting an initial guess to satisfy the boundary conditions.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznoor::{BVPProblem, BVPSolver, ShootingSolver, RUNGE_KUTTA_4};
///
/// let f = |_t: f64, u: &ndarray::Array1<f64>| array![u[1], -u[0]];
/// let bc = |ya: &ndarray::Array1<f64>, yb: &ndarray::Array1<f64>| {
///     array![ya[0] - 0.0, yb[0] - 1.0]
/// };
/// let prob = BVPProblem::new(f, bc, array![0.0, 1.0], (0.0, std::f64::consts::FRAC_PI_2));
/// let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.01, 100, 1e-6).unwrap();
/// let sol = solver.solve(&prob).unwrap();
/// ```
pub trait BVPSolver<T, F, BC> {
    /// Solve the boundary value problem and return the ODE solution.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::BvpNotConverged`] if the root-finding
    /// iteration does not converge within the maximum number of iterations.
    fn solve(&self, prob: &BVPProblem<T, F, BC>) -> Result<ODESolution<T>, SolverError>;
}

/// Simple (single) shooting BVP solver.
///
/// Converts the BVP into a sequence of IVPs by guessing the full state vector
/// at the left boundary, integrating to the right boundary, and using Newton's
/// method to drive the boundary condition residual to zero.
///
/// The inner IVP is integrated at a fixed step size using the supplied
/// [`ODEMethod`]. The finite-difference Jacobian of the boundary-condition
/// residual with respect to the initial guess is computed via perturbed IVP
/// solves — one additional IVP per unknown component per Newton iteration.
///
/// # Type parameters
///
/// * `M` — The ODE integration method.
/// * `T` — The floating-point scalar type.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznoor::{BVPProblem, BVPSolver, ShootingSolver, RUNGE_KUTTA_4};
///
/// // u'' = -u,  u(0) = 0,  u(π/2) = 1
/// let f = |_t: f64, u: &ndarray::Array1<f64>| array![u[1], -u[0]];
/// let bc = |ya: &ndarray::Array1<f64>, yb: &ndarray::Array1<f64>| {
///     array![ya[0] - 0.0, yb[0] - 1.0]
/// };
/// let prob = BVPProblem::new(f, bc, array![0.0, 1.0], (0.0, std::f64::consts::FRAC_PI_2));
///
/// let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.01, 100, 1e-6).unwrap();
/// let sol = solver.solve(&prob).unwrap();
/// assert!((sol.u[[sol.t.len() - 1, 0]] - 1.0).abs() < 0.01);
/// ```
#[derive(Clone, Debug)]
pub struct ShootingSolver<M, T> {
    /// The ODE integration method used for the inner IVP solves.
    method: M,
    /// Fixed step size for the inner IVP integration.
    dt: T,
    /// Maximum number of Newton iterations.
    max_iter: usize,
    /// Convergence tolerance for the boundary condition residual (infinity norm).
    tol: T,
    /// Finite-difference step for Jacobian approximation.
    diff_step: T,
}

impl<M, T: Float + FromPrimitive> ShootingSolver<M, T> {
    /// Create a new shooting solver.
    ///
    /// The finite-difference step for Jacobian approximation defaults to `1e-6`;
    /// use [`with_diff_step`](ShootingSolver::with_diff_step) to override it.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InvalidStepSize`] if `dt` is zero or negative.
    ///
    /// Returns [`SolverError::InvalidDiffStep`] if `1e-6` is not representable
    /// as `T` (in practice this never happens for `f32` or `f64`).
    pub fn new(method: M, dt: T, max_iter: usize, tol: T) -> Result<Self, SolverError> {
        if dt <= T::zero() {
            return Err(SolverError::InvalidStepSize);
        }
        Ok(Self {
            method,
            dt,
            max_iter,
            tol,
            // 1e-6 is a well-tested balance between truncation error and
            // round-off error for typical ODE problems in f32/f64. This is a
            // secondary tuning parameter — most users can rely on the default
            // while controlling convergence via `tol`. Override with
            // `with_diff_step()` if needed.
            diff_step: T::from_f64(1e-6).ok_or(SolverError::InvalidDiffStep)?,
        })
    }

    /// Set the finite-difference step size for Jacobian approximation.
    ///
    /// Default is `1e-6`. Larger values improve robustness for noisy
    /// residuals; smaller values improve accuracy for smooth residuals.
    #[must_use]
    pub const fn with_diff_step(mut self, diff_step: T) -> Self {
        self.diff_step = diff_step;
        self
    }

    /// Return a reference to the ODE integration method.
    #[must_use]
    pub const fn method(&self) -> &M {
        &self.method
    }

    /// Return the fixed step size.
    #[must_use]
    pub const fn dt(&self) -> T {
        self.dt
    }

    /// Return the maximum number of Newton iterations.
    #[must_use]
    pub const fn max_iter(&self) -> usize {
        self.max_iter
    }

    /// Return the convergence tolerance.
    #[must_use]
    pub const fn tol(&self) -> T {
        self.tol
    }

    /// Return the finite-difference step size.
    #[must_use]
    pub const fn diff_step(&self) -> T {
        self.diff_step
    }
}

impl<M: ODEMethod<T>, T: Float + FromPrimitive> ShootingSolver<M, T> {
    /// Integrate from `u0` over `tspan` and evaluate the boundary-condition
    /// residual.
    fn residual<F, BC>(
        &self,
        f: &F,
        bc: &BC,
        u0: &Array1<T>,
        tspan: (T, T),
    ) -> (ODESolution<T>, Array1<T>)
    where
        F: RhsODEFn<T>,
        BC: Fn(&Array1<T>, &Array1<T>) -> Array1<T>,
    {
        let sol = integrate(&self.method, f, u0, tspan, self.dt);
        let left = sol.u.row(0).to_owned();
        let right = sol.u.row(sol.u.nrows() - 1).to_owned();
        let r = bc(&left, &right);
        (sol, r)
    }

    /// Approximate the Jacobian J = ∂r/∂u0 via forward finite differences.
    fn compute_jacobian<F, BC>(
        &self,
        f: &F,
        bc: &BC,
        u0: &Array1<T>,
        r: &Array1<T>,
        tspan: (T, T),
    ) -> Array2<T>
    where
        F: RhsODEFn<T>,
        BC: Fn(&Array1<T>, &Array1<T>) -> Array1<T>,
    {
        let n = u0.len();
        let mut jac = Array2::zeros((n, n));
        for j in 0..n {
            let mut u0_pert = u0.clone();
            u0_pert[j] = u0_pert[j] + self.diff_step;
            let (_, r_pert) = self.residual(f, bc, &u0_pert, tspan);
            for i in 0..n {
                jac[[i, j]] = (r_pert[i] - r[i]) / self.diff_step;
            }
        }
        jac
    }

    /// Solve the Newton system `J · Δ = −r` (in-place) and return `Δ`.
    fn newton_step(mut jac: Array2<T>, mut delta: Array1<T>) -> Array1<T> {
        for entry in &mut delta {
            *entry = -*entry;
        }
        let mut piv = vec![0; delta.len()];
        linalg::lu_factor(&mut jac, &mut piv);
        linalg::lu_solve(&jac, &piv, &mut delta);
        delta
    }
}

impl<M, T, F, BC> BVPSolver<T, F, BC> for ShootingSolver<M, T>
where
    M: ODEMethod<T>,
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
    BC: Fn(&Array1<T>, &Array1<T>) -> Array1<T>,
{
    fn solve(&self, prob: &BVPProblem<T, F, BC>) -> Result<ODESolution<T>, SolverError> {
        let mut u0 = prob.guess.clone();

        for iter in 0..self.max_iter {
            let (sol, r) = self.residual(&prob.f, &prob.bc, &u0, prob.tspan);

            let max_res = r.iter().fold(T::zero(), |m, &x| T::max(m, x.abs()));
            if max_res < self.tol {
                return Ok(sol);
            }

            if iter == self.max_iter - 1 {
                break;
            }

            let jac = self.compute_jacobian(&prob.f, &prob.bc, &u0, &r, prob.tspan);
            let delta = Self::newton_step(jac, r);

            for i in 0..u0.len() {
                u0[i] = u0[i] + delta[i];
            }
        }

        Err(SolverError::BvpNotConverged)
    }
}

/// Integrate an ODE from `tspan.0` to `tspan.1` with the given initial
/// condition `u0` using the supplied method at a fixed step size `dt`.
fn integrate<M, T, F>(method: &M, f: &F, u0: &Array1<T>, tspan: (T, T), dt: T) -> ODESolution<T>
where
    M: ODEMethod<T>,
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
{
    let ts = generate_time_grid(tspan, dt);
    let n_steps = ts.len();
    let n_vars = u0.len();

    let mut u = Array2::zeros((n_steps, n_vars));
    u.row_mut(0).assign(u0);

    let mut scratch = method.prepare(n_vars);
    let mut u_curr = u0.clone();

    for i in 0..n_steps - 1 {
        let step_dt = ts[i + 1] - ts[i];
        let (u_new, _) = method.step_with_scratch(f, ts[i], step_dt, &u_curr, &mut scratch);
        u.row_mut(i + 1).assign(&u_new);
        u_curr = u_new;
    }

    ODESolution::new(ts.into_boxed_slice(), u)
}
