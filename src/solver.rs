use ndarray::{Array1, Array2, ShapeBuilder};
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::butcher::ExplicitRungeKuttaMethod;
use crate::types::{Event, EventDirection, EventRecord, ODEProblem, ODESolution, SolverError};

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

fn advance<T, F>(
    method: &ExplicitRungeKuttaMethod<f64>,
    t: T,
    h: T,
    y: &Array1<T>,
    f: &F,
    ks: &mut [Array1<T>],
    arg: &mut Array1<T>,
) -> Array1<T>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    compute_stages(method, t, h, y, arg, ks, f);
    let update = weighted_sum(ks, method.b);
    ndarray::Zip::from(y)
        .and(&update)
        .map_collect(|&yv, &up| yv + h * up)
}

#[allow(clippy::too_many_arguments)]
fn bisect_event<T, F>(
    method: &ExplicitRungeKuttaMethod<f64>,
    t_left: T,
    t_right: T,
    y_left: &Array1<T>,
    g_left: T,
    f: &F,
    g: &dyn Fn(T, &Array1<T>) -> T,
    ks: &mut [Array1<T>],
    arg: &mut Array1<T>,
) -> (T, Array1<T>)
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let mut tl = t_left;
    let mut tr = t_right;
    let mut yl = y_left.clone();
    let mut gl = g_left;
    for _ in 0..60 {
        let tm = (tl + tr) / T::from_f64(2.0).unwrap();
        let ym = advance(method, tl, tm - tl, &yl, f, ks, arg);
        let gm = g(tm, &ym);
        let gm_pos = gm > T::zero();
        if gm_pos == (gl > T::zero()) {
            tl = tm;
            yl = ym;
            gl = gm;
        } else {
            tr = tm;
        }
        let tol = T::epsilon() * T::from_f64(10.0).unwrap() * (T::one() + tl.abs());
        if (tr - tl).abs() <= tol {
            tr = tm;
            break;
        }
    }
    let y_event = advance(method, tl, tr - tl, &yl, f, ks, arg);
    (tr, y_event)
}

#[allow(clippy::too_many_arguments)]
fn detect_events<T, F>(
    method: &ExplicitRungeKuttaMethod<f64>,
    t_prev: T,
    t_curr: T,
    y_prev: &Array1<T>,
    y_curr: &Array1<T>,
    events: &[Event<T>],
    f: &F,
    ks: &mut [Array1<T>],
    arg: &mut Array1<T>,
) -> Result<Vec<EventRecord<T>>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let mut candidates: Vec<(usize, &Event<T>, T)> = Vec::new();
    for (idx, event) in events.iter().enumerate() {
        let g_prev = (event.g)(t_prev, y_prev);
        let g_curr = (event.g)(t_curr, y_curr);
        if g_prev.is_nan() || g_prev.is_infinite() || g_curr.is_nan() || g_curr.is_infinite() {
            return Err(SolverError::EventError);
        }
        let has_crossing = match event.direction {
            EventDirection::Any => (g_prev > T::zero()) != (g_curr > T::zero()),
            EventDirection::Increasing => g_prev <= T::zero() && g_curr > T::zero(),
            EventDirection::Decreasing => g_prev >= T::zero() && g_curr < T::zero(),
        };
        if has_crossing {
            candidates.push((idx, event, g_prev));
        }
    }
    if candidates.is_empty() {
        return Ok(Vec::new());
    }
    let mut records: Vec<EventRecord<T>> = Vec::with_capacity(candidates.len());
    for (idx, event, g_prev) in candidates {
        let (t_event, y_event) = bisect_event(
            method, t_prev, t_curr, y_prev, g_prev, f, &*event.g, ks, arg,
        );
        records.push(EventRecord {
            event_index: idx,
            t: t_event,
            y: y_event,
        });
    }
    records.sort_by(|a, b| a.t.partial_cmp(&b.t).unwrap_or(std::cmp::Ordering::Equal));
    Ok(records)
}

fn validate_initial_condition<T: Float>(u0: &Array1<T>) -> Result<(), SolverError> {
    for &val in u0 {
        if val.is_nan() || val.is_infinite() {
            return Err(SolverError::InvalidInitialCondition);
        }
    }
    Ok(())
}

