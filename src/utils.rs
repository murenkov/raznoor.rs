use num_traits::Float;

/// Compute the maximum absolute residual between two arrays of equal length.
///
/// # Parameters
/// * `xs` — First array of values.
/// * `ys` — Second array of values.
///
/// # Returns
/// `Ok(T)` containing the maximum of `|xs[i] - ys[i]|`, or `Err` if the arrays differ in length.
pub fn residual<T: Float>(xs: &[T], ys: &[T]) -> Result<T, &'static str> {
    if xs.len() != ys.len() {
        return Err("arrays should have equal length");
    }

    let diffs = std::iter::zip(xs, ys).map(|(&x, &y)| (x - y).abs());
    let mut max = T::zero();
    for diff in diffs {
        if diff > max {
            max = diff;
        }
    }
    Ok(max)
}
