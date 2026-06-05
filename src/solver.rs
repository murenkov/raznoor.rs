use ndarray::{Array1, Array2, ShapeBuilder};
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::butcher::ExplicitRungeKuttaMethod;
use crate::types::{
    EnsembleODEProblem, Event, EventDirection, EventRecord, ODEProblem, ODESolution, SolverError,
};

struct StepperContext<'a, T, F> {
    method: &'a ExplicitRungeKuttaMethod<f64>,
    f: &'a F,
    ks: &'a mut [Array1<T>],
    arg: &'a mut Array1<T>,
}

struct StepState<'a, T> {
    t: T,
    u: &'a Array1<T>,
}

fn compute_stages<T, F>(t: T, dt: T, u: &Array1<T>, ctx: &mut StepperContext<T, F>)
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let cast = |x: &f64| T::from_f64(*x).unwrap();
    for m in 0..ctx.method.c.len() {
        ctx.arg.assign(u);
        for (j, k) in ctx.ks.iter().enumerate() {
            let coeff = cast(&ctx.method.a[m][j]);
            if coeff != T::zero() {
                ndarray::Zip::from(&mut *ctx.arg)
                    .and(k)
                    .for_each(|a, &kv| *a = *a + dt * coeff * kv);
            }
        }
        ctx.ks[m] = (ctx.f)(t + cast(&ctx.method.c[m]) * dt, ctx.arg);
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

fn advance<T, F>(t: T, dt: T, u: &Array1<T>, ctx: &mut StepperContext<T, F>) -> Array1<T>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    compute_stages(t, dt, u, ctx);
    let du = weighted_sum(ctx.ks, ctx.method.b);
    ndarray::Zip::from(u)
        .and(&du)
        .map_collect(|&uv, &duv| uv + dt * duv)
}

fn bisect_event<T, F>(
    t_left: T,
    t_right: T,
    u_left: &Array1<T>,
    g_left: T,
    g: &dyn Fn(T, &Array1<T>) -> T,
    ctx: &mut StepperContext<T, F>,
) -> (T, Array1<T>)
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let mut tl = t_left;
    let mut tr = t_right;
    let mut ul = u_left.clone();
    let mut gl = g_left;
    for _ in 0..60 {
        let tm = (tl + tr) / T::from_f64(2.0).unwrap();
        let um = advance(tl, tm - tl, &ul, ctx);
        let gm = g(tm, &um);
        let gm_pos = gm > T::zero();
        if gm_pos == (gl > T::zero()) {
            tl = tm;
            ul = um;
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
    let u_event = advance(tl, tr - tl, &ul, ctx);
    (tr, u_event)
}

fn detect_events<T, F>(
    prev: &StepState<T>,
    curr: &StepState<T>,
    events: &[Event<T>],
    ctx: &mut StepperContext<T, F>,
) -> Result<Vec<EventRecord<T>>, SolverError>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let mut candidates: Vec<(usize, &Event<T>, T)> = Vec::new();
    for (idx, event) in events.iter().enumerate() {
        let g_prev = (event.g)(prev.t, prev.u);
        let g_curr = (event.g)(curr.t, curr.u);
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
        let (t_event, u_event) = bisect_event(prev.t, curr.t, prev.u, g_prev, &*event.g, ctx);
        records.push(EventRecord {
            event_index: idx,
            t: t_event,
            u: u_event,
        });
    }
    records.sort_by(|a, b| a.t.partial_cmp(&b.t).unwrap_or(std::cmp::Ordering::Equal));
    Ok(records)
}

/// A solver that can integrate an [`ODEProblem`].
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznoor::{ODEProblem, ODESolver, FixedStepODESolver, RUNGE_KUTTA_4};
///
/// let f = |t: f64, u: &ndarray::Array1<f64>| array![2.0 * t + u[0]];
/// let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1)).unwrap();
///
/// let config = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
/// let sol = config.solve(&prob).unwrap();
/// ```
pub trait ODESolver<T, F>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    /// Integrate the given ODE problem and return the solution.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::EventError`] if an event function returns
    /// an invalid value. Implementations may return other variants (e.g.
    /// [`SolverError::InvalidStepSize`], [`SolverError::AdaptiveNotSupported`]).
    fn solve(&self, prob: &ODEProblem<T, F>) -> Result<ODESolution<T>, SolverError>;
}

