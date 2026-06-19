#![allow(missing_docs)]

use ndarray::Array1;
use ndarray::array;
use raznoor::{BACKWARD_EULER, BVPProblem, BVPSolver, RUNGE_KUTTA_4, ShootingSolver, SolverError};

/// 2nd-order linear oscillator BVP: u'' = -u,  u(0) = 0,  u(π/2) = 1
#[test]
fn linear_oscillator_bvp_f64() {
    let f = |_t: f64, u: &Array1<f64>| array![u[1], -u[0]];
    let bc = |ya: &Array1<f64>, yb: &Array1<f64>| array![ya[0], yb[0] - 1.0];

    let prob = BVPProblem::new(f, bc, array![0.0, 1.0], (0.0, std::f64::consts::FRAC_PI_2));
    let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.01, 50, 1e-8).unwrap();
    let sol = solver.solve(&prob).unwrap();

    // u(π/2) should be 1.0
    let u_end = sol.u[[sol.t.len() - 1, 0]];
    assert!((u_end - 1.0).abs() < 1e-4, "u_end = {u_end}");

    // Check BC residual
    let left = sol.u.row(0).to_owned();
    let right = sol.u.row(sol.u.nrows() - 1).to_owned();
    let r = (prob.bc)(&left, &right);
    let max_res = r.iter().fold(0.0, |m, &x| f64::max(m, x.abs()));
    assert!(max_res < 1e-6, "BC residual = {max_res}");
}

/// Same BVP but with a poor initial guess to test robustness.
#[test]
fn linear_oscillator_bvp_poor_guess() {
    let f = |_t: f64, u: &Array1<f64>| array![u[1], -u[0]];
    let bc = |ya: &Array1<f64>, yb: &Array1<f64>| array![ya[0], yb[0] - 1.0];

    let prob = BVPProblem::new(
        f,
        bc,
        array![10.0, -5.0],
        (0.0, std::f64::consts::FRAC_PI_2),
    );
    let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.01, 200, 1e-8).unwrap();
    let sol = solver.solve(&prob).unwrap();

    let u_end = sol.u[[sol.t.len() - 1, 0]];
    assert!((u_end - 1.0).abs() < 1e-4, "u_end = {u_end}");
}

/// Scalar BVP with a mixed boundary condition:
///   u' = -u,  u(0) - u(1) = 1 - e^{-1}
#[test]
fn scalar_mixed_bc() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let bc = |ya: &Array1<f64>, yb: &Array1<f64>| array![ya[0] - yb[0] - (1.0 - (-1.0_f64).exp())];

    let prob = BVPProblem::new(f, bc, array![2.0], (0.0, 1.0));
    let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.01, 50, 1e-8).unwrap();
    let sol = solver.solve(&prob).unwrap();

    let u_last = sol.u[[sol.t.len() - 1, 0]];
    let expected = (-1.0_f64).exp();
    assert!(
        (u_last - expected).abs() < 1e-4,
        "u_last = {u_last}, expected = {expected}"
    );
}

/// Nonlinear 2nd-order BVP: u'' = u^3,  u(0) = 0,  u(1) = 1
#[test]
fn nonlinear_bvp() {
    let f = |_t: f64, u: &Array1<f64>| array![u[1], u[0].powi(3)];
    let bc = |ya: &Array1<f64>, yb: &Array1<f64>| array![ya[0], yb[0] - 1.0];

    let prob = BVPProblem::new(f, bc, array![0.0, 0.5], (0.0, 1.0));
    let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.01, 100, 1e-6).unwrap();
    let sol = solver.solve(&prob).unwrap();

    // Check BC residual
    let left = sol.u.row(0).to_owned();
    let right = sol.u.row(sol.u.nrows() - 1).to_owned();
    let r = (prob.bc)(&left, &right);
    let max_res = r.iter().fold(0.0, |m, &x| f64::max(m, x.abs()));
    assert!(max_res < 1e-4, "BC residual = {max_res}");
}

/// Verify that a poor guess with very few iterations returns an error.
#[test]
fn convergence_failure() {
    let f = |_t: f64, u: &Array1<f64>| array![u[1], -u[0]];
    let bc = |ya: &Array1<f64>, yb: &Array1<f64>| array![ya[0], yb[0] - 1.0];

    let prob = BVPProblem::new(
        f,
        bc,
        array![100.0, 100.0],
        (0.0, std::f64::consts::FRAC_PI_2),
    );
    // Only 1 iteration with an extremely tight tolerance.
    let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.1, 1, 1e-20).unwrap();
    let result = solver.solve(&prob);
    assert!(matches!(result, Err(SolverError::BvpNotConverged)));
}

/// f32 precision test of the linear oscillator BVP.
#[test]
fn linear_oscillator_bvp_f32() {
    let f = |_t: f32, u: &Array1<f32>| array![u[1], -u[0]];
    let bc = |ya: &Array1<f32>, yb: &Array1<f32>| array![ya[0], yb[0] - 1.0];

    let prob = BVPProblem::new(
        f,
        bc,
        array![0.0_f32, 1.0],
        (0.0, std::f32::consts::FRAC_PI_2),
    );
    let solver = ShootingSolver::new(RUNGE_KUTTA_4, 0.01, 50, 1e-4).unwrap();
    let sol = solver.solve(&prob).unwrap();

    let u_end = sol.u[[sol.t.len() - 1, 0]];
    assert!((u_end - 1.0).abs() < 1e-2, "u_end = {u_end}");
}

/// BVP using an implicit method (Backward Euler) for the inner IVP.
#[test]
fn linear_oscillator_implicit_bvp() {
    let f = |_t: f64, u: &Array1<f64>| array![u[1], -u[0]];
    let bc = |ya: &Array1<f64>, yb: &Array1<f64>| array![ya[0], yb[0] - 1.0];

    let prob = BVPProblem::new(f, bc, array![0.0, 1.0], (0.0, std::f64::consts::FRAC_PI_2));
    let solver = ShootingSolver::new(BACKWARD_EULER, 0.01, 50, 1e-8).unwrap();
    let sol = solver.solve(&prob).unwrap();

    let u_end = sol.u[[sol.t.len() - 1, 0]];
    assert!((u_end - 1.0).abs() < 0.05, "u_end = {u_end}");
}
