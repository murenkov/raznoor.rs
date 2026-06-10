use ndarray::{Array1, Array2, ShapeBuilder};
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::butcher::ExplicitRungeKuttaMethod;
use crate::solver::ODESolver;
use crate::solver::core::{StepState, StepperContext, compute_stages, weighted_sum};
use crate::solver::events::detect_events;
use crate::types::{EventRecord, ODEProblem, ODESolution, SolverError};

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
    method: ExplicitRungeKuttaMethod<f64>,
    dt: T,
    atol: T,
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
