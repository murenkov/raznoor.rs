#![warn(missing_docs)]

//! Explicit Runge-Kutta ODE solver for scalar and system initial value problems.

use ndarray::{Array1, Array2};
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
#[derive(Debug, PartialEq)]
#[non_exhaustive]
pub enum SolverError {
    /// The requested number of Runge-Kutta stages is not supported.
    UnsupportedStageCount(usize),
    /// No algorithm was specified.
    NoAlgorithm,
}

impl std::fmt::Display for SolverError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            SolverError::UnsupportedStageCount(n) => {
                write!(f, "unsupported Runge-Kutta stage count: {n}")
            }
            SolverError::NoAlgorithm => write!(f, "no algorithm specified"),
        }
    }
}

impl std::error::Error for SolverError {}

type Matrix<T> = Array2<T>;

#[derive(Debug, Clone)]
struct ButcherTableau<T: Float> {
    a: Matrix<T>,
    b: Array1<T>,
    c: Array1<T>,
}

fn build_tableau<T>(a_coeffs: &[&[f64]], b_coeffs: &[f64], c_coeffs: &[f64]) -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    let cast = |x: f64| -> T {
        FromPrimitive::from_f64(x).expect("Butcher tableau coefficients are valid f64 constants")
    };

    let n_stages = c_coeffs.len();
    let mut a_arr = Vec::with_capacity(n_stages * n_stages);
    for row in a_coeffs {
        for &val in *row {
            a_arr.push(cast(val));
        }
    }
    let a = Matrix::from_shape_vec((n_stages, n_stages), a_arr)
        .expect("Butcher tableau A matrix is square");

    let b: Array1<T> = b_coeffs.iter().map(|&x| cast(x)).collect();
    let c: Array1<T> = c_coeffs.iter().map(|&x| cast(x)).collect();

    ButcherTableau { a, b, c }
}

