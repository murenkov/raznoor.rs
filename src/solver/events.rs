use ndarray::Array1;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::solver::core::{StepState, StepperContext, advance};
use crate::types::{Event, EventDirection, EventRecord, RhsODEFn, SolverError};

pub(crate) fn bisect_event<T, F>(
    t_left: T,
    t_right: T,
    u_left: &Array1<T>,
    g_left: T,
    g: &dyn Fn(T, &Array1<T>) -> T,
    ctx: &mut StepperContext<T, F>,
) -> (T, Array1<T>)
where
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
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

pub(crate) fn detect_events<T, F>(
    prev: &StepState<T>,
    curr: &StepState<T>,
    events: &[Event<T>],
    ctx: &mut StepperContext<T, F>,
) -> Result<Vec<EventRecord<T>>, SolverError>
where
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
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

/// Per-step data bundle for event detection.
///
/// Both fields (`u_curr` and `u_new`) must refer to states on the same
/// step interval `[t_prev, t_next]`.
pub(crate) struct StepData<'a, T> {
    pub(crate) u_curr: &'a Array1<T>,
    pub(crate) u_new: &'a Array1<T>,
    pub(crate) t_prev: T,
    pub(crate) t_next: T,
}

/// Result of event detection for a single integration step.
pub(crate) enum StepOutcome<T> {
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
pub(crate) fn handle_step_events<T, F>(
    ctx: &mut StepperContext<T, F>,
    step: &StepData<T>,
    prob_events: &[Event<T>],
) -> Result<StepOutcome<T>, SolverError>
where
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
{
    let prev_state = StepState {
        t: step.t_prev,
        u: step.u_curr,
    };
    let curr_state = StepState {
        t: step.t_next,
        u: step.u_new,
    };
    let detected = detect_events(&prev_state, &curr_state, prob_events, ctx)?;

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
