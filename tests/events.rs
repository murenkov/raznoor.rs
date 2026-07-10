#![allow(missing_docs)]

use rstest::rstest;
use std::sync::Arc;

use ndarray::Array1;
use ndarray::array;
use raznoor::{
    AdaptiveODESolver, DORMAND_PRINCE45, Event, EventDirection, FixedStepODESolver, ODEProblem,
    ODESolver, RUNGE_KUTTA_4,
};

#[derive(Clone, Copy)]
enum NoCrossingKind {
    WrongDirection,
    NeverCrosses,
}

#[rstest]
#[case::terminal_any(true, EventDirection::Any, false)]
#[case::non_terminal(false, EventDirection::Any, false)]
#[case::terminal_decreasing(true, EventDirection::Decreasing, false)]
#[case::terminal_any_adaptive(true, EventDirection::Any, true)]
fn event_crossing(
    #[case] terminal: bool,
    #[case] direction: EventDirection,
    #[case] use_adaptive: bool,
) {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
        terminal,
        direction,
    );
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);

    let sol = if use_adaptive {
        AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6)
            .unwrap()
            .solve(&prob)
            .unwrap()
    } else {
        FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap()
    };

    let expected = (2.0_f64).ln();
    assert!(!sol.events.is_empty(), "should have recorded an event");
    assert!(
        (sol.events[0].t - expected).abs() < 0.01,
        "event time should be near ln(2)"
    );

    if terminal {
        assert!(
            (sol.t[sol.t.len() - 1] - expected).abs() < 0.01,
            "terminal event at t={} should be near ln(2)={}",
            sol.t[sol.t.len() - 1],
            expected
        );
    } else {
        assert!(
            (sol.t[sol.t.len() - 1] - 5.0).abs() < f64::EPSILON,
            "non-terminal event should integrate to end of tspan"
        );
    }
}

#[rstest]
#[case::wrong_direction(NoCrossingKind::WrongDirection, 5.0)]
#[case::never_crosses(NoCrossingKind::NeverCrosses, 1.0)]
fn event_no_crossing(#[case] kind: NoCrossingKind, #[case] expected_final: f64) {
    let sol = match kind {
        NoCrossingKind::WrongDirection => {
            let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
            let g = |_t: f64, u: &Array1<f64>| u[0] - 0.5;
            let event = Event::new(Arc::new(g), true, EventDirection::Increasing);
            let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
                .unwrap()
                .with_events(vec![event]);
            FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
                .unwrap()
                .solve(&prob)
                .unwrap()
        }
        NoCrossingKind::NeverCrosses => {
            let f = |_t: f64, _u: &Array1<f64>| array![1.0];
            let g = |_t: f64, u: &Array1<f64>| u[0] + 1.0;
            let event = Event::new(Arc::new(g), true, EventDirection::Any);
            let prob = ODEProblem::new(f, array![0.0], (0.0, 1.0))
                .unwrap()
                .with_events(vec![event]);
            FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
                .unwrap()
                .solve(&prob)
                .unwrap()
        }
    };
    assert!(
        (sol.t[sol.t.len() - 1] - expected_final).abs() < f64::EPSILON,
        "should integrate to end of tspan"
    );
    assert!(sol.events.is_empty(), "no events should be recorded");
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