fn butcher_tableau<T>(alg: &DEAlgorithm) -> Result<ButcherTableau<T>, SolverError>
where
    T: Float + FromPrimitive,
{
    match alg {
        DEAlgorithm::ExplicitRungeKutta1 => Ok(build_tableau(&[&[0.0]], &[1.0], &[0.0])),
        DEAlgorithm::ExplicitRungeKutta2 => Ok(build_tableau(
            &[&[0.0, 0.0], &[1.0, 0.0]],
            &[0.5, 0.5],
            &[0.0, 1.0],
        )),
        DEAlgorithm::ExplicitRungeKutta3 => Ok(build_tableau(
            &[&[0.0, 0.0, 0.0], &[0.5, 0.0, 0.0], &[-1.0, 2.0, 0.0]],
            &[1.0 / 6.0, 2.0 / 3.0, 1.0 / 6.0],
            &[0.0, 0.5, 1.0],
        )),
        DEAlgorithm::ExplicitRungeKutta4 => Ok(build_tableau(
            &[
                &[0.0, 0.0, 0.0, 0.0],
                &[0.5, 0.0, 0.0, 0.0],
                &[0.0, 0.5, 0.0, 0.0],
                &[0.0, 0.0, 1.0, 0.0],
            ],
            &[1.0 / 6.0, 1.0 / 3.0, 1.0 / 3.0, 1.0 / 6.0],
            &[0.0, 0.5, 0.5, 1.0],
        )),
        DEAlgorithm::ExplicitRungeKutta5 => Ok(build_tableau(
            &[
                &[0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                &[1.0 / 4.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                &[1.0 / 8.0, 1.0 / 8.0, 0.0, 0.0, 0.0, 0.0],
                &[0.0, 0.0, 1.0 / 2.0, 0.0, 0.0, 0.0],
                &[3.0 / 16.0, -3.0 / 8.0, 3.0 / 8.0, 9.0 / 16.0, 0.0, 0.0],
                &[
                    -3.0 / 7.0,
                    8.0 / 7.0,
                    6.0 / 7.0,
                    -12.0 / 7.0,
                    8.0 / 7.0,
                    0.0,
                ],
            ],
            &[
                7.0 / 90.0,
                0.0,
                32.0 / 90.0,
                12.0 / 90.0,
                32.0 / 90.0,
                7.0 / 90.0,
            ],
            &[0.0, 1.0 / 4.0, 1.0 / 4.0, 1.0 / 2.0, 3.0 / 4.0, 1.0],
        )),
        DEAlgorithm::Fehlberg45 => Ok(build_tableau(
            &[
                &[0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                &[1.0 / 4.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                &[3.0 / 32.0, 9.0 / 32.0, 0.0, 0.0, 0.0, 0.0],
                &[
                    1932.0 / 2197.0,
                    -7200.0 / 2197.0,
                    7296.0 / 2197.0,
                    0.0,
                    0.0,
                    0.0,
                ],
                &[
                    439.0 / 216.0,
                    -8.0,
                    3680.0 / 513.0,
                    -845.0 / 4104.0,
                    0.0,
                    0.0,
                ],
                &[
                    -8.0 / 27.0,
                    2.0,
                    -3544.0 / 2565.0,
                    1859.0 / 4104.0,
                    -11.0 / 40.0,
                    0.0,
                ],
            ],
            &[
                16.0 / 135.0,
                0.0,
                6656.0 / 12825.0,
                28561.0 / 56430.0,
                -9.0 / 50.0,
                2.0 / 55.0,
            ],
            &[0.0, 1.0 / 4.0, 3.0 / 8.0, 12.0 / 13.0, 1.0, 1.0 / 2.0],
        )),
        DEAlgorithm::DormandPrince45 => Ok(build_tableau(
            &[
                &[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                &[1.0 / 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                &[3.0 / 40.0, 9.0 / 40.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                &[44.0 / 45.0, -56.0 / 15.0, 32.0 / 9.0, 0.0, 0.0, 0.0, 0.0],
                &[
                    19372.0 / 6561.0,
                    -25360.0 / 2187.0,
                    64448.0 / 6561.0,
                    -212.0 / 729.0,
                    0.0,
                    0.0,
                    0.0,
                ],
                &[
                    9017.0 / 3168.0,
                    -355.0 / 33.0,
                    46732.0 / 5247.0,
                    49.0 / 176.0,
                    -5103.0 / 18656.0,
                    0.0,
                    0.0,
                ],
                &[
                    35.0 / 384.0,
                    0.0,
                    500.0 / 1113.0,
                    125.0 / 192.0,
                    -2187.0 / 6784.0,
                    11.0 / 84.0,
                    0.0,
                ],
            ],
            &[
                35.0 / 384.0,
                0.0,
                500.0 / 1113.0,
                125.0 / 192.0,
                -2187.0 / 6784.0,
                11.0 / 84.0,
                0.0,
            ],
            &[0.0, 1.0 / 5.0, 3.0 / 10.0, 4.0 / 5.0, 8.0 / 9.0, 1.0, 1.0],
        )),
    }
}

/// Perform fixed-step explicit Runge-Kutta integration for a system of ODEs.
///
/// # Parameters
/// * `xs` — Time grid points (must contain at least two elements).
/// * `y0` — Initial state vector of length `n`.
/// * `tableau` — The Butcher tableau defining the Runge-Kutta method.
/// * `f` — The right-hand side function `f(t, u)` returning the derivative vector.
///
/// # Returns
/// A matrix of shape `(n, len(xs))` where each column is the state at the corresponding time
/// point.
fn runge_kutta_system<T, F>(
    xs: &[T],
    y0: &Array1<T>,
    tableau: &ButcherTableau<T>,
    f: &F,
) -> Result<Array2<T>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let n = y0.len();
    let n_steps = xs.len();
    let stages = tableau.c.len();

    let mut u = Array2::<T>::zeros((n, n_steps));
    u.column_mut(0).assign(y0);

    let mut ks = vec![Array1::<T>::zeros(n); stages];

    for i in 0..n_steps - 1 {
        let h = xs[i + 1] - xs[i];

        for m in 0..stages {
            let mut arg = u.column(i).to_owned();
            for (j, k) in ks.iter().enumerate() {
                let coeff = tableau.a[[m, j]];
                if coeff != T::zero() {
                    ndarray::Zip::from(&mut arg)
                        .and(k)
                        .for_each(|a, &kv| *a = *a + h * coeff * kv);
                }
            }
            ks[m] = f(xs[i] + tableau.c[m] * h, &arg);
        }

        let mut update = Array1::<T>::zeros(n);
        for (m, k) in ks.iter().enumerate() {
            let coeff = tableau.b[m];
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
#[derive(Debug, Clone)]
#[non_exhaustive]
pub enum DEAlgorithm {
    /// First-order explicit Runge-Kutta (Euler's method).
    ExplicitRungeKutta1,
    /// Second-order explicit Runge-Kutta (midpoint method).
    ExplicitRungeKutta2,
    /// Third-order explicit Runge-Kutta (Kutta's third-order method).
    ExplicitRungeKutta3,
    /// Fourth-order explicit Runge-Kutta (classic RK4).
    ExplicitRungeKutta4,
    /// Fifth-order explicit Runge-Kutta (Butcher's fifth-order method).
    ExplicitRungeKutta5,
    /// Fehlberg's embedded 4(5) method (RKF45).
    Fehlberg45,
    /// Dormand-Prince embedded 4(5) method (DOPRI54).
    DormandPrince45,
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

    let tableau = butcher_tableau::<T>(&alg)?;
    let u = runge_kutta_system(&xs, &prob.u0, &tableau, &prob.f)?;

    Ok(ODESolution::<T> { t: xs.into(), u })
}

#[cfg(test)]
mod tests {
    use super::*;
    use ndarray::array;
    use num_traits::FromPrimitive;

    type ProblemSetup<T> = (ODEProblem<T, fn(T, &Array1<T>) -> Array1<T>>, Vec<Vec<T>>);

    fn linear_problem<T: Float + FromPrimitive>() -> ProblemSetup<T> {
        let f: fn(T, &Array1<T>) -> Array1<T> =
            |x: T, y: &Array1<T>| array![T::from_f64(2.0).unwrap() * x + y[0]];
        let prob = ODEProblem {
            f,
            u0: array![T::from_f64(1.0).unwrap()],
            tspan: (T::from_f64(1.0).unwrap(), T::from_f64(1.1).unwrap()),
        };
        let ys: Vec<T> = (0..11)
            .map(|i| {
                T::from_f64(1.0).unwrap()
                    + T::from_f64(i as f64).unwrap() * T::from_f64(0.01).unwrap()
            })
            .map(|x| {
                T::from_f64(5.0).unwrap() * (x - T::from_f64(1.0).unwrap()).exp()
                    - T::from_f64(2.0).unwrap() * x
                    - T::from_f64(2.0).unwrap()
            })
            .collect();
        (prob, vec![ys])
    }

    fn oscillator_problem<T: Float + FromPrimitive>() -> ProblemSetup<T> {
        let half_pi = T::from_f64(std::f64::consts::FRAC_PI_2).unwrap();
        let dt = T::from_f64(0.01).unwrap();
        let n_steps = num_traits::cast::<T, usize>((half_pi / dt).floor()).unwrap_or(0);
        let f: fn(T, &Array1<T>) -> Array1<T> = |_x: T, y: &Array1<T>| array![y[1], -y[0]];
        let prob = ODEProblem {
            f,
            u0: array![T::from_f64(0.0).unwrap(), T::from_f64(1.0).unwrap()],
            tspan: (T::from_f64(0.0).unwrap(), half_pi),
        };
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

    macro_rules! ode_test {
        ($name:ident, $alg:expr, $setup:expr) => {
            #[test]
            fn $name() {
                let (prob, reference) = $setup;
                let sol = solve(&prob, $alg, 0.01).unwrap();
                for (i, ref_traj) in reference.iter().enumerate() {
                    let computed = sol.u.row(i);
                    let res = utils::residual(computed.as_slice().unwrap(), ref_traj).unwrap();
                    assert!(res <= 0.01);
                }
            }
        };
    }

    ode_test!(
        solve_erk1_f32,
        DEAlgorithm::ExplicitRungeKutta1,
        linear_problem::<f32>()
    );
    ode_test!(
        solve_erk2_f32,
        DEAlgorithm::ExplicitRungeKutta2,
        linear_problem::<f32>()
    );
    ode_test!(
        solve_erk3_f32,
        DEAlgorithm::ExplicitRungeKutta3,
        linear_problem::<f32>()
    );
    ode_test!(
        solve_erk4_f32,
        DEAlgorithm::ExplicitRungeKutta4,
        linear_problem::<f32>()
    );
    ode_test!(
        solve_erk5_f32,
        DEAlgorithm::ExplicitRungeKutta5,
        linear_problem::<f32>()
    );
    ode_test!(
        solve_fehlberg45_f32,
        DEAlgorithm::Fehlberg45,
        linear_problem::<f32>()
    );
    ode_test!(
        solve_dopri54_f32,
        DEAlgorithm::DormandPrince45,
        linear_problem::<f32>()
    );
    ode_test!(
        solve_erk1_f64,
        DEAlgorithm::ExplicitRungeKutta1,
        linear_problem::<f64>()
    );
    ode_test!(
        solve_erk2_f64,
        DEAlgorithm::ExplicitRungeKutta2,
        linear_problem::<f64>()
    );
    ode_test!(
        solve_erk3_f64,
        DEAlgorithm::ExplicitRungeKutta3,
        linear_problem::<f64>()
    );
    ode_test!(
        solve_erk4_f64,
        DEAlgorithm::ExplicitRungeKutta4,
        linear_problem::<f64>()
    );
    ode_test!(
        solve_erk5_f64,
        DEAlgorithm::ExplicitRungeKutta5,
        linear_problem::<f64>()
    );
    ode_test!(
        solve_fehlberg45_f64,
        DEAlgorithm::Fehlberg45,
        linear_problem::<f64>()
    );
    ode_test!(
        solve_dopri54_f64,
        DEAlgorithm::DormandPrince45,
        linear_problem::<f64>()
    );

    ode_test!(
        solve_system_two_vars_erk1,
        DEAlgorithm::ExplicitRungeKutta1,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_erk2,
        DEAlgorithm::ExplicitRungeKutta2,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_erk3,
        DEAlgorithm::ExplicitRungeKutta3,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_erk4,
        DEAlgorithm::ExplicitRungeKutta4,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_erk5,
        DEAlgorithm::ExplicitRungeKutta5,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_fehlberg45,
        DEAlgorithm::Fehlberg45,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_dopri54,
        DEAlgorithm::DormandPrince45,
        oscillator_problem::<f64>()
    );
}
