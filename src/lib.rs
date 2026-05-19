#![warn(missing_docs)]

//! A Rust library for solving ordinary differential equations (ODEs) using explicit Runge-Kutta methods.

use ndarray::{ArrayBase, OwnedRepr};
use ndarray::{arr1, arr2};
use num_traits::Float;
use num_traits::FromPrimitive;

/// Utility functions for the ODE solver.
pub mod utils;

/// The solution of an ODE, containing time points and corresponding state vectors.
pub struct ODESolution<T> {
    /// Time points at which the solution was evaluated.
    pub t: Box<[T]>,
    /// State vectors at each time point (one vector per dependent variable).
    pub u: Box<[Box<[T]>]>,
}

/// Errors that can occur during ODE solving.
///
/// This enum is non-exhaustive; new variants may be added in future releases.
///
/// # Variants
/// * `UnsupportedStageCount(usize)` — The requested number of Runge-Kutta stages is not supported.
#[derive(Debug, PartialEq)]
#[non_exhaustive]
pub enum SolverError {
    /// The requested number of Runge-Kutta stages is not supported.
    UnsupportedStageCount(usize),
}

impl std::fmt::Display for SolverError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            SolverError::UnsupportedStageCount(n) => {
                write!(f, "unsupported Runge-Kutta stage count: {n}")
            }
        }
    }
}

impl std::error::Error for SolverError {}

type Vector<T> = ArrayBase<OwnedRepr<T>, ndarray::Dim<[usize; 1]>>;
type Matrix<T> = ArrayBase<OwnedRepr<T>, ndarray::Dim<[usize; 2]>>;

#[derive(Debug)]
struct ButcherTableau<T: Float> {
    a: Matrix<T>,
    b: Vector<T>,
    c: Vector<T>,
}

fn runge_kutta_matrix<T>(size: usize) -> Matrix<T>
where
    T: Float + FromPrimitive,
{
    let cast = |x: f64| -> T {
        FromPrimitive::from_f64(x).expect("Butcher tableau coefficients are valid f64 constants")
    };

    match size {
        1 => arr2(&[[0.0]]).map(|x: &f64| cast(*x)),
        2 => arr2(&[[0.0, 0.0], [1.0, 0.0]]).map(|x: &f64| cast(*x)),
        4 => arr2(&[
            [0.0, 0.0, 0.0, 0.0],
            [0.5, 0.0, 0.0, 0.0],
            [0.0, 0.5, 0.0, 0.0],
            [0.0, 0.0, 1.0, 0.0],
        ])
        .map(|x: &f64| cast(*x)),
        _ => unreachable!("runge_kutta_matrix is only called with validated stage counts"),
    }
}

fn butcher_tableau<T>(size: usize) -> Result<ButcherTableau<T>, SolverError>
where
    T: Float + FromPrimitive,
{
    let cast = |x: f64| -> T {
        FromPrimitive::from_f64(x).expect("Butcher tableau coefficients are valid f64 constants")
    };

    // Validate size before calling the infallible runge_kutta_matrix
    if !matches!(size, 1 | 2 | 4) {
        return Err(SolverError::UnsupportedStageCount(size));
    }

    let a = runge_kutta_matrix::<T>(size);
    match size {
        1 => Ok(ButcherTableau {
            a,
            b: arr1(&[1.0]).map(|x: &f64| cast(*x)),
            c: arr1(&[0.0]).map(|x: &f64| cast(*x)),
        }),
        2 => Ok(ButcherTableau {
            a,
            b: arr1(&[0.5, 0.5]).map(|x: &f64| cast(*x)),
            c: arr1(&[0.0, 1.0]).map(|x: &f64| cast(*x)),
        }),
        4 => Ok(ButcherTableau {
            a,
            b: arr1(&[1.0 / 6.0, 1.0 / 3.0, 1.0 / 3.0, 1.0 / 6.0]).map(|x: &f64| cast(*x)),
            c: arr1(&[0.0, 0.5, 0.5, 1.0]).map(|x: &f64| cast(*x)),
        }),
        _ => unreachable!("size validated above"),
    }
}

fn stages_coefficients<T, F>(ks: &mut [T], bt: &ButcherTableau<T>, f: F, x: T, y: T, h: T)
where
    T: Float + FromPrimitive,
    F: Fn(T, T) -> T,
{
    debug_assert_eq!(
        ks.len(),
        bt.a.nrows(),
        "ks length must match the Butcher tableau size"
    );
    for m in 0..ks.len() {
        let mut sum = T::zero();
        for (i, &k) in ks.iter().enumerate() {
            sum = sum + bt.a[[m, i]] * k;
        }
        ks[m] = f(x + bt.c[m] * h, y + h * sum);
    }
}

fn runge_kutta_n<T, F>(
    ys: &mut [T],
    f: F,
    xs: &[T],
    y_0: T,
    stages: usize,
) -> Result<(), SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, T) -> T,
{
    ys[0] = y_0;

    let bt = butcher_tableau::<T>(stages)?;
    let mut ks = vec![T::zero(); stages];
    for (i, x) in xs.windows(2).enumerate() {
        let h = x[1] - x[0];
        stages_coefficients(&mut ks, &bt, &f, x[0], ys[i], h);

        let mut s = T::zero();
        for (m, &k) in ks.iter().enumerate() {
            s = s + bt.b[m] * k;
        }

        ys[i + 1] = ys[i] + s * h;
    }
    Ok(())
}

