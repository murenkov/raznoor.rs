#![allow(missing_docs)]

use raznoor::{
    AdaptiveODESolver, DORMAND_PRINCE45, FEHLBERG45, ODESolver, RUNGE_KUTTA_1, RUNGE_KUTTA_2,
    RUNGE_KUTTA_3, RUNGE_KUTTA_4, RUNGE_KUTTA_5, SolverError,
};

mod common;
use common::{linear_problem, oscillator_problem};

#[test]
fn solve_adaptive_fehlberg45_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = AdaptiveODESolver::new(FEHLBERG45, 0.01, 1e-4f32, 1e-4f32)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let n_t = sol.t.len();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed_last = sol.u.column(i)[n_t - 1];
        let ref_last = ref_traj[ref_traj.len() - 1];
        assert!(
            (computed_last - ref_last).abs() <= 0.01,
            "final state mismatch for variable {i}: computed={computed_last}, ref={ref_last}"
        );
    }
}

#[test]
fn solve_adaptive_dopri54_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-4f32, 1e-4f32)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let n_t = sol.t.len();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed_last = sol.u.column(i)[n_t - 1];
        let ref_last = ref_traj[ref_traj.len() - 1];
        assert!(
            (computed_last - ref_last).abs() <= 0.01,
            "final state mismatch for variable {i}: computed={computed_last}, ref={ref_last}"
        );
    }
}

#[test]
fn solve_adaptive_fehlberg45_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = AdaptiveODESolver::new(FEHLBERG45, 0.01, 1e-8f64, 1e-8f64)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let n_t = sol.t.len();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed_last = sol.u.column(i)[n_t - 1];
        let ref_last = ref_traj[ref_traj.len() - 1];
        assert!(
            (computed_last - ref_last).abs() <= 0.01,
            "final state mismatch for variable {i}: computed={computed_last}, ref={ref_last}"
        );
    }
}

#[test]
fn solve_adaptive_dopri54_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-8f64, 1e-8f64)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let n_t = sol.t.len();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed_last = sol.u.column(i)[n_t - 1];
        let ref_last = ref_traj[ref_traj.len() - 1];
        assert!(
            (computed_last - ref_last).abs() <= 0.01,
            "final state mismatch for variable {i}: computed={computed_last}, ref={ref_last}"
        );
    }
}

#[test]
fn solve_adaptive_fehlberg45_osc() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = AdaptiveODESolver::new(FEHLBERG45, 0.01, 1e-6f64, 1e-6f64)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let n_t = sol.t.len();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed_last = sol.u.column(i)[n_t - 1];
        let ref_last = ref_traj[ref_traj.len() - 1];
        assert!(
            (computed_last - ref_last).abs() <= 0.01,
            "final state mismatch for variable {i}: computed={computed_last}, ref={ref_last}"
        );
    }
}

#[test]
fn solve_adaptive_dopri54_osc() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6f64, 1e-6f64)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let n_t = sol.t.len();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed_last = sol.u.column(i)[n_t - 1];
        let ref_last = ref_traj[ref_traj.len() - 1];
        assert!(
            (computed_last - ref_last).abs() <= 0.01,
            "final state mismatch for variable {i}: computed={computed_last}, ref={ref_last}"
        );
    }
}

#[test]
fn solve_adaptive_erk1_not_supported() {
    let (prob, _reference) = linear_problem::<f64>();
    let result =
        AdaptiveODESolver::new(RUNGE_KUTTA_1, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
    assert!(result.is_err());
    assert_eq!(result.unwrap_err(), SolverError::AdaptiveNotSupported);
}

#[test]
fn solve_adaptive_erk2_not_supported() {
    let (prob, _reference) = linear_problem::<f64>();
    let result =
        AdaptiveODESolver::new(RUNGE_KUTTA_2, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
    assert!(result.is_err());
    assert_eq!(result.unwrap_err(), SolverError::AdaptiveNotSupported);
}

#[test]
fn solve_adaptive_erk3_not_supported() {
    let (prob, _reference) = linear_problem::<f64>();
    let result =
        AdaptiveODESolver::new(RUNGE_KUTTA_3, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
    assert!(result.is_err());
    assert_eq!(result.unwrap_err(), SolverError::AdaptiveNotSupported);
}

#[test]
fn solve_adaptive_erk4_not_supported() {
    let (prob, _reference) = linear_problem::<f64>();
    let result =
        AdaptiveODESolver::new(RUNGE_KUTTA_4, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
    assert!(result.is_err());
    assert_eq!(result.unwrap_err(), SolverError::AdaptiveNotSupported);
}

#[test]
fn solve_adaptive_erk5_not_supported() {
    let (prob, _reference) = linear_problem::<f64>();
    let result =
        AdaptiveODESolver::new(RUNGE_KUTTA_5, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
    assert!(result.is_err());
    assert_eq!(result.unwrap_err(), SolverError::AdaptiveNotSupported);
}
