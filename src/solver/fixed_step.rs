use ndarray::{Array1, Array2};
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::butcher::ExplicitRungeKuttaMethod;
use crate::solver::ODESolver;
use crate::solver::core::{StepperContext, compute_stages, weighted_sum};
use crate::solver::events::{StepData, StepOutcome, handle_step_events};
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
        let mut ts = generate_time_grid(prob.tspan, self.dt);

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

            let u_new = ndarray::Zip::from(&u_curr)
                .and(&du)
                .map_collect(|&uv, &duv| uv + dt * duv);

            if prob.events.is_empty() {
                u.column_mut(i + 1).assign(&u_new);
                u_curr = u_new;
            } else {
                let step = StepData {
                    u_curr: &u_curr,
                    u_new: &u_new,
                    t_prev,
                    t_next: ts[i + 1],
                };
                let outcome = handle_step_events(&mut ctx, &step, &prob.events)?;
                match outcome {
                    StepOutcome::None => {
                        u.column_mut(i + 1).assign(&u_new);
                        u_curr = u_new;
                    }
                    StepOutcome::NonTerminalEvent(record) => {
                        events.push(record.clone());
                        ts[i + 1] = record.t;
                        u.column_mut(i + 1).assign(&record.u);
                        u_curr = record.u;
                    }
                    StepOutcome::TerminalEvent(record) => {
                        events.push(record.clone());
                        ts[i + 1] = record.t;
                        u.column_mut(i + 1).assign(&record.u);
                        final_step = i + 2;
                        break;
                    }
                }
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

/// Build a uniform time grid from `t0` to `t1` with step size `dt`.
///
/// The last point is always exactly `t1`, so the final interval may be
/// shorter than `dt`. Handles backward integration automatically when
/// `t1 < t0`.
fn generate_time_grid<T: Float + FromPrimitive>((t0, t1): (T, T), dt: T) -> Vec<T> {
    let dir = if t1 >= t0 { dt } else { -dt };
    let n = num_traits::cast::<T, usize>(((t1 - t0) / dir).floor()).unwrap_or(0);
    let mut ts = Vec::with_capacity(n + 2);
    ts.push(t0);
    for i in 1..n {
        ts.push(t0 + dir * T::from_usize(i).expect("step index fits in the numeric type"));
    }
    ts.push(t1);
    ts
}
