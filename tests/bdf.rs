#![allow(missing_docs)]

use ndarray::Array1;
use ndarray::array;
use raznoor::{BDF1, BDF2, BDF3, BDF4, BDF5, BDF6, FixedStepODESolver, ODEProblem, ODESolver};

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

#[test]
fn bdf1_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &[0.1, 0.05, 0.01] {
        let sol = FixedStepODESolver::new(BDF1, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[sol.t.len() - 1, 0]];
        let error = (u_last - u_exact).abs();
        // BDF1 is O(dt), so dt=0.01 should give error ~0.005
        assert!(error <= dt * 0.6, "BDF1: error {error} > dt {dt}*0.6");
    }
}

#[test]
fn bdf2_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &[0.1, 0.05] {
        let sol = FixedStepODESolver::new(BDF2, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[sol.t.len() - 1, 0]];
        let error = (u_last - u_exact).abs();
        // BDF2 is O(dt²)
        assert!(error <= dt * dt * 2.0, "BDF2: error {error} > dt²*2");
    }
}

#[test]
fn bdf3_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    for dt in &[0.1, 0.05] {
        let sol = FixedStepODESolver::new(BDF3, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[sol.t.len() - 1, 0]];
        let error = (u_last - u_exact).abs();
        // BDF3 is O(dt³)
        assert!(error <= dt.powi(3) * 5.0, "BDF3: error {error} > dt³*5");
    }
}

#[test]
fn bdf4_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    let dt = 0.1;
    let sol = FixedStepODESolver::new(BDF4, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    let error = (u_last - u_exact).abs();
    // With 10 steps including 3 startup steps, overall error ~0.005
    assert!(error <= 5e-3, "BDF4: error {error} > 5e-3");
    // Verify convergence order by comparing coarse and fine grids.
    let dt2 = 0.05;
    let sol2 = FixedStepODESolver::new(BDF4, dt2)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u2 = sol2.u[[sol2.t.len() - 1, 0]];
    let error2 = (u2 - u_exact).abs();
    let ratio = error / error2;
    // Startup phase reduces effective order on coarse grids.
    assert!(ratio > 3.0, "BDF4: error ratio {ratio} too small");
}

#[test]
fn bdf5_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    let dt = 0.2;
    let sol = FixedStepODESolver::new(BDF5, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    let error = (u_last - u_exact).abs();
    assert!(error <= 1e-2, "BDF5: error {error} > 1e-2");
    let dt2 = 0.1;
    let sol2 = FixedStepODESolver::new(BDF5, dt2)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u2 = sol2.u[[sol2.t.len() - 1, 0]];
    let error2 = (u2 - u_exact).abs();
    let ratio = error / error2;
    assert!(ratio > 3.0, "BDF5: error ratio {ratio} too small");
}

#[test]
fn bdf6_exp_decay_f64() {
    let (prob, u_exact) = exp_decay_problem();
    let dt = 0.2;
    let sol = FixedStepODESolver::new(BDF6, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    let error = (u_last - u_exact).abs();
    assert!(error <= 1e-2, "BDF6: error {error} > 1e-2");
    let dt2 = 0.1;
    let sol2 = FixedStepODESolver::new(BDF6, dt2)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u2 = sol2.u[[sol2.t.len() - 1, 0]];
    let error2 = (u2 - u_exact).abs();
    let ratio = error / error2;
    assert!(ratio > 3.0, "BDF6: error ratio {ratio} too small");
}

// --- Non-trivial RHS tests ---

#[test]
fn bdf2_exp_decay_sin_f64() {
    let (prob, u_exact) = exp_decay_sin_problem();
    for dt in &[0.1, 0.05] {
        let sol = FixedStepODESolver::new(BDF2, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[sol.t.len() - 1, 0]];
        let error = (u_last - u_exact).abs();
        assert!(error <= dt * dt * 3.0, "BDF2 sin: error {error} > dt²*3");
    }
}

#[test]
fn bdf3_exp_decay_sin_f64() {
    let (prob, u_exact) = exp_decay_sin_problem();
    for dt in &[0.2, 0.1] {
        let sol = FixedStepODESolver::new(BDF3, *dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let u_last = sol.u[[sol.t.len() - 1, 0]];
        let error = (u_last - u_exact).abs();
        assert!(
            error <= dt.powi(3) * 10.0,
            "BDF3 sin: error {error} > dt³*10"
        );
    }
}

// --- Stiff problem tests ---

#[test]
fn bdf1_stiff_f64() {
    let (prob, u_exact) = stiff_problem();
    let dt = 0.001;
    let sol = FixedStepODESolver::new(BDF1, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    let error = (u_last - u_exact).abs();
    assert!(error < 0.1, "BDF1 stiff: error {error} >= 0.1");
}

#[test]
fn bdf2_stiff_f64() {
    let (prob, _u_exact) = stiff_problem();
    let dt = 0.01;
    let sol = FixedStepODESolver::new(BDF2, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!(
        (u_last - 0.0_f64).abs() < 0.05,
        "BDF2 stiff: |u_last| = {u_last} >= 0.05"
    );
}

#[test]
fn bdf3_stiff_f64() {
    let (prob, _u_exact) = stiff_problem();
    let dt = 0.01;
    let sol = FixedStepODESolver::new(BDF3, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!(
        (u_last - 0.0_f64).abs() < 0.05,
        "BDF3 stiff: |u_last| = {u_last} >= 0.05"
    );
}

#[test]
fn bdf4_stiff_f64() {
    let (prob, _u_exact) = stiff_problem();
    let dt = 0.01;
    let sol = FixedStepODESolver::new(BDF4, dt)
        .unwrap()
        .solve(&prob)
        .unwrap();
    let u_last = sol.u[[sol.t.len() - 1, 0]];
    assert!(
        (u_last - 0.0_f64).abs() < 0.05,
        "BDF4 stiff: |u_last| = {u_last} >= 0.05"
    );
}

// --- Multi-variable system tests ---

#[test]
fn bdf1_oscillator_f64() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(BDF1, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(
            res <= 0.05,
            "BDF1 oscillator var {i}: residual {res} > 0.05"
        );
    }
}

#[test]
fn bdf2_oscillator_f64() {
    let (prob, reference) = oscillator_problem::<f64>();
    let sol = FixedStepODESolver::new(BDF2, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(
            res <= 0.02,
            "BDF2 oscillator var {i}: residual {res} > 0.02"
        );
    }
}

// --- Linear problem (from common) ---

#[test]
fn bdf2_linear_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(BDF2, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.02, "BDF2 linear var {i}: residual {res} > 0.02");
    }
}

#[test]
fn bdf3_linear_f64() {
    let (prob, reference) = linear_problem::<f64>();
    let sol = FixedStepODESolver::new(BDF3, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.02, "BDF3 linear var {i}: residual {res} > 0.02");
    }
}

// --- f32 precision test ---

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

#[test]
fn bdf2_linear_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(BDF2, 0.01)
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
fn bdf3_linear_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(BDF3, 0.01)
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
fn bdf4_linear_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(BDF4, 0.01)
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
fn bdf5_linear_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(BDF5, 0.01)
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
fn bdf6_linear_f32() {
    let (prob, reference) = linear_problem::<f32>();
    let sol = FixedStepODESolver::new(BDF6, 0.01)
        .unwrap()
        .solve(&prob)
        .unwrap();
    for (i, ref_traj) in reference.iter().enumerate() {
        let computed = sol.u.column(i).to_owned();
        let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
        assert!(res <= 0.01);
    }
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
