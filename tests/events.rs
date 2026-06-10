#![allow(missing_docs)]

use std::sync::Arc;

use ndarray::Array1;
use ndarray::array;
use raznoor::{
    AdaptiveODESolver, DORMAND_PRINCE45, Event, EventDirection, FixedStepODESolver, ODEProblem,
    ODESolver, RUNGE_KUTTA_4,
};

fn make_event(g: impl Fn(f64, &Array1<f64>) -> f64 + Send + Sync + 'static) -> Event<f64> {
    Event::new(Arc::new(g), true, EventDirection::Any)
}

#[test]
fn event_terminal_fixed() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event = make_event(|_t: f64, u: &Array1<f64>| u[0] - 0.5);
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let expected = (2.0_f64).ln();
    assert!(
        (sol.t[sol.t.len() - 1] - expected).abs() < 0.01,
        "terminal event at t={} should be near ln(2)={}",
        sol.t[sol.t.len() - 1],
        expected
    );
    assert!(!sol.events.is_empty(), "should have recorded an event");
    assert!(
        (sol.events[0].t - expected).abs() < 0.01,
        "event time should be near ln(2)"
    );
}

#[test]
fn event_non_terminal_fixed() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
        false,
        EventDirection::Any,
    );
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert!(
        (sol.t[sol.t.len() - 1] - 5.0).abs() < f64::EPSILON,
        "non-terminal event should integrate to end of tspan"
    );
    assert!(!sol.events.is_empty(), "should have recorded an event");
}

#[test]
fn event_direction_decreasing() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
        true,
        EventDirection::Decreasing,
    );
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert!(
        (sol.t[sol.t.len() - 1] - (2.0_f64).ln()).abs() < 0.01,
        "decreasing event should trigger at ln(2)"
    );
}

#[test]
fn event_direction_increasing_no_crossing() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
        true,
        EventDirection::Increasing,
    );
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert!(
        (sol.t[sol.t.len() - 1] - 5.0).abs() < f64::EPSILON,
        "increasing event should not trigger on decreasing function"
    );
    assert!(sol.events.is_empty(), "no events should be recorded");
}

#[test]
fn event_no_crossing() {
    let f = |_t: f64, _u: &Array1<f64>| array![1.0];
    let event = make_event(|_t: f64, u: &Array1<f64>| u[0] + 1.0);
    let prob = ODEProblem::new(f, array![0.0], (0.0, 1.0))
        .unwrap()
        .with_events(vec![event]);
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert!(
        (sol.t[sol.t.len() - 1] - 1.0).abs() < f64::EPSILON,
        "no event should fire"
    );
    assert!(sol.events.is_empty(), "no events should be recorded");
}

#[test]
fn event_terminal_adaptive() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
        true,
        EventDirection::Any,
    );
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let expected = (2.0_f64).ln();
    assert!(
        (sol.t[sol.t.len() - 1] - expected).abs() < 0.01,
        "terminal adaptive event t={} should be near ln(2)={}",
        sol.t[sol.t.len() - 1],
        expected
    );
    assert!(!sol.events.is_empty(), "should have recorded an event");
}

#[test]
fn event_multiple_first_terminal_wins() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event_early = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
        true,
        EventDirection::Any,
    );
    let event_late = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.25),
        true,
        EventDirection::Any,
    );
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event_late, event_early]);
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let expected = (2.0_f64).ln();
    assert!(
        (sol.t[sol.t.len() - 1] - expected).abs() < 0.01,
        "should stop at earlier event (ln(2))"
    );
}

#[test]
fn event_solution_field_populated() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
        true,
        EventDirection::Any,
    );
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert_eq!(sol.events.len(), 1, "one event should be recorded");
    assert_eq!(sol.events[0].event_index, 0);
    assert!(
        (sol.events[0].u[0] - 0.5).abs() < 0.01,
        "u at event should be near 0.5"
    );
}

#[test]
fn event_no_events_no_overhead() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert!(sol.events.is_empty(), "no events should be recorded");
}
