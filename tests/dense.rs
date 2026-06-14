#![allow(
    missing_docs,
    clippy::cast_possible_truncation,
    clippy::cast_lossless,
    clippy::suboptimal_flops
)]

use ndarray::{Array1, array};
use raznoor::{
    AdaptiveODESolver, BACKWARD_EULER, BDF2, BDF4, CRANK_NICOLSON, DORMAND_PRINCE45,
    FixedStepODESolver, ODEProblem, ODESolver, RUNGE_KUTTA_4,
};

fn linear_rhs() -> fn(f64, &Array1<f64>) -> Array1<f64> {
    |t: f64, u: &Array1<f64>| array![2.0f64.mul_add(t, u[0])]
}

fn linear_exact(t: f64) -> f64 {
    5.0 * (t - 1.0).exp() - 2.0 * t - 2.0
}

fn oscillator_rhs() -> fn(f64, &Array1<f64>) -> Array1<f64> {
    |_t: f64, u: &Array1<f64>| array![u[1], -u[0]]
}

fn check_first_intervals(sol: &raznoor::ODESolution<f64>, n: usize, tol: f64, label: &str) {
    let max_i = n.min(sol.t.len().saturating_sub(1));
    for i in 0..max_i {
        let t_mid = f64::midpoint(sol.t[i], sol.t[i + 1]);
        let diff = (sol.interpolate(t_mid).unwrap()[0] - linear_exact(t_mid)).abs();
        assert!(
            diff < tol,
            "{label} midpoint {t_mid}: error = {diff} >= {tol}",
        );
    }
}

// ---------------------------------------------------------------------------
// ERK fixed-step (RK4, order 4)
// ---------------------------------------------------------------------------

#[test]
fn erk4_linear_midpoint() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    check_first_intervals(&sol, 5, 2e-4, "RK4");
}

// ---------------------------------------------------------------------------
// IRK fixed-step (Backward Euler, order 1)
// ---------------------------------------------------------------------------

#[test]
fn be_linear_midpoint() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(BACKWARD_EULER, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    check_first_intervals(&sol, 3, 5e-2, "BE");
}

// ---------------------------------------------------------------------------
// IRK fixed-step (Crank-Nicolson, order 2)
// ---------------------------------------------------------------------------

#[test]
fn cn_linear_midpoint() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(CRANK_NICOLSON, 0.2)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    check_first_intervals(&sol, 3, 1e-2, "CN");
}

// ---------------------------------------------------------------------------
// BDF fixed-step (BDF2, order 2, skip startup)
// ---------------------------------------------------------------------------

#[test]
fn bdf2_linear_midpoint() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(BDF2, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    // BDF2 startup interval [0, 0.1] uses BDF1; test from interval 1 onward
    let max_i = (1 + 3).min(sol.t.len().saturating_sub(1));
    for i in 1..max_i {
        let t_mid = f64::midpoint(sol.t[i], sol.t[i + 1]);
        let diff = (sol.interpolate(t_mid).unwrap()[0] - linear_exact(t_mid)).abs();
        assert!(diff < 4e-2, "BDF2 midpoint {t_mid}: error = {diff}");
    }
}

// ---------------------------------------------------------------------------
// BDF fixed-step (BDF4, order 4, skip startup)
// ---------------------------------------------------------------------------

#[test]
fn bdf4_linear_midpoint() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(BDF4, 0.2)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    // BDF4 full order starts at step 4; test from interval 4 onward
    let max_i = (4 + 3).min(sol.t.len().saturating_sub(1));
    for i in 4..max_i {
        let t_mid = f64::midpoint(sol.t[i], sol.t[i + 1]);
        let diff = (sol.interpolate(t_mid).unwrap()[0] - linear_exact(t_mid)).abs();
        assert!(diff < 3e-1, "BDF4 midpoint {t_mid}: error = {diff}");
    }
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

#[test]
fn erk4_oscillator_off_grid() {
    let prob = ODEProblem::new(
        oscillator_rhs(),
        array![0.0, 1.0],
        (0.0, std::f64::consts::PI),
    )
    .unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();

    for &t in &[0.05, 0.55, 1.05, 1.55, 2.05, 2.55] {
        let u = sol.interpolate(t).unwrap();
        assert!((u[0] - t.sin()).abs() < 2e-4, "RK4 osc u[0] at t={t}");
        assert!((u[1] - t.cos()).abs() < 2e-4, "RK4 osc u[1] at t={t}");
    }
}

#[test]
fn cn_oscillator_off_grid() {
    let prob = ODEProblem::new(
        oscillator_rhs(),
        array![0.0, 1.0],
        (0.0, std::f64::consts::PI),
    )
    .unwrap();
    let sol = FixedStepODESolver::new(CRANK_NICOLSON, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();

    for &t in &[0.05, 0.55, 1.05, 1.55, 2.05, 2.55] {
        let u = sol.interpolate(t).unwrap();
        assert!((u[0] - t.sin()).abs() < 2e-3, "CN osc u[0] at t={t}");
        assert!((u[1] - t.cos()).abs() < 2e-3, "CN osc u[1] at t={t}");
    }
}

#[test]
fn bdf2_oscillator_off_grid() {
    let prob = ODEProblem::new(
        oscillator_rhs(),
        array![0.0, 1.0],
        (0.0, std::f64::consts::PI),
    )
    .unwrap();
    let sol = FixedStepODESolver::new(BDF2, 0.05)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();

    for &t in &[0.05, 0.55, 1.05, 1.55, 2.05, 2.55] {
        let u = sol.interpolate(t).unwrap();
        assert!((u[0] - t.sin()).abs() < 5e-3, "BDF2 osc u[0] at t={t}");
        assert!((u[1] - t.cos()).abs() < 5e-3, "BDF2 osc u[1] at t={t}");
    }
}

// ---------------------------------------------------------------------------
// No derivative data
// ---------------------------------------------------------------------------

#[test]
fn no_derivative_returns_none() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(false)
        .solve(&prob)
        .unwrap();
    assert!(sol.du.is_none());
    assert!(sol.interpolate(0.5).is_none());
}

