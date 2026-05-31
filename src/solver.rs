use ndarray::{Array1, Array2};
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::butcher::ExplicitRungeKuttaMethod;
use crate::types::{ODEProblem, ODESolution, SolverError};

fn compute_stages<T, F>(
    method: &ExplicitRungeKuttaMethod<f64>,
    t: T,
    h: T,
    y: &Array1<T>,
    arg: &mut Array1<T>,
    ks: &mut [Array1<T>],
    f: &F,
) where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let cast = |x: &f64| T::from_f64(*x).unwrap();
    for m in 0..method.c.len() {
        arg.assign(y);
        for (j, k) in ks.iter().enumerate() {
            let coeff = cast(&method.a[m][j]);
            if coeff != T::zero() {
                ndarray::Zip::from(&mut *arg)
                    .and(k)
                    .for_each(|a, &kv| *a = *a + h * coeff * kv);
            }
        }
        ks[m] = f(t + cast(&method.c[m]) * h, arg);
    }
}

fn weighted_sum<T: Float + FromPrimitive>(ks: &[Array1<T>], weights: &[f64]) -> Array1<T> {
    let cast = |x: &f64| T::from_f64(*x).unwrap();
    let n = ks[0].len();
    let mut sum = Array1::<T>::zeros(n);
    for (m, k) in ks.iter().enumerate() {
        let coeff = cast(&weights[m]);
        if coeff != T::zero() {
            ndarray::Zip::from(&mut sum)
                .and(k)
                .for_each(|s, &kv| *s = *s + coeff * kv);
        }
    }
    sum
}

fn validate_initial_condition<T: Float>(u0: &Array1<T>) -> Result<(), SolverError> {
    for &val in u0.iter() {
        if val.is_nan() || val.is_infinite() {
            return Err(SolverError::InvalidInitialCondition);
        }
    }
    Ok(())
}

/// Solve an ODE problem using the given Runge-Kutta method and step size.
///
/// # Parameters
/// * `prob` — The ODE problem definition containing the right-hand side, initial condition,
///   and time span.
/// * `method` — The Runge-Kutta method to use (e.g. [`crate::RUNGE_KUTTA_4`]).
/// * `dt` — The absolute step size for time-stepping. The direction of integration is
///   determined by the order of the time span (i.e., `tspan.0` → `tspan.1`).
///   Must be positive.
///
/// # Returns
/// `Ok(ODESolution<T>)` containing the time grid and state trajectories.
///
/// # Errors
/// Returns `Err(SolverError::InvalidInitialCondition)` if the initial condition contains
/// NaN or infinite values.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznur::{ODEProblem, solve, RUNGE_KUTTA_4};
///
/// let f = |x: f64, y: &ndarray::Array1<f64>| array![2.0 * x + y[0]];
/// let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1));
///
/// let sol = solve(&prob, &RUNGE_KUTTA_4, 0.01).unwrap();
/// let y_last = sol.u[[0, sol.t.len() - 1]];
/// let y_exact = 5.0_f64 * (1.1_f64 - 1.0_f64).exp() - 2.0 * 1.1 - 2.0;
/// assert!((y_last - y_exact).abs() < 1e-4);
/// ```
pub fn solve<T, F>(
    prob: &ODEProblem<T, F>,
    method: &ExplicitRungeKuttaMethod<f64>,
    dt: T,
) -> Result<ODESolution<T>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    validate_initial_condition(&prob.u0)?;
    if dt <= T::zero() {
        return Err(SolverError::InvalidStepSize);
    }
    let dt = if prob.tspan.1 >= prob.tspan.0 {
        dt
    } else {
        -dt
    };
    let n_steps =
        num_traits::cast::<T, usize>(((prob.tspan.1 - prob.tspan.0) / dt).floor()).unwrap_or(0);
    let mut xs: Vec<T> = Vec::with_capacity(n_steps + 2);
    xs.push(prob.tspan.0);
    for i in 1..n_steps {
        xs.push(prob.tspan.0 + dt * T::from_usize(i).expect("step index fits in the numeric type"));
    }
    xs.push(prob.tspan.1);

    let n = prob.u0.len();
    let n_steps = xs.len();
    let stages = method.c.len();

    let mut u = Array2::<T>::zeros((n, n_steps));
    u.column_mut(0).assign(&prob.u0);

    let mut ks = vec![Array1::<T>::zeros(n); stages];
    let mut arg = Array1::<T>::zeros(n);

    for i in 0..n_steps - 1 {
        let h = xs[i + 1] - xs[i];
        let y = u.column(i).to_owned();
        compute_stages(method, xs[i], h, &y, &mut arg, &mut ks, &prob.f);

        let update = weighted_sum(&ks, method.b);

        u.column_mut(i + 1).assign(
            &ndarray::Zip::from(&y)
                .and(&update)
                .map_collect(|&yv, &up| yv + h * up),
        );
    }

    Ok(ODESolution::<T> { t: xs.into(), u })
}

