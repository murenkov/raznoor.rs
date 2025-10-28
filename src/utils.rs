use num_traits::Float;

pub fn residual<T: Float>(xs: &[T], ys: &[T]) -> T {
    let diffs = std::iter::zip(xs, ys).map(|(&x, &y)| (x - y).abs());
    let mut max = T::min_value();
    for diff in diffs {
        if diff > max {
            max = diff;
        }
    }
    max
}
