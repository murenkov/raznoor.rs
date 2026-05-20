#![warn(missing_docs)]

//! Explicit Runge-Kutta ODE solver for scalar and system initial value problems.

use ndarray::{Array1, Array2, arr1, arr2};
use num_traits::Float;
use num_traits::FromPrimitive;

/// Utility functions for the ODE solver.
pub mod utils;

/// The solution of an ODE system, containing time points and state trajectories.
///
/// # Fields
/// * `t` — Time points at which the solution was evaluated.
/// * `u` — State trajectories as a matrix of shape `(n_vars, n_times)` — each row is one
///   variable's trajectory across all time points.
pub struct ODESolution<T> {
    /// Time points at which the solution was evaluated.
    pub t: Box<[T]>,
    /// State trajectories as a matrix of shape `(n_vars, n_times)`.
    pub u: Array2<T>,
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

type Matrix<T> = Array2<T>;

#[derive(Debug)]
struct ButcherTableau<T: Float> {
    a: Matrix<T>,
    b: Array1<T>,
    c: Array1<T>,
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

/// Perform fixed-step explicit Runge-Kutta integration for a system of ODEs.
///
/// # Parameters
/// * `xs` — Time grid points (must contain at least two elements).
/// * `y0` — Initial state vector of length `n`.
/// * `stages` — Number of Runge-Kutta stages (must be 1, 2, or 4).
/// * `f` — The right-hand side function `f(t, u)` returning the derivative vector.
///
/// # Returns
/// A matrix of shape `(n, len(xs))` where each column is the state at the corresponding time
/// point, or `Err(SolverError)` if the stage count is unsupported.
fn runge_kutta_system<T, F>(
    xs: &[T],
    y0: &Array1<T>,
    stages: usize,
    f: &F,
) -> Result<Array2<T>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let n = y0.len();
    let n_steps = xs.len();
    let bt = butcher_tableau::<T>(stages)?;

    let mut u = Array2::<T>::zeros((n, n_steps));
    u.column_mut(0).assign(y0);

    let mut ks = vec![Array1::<T>::zeros(n); stages];

    for i in 0..n_steps - 1 {
        let h = xs[i + 1] - xs[i];

        for m in 0..stages {
            let mut arg = u.column(i).to_owned();
            for (j, k) in ks.iter().enumerate() {
                let coeff = bt.a[[m, j]];
                if coeff != T::zero() {
                    ndarray::Zip::from(&mut arg)
                        .and(k)
                        .for_each(|a, &kv| *a = *a + h * coeff * kv);
                }
            }
            ks[m] = f(xs[i] + bt.c[m] * h, &arg);
        }

        let mut update = Array1::<T>::zeros(n);
        for (m, k) in ks.iter().enumerate() {
            let coeff = bt.b[m];
            if coeff != T::zero() {
                ndarray::Zip::from(&mut update)
                    .and(k)
                    .for_each(|u, &kv| *u = *u + coeff * kv);
            }
        }

        let y_i = u.column(i).to_owned();
        u.column_mut(i + 1).assign(
            &ndarray::Zip::from(&y_i)
                .and(&update)
                .map_collect(|&y, &up| y + h * up),
        );
    }

    Ok(u)
}

/// An initial value problem for a system of ordinary differential equations.
///
/// # Fields
/// * `f` — The right-hand side function `f(t, u)` defining the ODE `u' = f(t, u)`.
/// * `u0` — The initial condition vector `u(t0)`.
/// * `tspan` — The time span `(t0, t1)` over which to solve.
pub struct ODEProblem<T: Float, F> {
    /// The right-hand side function `f(t, u)` defining the ODE `u' = f(t, u)`.
    pub f: F,
    /// The initial condition vector `u(t0)`.
    pub u0: Array1<T>,
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
/// * `prob` — The ODE problem definition containing the right-hand side, initial condition,
///   and time span.
/// * `alg` — The Runge-Kutta algorithm variant to use for integration.
/// * `dt` — The fixed step size for time-stepping.
///
/// # Returns
/// `Ok(ODESolution<T>)` containing the time grid and state trajectories, or
/// `Err(SolverError)` if the algorithm configuration is invalid.
pub fn solve<T, F>(
    prob: &ODEProblem<T, F>,
    alg: DEAlgorithm,
    dt: T,
) -> Result<ODESolution<T>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let n_steps =
        num_traits::cast::<T, usize>(((prob.tspan.1 - prob.tspan.0) / dt).floor()).unwrap_or(0);
    let mut xs: Vec<T> = Vec::with_capacity(n_steps + 2);
    xs.push(prob.tspan.0);
    for i in 1..n_steps {
        xs.push(prob.tspan.0 + dt * T::from_usize(i).expect("step index fits in the numeric type"));
    }
    xs.push(prob.tspan.1);

