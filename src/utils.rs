use num_traits::Float;

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
