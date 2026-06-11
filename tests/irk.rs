#![allow(missing_docs)]

use ndarray::Array1;
use ndarray::array;
use raznoor::{
    BACKWARD_EULER, CRANK_NICOLSON, FixedStepODESolver, GAUSS_LEGENDRE_4, IMPLICIT_MIDPOINT,
    ODEProblem, ODESolver, RADAU_IIA_3, RADAU_IIA_5,
};

mod common;
use common::{linear_problem, oscillator_problem, residual};

fn exp_decay_problem() -> (
    ODEProblem<f64, impl Fn(f64, &Array1<f64>) -> Array1<f64>>,
    f64,
) {
    let prob = ODEProblem::new(
        |_t: f64, u: &Array1<f64>| array![-u[0]],
        array![1.0],
        (0.0, 1.0),
    )
    .unwrap();
    let u_exact = (-1.0_f64).exp();
    (prob, u_exact)
}

/// Stiff linear problem: u' = -1000*u, u(0) = 1, exact u(1) = exp(-1000) ≈ 0
fn stiff_problem() -> (
    ODEProblem<f64, impl Fn(f64, &Array1<f64>) -> Array1<f64>>,
    f64,
) {
    let prob = ODEProblem::new(
        |_t: f64, u: &Array1<f64>| array![-1000.0 * u[0]],
        array![1.0],
        (0.0, 1.0),
    )
    .unwrap();
    let u_exact = (-1000.0_f64).exp();
    (prob, u_exact)
}

// --- fixed-step accuracy tests ---

#[test]
fn backward_euler_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &[0.1, 0.05, 0.01] {
        let sol = FixedStepODESolver::new(BACKWARD_EULER, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[0, sol.t.len() - 1]];
        let error = (u_last - u_exact).abs();
        // Backward Euler is O(dt), so dt=0.01 should give error ~0.005
        assert!(error <= dt * 0.6, "BE: error {error} > dt {dt}*0.6");
    }
}

#[test]
fn implicit_midpoint_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &[0.1, 0.05] {
        let sol = FixedStepODESolver::new(IMPLICIT_MIDPOINT, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[0, sol.t.len() - 1]];
        let error = (u_last - u_exact).abs();
        // Implicit midpoint is O(dt²)
        assert!(error <= dt * dt * 2.0, "Midpoint: error {error} > dt²*2");
    }
}

#[test]
fn crank_nicolson_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &[0.1, 0.05] {
        let sol = FixedStepODESolver::new(CRANK_NICOLSON, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[0, sol.t.len() - 1]];
        let error = (u_last - u_exact).abs();
        // Crank-Nicolson is O(dt²)
        assert!(error <= dt * dt * 2.0, "CN: error {error} > dt²*2");
    }
}

#[test]
fn radau_ii_3_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &[0.1, 0.05] {
        let sol = FixedStepODESolver::new(RADAU_IIA_3, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[0, sol.t.len() - 1]];
        let error = (u_last - u_exact).abs();
        // Radau IIA 2-stage is O(dt³)
        assert!(error <= dt * dt * dt * 5.0, "Radau3: error {error} > dt³*5");
    }
}

#[test]
fn radau_ii_5_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    let dt = 0.2;
    let sol = FixedStepODESolver::new(RADAU_IIA_5, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[0, sol.t.len() - 1]];
    let error = (u_last - u_exact).abs();
    // Radau IIA 3-stage is O(dt⁵)
    assert!(error <= dt.powi(5) * 20.0, "Radau5: error {error} > dt⁵*20");
}

#[test]
fn gauss_legendre_4_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &[0.2, 0.1] {
        let sol = FixedStepODESolver::new(GAUSS_LEGENDRE_4, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[0, sol.t.len() - 1]];
        let error = (u_last - u_exact).abs();
        // Gauss-Legendre 2-stage is O(dt⁴)
        assert!(error <= dt.powi(4) * 10.0, "GL4: error {error} > dt⁴*10");
    }
}

// --- Stiff problem tests ---

