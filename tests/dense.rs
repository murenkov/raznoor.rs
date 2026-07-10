#![allow(
    missing_docs,
    clippy::cast_possible_truncation,
    clippy::cast_lossless,
    clippy::suboptimal_flops
)]

use ndarray::{Array1, array};
use raznoor::{
    AdaptiveODESolver, BACKWARD_EULER, BDF2, BDF4, BDFMethod, CRANK_NICOLSON, DORMAND_PRINCE45,
    FixedStepODESolver, ImplicitRungeKuttaMethod, ODEProblem, ODESolver, RUNGE_KUTTA_4,
    SolverError,
};
use rstest::rstest;

type Problem = ODEProblem<f64, fn(f64, &Array1<f64>) -> Array1<f64>>;

fn linear_rhs() -> fn(f64, &Array1<f64>) -> Array1<f64> {
    |t: f64, u: &Array1<f64>| array![2.0f64.mul_add(t, u[0])]
}

fn linear_exact(t: f64) -> f64 {
    5.0 * (t - 1.0).exp() - 2.0 * t - 2.0
}

fn oscillator_rhs() -> fn(f64, &Array1<f64>) -> Array1<f64> {
    |_t: f64, u: &Array1<f64>| array![u[1], -u[0]]
}

fn linear_f64_problem() -> Problem {
    ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap()
}

fn oscillator_f64_problem() -> Problem {
    ODEProblem::new(
        oscillator_rhs(),
        array![0.0, 1.0],
        (0.0, std::f64::consts::PI),
    )
    .unwrap()
}

fn check_midpoints(sol: &raznoor::ODESolution<f64>, start: usize, n: usize, tol: f64, label: &str) {
    let max_i = (start + n).min(sol.t.len().saturating_sub(1));
    for i in start..max_i {
        let t_mid = f64::midpoint(sol.t[i], sol.t[i + 1]);
        let diff = (sol.interpolate(t_mid).unwrap()[0] - linear_exact(t_mid)).abs();
        assert!(
            diff < tol,
            "{label} midpoint {t_mid}: error = {diff} >= {tol}",
        );
    }
}

fn check_osc_off_grid(sol: &raznoor::ODESolution<f64>, tol: f64, label: &str) {
    for &t in &[0.05, 0.55, 1.05, 1.55, 2.05, 2.55] {
        let u = sol.interpolate(t).unwrap();
        assert!((u[0] - t.sin()).abs() < tol, "{label} osc u[0] at t={t}");
        assert!((u[1] - t.cos()).abs() < tol, "{label} osc u[1] at t={t}");
    }
}

fn check_exact_at_grid(sol: &raznoor::ODESolution<f64>) {
    for i in 0..sol.t.len() {
        let val = sol.interpolate(sol.t[i]).unwrap();
        assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14, "diff at t[{i}]");
    }
}

fn check_f32_midpoints(sol: &raznoor::ODESolution<f32>, start: usize, n: usize, tol: f32) {
    let max_i = (start + n).min(sol.t.len().saturating_sub(1));
    for i in start..max_i {
        let t_mid = f32::midpoint(sol.t[i], sol.t[i + 1]);
        let val = sol.interpolate(t_mid).unwrap();
        let diff = (val[0] - linear_exact(f64::from(t_mid)) as f32).abs();
        assert!(diff < tol, "f32 midpoint {t_mid}: error = {diff}");
    }
}

// ---------------------------------------------------------------------------
// Midpoint tests
// ---------------------------------------------------------------------------

#[test]
fn erk4_linear_midpoint() {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    check_midpoints(&sol, 0, 5, 2e-4, "RK4");
}

#[rstest]
#[case::be(BACKWARD_EULER, 0.1, 0, 3, 5e-2, "BE")]
#[case::cn(CRANK_NICOLSON, 0.2, 0, 3, 1e-2, "CN")]
fn irk_linear_midpoint(
    #[case] method: ImplicitRungeKuttaMethod<f64>,
    #[case] dt: f64,
    #[case] start: usize,
    #[case] n: usize,
    #[case] tol: f64,
    #[case] label: &str,
) {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(method, dt)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    check_midpoints(&sol, start, n, tol, label);
}

#[rstest]
#[case::bdf2(BDF2, 0.1, 1, 3, 4e-2, "BDF2")]
#[case::bdf4(BDF4, 0.2, 4, 3, 3e-1, "BDF4")]
fn bdf_linear_midpoint(
    #[case] method: BDFMethod,
    #[case] dt: f64,
    #[case] start: usize,
    #[case] n: usize,
    #[case] tol: f64,
    #[case] label: &str,
) {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(method, dt)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    check_midpoints(&sol, start, n, tol, label);
}

// ---------------------------------------------------------------------------
// ERK adaptive (DOPRI54)
// ---------------------------------------------------------------------------

#[test]
fn dopri54_linear_midpoint() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 0.5)).unwrap();
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.05, 1e-6, 1e-6)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    for i in 0..sol.t.len() - 1 {
        let t_mid = f64::midpoint(sol.t[i], sol.t[i + 1]);
        let diff = (sol.interpolate(t_mid).unwrap()[0] - linear_exact(t_mid)).abs();
        assert!(diff < 2e-5, "DOPRI54 midpoint {t_mid}: error = {diff}");
    }
}

// ---------------------------------------------------------------------------
// Oscillator: off-grid points
// ---------------------------------------------------------------------------

macro_rules! osc_off_grid_test {
    ($name:ident, $method:expr, $dt:expr, $tol:expr, $label:expr) => {
        #[test]
        fn $name() {
            let prob = oscillator_f64_problem();
            let sol = FixedStepODESolver::new($method, $dt)
                .unwrap()
                .with_store_derivatives(true)
                .solve(&prob)
                .unwrap();
            check_osc_off_grid(&sol, $tol, $label);
        }
    };
}

