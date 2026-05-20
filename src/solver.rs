use ndarray::{Array1, Array2};
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::butcher::ButcherTableau;
use crate::types::{ODEProblem, ODESolution, SolverError};

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

/// Solve an ODE problem using variable step-size (adaptive) integration.
///
/// Uses an embedded Runge-Kutta pair (e.g. Fehlberg45 or Dormand–Prince) to estimate the
/// local truncation error and adjust the step size accordingly with an I-controller.
///
/// # Parameters
/// * `prob` — The ODE problem definition.
/// * `tableau` — The Butcher tableau of an embedded Runge–Kutta pair.
/// * `h0` — Initial step size guess.
/// * `atol` — Absolute tolerance for the error per step.
/// * `rtol` — Relative tolerance for the error per step.
///
/// # Returns
/// `Ok(ODESolution<T>)` containing the time grid and state trajectories, or
/// `Err(SolverError)` if the tableau does not provide distinct embedded coefficients.
pub fn solve_adaptive<T, F>(
    prob: &ODEProblem<T, F>,
    tableau: &ButcherTableau<T>,
    h0: T,
    atol: T,
    rtol: T,
) -> Result<ODESolution<T>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    if tableau.b == tableau.b_embedded {
        return Err(SolverError::AdaptiveNotSupported);
    }
    let n = prob.u0.len();
    let t0 = prob.tspan.0;
    let tf = prob.tspan.1;
    let direction = if tf >= t0 { T::one() } else { -T::one() };
    let stages = tableau.c.len();

    let safety = T::from_f64(0.9).unwrap();
    let max_factor = T::from_f64(5.0).unwrap();
    let min_factor = T::from_f64(0.2).unwrap();
    let max_steps = 10_000_000;
    let order_p1 = T::from_usize(5).unwrap();

    let mut ts: Vec<T> = Vec::new();
    let mut us: Vec<Array1<T>> = Vec::new();

    let mut t = t0;
    let mut y = prob.u0.clone();
    let mut h = h0.abs() * direction;

    ts.push(t);
    us.push(y.clone());

    let f = &prob.f;
    let mut ks = vec![Array1::<T>::zeros(n); stages];

    for _step in 0..max_steps {
        if (t - tf).abs() <= T::epsilon() {
            break;
        }

        if (t + h - tf).abs() > (tf - t).abs() {
            h = tf - t;
        }

        for m in 0..stages {
            let mut arg = y.clone();
            for (j, k) in ks.iter().enumerate() {
                let coeff = tableau.a[[m, j]];
                if coeff != T::zero() {
                    ndarray::Zip::from(&mut arg)
                        .and(k)
                        .for_each(|a, &kv| *a = *a + h * coeff * kv);
                }
            }
            ks[m] = f(t + tableau.c[m] * h, &arg);
        }

        let mut err_diff = Array1::<T>::zeros(n);
        let mut update = Array1::<T>::zeros(n);
        for (m, k) in ks.iter().enumerate() {
            let coeff = tableau.b[m];
            let embedded = tableau.b_embedded[m];
            if coeff != T::zero() || embedded != T::zero() {
                let d = coeff - embedded;
                ndarray::Zip::from(&mut err_diff)
                    .and(k)
                    .for_each(|e, &kv| *e = *e + d * kv);
            }
            if coeff != T::zero() {
                ndarray::Zip::from(&mut update)
                    .and(k)
                    .for_each(|u, &kv| *u = *u + coeff * kv);
            }
        }

        let y_new = ndarray::Zip::from(&y)
            .and(&update)
            .map_collect(|&yv, &up| yv + h * up);

        let mut err_sq = T::zero();
        for i in 0..n {
            let e_i = (h * err_diff[i]).abs();
            let scale = atol + rtol * y_new[i].abs();
            let ratio = e_i / scale;
            err_sq = err_sq + ratio * ratio;
        }
        let err = (err_sq / T::from_usize(n).unwrap()).sqrt();

        let fac = if err <= T::zero() {
            max_factor
        } else {
            let sf = safety * (T::one() / (err + T::epsilon())).powf(T::one() / order_p1);
            if sf > max_factor {
                max_factor
            } else if sf < min_factor {
                min_factor
            } else {
                sf
            }
        };

        if err <= T::one() {
            t = t + h;
            y = y_new;
            ts.push(t);
            us.push(y.clone());
            h = h * fac;
        } else {
            h = h * fac;
        }
    }

    let n_times = ts.len();
    let mut u_arr = Array2::<T>::zeros((n, n_times));
    for (i, state) in us.iter().enumerate() {
        u_arr.column_mut(i).assign(state);
    }

    Ok(ODESolution {
        t: ts.into(),
        u: u_arr,
    })
}

/// Solve an ODE problem using the specified Butcher tableau and step size.
///
/// # Parameters
/// * `prob` — The ODE problem definition containing the right-hand side, initial condition,
///   and time span.
/// * `tableau` — The Butcher tableau defining the Runge-Kutta method.
/// * `dt` — The fixed step size for time-stepping.
///
/// # Returns
/// `Ok(ODESolution<T>)` containing the time grid and state trajectories.
pub fn solve<T, F>(
    prob: &ODEProblem<T, F>,
    tableau: &ButcherTableau<T>,
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

    let u = runge_kutta_system(&xs, &prob.u0, tableau, &prob.f)?;

    Ok(ODESolution::<T> { t: xs.into(), u })
}
