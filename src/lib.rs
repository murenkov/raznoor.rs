use ndarray::{ArrayBase, OwnedRepr};
use ndarray::{arr1, arr2};
use num_traits::Float;
use num_traits::FromPrimitive;
use strum_macros::EnumIter;

pub mod utils;

/// The solution of an ODE, containing time points and corresponding state vectors.
///
/// # Fields
/// * `t` — Time points at which the solution was evaluated.
/// * `u` — State vectors at each time point (one vector per dependent variable).
pub struct ODESolution<T> {
    pub t: Box<[T]>,
    pub u: Box<[Box<[T]>]>,
}

/// Errors that can occur during ODE solving.
///
/// # Variants
/// * `UnsupportedStageCount(usize)` — The requested number of Runge-Kutta stages is not supported.
#[derive(Debug, PartialEq)]
pub enum SolverError {
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

fn runge_kutta_matrix<T>(size: usize) -> Result<Matrix<T>, SolverError>
where
    T: Float + FromPrimitive,
{
    let cast = |x: f64| -> T { FromPrimitive::from_f64(x).unwrap() };

    let a = match size {
        1 => arr2(&[[0.0]]),
        2 => arr2(&[[0.0, 0.0], [1.0, 0.0]]),
        4 => arr2(&[
            [0.0, 0.0, 0.0, 0.0],
            [0.5, 0.0, 0.0, 0.0],
            [0.0, 0.5, 0.0, 0.0],
            [0.0, 0.0, 1.0, 0.0],
        ]),
        _ => return Err(SolverError::UnsupportedStageCount(size)),
    };
    Ok(a.map(|x: &f64| cast(*x)))
}

fn butcher_tableau<T>(size: usize) -> Result<ButcherTableau<T>, SolverError>
where
    T: Float + FromPrimitive,
{
    let cast = |x: f64| -> T { FromPrimitive::from_f64(x).unwrap() };

    let a = runge_kutta_matrix::<T>(size)?;
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
        _ => Err(SolverError::UnsupportedStageCount(size)),
    }
}

fn stages_coefficients<T, F>(ks: &mut [T], bt: &ButcherTableau<T>, f: F, x: T, y: T, h: T)
where
    T: Float + FromPrimitive,
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
///
/// # Fields
/// * `f` — The right-hand side function `f(t, y)` defining the ODE `y' = f(t, y)`.
/// * `u0` — The initial condition `y(t0)`.
/// * `tspan` — The time span `(t0, t1)` over which to solve.
pub struct ODEProblem<T: Float, F: Fn(T, T) -> T> {
    pub f: F,
    pub u0: T,
    pub tspan: (T, T),
}

/// Available ODE solving algorithms.
///
/// # Variants
/// * `ExplicitRungeKutta1` — The first-order explicit Runge-Kutta method (Euler's method).
/// * `ExplicitRungeKutta2` — The second-order explicit Runge-Kutta method (midpoint method).
/// * `ExplicitRungeKutta4` — The fourth-order explicit Runge-Kutta method (classic RK4).
#[derive(Debug, Clone, EnumIter)]
pub enum DEAlgorithm {
    ExplicitRungeKutta1,
    ExplicitRungeKutta2,
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
        xs.push(prob.tspan.0 + dt * T::from_usize(i).unwrap());
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
    use strum::IntoEnumIterator;

    #[test]
    fn solve_f32() {
        let fun = |x: f32, y: f32| -> f32 { 2.0 * x + y };
        let prob = ODEProblem {
            f: fun,
            u0: 1.0,
            tspan: (1.0, 1.1),
        };

        for alg in DEAlgorithm::iter() {
            let ys = solve(&prob, alg, 0.01).unwrap();
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

        for alg in DEAlgorithm::iter() {
            let ys = solve(&prob, alg, 0.01).unwrap();
            let ys_ref: Vec<f64> = (0..11)
                .map(|x| 1.0 + (x as f64) * 0.01)
                .map(|x| 5.0 * (x - 1.0).exp() - 2.0 * x - 2.0)
                .collect();
            let res = utils::residual(&ys.u[0], &ys_ref).unwrap();
            assert!(res <= 0.01);
        }
    }
}
