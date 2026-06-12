use ndarray::{Array1, Array2, ShapeBuilder};
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::solver::ODEMethod;
use crate::solver::ODESolver;
use crate::solver::events::{MethodStepper, StepData, StepOutcome, handle_step_events};
use crate::types::{EventRecord, ODEProblem, ODESolution, RhsODEFn, SolverError};

const SAFETY_FACTOR: f64 = 0.9;
const MAX_STEP_CHANGE: f64 = 5.0;
const MIN_STEP_CHANGE: f64 = 0.2;
const MAX_STEPS: usize = 10_000_000;

/// Adaptive step-size solver configuration.
///
/// Wraps an ODE method with embedded error estimation (e.g. Fehlberg45 or
/// Dormand–Prince), an initial step size, and error tolerances. Use this
/// with [`ODESolver::solve`] directly.
///
/// # Type parameters
///
/// * `M` — The integration method type (e.g. [`ExplicitRungeKuttaMethod`](crate::erk::ExplicitRungeKuttaMethod)).
/// * `T` — The floating-point scalar type.
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
pub struct AdaptiveODESolver<M, T> {
    method: M,
    dt: T,
    atol: T,
    rtol: T,
    max_steps: usize,
}

impl<M: ODEMethod<T>, T: Float> AdaptiveODESolver<M, T> {
    /// Create a new adaptive solver configuration.
    ///
    /// # Errors
    /// Returns `Err(SolverError::InvalidStepSize)` if `dt` is zero or negative.
    /// Returns `Err(SolverError::AdaptiveNotSupported)` if `method` does not
    /// support adaptive error estimation.
    pub fn new(method: M, dt: T, atol: T, rtol: T) -> Result<Self, SolverError> {
        if dt <= T::zero() {
            return Err(SolverError::InvalidStepSize);
        }
        if !method.supports_adaptive() {
            return Err(SolverError::AdaptiveNotSupported);
        }
        Ok(Self {
            method,
            dt,
            atol,
            rtol,
            max_steps: MAX_STEPS,
        })
    }

    /// Return the embedded method pair.
    #[must_use]
    pub fn method(&self) -> &M {
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

    /// Set the maximum number of steps allowed.
    ///
    /// The solver will stop after this many steps and return the solution
    /// computed so far. Defaults to `10_000_000`.
    #[must_use]
    pub fn with_max_steps(mut self, max_steps: usize) -> Self {
        self.max_steps = max_steps;
        self
    }

    /// Return the maximum number of steps allowed.
    #[must_use]
    pub fn max_steps(&self) -> usize {
        self.max_steps
    }
}

impl<M, T, F> ODESolver<T, F> for AdaptiveODESolver<M, T>
where
    M: ODEMethod<T>,
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
{
    fn solve(&self, prob: &ODEProblem<T, F>) -> Result<ODESolution<T>, SolverError> {
        if !self.method.supports_adaptive() {
            return Err(SolverError::AdaptiveNotSupported);
        }
        let n = prob.u0.len();
        let t0 = prob.tspan.0;
        let tf = prob.tspan.1;
        let direction = if tf >= t0 { T::one() } else { -T::one() };

        let ctrl = StepControl {
            safety: T::from_f64(SAFETY_FACTOR).unwrap(),
            max_factor: T::from_f64(MAX_STEP_CHANGE).unwrap(),
            min_factor: T::from_f64(MIN_STEP_CHANGE).unwrap(),
            order_p1: T::from_usize(self.method.order() + 1).unwrap(),
        };
        let max_steps = self.max_steps;

        let mut ts: Vec<T> = Vec::new();
        let mut us_data: Vec<T> = Vec::new();

        let mut t = t0;
        let mut u_curr = prob.u0.clone();
        let mut dt_adaptive = self.dt * direction;
        let mut events: Vec<EventRecord<T>> = Vec::new();

        ts.push(t);
        us_data.extend(u_curr.iter().copied());

        let mut scratch = self.method.prepare(n);

        for _step in 0..max_steps {
            if (t - tf).abs() <= T::epsilon() {
                break;
            }

            if (t + dt_adaptive - tf).abs() > (tf - t).abs() {
                dt_adaptive = tf - t;
            }

            let t_prev = t;
            let f = &prob.f;

            let (u_new, delta) = self.method.step_with_error_with_scratch(
                f,
                t_prev,
                dt_adaptive,
                &u_curr,
                &mut scratch,
            );

            let err = compute_error_norm(n, self.atol, self.rtol, dt_adaptive, &delta, &u_new);

            let fac = compute_step_factor(err, &ctrl);

            if err <= T::one() {
                let t_new = t_prev + dt_adaptive;

                let step = StepData {
                    u_curr: &u_curr,
                    u_new: &u_new,
                    t_prev,
                    t_next: t_new,
                };
                let mut stepper = MethodStepper {
                    method: &self.method,
                    f,
                    scratch: &mut scratch,
                };
                let outcome = handle_step_events(&mut stepper, &step, &prob.events)?;

                let (t_new_val, u_new_val, is_terminal) = match outcome {
                    StepOutcome::None => (t_new, u_new, false),
                    StepOutcome::NonTerminalEvent(record) => {
                        events.push(record.clone());
                        (record.t, record.u, false)
                    }
                    StepOutcome::TerminalEvent(record) => {
                        events.push(record.clone());
                        (record.t, record.u, true)
                    }
                };

                t = t_new_val;
                u_curr = u_new_val;
                ts.push(t);
                us_data.extend(u_curr.iter().copied());

                if is_terminal {
                    break;
                }
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

/// Compute the RMS (root-mean-square) error norm for the current step.
///
/// The error in each component is scaled by `atol + rtol * |u_new[i]|`
/// (mixed absolute/relative tolerance), then the RMS across all `n`
/// components is returned.
fn compute_error_norm<T: Float + FromPrimitive>(
    n: usize,
    atol: T,
    rtol: T,
    dt: T,
    delta: &Array1<T>,
    u_new: &Array1<T>,
) -> T {
    let mut err_sq = T::zero();
    for i in 0..n {
        let e_i = (dt * delta[i]).abs();
        let scale = atol + rtol * u_new[i].abs();
        let ratio = e_i / scale;
        err_sq = err_sq + ratio * ratio;
    }
    (err_sq / T::from_usize(n).unwrap()).sqrt()
}

/// Parameters for step-size control in the adaptive solver.
///
/// Bundles the safety factor, step-change bounds, and the error-exponent
/// constant `p+1` (embedded method order + 1) that are always used
/// together by [`compute_step_factor`].
struct StepControl<T> {
    safety: T,
    max_factor: T,
    min_factor: T,
    order_p1: T,
}

/// Determine the step-size adjustment factor for the next integration step.
///
/// Based on the normalised error estimate `err` and the controller
/// parameters in `ctrl`. Returns a clamped factor in
/// `[min_factor, max_factor]`.
fn compute_step_factor<T: Float + FromPrimitive>(err: T, ctrl: &StepControl<T>) -> T {
    if err <= T::zero() {
        return ctrl.max_factor;
    }
    let sf = ctrl.safety * (T::one() / (err + T::epsilon())).powf(T::one() / ctrl.order_p1);
    if sf > ctrl.max_factor {
        ctrl.max_factor
    } else if sf < ctrl.min_factor {
        ctrl.min_factor
    } else {
        sf
    }
}
