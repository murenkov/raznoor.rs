#![allow(missing_docs)]

use rstest::rstest;

use raznoor::{
    AdaptiveODESolver, DORMAND_PRINCE45, ExplicitRungeKuttaMethod, FEHLBERG45, ODESolver,
    RUNGE_KUTTA_1, RUNGE_KUTTA_2, RUNGE_KUTTA_3, RUNGE_KUTTA_4, RUNGE_KUTTA_5, SolverError,
};

mod common;
use common::{linear_problem, oscillator_problem};

#[rstest]
#[case::fehlberg45(FEHLBERG45)]
#[case::dopri54(DORMAND_PRINCE45)]
fn solve_adaptive_convergence_f32(#[case] method: ExplicitRungeKuttaMethod) {
    let (prob, reference) = linear_problem::<f32>();
    let sol = AdaptiveODESolver::new(method, 0.01, 1e-4f32, 1e-4f32)
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

#[rstest]
#[case::fehlberg45(FEHLBERG45)]
#[case::dopri54(DORMAND_PRINCE45)]
fn solve_adaptive_convergence_f64(#[case] method: ExplicitRungeKuttaMethod) {
    let (prob, reference) = linear_problem::<f64>();
    let sol = AdaptiveODESolver::new(method, 0.01, 1e-8f64, 1e-8f64)
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

#[rstest]
#[case::fehlberg45(FEHLBERG45)]
#[case::dopri54(DORMAND_PRINCE45)]
fn solve_adaptive_oscillator(#[case] method: ExplicitRungeKuttaMethod) {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = AdaptiveODESolver::new(method, 0.01, 1e-6f64, 1e-6f64)
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

#[rstest]
#[case::erk1(RUNGE_KUTTA_1)]
#[case::erk2(RUNGE_KUTTA_2)]
#[case::erk3(RUNGE_KUTTA_3)]
#[case::erk4(RUNGE_KUTTA_4)]
#[case::erk5(RUNGE_KUTTA_5)]
fn solve_adaptive_not_supported(#[case] method: ExplicitRungeKuttaMethod) {
    let (prob, _reference) = linear_problem::<f64>();
    let result = AdaptiveODESolver::new(method, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
    assert!(result.is_err());
    assert_eq!(result.unwrap_err(), SolverError::AdaptiveNotSupported);
}