/// A solver that can integrate an ensemble of ODE problems in parallel.
///
/// Each of the `n_members` initial conditions in [`EnsembleODEProblem`] is
/// solved independently on the rayon thread pool using the same solver
/// configuration.
///
/// Requires the `parallel` Cargo feature.
///
/// ```
/// # #[cfg(feature = "parallel")] {
/// use ndarray::array;
/// use ndarray::Array1;
/// use raznoor::{EnsembleODEProblem, EnsembleODESolver, FixedStepODESolver, RUNGE_KUTTA_4};
///
/// let f = |t: f64, u: &Array1<f64>| array![2.0 * t + u[0]];
/// let u0 = array![[1.0], [0.5], [0.0]];
/// let ensemble = EnsembleODEProblem::new(f, u0, (1.0, 1.1)).unwrap();
/// let solver = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
/// let results = solver.solve_batch(&ensemble);
///
/// assert_eq!(results.len(), 3);
/// assert!(results.iter().all(|r| r.is_ok()));
/// # }
/// ```
pub trait EnsembleODESolver<T, F>
where
    T: Float + FromPrimitive + Send + Sync,
    F: Fn(T, &Array1<T>) -> Array1<T> + Clone + Send + Sync,
{
    /// Solve all members of the ensemble in parallel and return per-member results.
    ///
    /// Each element of the returned vector corresponds to one ensemble member.
    /// Failures from individual members do not abort the rest of the batch.
    fn solve_batch(
        &self,
        ensemble: &EnsembleODEProblem<T, F>,
    ) -> Vec<Result<ODESolution<T>, SolverError>>;
}

/// Fixed-step solver configuration.
///
/// Wraps a Runge-Kutta method and a constant step size. Use this with
/// [`ODESolver::solve`] directly.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznoor::{ODEProblem, ODESolver, FixedStepODESolver, RUNGE_KUTTA_4};
///
/// let prob = ODEProblem::new(
///     |t: f64, u: &ndarray::Array1<f64>| array![2.0 * t + u[0]],
///     array![1.0],
///     (1.0, 1.1),
/// ).unwrap();
///
/// let config = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
/// let sol = config.solve(&prob).unwrap();
/// ```
#[derive(Clone, Copy, Debug)]
pub struct FixedStepODESolver<T> {
    /// The Runge-Kutta method to use.
    method: ExplicitRungeKuttaMethod<f64>,
    /// The absolute step size. The direction of integration is determined
    /// by the time span (i.e., `tspan.0` → `tspan.1`). Must be positive.
    dt: T,
}

impl<T: Float> FixedStepODESolver<T> {
    /// Create a new fixed-step solver configuration.
    ///
    /// # Errors
    /// Returns `Err(SolverError::InvalidStepSize)` if `dt` is zero or negative.
    pub fn new(method: ExplicitRungeKuttaMethod<f64>, dt: T) -> Result<Self, SolverError> {
        if dt <= T::zero() {
            return Err(SolverError::InvalidStepSize);
        }
        Ok(Self { method, dt })
    }

    /// Return the Runge-Kutta method.
    #[must_use]
    pub fn method(&self) -> &ExplicitRungeKuttaMethod<f64> {
        &self.method
    }

    /// Return the absolute step size.
    #[must_use]
    pub fn dt(&self) -> T {
        self.dt
    }
}

/// Adaptive step-size solver configuration.
///
/// Wraps an embedded Runge-Kutta pair (e.g. Fehlberg45 or Dormand–Prince),
/// an initial step size, and error tolerances. Use this with
/// [`ODESolver::solve`] directly.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznoor::{ODEProblem, ODESolver, AdaptiveODESolver, DORMAND_PRINCE45};
///
/// let prob = ODEProblem::new(
///     |t: f64, u: &ndarray::Array1<f64>| array![2.0 * t + u[0]],
///     array![1.0],
///     (1.0, 1.1),
/// ).unwrap();
///
/// let config = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6).unwrap();
/// let sol = config.solve(&prob).unwrap();
/// ```
#[derive(Clone, Copy, Debug)]
pub struct AdaptiveODESolver<T> {
    /// The embedded Runge-Kutta pair for error estimation.
    method: ExplicitRungeKuttaMethod<f64>,
    /// Initial step size guess. The direction of integration is determined
    /// by the time span (i.e., `tspan.0` → `tspan.1`). Must not be zero.
    dt: T,
    /// Absolute tolerance for the error per step.
    atol: T,
    /// Relative tolerance for the error per step.
    rtol: T,
}

