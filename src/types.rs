use ndarray::{Array1, Array2};
use num_traits::Float;
use std::sync::Arc;

/// Trait alias for the ODE right-hand side function `f(t, u)`.
///
/// Defines the signature `f(t, u) -> u'` for a system of ODEs where `u` is the
/// state vector and `u'` is its time derivative.
///
/// This trait is automatically implemented for all closures and function items
/// matching the signature `Fn(T, &Array1<T>) -> Array1<T>`.
pub trait RhsODEFn<T>: Fn(T, &Array1<T>) -> Array1<T> {}

impl<T, F> RhsODEFn<T> for F where F: Fn(T, &Array1<T>) -> Array1<T> {}

/// Type alias for an event function `g(t, u)`.
///
/// The event function takes the current time `t` and state vector `u`, and returns
/// a scalar value. Zero-crossings (sign changes) of this function trigger event
/// detection.
///
/// Uses [`Arc`] so that event closures can be shared across threads and cloned
/// (e.g. for parallel batched solves or ensemble problems).
type EventFn<T> = Arc<dyn Fn(T, &Array1<T>) -> T + Send + Sync>;

/// The direction of a zero crossing to detect for an event function.
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum EventDirection {
    /// Detect any zero crossing (both increasing and decreasing).
    Any,
    /// Only detect zero crossings where the event function goes from negative to positive.
    Increasing,
    /// Only detect zero crossings where the event function goes from positive to negative.
    Decreasing,
}

/// An event to detect during ODE integration.
///
/// The event function `g(t, u)` is monitored at each integration step.
/// When a sign change is detected (matching the specified [`EventDirection`]),
/// the solver locates the precise crossing time and records it.
///
/// If `terminal` is `true`, integration stops after the first occurrence of this event.
///
/// # Example
///
/// ```
/// use std::sync::Arc;
/// use ndarray::Array1;
/// use raznoor::{Event, EventDirection};
///
/// let event = Event::new(
///     Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
///     true,
///     EventDirection::Any,
/// );
/// ```
#[derive(Clone)]
pub struct Event<T> {
    /// Event function `g(t, y)`. A zero crossing triggers the event.
    pub g: EventFn<T>,
    /// If `true`, integration terminates when this event fires.
    pub terminal: bool,
    /// The direction of zero crossing to detect.
    pub direction: EventDirection,
}

impl<T> std::fmt::Debug for Event<T> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Event")
            .field("g", &"<event_fn>")
            .field("terminal", &self.terminal)
            .field("direction", &self.direction)
            .finish()
    }
}

impl<T> Event<T> {
    /// Create a new event.
    #[must_use]
    pub fn new(g: EventFn<T>, terminal: bool, direction: EventDirection) -> Self {
        Self {
            g,
            terminal,
            direction,
        }
    }
}

/// A record of an event that was triggered during integration.
#[derive(Debug, Clone)]
pub struct EventRecord<T> {
    /// Index of the event in the problem's event list.
    pub event_index: usize,
    /// The time at which the event occurred.
    pub t: T,
    /// The state vector at the event time.
    pub u: Array1<T>,
}

/// The solution of an ODE system, containing time points and state trajectories.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future releases.
///
/// # Fields
/// * `t` — Time points at which the solution was evaluated.
/// * `u` — State trajectories as a matrix of shape `(n_vars, n_times)` — each row is one
///   variable's trajectory across all time points.
/// * `events` — Events that fired during integration (empty if none).
#[derive(Debug, Clone)]
#[non_exhaustive]
pub struct ODESolution<T> {
    /// Time points at which the solution was evaluated.
    pub t: Box<[T]>,
    /// State trajectories as a matrix of shape `(n_vars, n_times)`.
    pub u: Array2<T>,
    /// Events that fired during integration.
    pub events: Vec<EventRecord<T>>,
}

impl<T> ODESolution<T> {
    /// Create a new ODE solution from time points and state trajectories (no events).
    #[must_use]
    pub fn new(t: Box<[T]>, u: Array2<T>) -> Self {
        Self {
            t,
            u,
            events: Vec::new(),
        }
    }

    /// Create a new ODE solution from time points, state trajectories, and event records.
    #[must_use]
    pub fn with_events(t: Box<[T]>, u: Array2<T>, events: Vec<EventRecord<T>>) -> Self {
        Self { t, u, events }
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
/// use raznoor::{AdaptiveODESolver, ODEProblem, ODESolver, RUNGE_KUTTA_1, SolverError};
///
/// let f = |t: f64, u: &ndarray::Array1<f64>| array![0.0];
/// let prob = ODEProblem::new(f, array![0.0], (0.0, 1.0)).unwrap();
/// let result = AdaptiveODESolver::new(RUNGE_KUTTA_1, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
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
    /// An event function returned NaN or infinite value.
    EventError,
    /// The Newton solver for implicit stages did not converge.
    NewtonConvergenceError,
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
            SolverError::EventError => {
                write!(f, "event function returned invalid value")
            }
            SolverError::NewtonConvergenceError => {
                write!(
                    f,
                    "Newton iteration did not converge for implicit RK stages"
                )
            }
        }
    }
}