osc_off_grid_test!(erk4_oscillator_off_grid, RUNGE_KUTTA_4, 0.1, 2e-4, "RK4");
osc_off_grid_test!(cn_oscillator_off_grid, CRANK_NICOLSON, 0.1, 2e-3, "CN");
osc_off_grid_test!(bdf2_oscillator_off_grid, BDF2, 0.05, 5e-3, "BDF2");

// ---------------------------------------------------------------------------
// No derivative data
// ---------------------------------------------------------------------------

#[test]
fn no_derivative_returns_err() {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(false)
        .solve(&prob)
        .unwrap();
    assert!(sol.du.is_none());
    assert!(matches!(
        sol.interpolate(0.5),
        Err(SolverError::MissingDerivativeData)
    ));
}

// ---------------------------------------------------------------------------
// Out-of-range panics
// ---------------------------------------------------------------------------

#[test]
fn interpolate_before_range() {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    assert!(matches!(
        sol.interpolate(-1.0),
        Err(SolverError::InterpolationOutOfRange)
    ));
}

#[test]
fn interpolate_after_range() {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    assert!(matches!(
        sol.interpolate(3.0),
        Err(SolverError::InterpolationOutOfRange)
    ));
}

// ---------------------------------------------------------------------------
// Single step (2 time points)
// ---------------------------------------------------------------------------

#[test]
fn single_step_interpolation() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 0.1)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    assert_eq!(sol.t.len(), 2);
    let val = sol.interpolate(0.05).unwrap();
    assert!(
        (val[0] - linear_exact(0.05)).abs() < 2e-4,
        "single-step interpolation error = {}",
        (val[0] - linear_exact(0.05)).abs()
    );
}

// ---------------------------------------------------------------------------
// f32 precision
// ---------------------------------------------------------------------------

macro_rules! linear_f32_test {
    ($name:ident, $method:expr, $dt:expr, $start:expr, $n:expr, $tol:expr) => {
        #[test]
        fn $name() {
            let rhs: fn(f32, &Array1<f32>) -> Array1<f32> = |t, u| array![2.0_f32.mul_add(t, u[0])];
            let prob =
                ODEProblem::new(rhs, array![linear_exact(0.0) as f32], (0.0_f32, 2.0_f32)).unwrap();
            let sol = FixedStepODESolver::new($method, $dt)
                .unwrap()
                .with_store_derivatives(true)
                .solve(&prob)
                .unwrap();
            check_f32_midpoints(&sol, $start, $n, $tol);
        }
    };
}

linear_f32_test!(erk4_linear_f32, RUNGE_KUTTA_4, 0.1_f32, 0, 5, 5e-3_f32);
linear_f32_test!(cn_linear_f32, CRANK_NICOLSON, 0.2_f32, 0, 3, 1e-2_f32);
linear_f32_test!(bdf2_linear_f32, BDF2, 0.1_f32, 1, 3, 4e-2_f32);

// ---------------------------------------------------------------------------
// Zero-length interval
// ---------------------------------------------------------------------------

#[test]
fn zero_length_interval() {
    use ndarray::Array2;
    use raznoor::ODESolution;

    let t: Box<[f64]> = Box::new([0.0, 0.0]);
    let u = Array2::from_shape_vec((2, 1), vec![1.0, 1.0]).unwrap();
    let du = Array2::from_shape_vec((2, 1), vec![0.0, 0.0]).unwrap();
    let sol = ODESolution::new(t, u).with_du(du);
    let val = sol.interpolate(0.0).unwrap();
    assert!((val[0] - 1.0).abs() < 1e-15);
}

// ---------------------------------------------------------------------------
// Exact at grid points — all solver families
// ---------------------------------------------------------------------------

macro_rules! exact_at_grid_fixed_test {
    ($name:ident, $method:expr, $dt:expr) => {
        #[test]
        fn $name() {
            let prob = linear_f64_problem();
            let sol = FixedStepODESolver::new($method, $dt)
                .unwrap()
                .with_store_derivatives(true)
                .solve(&prob)
                .unwrap();
            check_exact_at_grid(&sol);
        }
    };
}

exact_at_grid_fixed_test!(exact_at_grid_points_erk_fixed, RUNGE_KUTTA_4, 0.1);
exact_at_grid_fixed_test!(exact_at_grid_points_irk_fixed, CRANK_NICOLSON, 0.1);
exact_at_grid_fixed_test!(exact_at_grid_points_bdf_fixed, BDF2, 0.1);

#[test]
fn exact_at_grid_points_erk_adaptive() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 1.0)).unwrap();
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.1, 1e-6, 1e-6)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    check_exact_at_grid(&sol);
}

// ---------------------------------------------------------------------------
// interpolate_many
// ---------------------------------------------------------------------------

#[test]
fn interpolate_many_consistency() {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    let ts: Vec<f64> = (0..21).map(|i| 0.1 * f64::from(i)).collect();
    let result = sol.interpolate_many(&ts).unwrap();
    assert_eq!(result.shape(), &[21, 1]);
    for (i, &t) in ts.iter().enumerate() {
        let single = sol.interpolate(t).unwrap();
        assert!((result[[i, 0]] - single[0]).abs() < 1e-15);
    }
}

#[test]
fn interpolate_many_empty() {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    assert_eq!(sol.interpolate_many(&[]).unwrap().shape(), &[0, 1]);
}

#[test]
fn interpolate_many_no_du_returns_err() {
    let prob = linear_f64_problem();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(false)
        .solve(&prob)
        .unwrap();
    assert!(matches!(
        sol.interpolate_many(&[0.5]),
        Err(SolverError::MissingDerivativeData)
    ));
}
