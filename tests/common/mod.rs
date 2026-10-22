#![allow(missing_docs)]

use ndarray::Array1;
use ndarray::array;
use num_traits::Float;
use num_traits::FromPrimitive;
use raznoor::ODEProblem;

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

pub type ProblemSetup<T> = (ODEProblem<T, fn(T, &Array1<T>) -> Array1<T>>, Vec<Vec<T>>);

pub fn linear_problem<T: Float + FromPrimitive>() -> ProblemSetup<T> {
    let f: fn(T, &Array1<T>) -> Array1<T> =
        |t: T, u: &Array1<T>| array![T::from_f64(2.0).unwrap() * t + u[0]];
    let prob = ODEProblem::new(
        f,
        array![T::from_f64(1.0).unwrap()],
        (T::from_f64(1.0).unwrap(), T::from_f64(1.1).unwrap()),
    )
    .unwrap();
    let ys: Vec<T> = (0..11)
        .map(|i| {
            T::from_f64(1.0).unwrap()
                + T::from_f64(f64::from(i)).unwrap() * T::from_f64(0.01).unwrap()
        })
        .map(|x| {
            T::from_f64(5.0).unwrap() * (x - T::from_f64(1.0).unwrap()).exp()
                - T::from_f64(2.0).unwrap() * x
                - T::from_f64(2.0).unwrap()
        })
        .collect();
    (prob, vec![ys])
}

pub fn oscillator_problem<T: Float + FromPrimitive>() -> ProblemSetup<T> {
    let half_pi = T::from_f64(std::f64::consts::FRAC_PI_2).unwrap();
    let dt = T::from_f64(0.01).unwrap();
    let n_steps = num_traits::cast::<T, usize>((half_pi / dt).floor()).unwrap_or(0);
    let f: fn(T, &Array1<T>) -> Array1<T> = |_t: T, u: &Array1<T>| array![u[1], -u[0]];
    let prob = ODEProblem::new(
        f,
        array![T::from_f64(0.0).unwrap(), T::from_f64(1.0).unwrap()],
        (T::from_f64(0.0).unwrap(), half_pi),
    )
    .unwrap();
    let mut xs: Vec<T> = Vec::with_capacity(n_steps + 2);
    xs.push(T::from_f64(0.0).unwrap());
    for i in 1..n_steps {
        xs.push(dt * T::from_usize(i).unwrap());
    }
    xs.push(half_pi);
    let ys0: Vec<T> = xs.iter().map(|&t| t.sin()).collect();
    let ys1: Vec<T> = xs.iter().map(|&t| t.cos()).collect();
    (prob, vec![ys0, ys1])
}