/// Solve an ODE problem using variable step-size (adaptive) integration.
///
/// Uses an embedded Runge-Kutta pair (e.g. Fehlberg45 or Dormand–Prince) to estimate the
/// local truncation error and adjust the step size accordingly with an I-controller.
///
/// # Parameters
/// * `prob` — The ODE problem definition.
/// * `method` — An embedded Runge–Kutta pair (e.g. [`crate::FEHLBERG45`], [`crate::DORMAND_PRINCE45`]).
/// * `h0` — Initial step size guess.
/// * `atol` — Absolute tolerance for the error per step.
/// * `rtol` — Relative tolerance for the error per step.
///
/// # Returns
/// `Ok(ODESolution<T>)` containing the time grid and state trajectories, or
/// `Err(SolverError)` if the method does not provide distinct embedded coefficients
/// or the initial condition contains NaN or infinite values.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznur::{ODEProblem, solve_adaptive, DORMAND_PRINCE45};
///
/// let f = |x: f64, y: &ndarray::Array1<f64>| array![2.0 * x + y[0]];
/// let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1));
/// let sol = solve_adaptive(&prob, &DORMAND_PRINCE45, 0.01, 1e-6, 1e-6).unwrap();
/// let y_last = sol.u[[0, sol.t.len() - 1]];
/// let y_exact = 5.0_f64 * (1.1_f64 - 1.0_f64).exp() - 2.0 * 1.1 - 2.0;
/// assert!((y_last - y_exact).abs() < 1e-4);
/// ```
pub fn solve_adaptive<T, F>(
    prob: &ODEProblem<T, F>,
    method: &ExplicitRungeKuttaMethod<f64>,
    h0: T,
    atol: T,
    rtol: T,
) -> Result<ODESolution<T>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    validate_initial_condition(&prob.u0)?;
    if h0 == T::zero() {
        return Err(SolverError::InvalidStepSize);
    }
    if method.b == method.b_hat {
        return Err(SolverError::AdaptiveNotSupported);
    }
    let b_diff: Vec<f64> = method
        .b
        .iter()
        .zip(method.b_hat.iter())
        .map(|(&b, &bh)| b - bh)
        .collect();
    let n = prob.u0.len();
    let t0 = prob.tspan.0;
    let tf = prob.tspan.1;
    let direction = if tf >= t0 { T::one() } else { -T::one() };
    let stages = method.c.len();

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

    let mut ks = vec![Array1::<T>::zeros(n); stages];
    let mut arg = Array1::<T>::zeros(n);

    for _step in 0..max_steps {
        if (t - tf).abs() <= T::epsilon() {
            break;
        }

        if (t + h - tf).abs() > (tf - t).abs() {
            h = tf - t;
        }

        compute_stages(method, t, h, &y, &mut arg, &mut ks, &prob.f);

        let update = weighted_sum(&ks, method.b);
        let err_diff = weighted_sum(&ks, &b_diff);

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
