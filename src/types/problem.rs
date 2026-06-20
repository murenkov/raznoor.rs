use ndarray::Array1;
use ndarray::Array2;
use num_traits::Float;

use crate::types::error::SolverError;
use crate::types::event::Event;

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
    pub const fn f(&self) -> &F {
        &self.f
    }

    /// Return a reference to the initial conditions array (shape `(n_members, n_vars)`).
    #[must_use]
    pub const fn u0(&self) -> &Array2<T> {
        &self.u0
    }

    /// Return the time span.
    #[must_use]
    pub const fn tspan(&self) -> (T, T)
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
