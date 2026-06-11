use ndarray::{Array1, Array2};
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::butcher::ExplicitRungeKuttaMethod;
use crate::solver::ODESolver;
use crate::solver::core::{StepState, StepperContext, compute_stages, weighted_sum};
use crate::solver::events::detect_events;
use crate::types::{EventRecord, ODEProblem, ODESolution, RhsODEFn, SolverError};

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
    method: ExplicitRungeKuttaMethod<f64>,
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

impl<T, F> ODESolver<T, F> for FixedStepODESolver<T>
where
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
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
