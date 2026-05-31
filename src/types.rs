use ndarray::{Array1, Array2};

/// Type alias for event function `g(t, y)`.
type EventFn<T> = Box<dyn Fn(T, &Array1<T>) -> T>;

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
/// The event function `g(t, y)` is monitored at each integration step.
/// When a sign change is detected (matching the specified [`EventDirection`]),
/// the solver locates the precise crossing time and records it.
///
/// If `terminal` is `true`, integration stops after the first occurrence of this event.
///
/// # Example
///
/// ```
/// use ndarray::Array1;
/// use raznoor::{Event, EventDirection};
///
/// let event = Event::new(
///     Box::new(|_t: f64, y: &Array1<f64>| y[0] - 0.5),
///     true,
///     EventDirection::Any,
/// );
/// ```
pub struct Event<T> {
    /// Event function `g(t, y)`. A zero crossing triggers the event.
    pub g: EventFn<T>,
    /// If `true`, integration terminates when this event fires.
    pub terminal: bool,
    /// The direction of zero crossing to detect.
    pub direction: EventDirection,
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
    pub y: Array1<T>,
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
/// use raznoor::{ODEProblem, solve_adaptive, RUNGE_KUTTA_1, SolverError};
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
    /// An event function returned NaN or infinite value.
    EventError,
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
    /// Events to detect during integration.
    pub events: Vec<Event<T>>,
}

impl<T, F> ODEProblem<T, F> {
    /// Create a new ODE problem from a right-hand side function, initial condition,
    /// and time span.
    pub fn new(f: F, u0: Array1<T>, tspan: (T, T)) -> Self {
        Self {
            f,
            u0,
            tspan,
            events: Vec::new(),
        }
    }

    /// Set the events to detect during integration.
    #[must_use]
    pub fn with_events(mut self, events: Vec<Event<T>>) -> Self {
        self.events = events;
        self
    }
}
