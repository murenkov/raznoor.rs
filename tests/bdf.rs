#![allow(missing_docs)]

use ndarray::Array1;
use ndarray::array;
use raznoor::{
    BDF1, BDF2, BDF3, BDF4, BDF5, BDF6, BDFMethod, FixedStepODESolver, ODEProblem, ODESolver,
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

/// Stiff linear problem: u' = -1000*u, u(0) = 1, exact u(1) ≈ 0
fn stiff_problem() -> (Problem, f64) {
    let f: fn(f64, &Array1<f64>) -> Array1<f64> = |_t, u| array![-1000.0 * u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    let u_exact = (-1000.0_f64).exp();
    (prob, u_exact)
}

fn exp_decay_sin_problem() -> (Problem, f64) {
    // u' = -u + sin(t), u(0) = 0
    // exact: u(t) = (sin(t) - cos(t) + e^{-t}) / 2
    let f: fn(f64, &Array1<f64>) -> Array1<f64> = |t, u| array![-u[0] + t.sin()];
    let prob = ODEProblem::new(f, array![0.0], (0.0, 2.0)).unwrap();
    let u_exact = (2.0_f64.sin() - (2.0_f64).cos()).midpoint((-2.0_f64).exp());
    (prob, u_exact)
}

// --- fixed-step accuracy tests ---

#[rstest]
#[case::bdf1(BDF1, vec![0.1, 0.05, 0.01], 1, 0.6)]
#[case::bdf2(BDF2, vec![0.1, 0.05], 2, 2.0)]
#[case::bdf3(BDF3, vec![0.1, 0.05], 3, 5.0)]
fn exp_decay_convergence(
    #[case] solver: BDFMethod,
    #[case] dts: Vec<f64>,
    #[case] order: i32,
    #[case] tol_factor: f64,
) {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &dts {
        let sol = FixedStepODESolver::new(solver, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[sol.t.len() - 1, 0]];
        let error = (u_last - u_exact).abs();
        assert!(
            error <= dt.powi(order) * tol_factor,
            "BDF{}: error {error} > dt^{order}*{tol_factor}",
            solver.order
        );
    }
}

#[rstest]
#[case::bdf4(BDF4, 0.1, 5e-3, 0.05, 3.0)]
#[case::bdf5(BDF5, 0.2, 1e-2, 0.1, 3.0)]
#[case::bdf6(BDF6, 0.2, 1e-2, 0.1, 3.0)]
fn exp_decay_convergence_high_order(
    #[case] solver: BDFMethod,
    #[case] dt1: f64,
    #[case] threshold: f64,
    #[case] dt2: f64,
    #[case] min_ratio: f64,
) {
    let (prob, u_exact) = exp_decay_problem();
    let sol = FixedStepODESolver::new(solver, dt1)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    let error = (u_last - u_exact).abs();
    assert!(
        error <= threshold,
        "BDF{}: error {error} > {threshold}",
        solver.order
    );
    let sol2 = FixedStepODESolver::new(solver, dt2)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u2 = sol2.u[[sol2.t.len() - 1, 0]];
    let error2 = (u2 - u_exact).abs();
    let ratio = error / error2;
    assert!(
        ratio > min_ratio,
        "BDF{}: error ratio {ratio} too small",
        solver.order
    );
}

// --- Non-trivial RHS tests ---

#[rstest]
#[case::bdf2(BDF2, 0.1, 0.05, 2, 3.0)]
#[case::bdf3(BDF3, 0.2, 0.1, 3, 10.0)]
fn exp_decay_sin_convergence(
    #[case] solver: BDFMethod,
    #[case] dt1: f64,
    #[case] dt2: f64,
    #[case] order: i32,
    #[case] factor: f64,
) {
    let (prob, u_exact) = exp_decay_sin_problem();
    for dt in &[dt1, dt2] {
        let sol = FixedStepODESolver::new(solver, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[sol.t.len() - 1, 0]];
        let error = (u_last - u_exact).abs();
        assert!(
            error <= dt.powi(order) * factor,
            "BDF{} sin: error {error} > dt^{order}*{factor}",
            solver.order
        );
    }
}

// --- Stiff problem tests ---

#[rstest]
#[case::bdf1(BDF1, 0.001, 0.1)]
#[case::bdf2(BDF2, 0.01, 0.05)]
#[case::bdf3(BDF3, 0.01, 0.05)]
#[case::bdf4(BDF4, 0.01, 0.05)]
fn stiff_convergence(#[case] solver: BDFMethod, #[case] dt: f64, #[case] threshold: f64) {
    let (prob, _u_exact) = stiff_problem();
    let sol = FixedStepODESolver::new(solver, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!(
        (u_last - 0.0_f64).abs() < threshold,
        "BDF{} stiff: |u_last| = {u_last} >= {threshold}",
        solver.order
    );
}

// --- Multi-variable system tests ---

#[rstest]
#[case::bdf1(BDF1, 0.05)]
#[case::bdf2(BDF2, 0.02)]
fn oscillator_convergence(#[case] solver: BDFMethod, #[case] threshold: f64) {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(solver, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(
            res <= threshold,
            "BDF{} oscillator var {i}: residual {res} > {threshold}",
            solver.order
        );
    }
}

// --- Linear problem (from common) ---

#[rstest]
#[case::bdf2(BDF2)]
#[case::bdf3(BDF3)]
fn linear_f64_convergence(#[case] solver: BDFMethod) {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(solver, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(
            res <= 0.02,
            "BDF{} linear var {i}: residual {res} > 0.02",
            solver.order
        );
    }
}