/// Solve an ODE problem using the given Runge-Kutta method and step size.
///
/// If `prob.events` is non-empty, event detection runs after each step.
/// A terminal event stops integration early.
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
/// NaN or infinite values, or `Err(SolverError::EventError)` if an event function returns
/// an invalid value.
///
/// # Panics
/// May panic if the step index cannot be represented in the numeric type.
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
    let n_steps_floor =
        num_traits::cast::<T, usize>(((prob.tspan.1 - prob.tspan.0) / dt).floor()).unwrap_or(0);
    let mut xs: Vec<T> = Vec::with_capacity(n_steps_floor + 2);
    xs.push(prob.tspan.0);
    for i in 1..n_steps_floor {
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
    let mut y = prob.u0.clone();
    let mut events: Vec<EventRecord<T>> = Vec::new();
    let mut final_step = n_steps;

    for i in 0..n_steps - 1 {
        let h = xs[i + 1] - xs[i];
        let t_prev = xs[i];

        compute_stages(method, t_prev, h, &y, &mut arg, &mut ks, &prob.f);
        let update = weighted_sum(&ks, method.b);

        if prob.events.is_empty() {
            let mut col = u.column_mut(i + 1);
            ndarray::Zip::from(&mut y)
                .and(&mut col)
                .and(&update)
                .for_each(|yv, next, &up| {
                    *yv = *yv + h * up;
                    *next = *yv;
                });
        } else {
            let y_curr = ndarray::Zip::from(&y)
                .and(&update)
                .map_collect(|&yv, &up| yv + h * up);

            let detected = detect_events(
                method,
                t_prev,
                xs[i + 1],
                &y,
                &y_curr,
                &prob.events,
                &prob.f,
                &mut ks,
                &mut arg,
            )?;

            if let Some(record) = detected.into_iter().next() {
                let terminal = prob.events[record.event_index].terminal;
                events.push(record.clone());

                xs[i + 1] = record.t;
                u.column_mut(i + 1).assign(&record.y);
                y = record.y;

                if terminal {
                    final_step = i + 2;
                    break;
                }
                continue;
            }

            u.column_mut(i + 1).assign(&y_curr);
            y = y_curr;
        }
    }

    if final_step < n_steps {
        xs.truncate(final_step);
        u = u.slice(ndarray::s![.., ..final_step]).to_owned();
    }

    Ok(ODESolution {
        t: xs.into(),
        u,
        events,
    })
}

/// Solve an ODE problem using variable step-size (adaptive) integration.
///
/// Uses an embedded Runge-Kutta pair (e.g. Fehlberg45 or Dormand–Prince) to estimate the
/// local truncation error and adjust the step size accordingly with an I-controller.
///
/// If `prob.events` is non-empty, event detection runs after each accepted step.
/// A terminal event stops integration early.
///
/// # Parameters
/// * `prob` — The ODE problem definition.
/// * `method` — An embedded Runge–Kutta pair (e.g. [`crate::FEHLBERG45`], [`crate::DORMAND_PRINCE45`]).
/// * `h0` — Initial step size guess.
/// * `atol` — Absolute tolerance for the error per step.
/// * `rtol` — Relative tolerance for the error per step.
///
/// # Returns
/// `Ok(ODESolution<T>)` containing the time grid and state trajectories.
///
/// # Panics
/// May panic if the safety factor or other constants cannot be converted from `f64`.
///
/// # Errors
/// Returns `Err(SolverError::InvalidInitialCondition)` if the initial condition contains
/// NaN or infinite values, `Err(SolverError::InvalidStepSize)` if `h0` is zero,
/// `Err(SolverError::AdaptiveNotSupported)` if the method does not provide distinct
/// embedded coefficients, or `Err(SolverError::EventError)` if an event function returns
/// an invalid value.
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
#[allow(clippy::too_many_lines)]
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
    let mut us_data: Vec<T> = Vec::new();

    let mut t = t0;
    let mut y = prob.u0.clone();
    let mut h = h0.abs() * direction;
    let mut events: Vec<EventRecord<T>> = Vec::new();

    ts.push(t);
    us_data.extend(y.iter().copied());

    let mut ks = vec![Array1::<T>::zeros(n); stages];
    let mut arg = Array1::<T>::zeros(n);

    for _step in 0..max_steps {
        if (t - tf).abs() <= T::epsilon() {
            break;
        }

        if (t + h - tf).abs() > (tf - t).abs() {
            h = tf - t;
        }

        let t_prev = t;

        compute_stages(method, t_prev, h, &y, &mut arg, &mut ks, &prob.f);

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
            let t_new = t_prev + h;

            if !prob.events.is_empty() {
                let detected = detect_events(
                    method,
                    t_prev,
                    t_new,
                    &y,
                    &y_new,
                    &prob.events,
                    &prob.f,
                    &mut ks,
                    &mut arg,
                )?;

                if let Some(record) = detected.into_iter().next() {
                    let terminal = prob.events[record.event_index].terminal;
                    events.push(record.clone());

                    t = record.t;
                    y = record.y;
                    ts.push(t);
                    us_data.extend(y.iter().copied());
                    h = h * fac;

                    if terminal {
                        break;
                    }
                    continue;
                }
            }

            t = t_new;
            y = y_new;
            ts.push(t);
            us_data.extend(y.iter().copied());
        }
        h = h * fac;
    }

    let n_times = ts.len();
    let u_arr =
        Array2::from_shape_vec((n, n_times).f(), us_data).expect("state data length matches shape");

    Ok(ODESolution {
        t: ts.into(),
        u: u_arr,
        events,
    })
}
