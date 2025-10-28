#[macro_use]
pub mod utils;

fn euler<F>(f: F, xs: Vec<f32>, y_0: f32) -> Vec<f32>
where
    F: Fn(f32, f32) -> f32,
{
    let mut ys = vec![Default::default(); xs.len()];
    ys[0] = y_0;

    for (k, x) in xs[..xs.len() - 1].iter().enumerate() {
        let h = xs[k + 1] - xs[k];
        ys[k + 1] = ys[k] + h * f(*x, ys[k]);
    }
    ys
}

pub struct ODEProblem {
    f: Box<dyn Fn(f32, f32) -> f32>,
    u0: f32,
    tspan: (f32, f32),
}

#[derive(Debug)]
pub enum DEAlgorithm {
    Euler,
}

pub fn solve(prob: ODEProblem, alg: DEAlgorithm, dt: f32) -> Vec<f32> {
    let len = ((prob.tspan.1 - prob.tspan.0) / dt) as usize;

    let xs: Vec<f32> = (0..len).map(|k| prob.tspan.0 + (k as f32) * dt).collect();

    match alg {
        DEAlgorithm::Euler => euler(prob.f, xs, prob.u0),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn euler() {
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
        let res = utils::residual(ys, ys_ref);
        assert!(res <= 0.01);
    }
}
