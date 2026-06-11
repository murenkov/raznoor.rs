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
