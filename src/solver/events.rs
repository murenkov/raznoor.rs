use ndarray::Array1;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::solver::ODEMethod;
use crate::types::{Event, EventDirection, EventRecord, RhsODEFn, SolverError};

/// Trait abstracting a single-step ODE advance for event bisection.
pub trait StepForward<T> {
    fn step(&mut self, t: T, dt: T, u: &Array1<T>) -> Array1<T>;
}

/// Adapts an [`ODEMethod`] + right-hand side + scratch into a [`StepForward`].
pub struct MethodStepper<'a, T: Float, M: ODEMethod<T>, F> {
    pub method: &'a M,
    pub f: &'a F,
    pub scratch: &'a mut M::Scratch,
}

impl<T: Float, M: ODEMethod<T>, F: RhsODEFn<T>> StepForward<T> for MethodStepper<'_, T, M, F> {
    fn step(&mut self, t: T, dt: T, u: &Array1<T>) -> Array1<T> {
        self.method
            .step_with_scratch(self.f, t, dt, u, self.scratch)
            .0
    }
}

pub struct StepState<'a, T> {
    pub(crate) t: T,
    pub(crate) u: &'a Array1<T>,
}

pub fn bisect_event<T>(
    t_left: T,
    t_right: T,
    u_left: &Array1<T>,
    g_left: T,
    g: &dyn Fn(T, &Array1<T>) -> T,
    stepper: &mut dyn StepForward<T>,
) -> (T, Array1<T>)
where
    T: Float + FromPrimitive,
{
    let mut tl = t_left;
    let mut tr = t_right;
    let mut ul = u_left.clone();
    let mut gl = g_left;
    for _ in 0..60 {
        let tm = (tl + tr) / T::from_f64(2.0).unwrap();
        let um = stepper.step(tl, tm - tl, &ul);
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
    let u_event = stepper.step(tl, tr - tl, &ul);
    (tr, u_event)
}

pub fn detect_events<T>(
    prev: &StepState<T>,
    curr: &StepState<T>,
    events: &[Event<T>],
    stepper: &mut dyn StepForward<T>,
) -> Result<Vec<EventRecord<T>>, SolverError>
where
    T: Float + FromPrimitive,
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
        let (t_event, u_event) = bisect_event(prev.t, curr.t, prev.u, g_prev, &*event.g, stepper);
        records.push(EventRecord {
            event_index: idx,
            t: t_event,
            u: u_event,
        });
    }
    records.sort_by(|a, b| a.t.partial_cmp(&b.t).unwrap_or(std::cmp::Ordering::Equal));
    Ok(records)
}

/// Per-step data bundle for event detection.
///
/// Both fields (`u_curr` and `u_new`) must refer to states on the same
/// step interval `[t_prev, t_next]`.
pub struct StepData<'a, T> {
    pub(crate) u_curr: &'a Array1<T>,
    pub(crate) u_new: &'a Array1<T>,
    pub(crate) t_prev: T,
    pub(crate) t_next: T,
}

/// Result of event detection for a single integration step.
pub enum StepOutcome<T> {
    /// No event fired; the candidate state is usable.
    None,
    /// A non-terminal event was detected.
    NonTerminalEvent(EventRecord<T>),
    /// A terminal event was detected; integration should stop.
    TerminalEvent(EventRecord<T>),
}

/// Advance one step, detect zero-crossing events, and return the outcome.
///
/// Checks all registered event functions for sign changes between
/// `step.u_curr` (at `t_prev`) and `step.u_new` (at `t_next`). Returns
/// a [`StepOutcome`] describing whether to continue, record a non-terminal
/// event, or stop.
pub fn handle_step_events<T>(
    stepper: &mut dyn StepForward<T>,
    step: &StepData<T>,
    prob_events: &[Event<T>],
) -> Result<StepOutcome<T>, SolverError>
where
    T: Float + FromPrimitive,
{
    let prev_state = StepState {
        t: step.t_prev,
        u: step.u_curr,
    };
    let curr_state = StepState {
        t: step.t_next,
        u: step.u_new,
    };
    let detected = detect_events(&prev_state, &curr_state, prob_events, stepper)?;

    Ok(match detected.into_iter().next() {
        Some(record) => {
            if prob_events[record.event_index].terminal {
                StepOutcome::TerminalEvent(record)
            } else {
                StepOutcome::NonTerminalEvent(record)
            }
        }
        None => StepOutcome::None,
    })
}