// --- f32 precision tests ---

#[test]
fn bdf1_exp_decay_f32() {
    let prob = ODEProblem::new(
        |_t: f32, u: &Array1<f32>| array![-u[0]],
        array![1.0_f32],
        (0.0_f32, 1.0_f32),
    )
    .unwrap();
    let u_exact = (-1.0_f32).exp();
    let sol = FixedStepODESolver::new(BDF1, 0.01_f32)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!((u_last - u_exact).abs() < 0.01, "BDF1 f32: error too large");
}

#[rstest]
#[case::bdf2(BDF2)]
#[case::bdf3(BDF3)]
#[case::bdf4(BDF4)]
#[case::bdf5(BDF5)]
#[case::bdf6(BDF6)]
fn linear_f32_convergence(#[case] solver: BDFMethod) {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(solver, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
}

// --- Newton convergence failure / Picard fallback ---

#[test]
fn bdf1_newton_fallback() {
    let f: fn(f64, &Array1<f64>) -> Array1<f64> = |_t, u| array![-u[0] * u[0] * u[0]];
    let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
    // Aggressive step size forces simplified Newton to stall, triggering the
    // Picard fixed-point fallback in the BDF step function.
    let sol = FixedStepODESolver::new(BDF1, 1.0)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!(
        u_last.is_finite(),
        "BDF1 Newton fallback: u_last is not finite"
    );
}

// --- BDF1 == Backward Euler consistency ---

#[test]
fn bdf1_matches_backward_euler() {
    use raznoor::BACKWARD_EULER;

    let prob = ODEProblem::new(
        |_t: f64, u: &Array1<f64>| array![-u[0]],
        array![1.0],
        (0.0, 1.0),
    )
    .unwrap();

    let sol_be = FixedStepODESolver::new(BACKWARD_EULER, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let sol_bdf1 = FixedStepODESolver::new(BDF1, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();

    let u_be = sol_be.u[[sol_be.t.len() - 1, 0]];
    let u_bdf1 = sol_bdf1.u[[sol_bdf1.t.len() - 1, 0]];
    assert!(
        (u_be - u_bdf1).abs() < 1e-10,
        "BDF1 and Backward Euler differ by {}",
        (u_be - u_bdf1).abs()
    );
}