// ---------------------------------------------------------------------------
// Out-of-range panics
// ---------------------------------------------------------------------------

#[test]
#[should_panic(expected = "outside the interpolation range")]
fn interpolate_before_range() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    let _ = sol.interpolate(-1.0);
}

#[test]
#[should_panic(expected = "outside the interpolation range")]
fn interpolate_after_range() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    let _ = sol.interpolate(3.0);
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

#[test]
fn erk4_linear_f32() {
    let rhs: fn(f32, &Array1<f32>) -> Array1<f32> = |t, u| array![2.0_f32.mul_add(t, u[0])];
    let prob = ODEProblem::new(rhs, array![linear_exact(0.0) as f32], (0.0_f32, 2.0_f32)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1_f32)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    let max_i = 5.min(sol.t.len().saturating_sub(1));
    for i in 0..max_i {
        let t_mid = f32::midpoint(sol.t[i], sol.t[i + 1]);
        let val = sol.interpolate(t_mid).unwrap();
        let diff = (val[0] - linear_exact(f64::from(t_mid)) as f32).abs();
        assert!(diff < 5e-3_f32, "f32 RK4 midpoint {t_mid}: error = {diff}");
    }
}

#[test]
fn cn_linear_f32() {
    let rhs: fn(f32, &Array1<f32>) -> Array1<f32> = |t, u| array![2.0_f32.mul_add(t, u[0])];
    let prob = ODEProblem::new(rhs, array![linear_exact(0.0) as f32], (0.0_f32, 2.0_f32)).unwrap();
    let sol = FixedStepODESolver::new(CRANK_NICOLSON, 0.2_f32)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    let max_i = 3.min(sol.t.len().saturating_sub(1));
    for i in 0..max_i {
        let t_mid = f32::midpoint(sol.t[i], sol.t[i + 1]);
        let val = sol.interpolate(t_mid).unwrap();
        let diff = (val[0] - linear_exact(f64::from(t_mid)) as f32).abs();
        assert!(diff < 1e-2_f32, "f32 CN midpoint {t_mid}: error = {diff}");
    }
}

#[test]
fn bdf2_linear_f32() {
    let rhs: fn(f32, &Array1<f32>) -> Array1<f32> = |t, u| array![2.0_f32.mul_add(t, u[0])];
    let prob = ODEProblem::new(rhs, array![linear_exact(0.0) as f32], (0.0_f32, 2.0_f32)).unwrap();
    let sol = FixedStepODESolver::new(BDF2, 0.1_f32)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    let max_i = (1 + 3).min(sol.t.len().saturating_sub(1));
    for i in 1..max_i {
        let t_mid = f32::midpoint(sol.t[i], sol.t[i + 1]);
        let val = sol.interpolate(t_mid).unwrap();
        let diff = (val[0] - linear_exact(f64::from(t_mid)) as f32).abs();
        assert!(diff < 4e-2_f32, "f32 BDF2 midpoint {t_mid}: error = {diff}");
    }
}

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

#[test]
fn exact_at_grid_points_erk_fixed() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    for i in 0..sol.t.len() {
        let val = sol.interpolate(sol.t[i]).unwrap();
        assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14, "diff at t[{i}]");
    }
}

#[test]
fn exact_at_grid_points_irk_fixed() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(CRANK_NICOLSON, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    for i in 0..sol.t.len() {
        let val = sol.interpolate(sol.t[i]).unwrap();
        assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14, "diff at t[{i}]");
    }
}

#[test]
fn exact_at_grid_points_bdf_fixed() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(BDF2, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    for i in 0..sol.t.len() {
        let val = sol.interpolate(sol.t[i]).unwrap();
        assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14, "diff at t[{i}]");
    }
}

#[test]
fn exact_at_grid_points_erk_adaptive() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 1.0)).unwrap();
    let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.1, 1e-6, 1e-6)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    for i in 0..sol.t.len() {
        let val = sol.interpolate(sol.t[i]).unwrap();
        assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14, "diff at t[{i}]");
    }
}

// ---------------------------------------------------------------------------
// interpolate_many
// ---------------------------------------------------------------------------

#[test]
fn interpolate_many_consistency() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
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
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(true)
        .solve(&prob)
        .unwrap();
    assert_eq!(sol.interpolate_many(&[]).unwrap().shape(), &[0, 1]);
}

#[test]
fn interpolate_many_no_du_returns_none() {
    let prob = ODEProblem::new(linear_rhs(), array![linear_exact(0.0)], (0.0, 2.0)).unwrap();
    let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
        .unwrap()
        .with_store_derivatives(false)
        .solve(&prob)
        .unwrap();
    assert!(sol.interpolate_many(&[0.5]).is_none());
}