impl<T: Float> AdaptiveODESolver<T> {
    /// Create a new adaptive solver configuration.
    ///
    /// # Errors
    /// Returns `Err(SolverError::InvalidStepSize)` if `dt` is zero.
    pub fn new(
        method: ExplicitRungeKuttaMethod<f64>,
        dt: T,
        atol: T,
        rtol: T,
    ) -> Result<Self, SolverError> {
        if dt == T::zero() {
            return Err(SolverError::InvalidStepSize);
        }
        Ok(Self {
            method,
            dt,
            atol,
            rtol,
        })
    }

    /// Return the embedded Runge-Kutta pair.
    #[must_use]
    pub fn method(&self) -> &ExplicitRungeKuttaMethod<f64> {
        &self.method
    }

    /// Return the initial step size guess.
    #[must_use]
    pub fn dt(&self) -> T {
        self.dt
    }

    /// Return the absolute tolerance.
    #[must_use]
    pub fn atol(&self) -> T {
        self.atol
    }

    /// Return the relative tolerance.
    #[must_use]
    pub fn rtol(&self) -> T {
        self.rtol
    }
}

impl<T, F> ODESolver<T, F> for FixedStepODESolver<T>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    fn solve(&self, prob: &ODEProblem<T, F>) -> Result<ODESolution<T>, SolverError> {
        let dt = if prob.tspan.1 >= prob.tspan.0 {
            self.dt
        } else {
            -self.dt
        };
        let n_steps_floor =
            num_traits::cast::<T, usize>(((prob.tspan.1 - prob.tspan.0) / dt).floor()).unwrap_or(0);
        let mut ts: Vec<T> = Vec::with_capacity(n_steps_floor + 2);
        ts.push(prob.tspan.0);
        for i in 1..n_steps_floor {
            ts.push(
                prob.tspan.0 + dt * T::from_usize(i).expect("step index fits in the numeric type"),
            );
        }
        ts.push(prob.tspan.1);

        let n = prob.u0.len();
        let n_steps = ts.len();
        let stages = self.method.c.len();

        let mut u = Array2::<T>::zeros((n, n_steps));
        u.column_mut(0).assign(&prob.u0);

        let mut ks = vec![Array1::<T>::zeros(n); stages];
        let mut arg = Array1::<T>::zeros(n);
        let mut u_curr = prob.u0.clone();
        let mut events: Vec<EventRecord<T>> = Vec::new();
        let mut final_step = n_steps;
        let mut ctx = StepperContext {
            method: &self.method,
            f: &prob.f,
            ks: &mut ks,
            arg: &mut arg,
        };

        for i in 0..n_steps - 1 {
            let dt = ts[i + 1] - ts[i];
            let t_prev = ts[i];

            compute_stages(t_prev, dt, &u_curr, &mut ctx);
            let du = weighted_sum(ctx.ks, ctx.method.b);

            if prob.events.is_empty() {
                let mut col = u.column_mut(i + 1);
                ndarray::Zip::from(&mut u_curr)
                    .and(&mut col)
                    .and(&du)
                    .for_each(|uv, next, &duv| {
                        *uv = *uv + dt * duv;
                        *next = *uv;
                    });
            } else {
                let u_new = ndarray::Zip::from(&u_curr)
                    .and(&du)
                    .map_collect(|&uv, &duv| uv + dt * duv);

                let prev_state = StepState {
                    t: t_prev,
                    u: &u_curr,
                };
                let curr_state = StepState {
                    t: ts[i + 1],
                    u: &u_new,
                };
                let detected = detect_events(&prev_state, &curr_state, &prob.events, &mut ctx)?;

                if let Some(record) = detected.into_iter().next() {
                    let terminal = prob.events[record.event_index].terminal;
                    events.push(record.clone());

                    ts[i + 1] = record.t;
                    u.column_mut(i + 1).assign(&record.u);
                    u_curr = record.u;

                    if terminal {
                        final_step = i + 2;
                        break;
                    }
                    continue;
                }

                u.column_mut(i + 1).assign(&u_new);
                u_curr = u_new;
            }
        }