impl std::error::Error for SolverError {}

fn validate_initial_condition<T: Float>(u0: &[T]) -> Result<(), SolverError> {
    for &val in u0 {
        if val.is_nan() || val.is_infinite() {
            return Err(SolverError::InvalidInitialCondition);
        }
    }
    Ok(())
}

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
    /// Events to detect during integration.
    pub events: Vec<Event<T>>,
}

impl<T, F> ODEProblem<T, F> {
    /// Create a new ODE problem from a right-hand side function, initial condition,
    /// and time span.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InvalidInitialCondition`] if `u0` contains NaN or
    /// infinite values.
    ///
    /// # Panics
    ///
    /// Panics if `u0` is not in standard (C-order) memory layout (always true for
    /// freshly created arrays).
    pub fn new(f: F, u0: Array1<T>, tspan: (T, T)) -> Result<Self, SolverError>
    where
        T: Float,
    {
        validate_initial_condition(u0.as_slice().unwrap())?;
        Ok(Self {
            f,
            u0,
            tspan,
            events: Vec::new(),
        })
    }

    /// Set the events to detect during integration.
    #[must_use]
    pub fn with_events(mut self, events: Vec<Event<T>>) -> Self {
        self.events = events;
        self
    }
}

/// An ensemble of initial value problems sharing the same right-hand side,
/// time span, and events, but with different initial conditions.
///
/// This is more memory-efficient than a `Vec<ODEProblem>` when solving the
/// same ODE system for many different initial conditions (e.g. Monte Carlo
/// simulations, parameter sweeps, ensemble forecasting).
///
/// The initial conditions are stored as a 2‑D array of shape
/// `(n_members, n_vars)`, where each row corresponds to one ensemble member.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future releases.
///
/// # Example
///
/// ```
/// use std::sync::Arc;
/// use ndarray::{Array1, Array2, array};
/// use raznoor::{EnsembleODEProblem, Event, EventDirection};
///
/// let f = |t: f64, u: &Array1<f64>| array![-u[0]];
///
/// // Two ensemble members, each with its own initial condition.
/// let u0 = array![
///     [1.0],  // member 0: u0 = [1.0]
///     [2.0],  // member 1: u0 = [2.0]
/// ];
///
/// let ensemble = EnsembleODEProblem::new(f, u0, (0.0, 1.0)).unwrap();
/// assert_eq!(ensemble.num_members(), 2);
/// ```
#[non_exhaustive]
pub struct EnsembleODEProblem<T, F> {
    /// The right-hand side function `f(t, u)` defining the ODE `u' = f(t, u)`.
    f: F,
    /// Initial conditions; shape `(n_members, n_vars)` — each row is one member's initial
    /// condition.
    u0: Array2<T>,
    /// The time span `(t0, t1)` over which to solve (shared by all members).
    tspan: (T, T),
    /// Events to detect during integration (shared by all members).
    events: Vec<Event<T>>,
}

impl<T, F> EnsembleODEProblem<T, F> {
    /// Create a new ensemble problem from a right-hand side function, initial conditions,
    /// and time span.
    ///
    /// `u0` must have shape `(n_members, n_vars)`.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InvalidInitialCondition`] if any element of `u0`
    /// contains NaN or an infinite value.
    ///
    /// # Panics
    ///
    /// Panics if any row of `u0` is not in standard (C-order) memory layout (always
    /// true for freshly created arrays).
    pub fn new(f: F, u0: Array2<T>, tspan: (T, T)) -> Result<Self, SolverError>
    where
        T: Float,
    {
        for row in u0.rows() {
            validate_initial_condition(row.as_slice().unwrap())?;
        }
        Ok(Self {
            f,
            u0,
            tspan,
            events: Vec::new(),
        })
    }

    /// Set the events to detect during integration.
    #[must_use]
    pub fn with_events(mut self, events: Vec<Event<T>>) -> Self {
        self.events = events;
        self
    }

    /// Return the number of ensemble members.
    #[must_use]
    pub fn num_members(&self) -> usize {
        self.u0.nrows()
    }

    /// Return a reference to the right-hand side function.
    #[must_use]
    pub fn f(&self) -> &F {
        &self.f
    }

    /// Return a reference to the initial conditions array (shape `(n_members, n_vars)`).
    #[must_use]
    pub fn u0(&self) -> &Array2<T> {
        &self.u0
    }

    /// Return the time span.
    #[must_use]
    pub fn tspan(&self) -> (T, T)
    where
        T: Copy,
    {
        self.tspan
    }

    /// Return the events slice.
    #[must_use]
    pub fn events(&self) -> &[Event<T>] {
        &self.events
    }
}
