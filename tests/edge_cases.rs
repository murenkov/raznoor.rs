#![allow(missing_docs)]

use std::sync::Arc;

use ndarray::Array1;
use ndarray::array;
use raznoor::{
    AdaptiveODESolver, DORMAND_PRINCE45, Event, EventDirection, FixedStepODESolver, ODEProblem,
    ODESolver, RUNGE_KUTTA_4, SolverError,
};

#[test]
fn solve_zero_dt() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    let result = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.0).and_then(|s| s.solve(&prob));
    assert!(
        matches!(result, Err(SolverError::InvalidStepSize)),
        "solve with dt=0 should return InvalidStepSize error"
    );
}

#[test]
fn solve_negative_dt() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    let result = FixedStepODESolver::new(RUNGE_KUTTA_4, -0.01).and_then(|s| s.solve(&prob));
    assert!(
        matches!(result, Err(SolverError::InvalidStepSize)),
        "solve with negative dt should return InvalidStepSize error"
    );
}

#[test]
fn solve_dt_larger_than_tspan() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 2.0)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert_eq!(
        sol.t.len(),
        2,
        "dt larger than tspan should produce exactly 2 time points"
    );
    assert!((sol.t[0] - 0.0_f64).abs() < f64::EPSILON);
    assert!((sol.t[1] - 1.0_f64).abs() < f64::EPSILON);
    assert!(
        (sol.u[[0, 1]] - 1.0_f64).abs() < f64::EPSILON,
        "solution should remain at u0"
    );
}

#[test]
fn solve_nan_initial_condition() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let result = ODEProblem::new(f, array![f64::NAN], (0.0, 1.0));
    assert!(
        matches!(result, Err(SolverError::InvalidInitialCondition)),
        "ODEProblem::new with NaN initial condition should return InvalidInitialCondition error"
    );
}

#[test]
fn solve_inf_initial_condition() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let result = ODEProblem::new(f, array![f64::INFINITY], (0.0, 1.0));
    assert!(
        matches!(result, Err(SolverError::InvalidInitialCondition)),
        "ODEProblem::new with Inf initial condition should return InvalidInitialCondition error"
    );
}

#[test]
fn solve_empty_system() {
    let f = |_t: f64, _u: &Array1<f64>| Array1::<f64>::zeros(0);
    let prob = ODEProblem::new(f, Array1::<f64>::zeros(0), (0.0, 1.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert_eq!(sol.u.nrows(), 0, "empty system should have 0 variables");
    assert!(sol.t.len() >= 2, "should have at least 2 time points");
}

#[test]
fn solve_negative_direction() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert!(
        (sol.t[0] - 1.0_f64).abs() < f64::EPSILON,
        "first time point should be t0"
    );
    assert!(
        (sol.t[sol.t.len() - 1] - 0.0_f64).abs() < f64::EPSILON,
        "last time point should be tf"
    );
    for i in 1..sol.t.len() {
        assert!(
            sol.t[i] < sol.t[i - 1],
            "time should be monotonically decreasing"
        );
    }
}

#[test]
fn solve_adaptive_nan_initial_condition() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let result = ODEProblem::new(f, array![f64::NAN], (0.0, 0.0));
    assert!(
        matches!(result, Err(SolverError::InvalidInitialCondition)),
        "ODEProblem::new with NaN initial condition should return InvalidInitialCondition error"
    );
}

#[test]
fn solve_adaptive_inf_initial_condition() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let result = ODEProblem::new(f, array![f64::INFINITY], (0.0, 0.0));
    assert!(
        matches!(result, Err(SolverError::InvalidInitialCondition)),
        "ODEProblem::new with Inf initial condition should return InvalidInitialCondition error"
    );
}

#[test]
fn solve_adaptive_negative_direction() {
    let f = |_t: f64, _u: &Array1<f64>| array![0.0];
    let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0)).unwrap();
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert_eq!(sol.u.nrows(), 1);
    assert!(
        (sol.t[0] - 1.0_f64).abs() < f64::EPSILON,
        "first time point should be t0"
    );
    assert!(
        (sol.t[sol.t.len() - 1] - 0.0_f64).abs() < f64::EPSILON,
        "last time point should be tf"
    );
}

#[test]
fn solve_adaptive_tight_tolerances() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1000.0)).unwrap();
    let result =
        AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-14, 1e-14).and_then(|s| s.solve(&prob));
    assert!(
        result.is_ok(),
        "adaptive solve with tight tolerances should not panic"
    );
    let sol = result.unwrap();
    assert_eq!(sol.u.nrows(), 1);
    assert!(sol.t.len() > 1, "should produce at least 2 time points");
}

#[test]
fn solve_adaptive_max_steps_exceeded() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1e20)).unwrap();
    let result = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6)
        .unwrap()
        .with_max_steps(10)
        .solve(&prob);
    assert!(
        result.is_ok(),
        "adaptive solver should return partial solution after max_steps"
    );
    let sol = result.unwrap();
    assert!(
        sol.t.len() <= 11,
        "at most max_steps+1 time points, got {}",
        sol.t.len()
    );
    assert!(
        sol.t.len() >= 2,
        "should produce at least initial point + one step"
    );
}

#[test]
fn solve_event_function_nan() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event_fn = Arc::new(|_t: f64, _u: &Array1<f64>| f64::NAN);
    let event = Event::new(event_fn, true, EventDirection::Any);
    let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);
    let result = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6)
        .unwrap()
        .solve(&prob);
    assert!(
        matches!(result, Err(SolverError::EventError)),
        "event function returning NaN should produce EventError"
    );
}

#[test]
fn solve_adaptive_empty_events() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6)
        .unwrap()
        .solve(&prob)
        .unwrap();
    assert!(sol.t.len() >= 2, "should produce at least 2 time points");
    assert!(sol.events.is_empty(), "no events should be recorded");
}
