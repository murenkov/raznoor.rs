/// Errors that can occur during ODE solving.
///
/// This enum is non-exhaustive; new variants may be added in future releases.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznoor::{AdaptiveODESolver, ODEProblem, ODESolver, RUNGE_KUTTA_1, SolverError};
///
/// let f = |t: f64, u: &ndarray::Array1<f64>| array![0.0];
/// let prob = ODEProblem::new(f, array![0.0], (0.0, 1.0)).unwrap();
/// let result = AdaptiveODESolver::new(RUNGE_KUTTA_1, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
/// assert!(matches!(result, Err(SolverError::AdaptiveNotSupported)));
/// ```
#[derive(Debug)]
#[non_exhaustive]
pub enum SolverError {
    /// Adaptive step-size control is not supported for the given algorithm.
    AdaptiveNotSupported,
    /// The provided step size is zero or negative.
    InvalidStepSize,
    /// The default finite-difference step (`1e-6`) is not representable as `T`.
    InvalidDiffStep,
    /// The initial condition contains NaN or infinite values.
    InvalidInitialCondition,
    /// An event function returned NaN or infinite value.
    EventError,
    /// The Newton solver for implicit stages did not converge.
    NewtonConvergenceError,
    /// The requested interpolation time is outside the solution range.
    InterpolationOutOfRange,
    /// Derivative data was not stored during integration, so interpolation is
    /// not available.
    MissingDerivativeData,
    /// The data provided to construct an interpolant is invalid (e.g.
    /// inconsistent lengths, too few points, or non-increasing time values).
    InvalidInterpolationData,
    /// The BVP shooting method did not converge within the maximum number of
    /// iterations.
    BvpNotConverged,
    /// The parameter vector is empty or the sensitivity initial condition has
    /// an invalid shape.
    InvalidParameters,
}

impl PartialEq for SolverError {
    fn eq(&self, other: &Self) -> bool {
        core::mem::discriminant(self) == core::mem::discriminant(other)
    }
}

impl std::fmt::Display for SolverError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::AdaptiveNotSupported => {
                write!(f, "adaptive stepping not supported for this algorithm")
            }
            Self::InvalidStepSize => {
                write!(f, "step size must be positive")
            }
            Self::InvalidDiffStep => {
                write!(
                    f,
                    "default diff_step `1e-6` cannot be represented as the scalar type `T`"
                )
            }
            Self::InvalidInitialCondition => {
                write!(f, "initial condition contains NaN or infinite values")
            }
            Self::EventError => {
                write!(f, "event function returned invalid value")
            }
            Self::NewtonConvergenceError => {
                write!(
                    f,
                    "Newton iteration did not converge for implicit RK stages"
                )
            }
            Self::InterpolationOutOfRange => {
                write!(f, "t is outside the interpolation range")
            }
            Self::MissingDerivativeData => {
                write!(f, "derivative data not available for interpolation")
            }
            Self::InvalidInterpolationData => {
                write!(f, "invalid interpolation data")
            }
            Self::BvpNotConverged => {
                write!(f, "BVP solver did not converge")
            }
            Self::InvalidParameters => {
                write!(f, "invalid parameters for sensitivity analysis")
            }
        }
    }
}

impl std::error::Error for SolverError {}
