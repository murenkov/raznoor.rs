use num_traits::Float;

#[macro_use]
pub mod utils;

fn euler<T, F>(f: F, xs: Vec<T>, y_0: T) -> Vec<T>
where
    T: Float,
    F: Fn(T, T) -> T,
{
    let mut ys = vec![T::zero(); xs.len()];
    ys[0] = y_0;

    for (k, x) in xs.windows(2).enumerate() {
        let h = x[1] - x[0];
        ys[k + 1] = ys[k] + h * f(x[0], ys[k]);
    }
    ys
}

pub struct ODEProblem<T: Float> {
    f: Box<dyn Fn(T, T) -> T>,
    u0: T,
    tspan: (T, T),
}

#[derive(Debug)]
pub enum DEAlgorithm {
    Euler,
}

pub fn solve<T: Float>(prob: ODEProblem<T>, alg: DEAlgorithm, dt: T) -> Vec<T> {
    let xs: Vec<T> = std::iter::successors(Some(prob.tspan.0), |&x| Some(x + dt))
        .take_while(|&x| x < prob.tspan.1)
        .collect();

    match alg {
        DEAlgorithm::Euler => euler(prob.f, xs, prob.u0),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn euler_f32() {
        let fun = |x: f32, y: f32| -> f32 { 2.0 * x + y };
        let prob = ODEProblem {
            f: Box::new(fun),
            u0: 1.0,
            tspan: (1.0, 1.1),
        };

        let ys = solve(prob, DEAlgorithm::Euler, 0.01);
        let ys_ref: Vec<f32> = (0..10)
            .map(|x| 1.0 + (x as f32) * 0.01)
            .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
            .collect();
        let res = utils::residual(&ys, &ys_ref);
        assert!(res <= 0.01);
    }

    #[test]
    fn euler_f64() {
        let fun = |x: f64, y: f64| -> f64 { 2.0 * x + y };
        let prob = ODEProblem {
            f: Box::new(fun),
            u0: 1.0,
            tspan: (1.0, 1.1),
        };

        let ys = solve(prob, DEAlgorithm::Euler, 0.01);
        let ys_ref: Vec<f64> = (0..10)
            .map(|x| 1.0 + (x as f64) * 0.01)
            .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
            .collect();
        let res = utils::residual(&ys, &ys_ref);
        assert!(res <= 0.01);
    }
}
