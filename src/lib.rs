use num_traits::Float;
use num_traits::FromPrimitive;
use strum_macros::EnumIter;

#[macro_use]
pub mod utils;

pub struct ODESolution<T> {
    pub t: Box<[T]>,
    pub u: Box<[Box<[T]>]>,
}

fn euler<T, F>(ys: &mut [T], f: F, xs: &[T], y_0: T)
where
    T: Float,
    F: Fn(T, T) -> T,
{
    ys[0] = y_0;

    for (k, x) in xs.windows(2).enumerate() {
        let h = x[1] - x[0];
        ys[k + 1] = ys[k] + h * f(x[0], ys[k]);
    }
}

fn runge_kutta<T, F>(ys: &mut [T], f: F, xs: &[T], y_0: T)
where
    T: Float + num_traits::FromPrimitive,
    F: Fn(T, T) -> T,
{
    ys[0] = y_0;

    let cast = |x: f64| -> T { FromPrimitive::from_f64(x).unwrap() };
    let c: T = cast(6.0).recip();
    for (k, x) in xs.windows(2).enumerate() {
        let h = x[1] - x[0];
        let k_1 = f(x[0], ys[k]);
        let k_2 = f(x[0] + cast(0.5) * h, ys[k] + cast(0.5) * h * k_1);
        let k_3 = f(x[0] + cast(0.5) * h, ys[k] + cast(0.5) * h * k_2);
        let k_4 = f(x[0] + h, ys[k] + h * k_3);
        ys[k + 1] = ys[k] + c * h * (k_1 + cast(2.0) * k_2 + cast(2.0) * k_3 + k_4);
    }
}

pub struct ODEProblem<T: Float> {
    f: Box<dyn Fn(T, T) -> T>,
    u0: T,
    tspan: (T, T),
}

#[derive(Debug, EnumIter)]
pub enum DEAlgorithm {
    Euler,
    RungeKutta,
}

pub fn solve<T>(prob: &ODEProblem<T>, alg: DEAlgorithm, dt: T) -> ODESolution<T>
where
    T: Float + num_traits::FromPrimitive,
{
    let xs: Box<[T]> = std::iter::successors(Some(prob.tspan.0), |&x| Some(x + dt))
        .take_while(|&x| x < prob.tspan.1)
        .collect();

    let mut ys = vec![T::zero(); xs.len()];
    match alg {
        DEAlgorithm::Euler => euler(&mut ys, &prob.f, &xs, prob.u0),
        DEAlgorithm::RungeKutta => runge_kutta(&mut ys, &prob.f, &xs, prob.u0),
    }
    let us: Box<[Box<[T]>]> = Box::new([ys.into()]);

    ODESolution::<T> { t: xs, u: us }
}

#[cfg(test)]
mod tests {
    use super::*;
    use strum::IntoEnumIterator;

    #[test]
    fn solve_f32() {
        let fun = |x: f32, y: f32| -> f32 { 2.0 * x + y };
        let prob = ODEProblem {
            f: Box::new(fun),
            u0: 1.0,
            tspan: (1.0, 1.1),
        };

        for alg in DEAlgorithm::iter() {
            let ys = solve(&prob, alg, 0.01);
            let ys_ref: Vec<f32> = (0..10)
                .map(|x| 1.0 + (x as f32) * 0.01)
                .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
                .collect();
            let res = utils::residual(&ys.u[0], &ys_ref);
            assert!(res <= 0.01);
        }
    }

    #[test]
    fn solve_f64() {
        let fun = |x: f64, y: f64| -> f64 { 2.0 * x + y };
        let prob = ODEProblem {
            f: Box::new(fun),
            u0: 1.0,
            tspan: (1.0, 1.1),
        };

        for alg in DEAlgorithm::iter() {
            let ys = solve(&prob, alg, 0.01);
            let ys_ref: Vec<f64> = (0..10)
                .map(|x| 1.0 + (x as f64) * 0.01)
                .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
                .collect();
            let res = utils::residual(&ys.u[0], &ys_ref);
            assert!(res <= 0.01);
        }
    }
}