    let stages = match alg {
        DEAlgorithm::ExplicitRungeKutta1 => 1,
        DEAlgorithm::ExplicitRungeKutta2 => 2,
        DEAlgorithm::ExplicitRungeKutta4 => 4,
    };

    let u = runge_kutta_system(&xs, &prob.u0, stages, &prob.f)?;

    Ok(ODESolution::<T> { t: xs.into(), u })
}

#[cfg(test)]
mod tests {
    use super::*;
    use ndarray::array;

    const ALL_ALGORITHMS: &[DEAlgorithm] = &[
        DEAlgorithm::ExplicitRungeKutta1,
        DEAlgorithm::ExplicitRungeKutta2,
        DEAlgorithm::ExplicitRungeKutta4,
    ];

    #[test]
    fn solve_f32() {
        let fun = |x: f32, y: &Array1<f32>| -> Array1<f32> { array![2.0 * x + y[0]] };
        let prob = ODEProblem {
            f: fun,
            u0: array![1.0],
            tspan: (1.0, 1.1),
        };

        for alg in ALL_ALGORITHMS {
            let sol = solve(&prob, alg.clone(), 0.01).unwrap();
            let ys_ref: Vec<f32> = (0..11)
                .map(|x| 1.0 + (x as f32) * 0.01)
                .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
                .collect();
            let computed = sol.u.row(0);
            let res = utils::residual(computed.as_slice().unwrap(), &ys_ref).unwrap();
            assert!(res <= 0.01);
        }
    }

    #[test]
    fn solve_f64() {
        let fun = |x: f64, y: &Array1<f64>| -> Array1<f64> { array![2.0 * x + y[0]] };
        let prob = ODEProblem {
            f: fun,
            u0: array![1.0],
            tspan: (1.0, 1.1),
        };

        for alg in ALL_ALGORITHMS {
            let sol = solve(&prob, alg.clone(), 0.01).unwrap();
            let ys_ref: Vec<f64> = (0..11)
                .map(|x| 1.0 + (x as f64) * 0.01)
                .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
                .collect();
            let computed = sol.u.row(0);
            let res = utils::residual(computed.as_slice().unwrap(), &ys_ref).unwrap();
            assert!(res <= 0.01);
        }
    }

    #[test]
    fn solve_system_two_vars() {
        let fun = |_x: f64, y: &Array1<f64>| -> Array1<f64> { array![y[1], -y[0]] };
        let prob = ODEProblem {
            f: fun,
            u0: array![0.0, 1.0],
            tspan: (0.0, std::f64::consts::FRAC_PI_2),
        };

        for alg in ALL_ALGORITHMS {
            let sol = solve(&prob, alg.clone(), 0.01).unwrap();
            let ys0_ref: Vec<f64> = sol.t.iter().map(|&t| t.sin()).collect();
            let ys1_ref: Vec<f64> = sol.t.iter().map(|&t| t.cos()).collect();

            let computed0 = sol.u.row(0);
            let res0 = utils::residual(computed0.as_slice().unwrap(), &ys0_ref).unwrap();
            assert!(res0 <= 0.01);

            let computed1 = sol.u.row(1);
            let res1 = utils::residual(computed1.as_slice().unwrap(), &ys1_ref).unwrap();
            assert!(res1 <= 0.01);
        }
    }
}
