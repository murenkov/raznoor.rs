use ndarray::Array1;
use ndarray::Array2;
use ndarray::ScalarOperand;
use num_traits::Float;
use num_traits::FromPrimitive;
use std::fmt::Display;

use crate::dense::HermiteInterpolant;
use crate::types::error::SolverError;
use crate::types::event::EventRecord;

/// The solution of an ODE system, containing time points and state trajectories.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future releases.
///
/// # Fields
/// * `t` — Time points at which the solution was evaluated.
/// * `u` — State trajectories as a matrix of shape `(n_times, n_vars)` — each row is one
///   time step (all variable values at that time).
/// * `du` — Derivative at each time point (same shape as `u`), present only when the solver
///   was configured to store derivatives. Enables dense output via [`interpolate`](ODESolution::interpolate).
/// * `events` — Events that fired during integration (empty if none).
#[derive(Debug, Clone)]
#[non_exhaustive]
pub struct ODESolution<T> {
    /// Time points at which the solution was evaluated.
    pub t: Box<[T]>,
    /// State trajectories as a matrix of shape `(n_times, n_vars)`.
    pub u: Array2<T>,
    /// Derivative at each time point, same shape as `u`.
    /// Present only when the solver was configured to store derivatives.
    pub du: Option<Array2<T>>,
    /// Events that fired during integration.
    pub events: Vec<EventRecord<T>>,
}

impl<T> ODESolution<T> {
    /// Create a new ODE solution from time points and state trajectories (no events).
    #[must_use]
    pub const fn new(t: Box<[T]>, u: Array2<T>) -> Self {
        Self {
            t,
            u,
            du: None,
            events: Vec::new(),
        }
    }

    /// Create a new ODE solution from time points, state trajectories, and event records.
    #[must_use]
    pub const fn with_events(t: Box<[T]>, u: Array2<T>, events: Vec<EventRecord<T>>) -> Self {
        Self {
            t,
            u,
            du: None,
            events,
        }
    }

    /// Set the derivative array, enabling dense output via [`interpolate`](ODESolution::interpolate).
    ///
    /// `du` must have the same shape as `u` (see [`ODESolution::u`]): `(n_times, n_vars)`.
    #[must_use]
    pub fn with_du(mut self, du: Array2<T>) -> Self {
        self.du = Some(du);
        self
    }

    /// Evaluate the cubic Hermite interpolant on interval `i`.
    /// The caller must ensure `i < t.len() - 1`.
    fn hermite_eval(&self, t_val: T, i: usize, du: &Array2<T>) -> Array1<T>
    where
        T: Float + FromPrimitive + ScalarOperand,
    {
        HermiteInterpolant::<T>::eval_cubic_hermite(&self.t, &self.u, du, t_val, i)
    }

    /// Evaluate the solution at an arbitrary time `t` using cubic Hermite interpolation.
    ///
    /// Returns `None` if derivatives were not stored (i.e. [`du`](ODESolution::du) is `None`)
    /// or if there are fewer than 2 time points (insufficient for interpolation).
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InterpolationOutOfRange`] if `t` is outside the range
    /// `[t[0], t[n-1]]`.
    ///
    /// Returns [`SolverError::MissingDerivativeData`] if derivative data was not stored
    /// during integration or if there are fewer than 2 time points.
    pub fn interpolate(&self, t: T) -> Result<Array1<T>, SolverError>
    where
        T: Float + FromPrimitive + ScalarOperand + Display,
    {
        let du = self.du.as_ref().ok_or(SolverError::MissingDerivativeData)?;
        if self.t.len() < 2 {
            return Err(SolverError::MissingDerivativeData);
        }

        let t0 = self.t[0];
        let t_last = self.t[self.t.len() - 1];
        if t < t0 || t > t_last {
            return Err(SolverError::InterpolationOutOfRange);
        }

        let i = self
            .t
            .partition_point(|&ti| ti <= t)
            .saturating_sub(1)
            .min(self.t.len() - 2);

        Ok(self.hermite_eval(t, i, du))
    }

    /// Evaluate the solution at multiple (sorted) time points using cubic Hermite interpolation.
    ///
    /// `ts` must be sorted in non-decreasing order for an O(n + m) two‑pointer walk.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InterpolationOutOfRange`] if any `t` in `ts` is outside
    /// the interpolation range.
    ///
    /// Returns [`SolverError::MissingDerivativeData`] if derivative data was not stored
    /// during integration or if there are fewer than 2 time points.
    pub fn interpolate_many(&self, ts: &[T]) -> Result<Array2<T>, SolverError>
    where
        T: Float + FromPrimitive + ScalarOperand + Display,
    {
        let du = self.du.as_ref().ok_or(SolverError::MissingDerivativeData)?;
        if self.t.len() < 2 {
            return Err(SolverError::MissingDerivativeData);
        }
        if ts.is_empty() {
            return Ok(Array2::zeros((0, self.u.ncols())));
        }

        let t0 = self.t[0];
        let t_last = self.t[self.t.len() - 1];

        let mut result = Array2::zeros((ts.len(), self.u.ncols()));
        let mut interval: usize = 0;

        for (row, &t_val) in ts.iter().enumerate() {
            if t_val < t0 || t_val > t_last {
                return Err(SolverError::InterpolationOutOfRange);
            }

            while interval + 1 < self.t.len() - 1 && t_val >= self.t[interval + 1] {
                interval += 1;
            }
            while interval > 0 && t_val < self.t[interval] {
                interval -= 1;
            }

            let val = self.hermite_eval(t_val, interval, du);
            result.row_mut(row).assign(&val);
        }

        Ok(result)
    }
}
