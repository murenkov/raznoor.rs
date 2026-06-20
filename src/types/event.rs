use ndarray::Array1;
use std::sync::Arc;

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
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
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
