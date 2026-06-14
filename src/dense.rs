use ndarray::{Array1, Array2};
use num_traits::Float;
use num_traits::FromPrimitive;
use std::fmt::Display;

use crate::types::SolverError;

/// Dense output trait for continuous evaluation of ODE solutions.
///
/// Implementors provide interpolation between discrete integration step points,
/// enabling evaluation of the solution at arbitrary times within the spanned range.
pub trait DenseOutput<T> {
    /// Evaluate the dense output at a single time point `t`.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InterpolationOutOfRange`] if `t` is outside the
    /// interpolation range `[t₀, tₙ₋₁]`.
    fn call(&self, t: T) -> Result<Array1<T>, SolverError>;

    /// Evaluate the dense output at multiple (sorted) time points.
    ///
    /// `ts` must be sorted in non-decreasing order for an O(n + m) two‑pointer
    /// walk.  If `ts` is not sorted the result is still correct but performance
    /// degrades to O(n·m).
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InterpolationOutOfRange`] if any `t` in `ts` is
    /// outside the interpolation range.
    fn call_many(&self, ts: &[T]) -> Result<Array2<T>, SolverError>;
}

/// Cubic Hermite interpolant between integration step points.
///
/// Stores time points, state vectors, and derivative vectors (the right‑hand
/// side evaluations) at each step point and evaluates the cubic Hermite
/// interpolant at arbitrary times.
///
/// # Interpolation formula
///
/// For an interval `[t_i, t_{i+1}]` with width `h = t_{i+1} - t_i` and
/// normalised position `s = (t - t_i) / h`:
///
/// ```text
/// u(t) =  (1 - 3s² + 2s³)·y_i
///       + (3s² - 2s³)·y_{i+1}
///       + h·(s - 2s² + s³)·dy_i
///       + h·(s³ - s²)·dy_{i+1}
/// ```
///
/// # Errors
///
/// [`HermiteInterpolant::new`] returns [`SolverError::InvalidInterpolationData`]
/// if:
/// * `t` has fewer than 2 elements.
/// * `t`, `y`, `dy` have inconsistent lengths.
/// * `t` is not strictly increasing.
#[derive(Debug, Clone)]
pub struct HermiteInterpolant<T> {
    /// Time points (strictly increasing).
    t: Box<[T]>,
    /// State vectors at each time point; shape `(n_times, n_vars)`.
    y: Array2<T>,
    /// Derivative vectors at each time point; shape `(n_times, n_vars)`.
    dy: Array2<T>,
}

impl<T: Float + FromPrimitive + ndarray::ScalarOperand> HermiteInterpolant<T> {
    /// Create a new Hermite interpolant.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InvalidInterpolationData`] if the inputs are
    /// inconsistent (see [`HermiteInterpolant`] docs).
    pub fn new(t: Box<[T]>, y: Array2<T>, dy: Array2<T>) -> Result<Self, SolverError> {
        if t.len() < 2 {
            return Err(SolverError::InvalidInterpolationData);
        }
        if y.nrows() != t.len() || dy.nrows() != t.len() {
            return Err(SolverError::InvalidInterpolationData);
        }
        if y.ncols() != dy.ncols() {
            return Err(SolverError::InvalidInterpolationData);
        }
        for i in 1..t.len() {
            if t[i - 1] >= t[i] {
                return Err(SolverError::InvalidInterpolationData);
            }
        }
        Ok(Self { t, y, dy })
    }

    /// Return the time points.
    #[must_use]
    pub fn t(&self) -> &[T] {
        &self.t
    }

    /// Return the state vectors (shape `(n_times, n_vars)`).
    #[must_use]
    pub const fn y(&self) -> &Array2<T> {
        &self.y
    }

    /// Return the derivative vectors (shape `(n_times, n_vars)`).
    #[must_use]
    pub const fn dy(&self) -> &Array2<T> {
        &self.dy
    }

    /// Evaluate the cubic Hermite interpolant on the `i`-th interval.
    fn interpolate(&self, t_val: T, i: usize) -> Array1<T> {
        let t_i = self.t[i];
        let t_ip1 = self.t[i + 1];
        let h = t_ip1 - t_i;

        if h.is_zero() || t_val <= t_i {
            return self.y.row(i).to_owned();
        }
        if t_val >= t_ip1 {
            return self.y.row(i + 1).to_owned();
        }

        let s = (t_val - t_i) / h;
        let s2 = s * s;
        let s3 = s2 * s;

        let c1 = T::one() - T::from_f64(3.0).unwrap() * s2 + T::from_f64(2.0).unwrap() * s3;
        let c2 = T::from_f64(3.0).unwrap() * s2 - T::from_f64(2.0).unwrap() * s3;
        let c3 = s - T::from_f64(2.0).unwrap() * s2 + s3;
        let c4 = s3 - s2;

        &self.y.row(i) * c1
            + &self.y.row(i + 1) * c2
            + &self.dy.row(i) * (h * c3)
            + &self.dy.row(i + 1) * (h * c4)
    }
}

impl<T: Float + FromPrimitive + ndarray::ScalarOperand + Display> DenseOutput<T>
    for HermiteInterpolant<T>
{
    fn call(&self, t: T) -> Result<Array1<T>, SolverError> {
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

        Ok(self.interpolate(t, i))
    }

    fn call_many(&self, ts: &[T]) -> Result<Array2<T>, SolverError> {
        if ts.is_empty() {
            return Ok(Array2::zeros((0, self.y.ncols())));
        }

        let t0 = self.t[0];
        let t_last = self.t[self.t.len() - 1];

        let mut result = Array2::zeros((ts.len(), self.y.ncols()));
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

            let val = self.interpolate(t_val, interval);
            result.row_mut(row).assign(&val);
        }

        Ok(result)
    }
}

