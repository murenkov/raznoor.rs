use ndarray::{Array1, Array2};
use num_traits::Float;

/// The solution of an ODE system, containing time points and state trajectories.
///
/// # Fields
/// * `t` — Time points at which the solution was evaluated.
/// * `u` — State trajectories as a matrix of shape `(n_vars, n_times)` — each row is one
///   variable's trajectory across all time points.
pub struct ODESolution<T> {
    /// Time points at which the solution was evaluated.
    pub t: Box<[T]>,
    /// State trajectories as a matrix of shape `(n_vars, n_times)`.
    pub u: Array2<T>,
}

/// Errors that can occur during ODE solving.
///
/// This enum is non-exhaustive; new variants may be added in future releases.
#[derive(Debug, PartialEq)]
#[non_exhaustive]
pub enum SolverError {
    /// Adaptive step-size control is not supported for the given algorithm.
    AdaptiveNotSupported,
}

impl std::fmt::Display for SolverError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            SolverError::AdaptiveNotSupported => {
                write!(f, "adaptive stepping not supported for this algorithm")
            }
        }
    }
}

impl std::error::Error for SolverError {}

/// An initial value problem for a system of ordinary differential equations.
///
/// # Fields
/// * `f` — The right-hand side function `f(t, u)` defining the ODE `u' = f(t, u)`.
/// * `u0` — The initial condition vector `u(t0)`.
/// * `tspan` — The time span `(t0, t1)` over which to solve.
pub struct ODEProblem<T: Float, F> {
    /// The right-hand side function `f(t, u)` defining the ODE `u' = f(t, u)`.
    pub f: F,
    /// The initial condition vector `u(t0)`.
    pub u0: Array1<T>,
    /// The time span `(t0, t1)` over which to solve.
    pub tspan: (T, T),
}
