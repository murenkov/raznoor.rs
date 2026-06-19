use num_traits::Float;
use num_traits::FromPrimitive;

/// Build a uniform time grid from `t0` to `t1` with step size `dt`.
///
/// The last point is always exactly `t1`, so the final interval may be
/// shorter than `dt`. Handles backward integration automatically when
/// `t1 < t0`.
pub fn generate_time_grid<T: Float + FromPrimitive>((t0, t1): (T, T), dt: T) -> Vec<T> {
    let dir = if t1 >= t0 { dt } else { -dt };
    let n = num_traits::cast::<T, usize>(((t1 - t0) / dir).floor()).unwrap_or(0);
    let mut ts = Vec::with_capacity(n + 2);
    ts.push(t0);
    for i in 1..n {
        ts.push(t0 + dir * T::from_usize(i).expect("step index fits in the numeric type"));
    }
    ts.push(t1);
    ts
}
