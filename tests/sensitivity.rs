//! Integration tests for forward sensitivity analysis.

use ndarray::{Array1, array};
use raznoor::{
    FixedStepODESolver, ForwardSensitivityProblem, ForwardSensitivitySolver, ODESolution,
    RUNGE_KUTTA_4, SolverError,
};

/// Exponential growth ODE: u' = p * u
/// Exact solution: u(t) = u0 * exp(p * t)
/// Exact sensitivity: ∂u/∂p = u0 * t * exp(p * t)
fn exponential_growth_exact(t: f64, u0: f64, p: f64) -> (f64, f64) {
    let u = u0 * (p * t).exp();
    let sens = u0 * t * (p * t).exp();
    (u, sens)
}

#[test]
fn forward_sensitivity_exponential_f64() {
    let u0 = 1.0_f64;
    let p_val = 0.5_f64;
    let p = array![p_val];
    let t_final = 2.0_f64;

    let f = |_t: f64, u: &Array1<f64>, p: &Array1<f64>| array![p[0] * u[0]];

    let prob = ForwardSensitivityProblem::new(f, array![u0], p, (0.0, t_final)).unwrap();
    let inner = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.001).unwrap();
    let solver = ForwardSensitivitySolver::new(inner);
    let result = solver.solve(&prob).unwrap();

    let states = result.states();
    let sensitivities = result.sensitivities();

    let n_times = states.nrows();
    let last_idx = n_times - 1;

    let (u_exact, sens_exact) = exponential_growth_exact(t_final, u0, p_val);
    let u_computed = states[[last_idx, 0]];
    let sens_computed = sensitivities[[last_idx, 0, 0]];

    assert!(
        (u_computed - u_exact).abs() < 0.01,
        "state: computed={u_computed}, exact={u_exact}",
    );
    assert!(
        (sens_computed - sens_exact).abs() < 0.05,
        "sensitivity: computed={sens_computed}, exact={sens_exact}",
    );
}

#[test]
fn forward_sensitivity_empty_params_returns_error() {
    let f = |_t: f64, u: &Array1<f64>, _p: &Array1<f64>| array![-u[0]];

    let prob = ForwardSensitivityProblem::new(f, array![1.0], Array1::from_vec(vec![]), (0.0, 1.0))
        .unwrap();
    let inner = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
    let solver = ForwardSensitivitySolver::new(inner);
    let result = solver.solve(&prob);

    assert!(
        matches!(result, Err(SolverError::InvalidParameters)),
        "expected InvalidParameters, got {result:?}",
    );
}

#[test]
fn forward_sensitivity_wrong_du0_dp_shape_returns_error() {
    let f = |_t: f64, u: &Array1<f64>, p: &Array1<f64>| array![p[0] * u[0]];

    let prob = ForwardSensitivityProblem::new(f, array![1.0], array![0.5], (0.0, 1.0))
        .unwrap()
        .with_du0_dp(array![[1.0, 2.0]]);
    let inner = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
    let solver = ForwardSensitivitySolver::new(inner);
    let result = solver.solve(&prob);

    assert!(
        matches!(result, Err(SolverError::InvalidParameters)),
        "expected InvalidParameters, got {result:?}",
    );
}

#[test]
fn forward_sensitivity_two_params() {
    let u0 = 1.0_f64;
    let p0 = 0.3_f64;
    let p1_val = 0.1_f64;
    let params = array![p0, p1_val];
    let t_final = 1.0_f64;

    // u' = p0 * u + p1
    // Exact: u(t) = (u0 + p1/p0) * exp(p0*t) - p1/p0
    // ∂u/∂p0 = (u0 + p1/p0) * t * exp(p0*t) + p1/p0² * (1 - exp(p0*t))
    // ∂u/∂p1 = (1/p0) * exp(p0*t) - 1/p0
    let exp_p0t = (p0 * t_final).exp();
    let u_exact = (u0 + p1_val / p0).mul_add(exp_p0t, -(p1_val / p0));
    let sens_p0 =
        (p1_val / (p0 * p0)).mul_add(1.0_f64 - exp_p0t, (u0 + p1_val / p0) * t_final * exp_p0t);
    let sens_p1 = (1.0_f64 / p0).mul_add(exp_p0t, -(1.0_f64 / p0));

    let f = |_t: f64, u: &Array1<f64>, p: &Array1<f64>| array![p[0].mul_add(u[0], p[1])];

    let prob = ForwardSensitivityProblem::new(f, array![u0], params, (0.0, t_final)).unwrap();
    let inner = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.0005).unwrap();
    let solver = ForwardSensitivitySolver::new(inner);
    let result = solver.solve(&prob).unwrap();

    let states = result.states();
    let sensitivities = result.sensitivities();
    let last_idx = states.nrows() - 1;

    let u_computed = states[[last_idx, 0]];
    let sens_p0_computed = sensitivities[[last_idx, 0, 0]];
    let sens_p1_computed = sensitivities[[last_idx, 0, 1]];

    assert!(
        (u_computed - u_exact).abs() < 0.01,
        "state: computed={u_computed}, exact={u_exact}",
    );
    assert!(
        (sens_p0_computed - sens_p0).abs() < 0.5,
        "sens_p0: computed={sens_p0_computed}, exact={sens_p0}",
    );
    assert!(
        (sens_p1_computed - sens_p1).abs() < 0.5,
        "sens_p1: computed={sens_p1_computed}, exact={sens_p1}",
    );
}

