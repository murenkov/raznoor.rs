use ndarray::{ArrayBase, OwnedRepr};
use ndarray::{arr1, arr2};
use num_traits::Float;
use num_traits::FromPrimitive;
use strum_macros::EnumIter;

#[macro_use]
pub mod utils;

pub struct ODESolution<T> {
    pub t: Box<[T]>,
    pub u: Box<[Box<[T]>]>,
}

type Vector<T> = ArrayBase<OwnedRepr<T>, ndarray::Dim<[usize; 1]>, T>;
type Matrix<T> = ArrayBase<OwnedRepr<T>, ndarray::Dim<[usize; 2]>, T>;

#[derive(Debug)]
struct ButcherTableu<T: Float> {
    a: Matrix<T>,
    b: Vector<T>,
    c: Vector<T>,
}

fn butcher_table<T>(size: usize) -> ButcherTableu<T>
where
    T: Float + num_traits::FromPrimitive,
{
    let cast = |x: f64| -> T { FromPrimitive::from_f64(x).unwrap() };

    match size {
        1_usize => ButcherTableu {
            a: arr2(&[[0.0]]).map(|x: &f64| cast(*x)),
            b: arr1(&[1.0]).map(|x: &f64| cast(*x)),
            c: arr1(&[0.0]).map(|x: &f64| cast(*x)),
        },
        2_usize => ButcherTableu {
            a: arr2(&[[0.0, 0.0], [1.0, 0.0]]).map(|x: &f64| cast(*x)),
            b: arr1(&[0.5, 0.5]).map(|x: &f64| cast(*x)),
            c: arr1(&[0.0, 1.0]).map(|x: &f64| cast(*x)),
        },
        4_usize => ButcherTableu {
            a: arr2(&[
                [0.0, 0.0, 0.0, 0.0],
                [0.5, 0.0, 0.0, 0.0],
                [0.0, 0.5, 0.0, 0.0],
                [0.0, 0.0, 1.0, 0.0],
            ])
            .map(|x: &f64| cast(*x)),
            b: arr1(&[1.0 / 6.0, 1.0 / 3.0, 1.0 / 3.0, 1.0 / 6.0]).map(|x: &f64| cast(*x)),
            c: arr1(&[0.0, 0.5, 0.5, 1.0]).map(|x: &f64| cast(*x)),
        },
        _ => unimplemented!(),
    }
}

fn stages_coefficents<T, F>(ks: &mut [T], bt: &ButcherTableu<T>, f: F, x: T, y: T, h: T)
where
    T: Float + num_traits::FromPrimitive,
    F: Fn(T, T) -> T,
{
    for m in 0..ks.len() {
        let mut sum = T::zero();
        for (i, &k) in ks.iter().enumerate() {
            sum = sum + bt.a[[m, i]] * k;
        }
        ks[m] = f(x + bt.c[m] * h, y + h * sum);
    }
}

fn runge_kutta_n<T, F>(ys: &mut [T], f: F, xs: &[T], y_0: T, stages: usize)
where
    T: Float + num_traits::FromPrimitive,
    F: Fn(T, T) -> T,
{
    ys[0] = y_0;

    let bt = butcher_table::<T>(stages);
    let mut ks: Vec<T> = vec![T::zero(); stages];
    for (i, x) in xs.windows(2).enumerate() {
        let h = x[1] - x[0];
        stages_coefficents(&mut ks, &bt, &f, x[0], ys[i], h);

        let mut s = T::zero();
        for (m, &k) in ks.iter().enumerate() {
            s = s + bt.b[m] * k;
        }

        ys[i + 1] = ys[i] + s * h;
    }
}

pub struct ODEProblem<T: Float> {
    f: Box<dyn Fn(T, T) -> T>,
    u0: T,
    tspan: (T, T),
}

#[derive(Debug, EnumIter)]
pub enum DEAlgorithm {
    ExplicitRungeKutta1,
    ExplicitRungeKutta2,
    ExplicitRungeKutta4,
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
        DEAlgorithm::ExplicitRungeKutta1 => runge_kutta_n(&mut ys, &prob.f, &xs, prob.u0, 1),
        DEAlgorithm::ExplicitRungeKutta2 => runge_kutta_n(&mut ys, &prob.f, &xs, prob.u0, 2),
        DEAlgorithm::ExplicitRungeKutta4 => runge_kutta_n(&mut ys, &prob.f, &xs, prob.u0, 4),
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
