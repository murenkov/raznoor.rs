use ndarray::{Array1, Array2};

/// The solution of an ODE system, containing time points and state trajectories.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future releases.
///
/// # Fields
/// * `t` — Time points at which the solution was evaluated.
/// * `u` — State trajectories as a matrix of shape `(n_vars, n_times)` — each row is one
///   variable's trajectory across all time points.
#[derive(Debug, Clone)]
#[non_exhaustive]
pub struct ODESolution<T> {
    /// Time points at which the solution was evaluated.
    pub t: Box<[T]>,
    /// State trajectories as a matrix of shape `(n_vars, n_times)`.
    pub u: Array2<T>,
}

impl<T> ODESolution<T> {
    /// Create a new ODE solution from time points and state trajectories.
    #[must_use]
    pub fn new(t: Box<[T]>, u: Array2<T>) -> Self {
        Self { t, u }
    }
}

/// Errors that can occur during ODE solving.
///
/// This enum is non-exhaustive; new variants may be added in future releases.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznur::{ODEProblem, solve_adaptive, RUNGE_KUTTA_1, SolverError};
///
/// let f = |x: f64, y: &ndarray::Array1<f64>| array![0.0];
/// let prob = ODEProblem::new(f, array![0.0], (0.0, 1.0));
/// let result = solve_adaptive(&prob, &RUNGE_KUTTA_1, 0.01, 1e-4, 1e-4);
/// assert!(matches!(result, Err(SolverError::AdaptiveNotSupported)));
/// ```
#[derive(Debug, PartialEq)]
#[non_exhaustive]
pub enum SolverError {
    /// Adaptive step-size control is not supported for the given algorithm.
    AdaptiveNotSupported,
    /// The provided step size is zero or negative.
    InvalidStepSize,
    /// The initial condition contains NaN or infinite values.
    InvalidInitialCondition,
}

impl std::fmt::Display for SolverError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            SolverError::AdaptiveNotSupported => {
                write!(f, "adaptive stepping not supported for this algorithm")
            }
            SolverError::InvalidStepSize => {
                write!(f, "step size must be positive")
            }
            SolverError::InvalidInitialCondition => {
                write!(f, "initial condition contains NaN or infinite values")
            }
        }
    }
}

impl std::error::Error for SolverError {}

/// An initial value problem for a system of ordinary differential equations.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future releases.
///
/// # Fields
/// * `f` — The right-hand side function `f(t, u)` defining the ODE `u' = f(t, u)`.
/// * `u0` — The initial condition vector `u(t0)`.
/// * `tspan` — The time span `(t0, t1)` over which to solve.
#[non_exhaustive]
pub struct ODEProblem<T, F> {
    /// The right-hand side function `f(t, u)` defining the ODE `u' = f(t, u)`.
    pub f: F,
    /// The initial condition vector `u(t0)`.
    pub u0: Array1<T>,
    /// The time span `(t0, t1)` over which to solve.
    pub tspan: (T, T),
}

impl<T, F> ODEProblem<T, F> {
    /// Create a new ODE problem from a right-hand side function, initial condition,
    /// and time span.
    pub fn new(f: F, u0: Array1<T>, tspan: (T, T)) -> Self {
        Self { f, u0, tspan }
    }
}
