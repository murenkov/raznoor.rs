#![allow(missing_docs)]

use ndarray::Array1;
use ndarray::array;
use raznoor::{
    BACKWARD_EULER, CRANK_NICOLSON, FixedStepODESolver, GAUSS_LEGENDRE_4, IMPLICIT_MIDPOINT,
    ImplicitRungeKuttaMethod, ODEProblem, ODESolver, RADAU_IIA_3, RADAU_IIA_5,
};
use rstest::rstest;

mod common;
use common::{linear_problem, oscillator_problem, residual};

type Problem = ODEProblem<f64, fn(f64, &Array1<f64>) -> Array1<f64>>;

fn exp_decay_problem() -> (Problem, f64) {
    let f: fn(f64, &Array1<f64>) -> Array1<f64> = |_t, u| array![-u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    let u_exact = (-1.0_f64).exp();
    (prob, u_exact)
}

/// Stiff linear problem: u' = -1000*u, u(0) = 1, exact u(1) = exp(-1000) ≈ 0
fn stiff_problem() -> (Problem, f64) {
    let f: fn(f64, &Array1<f64>) -> Array1<f64> = |_t, u| array![-1000.0 * u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    let u_exact = (-1000.0_f64).exp();
    (prob, u_exact)
}

// --- fixed-step accuracy tests ---

fn be_bound(dt: f64) -> f64 {
    dt * 0.6
}
fn midpoint_bound(dt: f64) -> f64 {
    dt * dt * 2.0
}
fn cn_bound(dt: f64) -> f64 {
    dt * dt * 2.0
}
fn radau3_bound(dt: f64) -> f64 {
    dt.powi(3) * 5.0
}
fn radau5_bound(dt: f64) -> f64 {
    dt.powi(5) * 20.0
}
fn gl4_bound(dt: f64) -> f64 {
    dt.powi(4) * 10.0
}

#[rstest]
#[case::be(BACKWARD_EULER, &[0.1, 0.05, 0.01] as &[f64], be_bound)]
#[case::midpoint(IMPLICIT_MIDPOINT, &[0.1, 0.05] as &[f64], midpoint_bound)]
#[case::cn(CRANK_NICOLSON, &[0.1, 0.05] as &[f64], cn_bound)]
#[case::radau3(RADAU_IIA_3, &[0.1, 0.05] as &[f64], radau3_bound)]
#[case::radau5(RADAU_IIA_5, &[0.2] as &[f64], radau5_bound)]
#[case::gl4(GAUSS_LEGENDRE_4, &[0.2, 0.1] as &[f64], gl4_bound)]
fn irk_exp_decay_convergence(
    #[case] method: ImplicitRungeKuttaMethod<f64>,
    #[case] dts: &[f64],
    #[case] error_bound: fn(f64) -> f64,
) {
    let (prob, u_exact) = exp_decay_problem();
    for &dt in dts {
        let sol = FixedStepODESolver::new(method, dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[sol.t.len() - 1, 0]];
        let error = (u_last - u_exact).abs();
        assert!(
            error <= error_bound(dt),
            "error {error} > {}",
            error_bound(dt)
        );
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
    let u_last = sol.u[[sol.t.len() - 1, 0]];
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
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    // Radau IIA is L-stable, should handle stiffness well
    // The exact solution is essentially 0 at t=1 with dt=0.1
    assert!(
        (u_last - 0.0_f64).abs() < 0.05,
        "Radau5 stiff: |u_last| = {u_last} >= 0.05"
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
        let computed = sol.u.column(i).to_owned();
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
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        // Implicit midpoint is second-order and symplectic, handles oscillation well
        assert!(
            res <= 0.02,
            "Midpoint oscillator var {i}: residual {res} > 0.02"
        );
    }
}

// --- Linear problem (from common) ---

#[rstest]
#[case::midpoint(IMPLICIT_MIDPOINT)]
#[case::cn(CRANK_NICOLSON)]
#[case::radau3(RADAU_IIA_3)]
#[case::radau5(RADAU_IIA_5)]
#[case::gl4(GAUSS_LEGENDRE_4)]
fn irk_linear_f64(#[case] method: ImplicitRungeKuttaMethod<f64>) {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(method, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.02, "linear var {i}: residual {res} > 0.02");
    }
}

#[rstest]
#[case::be(BACKWARD_EULER, 0.01)]
#[case::cn(CRANK_NICOLSON, 0.0001)]
#[case::midpoint(IMPLICIT_MIDPOINT, 0.0001)]
fn irk_exp_decay(#[case] method: ImplicitRungeKuttaMethod<f64>, #[case] tol: f64) {
    let (prob, u_exact) = exp_decay_problem();
    let sol = FixedStepODESolver::new(method, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!((u_last - u_exact).abs() < tol);
}

// --- Newton convergence failure / Picard fallback ---

#[test]
fn backward_euler_newton_fallback() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0] * u[0] * u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    // Aggressive step size forces simplified Newton to stall (frozen Jacobian
    // oscillates around the fixed point, never reaching 1e-12 in 15 iters).
    let sol = FixedStepODESolver::new(BACKWARD_EULER, 1.0)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!(
        u_last.is_finite(),
        "BE Newton fallback: u_last is not finite"
    );
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
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!((u_last - u_exact).abs() < 0.01, "BE f32: error too large");
}

#[rstest]
#[case::midpoint(IMPLICIT_MIDPOINT)]
#[case::cn(CRANK_NICOLSON)]
#[case::radau3(RADAU_IIA_3)]
#[case::radau5(RADAU_IIA_5)]
#[case::gl4(GAUSS_LEGENDRE_4)]
fn irk_linear_f32(#[case] method: ImplicitRungeKuttaMethod<f64>) {
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