#[test]
fn forward_sensitivity_with_custom_du0_dp() {
    let u0 = 1.0_f64;
    let p_val = 0.5_f64;
    let t_final = 1.0_f64;

    let f = |_t: f64, u: &Array1<f64>, p: &Array1<f64>| array![p[0] * u[0]];

    // Non-zero initial sensitivity S(0) = 0.5
    // dS/dt = p*S + u, S(0) = 0.5
    // Exact: S(t) = 0.5 * exp(p*t) + u0 * t * exp(p*t)
    let du0_dp = array![[0.5]];

    let prob = ForwardSensitivityProblem::new(f, array![u0], array![p_val], (0.0, t_final))
        .unwrap()
        .with_du0_dp(du0_dp);
    let inner = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.001).unwrap();
    let solver = ForwardSensitivitySolver::new(inner);
    let result = solver.solve(&prob).unwrap();

    let sensitivities = result.sensitivities();
    let last_idx = sensitivities.shape()[0] - 1;

    let exp_pt = (p_val * t_final).exp();
    let sens_exact = 0.5_f64.mul_add(exp_pt, u0 * t_final * exp_pt);
    let sens_computed = sensitivities[[last_idx, 0, 0]];

    assert!(
        (sens_computed - sens_exact).abs() < 0.05,
        "sensitivity with custom du0_dp: computed={sens_computed}, exact={sens_exact}",
    );
}

#[test]
fn forward_sensitivity_two_state_vars() {
    // Harmonic oscillator: u' = [u1, -p * u0]
    // This is u'' + p*u = 0 with u0 = [u(0), u'(0)]
    let p_val = 2.0_f64;
    let t_final = 1.0_f64;

    let f = |_t: f64, u: &Array1<f64>, p: &Array1<f64>| array![u[1], -p[0] * u[0]];

    let u0 = array![1.0, 0.0];
    let prob = ForwardSensitivityProblem::new(f, u0, array![p_val], (0.0, t_final)).unwrap();
    let inner = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.001).unwrap();
    let solver = ForwardSensitivitySolver::new(inner);
    let result = solver.solve(&prob).unwrap();

    let sensitivities = result.sensitivities();
    let last_idx = sensitivities.shape()[0] - 1;

    // u0_exact = cos(sqrt(p)*t), u1_exact = -sqrt(p)*sin(sqrt(p)*t)
    // ∂u0/∂p = -t/(2*sqrt(p)) * sin(sqrt(p)*t)
    // ∂u1/∂p = -1/(2*sqrt(p)) * sin(sqrt(p)*t) - t/2 * cos(sqrt(p)*t)
    let sqrt_p = p_val.sqrt();
    let sin_sqrt_pt = (sqrt_p * t_final).sin();
    let cos_sqrt_pt = (sqrt_p * t_final).cos();
    let sens_u0_exact = -t_final / (2.0_f64 * sqrt_p) * sin_sqrt_pt;
    let sens_u1_exact =
        (-1.0_f64 / (2.0_f64 * sqrt_p)).mul_add(sin_sqrt_pt, -(t_final / 2.0_f64) * cos_sqrt_pt);

    let sens_u0_computed = sensitivities[[last_idx, 0, 0]];
    let sens_u1_computed = sensitivities[[last_idx, 1, 0]];

    assert!(
        (sens_u0_computed - sens_u0_exact).abs() < 0.01,
        "sens_u0: computed={sens_u0_computed}, exact={sens_u0_exact}",
    );
    assert!(
        (sens_u1_computed - sens_u1_exact).abs() < 0.05,
        "sens_u1: computed={sens_u1_computed}, exact={sens_u1_exact}",
    );
}

#[test]
fn forward_sensitivity_solution_accessors() {
    let f = |_t: f64, u: &Array1<f64>, p: &Array1<f64>| array![p[0] * u[0]];
    let prob = ForwardSensitivityProblem::new(f, array![1.0], array![0.5], (0.0, 0.5)).unwrap();
    let inner = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1).unwrap();
    let solver = ForwardSensitivitySolver::new(inner);
    let result = solver.solve(&prob).unwrap();

    let states = result.states();
    assert_eq!(states.ndim(), 2);
    assert!(states.ncols() == 1);

    let sensitivities = result.sensitivities();
    assert_eq!(sensitivities.ndim(), 3);
    assert_eq!(sensitivities.shape(), &[states.nrows(), 1, 1]);

    let sens_at_step = result.sensitivity_at(0);
    assert_eq!(sens_at_step.shape(), &[1, 1]);

    assert_eq!(result.n_vars(), 1);
    assert_eq!(result.n_params(), 1);
    // Test that inner() returns a reference
    let _ = result.inner();
    // Test that into_inner() consumes the result
    let inner_owned: ODESolution<f64> = result.into_inner();
    assert!(!inner_owned.t.is_empty());
}
