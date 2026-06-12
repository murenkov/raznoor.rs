#![allow(missing_docs)]

use raznoor::{
    DORMAND_PRINCE45, FEHLBERG45, FixedStepODESolver, ODESolver, RUNGE_KUTTA_1, RUNGE_KUTTA_2,
    RUNGE_KUTTA_3, RUNGE_KUTTA_4, RUNGE_KUTTA_5,
};

mod common;
use common::{linear_problem, oscillator_problem, residual};

#[test]
fn solve_erk1_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_1, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk2_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_2, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk3_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_3, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk4_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk5_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_5, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_fehlberg45_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(FEHLBERG45, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_dopri54_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(DORMAND_PRINCE45, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk1_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_1, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk2_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_2, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk3_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_3, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk4_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_erk5_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_5, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_fehlberg45_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(FEHLBERG45, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_dopri54_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(DORMAND_PRINCE45, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_system_two_vars_erk1() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_1, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_system_two_vars_erk2() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_2, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_system_two_vars_erk3() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_3, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_system_two_vars_erk4() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_system_two_vars_erk5() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_5, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_system_two_vars_fehlberg45() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(FEHLBERG45, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

#[test]
fn solve_system_two_vars_dopri54() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(DORMAND_PRINCE45, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}