        if final_step < n_steps {
            ts.truncate(final_step);
            u = u.slice(ndarray::s![.., ..final_step]).to_owned();
        }

        Ok(ODESolution {
            t: ts.into(),
            u,
            events,
        })
    }
}

#[allow(clippy::too_many_lines)]
impl<T, F> ODESolver<T, F> for AdaptiveODESolver<T>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    fn solve(&self, prob: &ODEProblem<T, F>) -> Result<ODESolution<T>, SolverError> {
        if self.method.b == self.method.b_hat {
            return Err(SolverError::AdaptiveNotSupported);
        }
        let b_diff: Vec<f64> = self
            .method
            .b
            .iter()
            .zip(self.method.b_hat.iter())
            .map(|(&b, &bh)| b - bh)
            .collect();
        let n = prob.u0.len();
        let t0 = prob.tspan.0;
        let tf = prob.tspan.1;
        let direction = if tf >= t0 { T::one() } else { -T::one() };
        let stages = self.method.c.len();

        let safety = T::from_f64(0.9).unwrap();
        let max_factor = T::from_f64(5.0).unwrap();
        let min_factor = T::from_f64(0.2).unwrap();
        let max_steps = 10_000_000;
        let order_p1 = T::from_usize(5).unwrap();

        let mut ts: Vec<T> = Vec::new();
        let mut us_data: Vec<T> = Vec::new();

        let mut t = t0;
        let mut u_curr = prob.u0.clone();
        let mut dt_adaptive = self.dt.abs() * direction;
        let mut events: Vec<EventRecord<T>> = Vec::new();

        ts.push(t);
        us_data.extend(u_curr.iter().copied());

        let mut ks = vec![Array1::<T>::zeros(n); stages];
        let mut arg = Array1::<T>::zeros(n);
        let mut ctx = StepperContext {
            method: &self.method,
            f: &prob.f,
            ks: &mut ks,
            arg: &mut arg,
        };

        for _step in 0..max_steps {
            if (t - tf).abs() <= T::epsilon() {
                break;
            }

            if (t + dt_adaptive - tf).abs() > (tf - t).abs() {
                dt_adaptive = tf - t;
            }

            let t_prev = t;

            compute_stages(t_prev, dt_adaptive, &u_curr, &mut ctx);

            let du = weighted_sum(ctx.ks, ctx.method.b);
            let delta = weighted_sum(ctx.ks, &b_diff);

            let u_new = ndarray::Zip::from(&u_curr)
                .and(&du)
                .map_collect(|&uv, &duv| uv + dt_adaptive * duv);

            let mut err_sq = T::zero();
            for i in 0..n {
                let e_i = (dt_adaptive * delta[i]).abs();
                let scale = self.atol + self.rtol * u_new[i].abs();
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
                let t_new = t_prev + dt_adaptive;

                if !prob.events.is_empty() {
                    let prev_state = StepState {
                        t: t_prev,
                        u: &u_curr,
                    };
                    let curr_state = StepState {
                        t: t_new,
                        u: &u_new,
                    };
                    let detected = detect_events(&prev_state, &curr_state, &prob.events, &mut ctx)?;

                    if let Some(record) = detected.into_iter().next() {
                        let terminal = prob.events[record.event_index].terminal;
                        events.push(record.clone());

                        t = record.t;
                        u_curr = record.u;
                        ts.push(t);
                        us_data.extend(u_curr.iter().copied());
                        dt_adaptive = dt_adaptive * fac;

                        if terminal {
                            break;
                        }
                        continue;
                    }
                }

                t = t_new;
                u_curr = u_new;
                ts.push(t);
                us_data.extend(u_curr.iter().copied());
            }
            dt_adaptive = dt_adaptive * fac;
        }

        let n_times = ts.len();
        let u_arr = Array2::from_shape_vec((n, n_times).f(), us_data)
            .expect("state data length matches shape");

        Ok(ODESolution {
            t: ts.into(),
            u: u_arr,
            events,
        })
    }
}
