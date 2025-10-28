pub fn residual(xs: Vec<f32>, ys: Vec<f32>) -> f32 {
    let diffs = std::iter::zip(xs, ys).map(|(x, y)| (x - y).abs());
    let mut max = f32::MIN;
    for diff in diffs {
        if diff > max {
            max = diff;
        }
    }
    max
}
