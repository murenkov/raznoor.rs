#![allow(missing_docs)]

use rstest::rstest;

use raznoor::{
    DORMAND_PRINCE45, ExplicitRungeKuttaMethod, FEHLBERG45, FixedStepODESolver, ODESolver,
    RUNGE_KUTTA_1, RUNGE_KUTTA_2, RUNGE_KUTTA_3, RUNGE_KUTTA_4, RUNGE_KUTTA_5,
};

mod common;
use common::{linear_problem, oscillator_problem, residual};

#[rstest]
#[case::erk1(RUNGE_KUTTA_1)]
#[case::erk2(RUNGE_KUTTA_2)]
#[case::erk3(RUNGE_KUTTA_3)]
#[case::erk4(RUNGE_KUTTA_4)]
#[case::erk5(RUNGE_KUTTA_5)]
#[case::fehlberg45(FEHLBERG45)]
#[case::dopri54(DORMAND_PRINCE45)]
fn linear_f32(#[case] method: ExplicitRungeKuttaMethod) {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(method, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[rstest]
#[case::erk1(RUNGE_KUTTA_1)]
#[case::erk2(RUNGE_KUTTA_2)]
#[case::erk3(RUNGE_KUTTA_3)]
#[case::erk4(RUNGE_KUTTA_4)]
#[case::erk5(RUNGE_KUTTA_5)]
#[case::fehlberg45(FEHLBERG45)]
#[case::dopri54(DORMAND_PRINCE45)]
fn linear_f64(#[case] method: ExplicitRungeKuttaMethod) {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(method, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[rstest]
#[case::erk1(RUNGE_KUTTA_1)]
#[case::erk2(RUNGE_KUTTA_2)]
#[case::erk3(RUNGE_KUTTA_3)]
#[case::erk4(RUNGE_KUTTA_4)]
#[case::erk5(RUNGE_KUTTA_5)]
#[case::fehlberg45(FEHLBERG45)]
#[case::dopri54(DORMAND_PRINCE45)]
fn oscillator_f64(#[case] method: ExplicitRungeKuttaMethod) {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(method, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}