/// An initial value problem for an ordinary differential equation.
pub struct ODEProblem<T: Float, F: Fn(T, T) -> T> {
    /// The right-hand side function `f(t, y)` defining the ODE `y' = f(t, y)`.
    pub f: F,
    /// The initial condition `y(t0)`.
    pub u0: T,
    /// The time span `(t0, t1)` over which to solve.
    pub tspan: (T, T),
}

/// Available ODE solving algorithms.
///
/// This enum is non-exhaustive; new variants may be added in future releases.
///
/// # Variants
/// * `ExplicitRungeKutta1` — The first-order explicit Runge-Kutta method (Euler's method).
/// * `ExplicitRungeKutta2` — The second-order explicit Runge-Kutta method (midpoint method).
/// * `ExplicitRungeKutta4` — The fourth-order explicit Runge-Kutta method (classic RK4).
#[derive(Debug, Clone)]
#[non_exhaustive]
pub enum DEAlgorithm {
    /// First-order explicit Runge-Kutta (Euler's method).
    ExplicitRungeKutta1,
    /// Second-order explicit Runge-Kutta (midpoint method).
    ExplicitRungeKutta2,
    /// Fourth-order explicit Runge-Kutta (classic RK4).
    ExplicitRungeKutta4,
}

/// Solve an ODE problem using the specified algorithm and step size.
///
/// # Parameters
/// * `prob` — The ODE problem definition containing the right-hand side, initial condition, and time span.
/// * `alg` — The Runge-Kutta algorithm variant to use for integration.
/// * `dt` — The fixed step size for time-stepping.
///
/// # Returns
/// `Ok(ODESolution<T>)` containing the time grid and computed states, or `Err(SolverError)` if the algorithm configuration is invalid.
pub fn solve<T, F>(
    prob: &ODEProblem<T, F>,
    alg: DEAlgorithm,
    dt: T,
) -> Result<ODESolution<T>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, T) -> T,
{
    let n_steps =
        num_traits::cast::<T, usize>(((prob.tspan.1 - prob.tspan.0) / dt).floor()).unwrap_or(0);
    let mut xs: Vec<T> = Vec::with_capacity(n_steps + 2);
    xs.push(prob.tspan.0);
    for i in 1..n_steps {
        xs.push(prob.tspan.0 + dt * T::from_usize(i).expect("step index fits in the numeric type"));
    }
    xs.push(prob.tspan.1);
    let xs: Box<[T]> = xs.into();

    let mut ys = vec![T::zero(); xs.len()];
    match alg {
        DEAlgorithm::ExplicitRungeKutta1 => runge_kutta_n(&mut ys, &prob.f, &xs, prob.u0, 1)?,
        DEAlgorithm::ExplicitRungeKutta2 => runge_kutta_n(&mut ys, &prob.f, &xs, prob.u0, 2)?,
        DEAlgorithm::ExplicitRungeKutta4 => runge_kutta_n(&mut ys, &prob.f, &xs, prob.u0, 4)?,
    }
    let us: Box<[Box<[T]>]> = Box::new([ys.into()]);

    Ok(ODESolution::<T> { t: xs, u: us })
}

#[cfg(test)]
mod tests {
    use super::*;

    const ALL_ALGORITHMS: &[DEAlgorithm] = &[
        DEAlgorithm::ExplicitRungeKutta1,
        DEAlgorithm::ExplicitRungeKutta2,
        DEAlgorithm::ExplicitRungeKutta4,
    ];

    #[test]
    fn solve_f32() {
        let fun = |x: f32, y: f32| -> f32 { 2.0 * x + y };
        let prob = ODEProblem {
            f: fun,
            u0: 1.0,
            tspan: (1.0, 1.1),
        };

        for alg in ALL_ALGORITHMS {
            let ys = solve(&prob, alg.clone(), 0.01).unwrap();
            let ys_ref: Vec<f32> = (0..11)
                .map(|x| 1.0 + (x as f32) * 0.01)
                .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
                .collect();
            let res = utils::residual(&ys.u[0], &ys_ref).unwrap();
            assert!(res <= 0.01);
        }
    }

    #[test]
    fn solve_f64() {
        let fun = |x: f64, y: f64| -> f64 { 2.0 * x + y };
        let prob = ODEProblem {
            f: fun,
            u0: 1.0,
            tspan: (1.0, 1.1),
        };

        for alg in ALL_ALGORITHMS {
            let ys = solve(&prob, alg.clone(), 0.01).unwrap();
            let ys_ref: Vec<f64> = (0..11)
                .map(|x| 1.0 + (x as f64) * 0.01)
                .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
                .collect();
            let res = utils::residual(&ys.u[0], &ys_ref).unwrap();
            assert!(res <= 0.01);
        }
    }
}