#[test]
fn backward_euler_stiff_f64() {
    let (prob, u_exact) = stiff_problem();
    let dt = 0.01;
    let sol = FixedStepODESolver::new(BACKWARD_EULER, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[0, sol.t.len() - 1]];
    // Backward Euler is L-stable, should handle stiffness
    let error = (u_last - u_exact).abs();
    assert!(error < 0.1, "BE stiff: error {error} >= 0.1");
}

#[test]
fn radau_ii_5_stiff_f64() {
    let (prob, _u_exact) = stiff_problem();
    let dt = 0.1;
    let sol = FixedStepODESolver::new(RADAU_IIA_5, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[0, sol.t.len() - 1]];
    // Radau IIA is L-stable, should handle stiffness well
    // The exact solution is essentially 0 at t=1 with dt=0.1
    assert!(
        (u_last - 0.0_f64).abs() < 0.05,
        "Radau5 stiff: |u_last| = {} >= 0.05",
        u_last
    );
}

// --- Multi-variable system tests ---

#[test]
fn backward_euler_oscillator_f64() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(BACKWARD_EULER, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.row(i);
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        // Backward Euler is first-order, so error tolerance is looser
        assert!(res <= 0.05, "BE oscillator var {i}: residual {res} > 0.05");
    }
}

#[test]
fn implicit_midpoint_oscillator_f64() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(IMPLICIT_MIDPOINT, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.row(i);
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        // Implicit midpoint is second-order and symplectic, handles oscillation well
        assert!(
            res <= 0.02,
            "Midpoint oscillator var {i}: residual {res} > 0.02"
        );
    }
}

// --- Linear problem (from common) ---

#[test]
fn implicit_midpoint_linear_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(IMPLICIT_MIDPOINT, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.row(i);
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(
            res <= 0.02,
            "Midpoint linear var {i}: residual {res} > 0.02"
        );
    }
}

#[test]
fn crank_nicolson_linear_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(CRANK_NICOLSON, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.row(i);
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.02, "CN linear var {i}: residual {res} > 0.02");
    }
}

#[test]
fn radau_ii_3_linear_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(RADAU_IIA_3, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.row(i);
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.02, "Radau3 linear var {i}: residual {res} > 0.02");
    }
}

#[test]
fn radau_ii_5_linear_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(RADAU_IIA_5, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.row(i);
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.02, "Radau5 linear var {i}: residual {res} > 0.02");
    }
}

#[test]
fn gauss_legendre_4_linear_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(GAUSS_LEGENDRE_4, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.row(i);
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.02, "GL4 linear var {i}: residual {res} > 0.02");
    }
}

// --- Alias tests ---

#[test]
fn beuler_alias() {
    use raznoor::BEULER;
    let (prob, u_exact) = exp_decay_problem();
    let sol = FixedStepODESolver::new(BEULER, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[0, sol.t.len() - 1]];
    assert!((u_last - u_exact).abs() < 0.01);
}

#[test]
fn trapezoidal_alias() {
    use raznoor::TRAPEZOIDAL;
    let (prob, u_exact) = exp_decay_problem();
    let sol = FixedStepODESolver::new(TRAPEZOIDAL, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[0, sol.t.len() - 1]];
    assert!((u_last - u_exact).abs() < 0.0001);
}

#[test]
fn midpoint_imp_alias() {
    use raznoor::MIDPOINT_IMP;
    let (prob, u_exact) = exp_decay_problem();
    let sol = FixedStepODESolver::new(MIDPOINT_IMP, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[0, sol.t.len() - 1]];
    assert!((u_last - u_exact).abs() < 0.0001);
}

// --- IRK with f32 ---

#[test]
fn backward_euler_exp_decay_f32() {
    let prob = ODEProblem::new(
        |_t: f32, u: &Array1<f32>| array![-u[0]],
        array![1.0_f32],
        (0.0_f32, 1.0_f32),
    )
    .unwrap();
    let u_exact = (-1.0_f32).exp();
    let sol = FixedStepODESolver::new(BACKWARD_EULER, 0.01_f32)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[0, sol.t.len() - 1]];
    assert!((u_last - u_exact).abs() < 0.01, "BE f32: error too large");
}