#[cfg(test)]
mod tests {
    use ndarray::array;

    use super::*;

    fn make_interpolant() -> HermiteInterpolant<f64> {
        let t: Box<[f64]> = Box::new([0.0, 1.0, 2.0, 3.0]);
        let y = array![[0.0, 0.0], [1.0, 2.0], [4.0, 4.0], [9.0, 6.0]];
        let dy = array![[0.0, 2.0], [2.0, 2.0], [4.0, 2.0], [6.0, 2.0]];
        HermiteInterpolant::new(t, y, dy).unwrap()
    }

    #[test]
    fn exact_at_grid_points() {
        let h = make_interpolant();
        let ts = [0.0, 1.0, 2.0, 3.0];
        let expected = [[0.0, 0.0], [1.0, 2.0], [4.0, 4.0], [9.0, 6.0]];
        for (i, &t) in ts.iter().enumerate() {
            let val = h.call(t).unwrap();
            assert_eq!(val, array![expected[i][0], expected[i][1]]);
        }
    }

    #[test]
    fn midpoint_linear() {
        let h = make_interpolant();
        // For y = [t^2, 2t], dy = [2t, 2], the Hermite interpolant
        // reproduces the exact function at all points.
        let val = h.call(0.5).unwrap();
        let expected = array![0.25, 1.0];
        for (v, e) in val.iter().zip(expected.iter()) {
            assert!((v - e).abs() < 1e-14);
        }
    }

    #[test]
    fn call_many_sorted() {
        let h = make_interpolant();
        let ts = vec![0.0, 0.5, 1.0, 2.5, 3.0];
        let result = h.call_many(&ts).unwrap();
        assert_eq!(result.shape(), &[5, 2]);
        for (i, &t) in ts.iter().enumerate() {
            let expected = h.call(t).unwrap();
            for j in 0..2 {
                assert!((result[[i, j]] - expected[j]).abs() < 1e-14);
            }
        }
    }

    #[test]
    fn single_point() {
        let h = make_interpolant();
        let val = h.call(1.5).unwrap();
        let single = h.call_many(&[1.5]).unwrap();
        assert_eq!(single.shape(), &[1, 2]);
        for j in 0..2 {
            assert!((single[[0, j]] - val[j]).abs() < 1e-14);
        }
    }

    #[test]
    fn call_before_range() {
        let h = make_interpolant();
        assert!(matches!(
            h.call(-0.1),
            Err(SolverError::InterpolationOutOfRange)
        ));
    }

    #[test]
    fn call_after_range() {
        let h = make_interpolant();
        assert!(matches!(
            h.call(3.1),
            Err(SolverError::InterpolationOutOfRange)
        ));
    }

    #[test]
    fn call_many_out_of_range() {
        let h = make_interpolant();
        assert!(matches!(
            h.call_many(&[1.0, 3.5]),
            Err(SolverError::InterpolationOutOfRange)
        ));
    }

    #[test]
    fn empty_time_points() {
        let t: Box<[f64]> = Box::new([]);
        let y = Array2::zeros((0, 2));
        let dy = Array2::zeros((0, 2));
        assert!(matches!(
            HermiteInterpolant::new(t, y, dy),
            Err(SolverError::InvalidInterpolationData)
        ));
    }

    #[test]
    fn single_time_point() {
        let t: Box<[f64]> = Box::new([0.0]);
        let y = array![[1.0, 2.0]];
        let dy = array![[3.0, 4.0]];
        assert!(matches!(
            HermiteInterpolant::new(t, y, dy),
            Err(SolverError::InvalidInterpolationData)
        ));
    }

    #[test]
    fn non_strictly_increasing() {
        let t: Box<[f64]> = Box::new([0.0, 1.0, 1.0, 2.0]);
        let y = Array2::zeros((4, 2));
        let dy = Array2::zeros((4, 2));
        assert!(matches!(
            HermiteInterpolant::new(t, y, dy),
            Err(SolverError::InvalidInterpolationData)
        ));
    }

    #[test]
    fn empty_call_many() {
        let h = make_interpolant();
        let result = h.call_many(&[]).unwrap();
        assert_eq!(result.shape(), &[0, 2]);
    }

    #[test]
    fn derivative_continuity() {
        let h = make_interpolant();
        let val_mid = h.call(0.9999).unwrap();
        let val_next = h.call(1.0001).unwrap();
        // The interpolant is C¹, so values near the boundary should be close.
        for j in 0..2 {
            let diff = (val_mid[j] - val_next[j]).abs();
            assert!(diff < 1e-3);
        }
    }
}
