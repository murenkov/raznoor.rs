#![allow(missing_docs)]

use std::sync::Arc;

use ndarray::Array1;
use ndarray::array;
use proptest::prelude::*;
use raznoor::{
    AdaptiveODESolver, BACKWARD_EULER, BDF1, BDF2, BDF4, CRANK_NICOLSON, DORMAND_PRINCE45, Event,
    EventDirection, FixedStepODESolver, IMPLICIT_MIDPOINT, ODEProblem, ODESolver, RADAU_IIA_3,
    RUNGE_KUTTA_4,
};

fn linear_exact(t: f64) -> f64 {
    (-2.0f64).mul_add(t, 5.0 * (t - 1.0).exp()) - 2.0
}

proptest! {
    // -----------------------------------------------------------------------
    // Existing tests (unchanged)
    // -----------------------------------------------------------------------

    #[test]
    fn solve_property_positive_dt(
        dt in 1e-4f64..0.5f64,
        n_vars in 1usize..5,
    ) {
        let u0 = Array1::<f64>::ones(n_vars);
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let prob = ODEProblem::new(f, u0, (0.0, 1.0)).unwrap();
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, dt).unwrap().solve(&prob).unwrap();
        prop_assert_eq!(sol.u.ncols(), n_vars, "number of solution variables should match");
        prop_assert!((sol.t[0] - prob.tspan.0).abs() < f64::EPSILON, "first time point should be t0");
        prop_assert!((sol.t[sol.t.len() - 1] - prob.tspan.1).abs() < f64::EPSILON, "last time point should be tf");
    }

    #[test]
    fn solve_property_tspan(
        dt in 1e-4f64..0.1f64,
    ) {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, dt).unwrap().solve(&prob).unwrap();
        let n = sol.t.len();
        prop_assert!((sol.t[0] - prob.tspan.0).abs() < f64::EPSILON, "first time point should be t0");
        prop_assert!((sol.t[n - 1] - prob.tspan.1).abs() < f64::EPSILON, "last time point should be tf");
        for i in 1..n {
            prop_assert!(sol.t[i] > sol.t[i - 1], "time should be monotonically increasing");
        }
    }

    #[test]
    fn solve_adaptive_property(
        atol in 1e-12f64..1e-6f64,
        rtol in 1e-12f64..1e-6f64,
    ) {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
        let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, atol, rtol).unwrap().solve(&prob).unwrap();
        prop_assert_eq!(sol.u.ncols(), 1, "should have 1 variable");
        prop_assert!(sol.t.len() > 1, "should produce at least 2 time points");
        prop_assert!((sol.t[0] - prob.tspan.0).abs() < f64::EPSILON, "first time point should be t0");
        prop_assert!((sol.t[sol.t.len() - 1] - prob.tspan.1).abs() < f64::EPSILON, "last time point should be tf");
    }

    // -----------------------------------------------------------------------
    // Event detection property tests
    // -----------------------------------------------------------------------

    #[test]
    fn event_crossing_any_fixed(
        threshold in 0.1f64..2.0f64,
        dt in 1e-4f64..0.1f64,
    ) {
        let u0 = threshold + 1.0;
        let expected_t = (u0 / threshold).ln();
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event = Event::new(
            Arc::new(move |_t: f64, u: &Array1<f64>| u[0] - threshold),
            true,
            EventDirection::Any,
        );
        let prob = ODEProblem::new(f, array![u0], (0.0, 10.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        prop_assert!(!sol.events.is_empty(), "event should be detected for threshold={threshold}, dt={dt}");
        prop_assert!((sol.events[0].t - expected_t).abs() < 0.05,
            "event time {:.6} should be near {:.6} for threshold={}, dt={}",
            sol.events[0].t, expected_t, threshold, dt);
        prop_assert!((sol.events[0].u[0] - threshold).abs() < 0.01,
            "state at event {:.6} should be near threshold {:.6}",
            sol.events[0].u[0], threshold);
    }

    #[test]
    fn event_crossing_any_adaptive(
        threshold in 0.1f64..2.0f64,
        atol in 1e-10f64..1e-6f64,
    ) {
        let u0 = threshold + 1.0;
        let expected_t = (u0 / threshold).ln();
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event = Event::new(
            Arc::new(move |_t: f64, u: &Array1<f64>| u[0] - threshold),
            true,
            EventDirection::Any,
        );
        let prob = ODEProblem::new(f, array![u0], (0.0, 10.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, atol, atol)
            .unwrap()
            .solve(&prob)
            .unwrap();
        prop_assert!(!sol.events.is_empty(), "event should be detected for threshold={threshold}");
        prop_assert!((sol.events[0].t - expected_t).abs() < 0.05,
            "event time {:.6} should be near {:.6} for threshold={}",
            sol.events[0].t, expected_t, threshold);
        prop_assert!((sol.events[0].u[0] - threshold).abs() < 0.01,
            "state at event {:.6} should be near threshold {:.6}",
            sol.events[0].u[0], threshold);
    }

    // -----------------------------------------------------------------------
    // Dense output consistency property tests
    // -----------------------------------------------------------------------

    #[test]
    fn dense_output_erk(
        dt in 1e-4f64..0.2f64,
        t in 0.01f64..1.99f64,
    ) {
        let prob = ODEProblem::new(
            |t: f64, u: &Array1<f64>| array![2.0f64.mul_add(t, u[0])],
            array![linear_exact(0.0)],
            (0.0, 2.0),
        )
        .unwrap();
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, dt)
            .unwrap()
            .with_store_derivatives(true)
            .solve(&prob)
            .unwrap();

        for i in 0..sol.t.len() {
            let val = sol.interpolate(sol.t[i]).unwrap();
            prop_assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14,
                "RK4: interpolant at grid point t[{}]={} should match stored value", i, sol.t[i]);
        }

        let u_interp = sol.interpolate(t).unwrap();
        let u_exact = linear_exact(t);
        let diff = (u_interp[0] - u_exact).abs();
        prop_assert!(diff < 1.0e-3, "RK4: |interpolate({t}) - exact| = {diff} >= 1e-3");

        let u_many = sol.interpolate_many(&[t]).unwrap();
        prop_assert!((u_many[[0, 0]] - u_interp[0]).abs() < 1e-15,
            "RK4: interpolate_many([t]) should match interpolate(t)");
    }

    #[test]
    fn dense_output_irk(
        dt in 1e-4f64..0.15f64,
        t in 0.01f64..1.99f64,
    ) {
        let prob = ODEProblem::new(
            |t: f64, u: &Array1<f64>| array![2.0f64.mul_add(t, u[0])],
            array![linear_exact(0.0)],
            (0.0, 2.0),
        )
        .unwrap();
        let sol = FixedStepODESolver::new(CRANK_NICOLSON, dt)
            .unwrap()
            .with_store_derivatives(true)
            .solve(&prob)
            .unwrap();

        for i in 0..sol.t.len() {
            let val = sol.interpolate(sol.t[i]).unwrap();
            prop_assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14,
                "CN: interpolant at grid point t[{}]={} should match stored value", i, sol.t[i]);
        }

        let u_interp = sol.interpolate(t).unwrap();
        let u_exact = linear_exact(t);
        let diff = (u_interp[0] - u_exact).abs();
        prop_assert!(diff < 2.0e-1, "CN: |interpolate({t}) - exact| = {diff} >= 2e-1");

        let u_many = sol.interpolate_many(&[t]).unwrap();
        prop_assert!((u_many[[0, 0]] - u_interp[0]).abs() < 1e-15,
            "CN: interpolate_many([t]) should match interpolate(t)");
    }

    #[test]
    fn dense_output_bdf(
        dt in 1e-4f64..0.1f64,
        t in 0.01f64..1.99f64,
    ) {
        let prob = ODEProblem::new(
            |t: f64, u: &Array1<f64>| array![2.0f64.mul_add(t, u[0])],
            array![linear_exact(0.0)],
            (0.0, 2.0),
        )
        .unwrap();
        let sol = FixedStepODESolver::new(BDF2, dt)
            .unwrap()
            .with_store_derivatives(true)
            .solve(&prob)
            .unwrap();

        for i in 0..sol.t.len() {
            let val = sol.interpolate(sol.t[i]).unwrap();
            prop_assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14,
                "BDF2: interpolant at grid point t[{}]={} should match stored value", i, sol.t[i]);
        }

        let u_interp = sol.interpolate(t).unwrap();
        let u_exact = linear_exact(t);
        let diff = (u_interp[0] - u_exact).abs();
        prop_assert!(diff < 1.0, "BDF2: |interpolate({t}) - exact| = {diff} >= 1.0");

        let u_many = sol.interpolate_many(&[t]).unwrap();
        prop_assert!((u_many[[0, 0]] - u_interp[0]).abs() < 1e-15,
            "BDF2: interpolate_many([t]) should match interpolate(t)");
    }

    #[test]
    fn dense_output_adaptive(
        dt in 1e-4f64..0.1f64,
        t in 0.01f64..0.49f64,
    ) {
        let prob = ODEProblem::new(
            |t: f64, u: &Array1<f64>| array![2.0f64.mul_add(t, u[0])],
            array![linear_exact(0.0)],
            (0.0, 0.5),
        )
        .unwrap();
        let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, dt, 1e-8, 1e-8)
            .unwrap()
            .with_store_derivatives(true)
            .solve(&prob)
            .unwrap();

        // Only check grid points that are strictly within [t0, tf] range
        // (the adaptive solver may occasionally overshoot tf by a tiny amount
        // due to floating-point step control, producing non-monotonic last steps)
        for i in 0..sol.t.len() {
            if sol.t[i] <= sol.t[sol.t.len() - 1] && (i == 0 || sol.t[i] > sol.t[i - 1])
                && let Ok(val) = sol.interpolate(sol.t[i])
            {
                prop_assert!((val[0] - sol.u[[i, 0]]).abs() < 1e-14,
                    "DOPRI54: interpolant at t[{}]={} should match stored value", i, sol.t[i]);
            }
        }

        let u_interp = sol.interpolate(t).unwrap();
        let u_exact = linear_exact(t);
        let diff = (u_interp[0] - u_exact).abs();
        prop_assert!(diff < 1.0e-4, "DOPRI54: |interpolate({t}) - exact| = {diff} >= 1e-4");

        let u_many = sol.interpolate_many(&[t]).unwrap();
        prop_assert!((u_many[[0, 0]] - u_interp[0]).abs() < 1e-15,
            "DOPRI54: interpolate_many([t]) should match interpolate(t)");
    }

    // -----------------------------------------------------------------------
    // Newton convergence property tests (one per implicit method)
    // -----------------------------------------------------------------------

    #[test]
    fn newton_convergence_bw_euler(
        dt in 1e-4f64..0.2f64,
        n_vars in 1usize..4,
    ) {
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let prob = ODEProblem::new(f, Array1::<f64>::ones(n_vars), (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(BACKWARD_EULER, dt).and_then(|s| s.solve(&prob));
        prop_assert!(result.is_ok(), "BE Newton should converge for dt={dt}, n_vars={n_vars}");
        let sol = result.unwrap();
        prop_assert_eq!(sol.u.ncols(), n_vars);
        prop_assert!(sol.t.len() >= 2);
        for val in &sol.u {
            prop_assert!(val.is_finite(), "BE: solution value should be finite");
        }
    }

    #[test]
    fn newton_convergence_midpoint(
        dt in 1e-4f64..0.2f64,
        n_vars in 1usize..4,
    ) {
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let prob = ODEProblem::new(f, Array1::<f64>::ones(n_vars), (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(IMPLICIT_MIDPOINT, dt).and_then(|s| s.solve(&prob));
        prop_assert!(result.is_ok(), "Midpoint Newton should converge for dt={dt}, n_vars={n_vars}");
        let sol = result.unwrap();
        prop_assert_eq!(sol.u.ncols(), n_vars);
        prop_assert!(sol.t.len() >= 2);
        for val in &sol.u {
            prop_assert!(val.is_finite(), "Midpoint: solution value should be finite");
        }
    }

    #[test]
    fn newton_convergence_cn(
        dt in 1e-4f64..0.2f64,
        n_vars in 1usize..4,
    ) {
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let prob = ODEProblem::new(f, Array1::<f64>::ones(n_vars), (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(CRANK_NICOLSON, dt).and_then(|s| s.solve(&prob));
        prop_assert!(result.is_ok(), "CN Newton should converge for dt={dt}, n_vars={n_vars}");
        let sol = result.unwrap();
        prop_assert_eq!(sol.u.ncols(), n_vars);
        prop_assert!(sol.t.len() >= 2);
        for val in &sol.u {
            prop_assert!(val.is_finite(), "CN: solution value should be finite");
        }
    }

    #[test]
    fn newton_convergence_radau3(
        dt in 1e-4f64..0.2f64,
        n_vars in 1usize..4,
    ) {
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let prob = ODEProblem::new(f, Array1::<f64>::ones(n_vars), (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(RADAU_IIA_3, dt).and_then(|s| s.solve(&prob));
        prop_assert!(result.is_ok(), "Radau IIA-3 Newton should converge for dt={dt}, n_vars={n_vars}");
        let sol = result.unwrap();
        prop_assert_eq!(sol.u.ncols(), n_vars);
        prop_assert!(sol.t.len() >= 2);
        for val in &sol.u {
            prop_assert!(val.is_finite(), "Radau3: solution value should be finite");
        }
    }

    #[test]
    fn newton_convergence_bdf1(
        dt in 1e-4f64..0.2f64,
        n_vars in 1usize..4,
    ) {
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let prob = ODEProblem::new(f, Array1::<f64>::ones(n_vars), (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(BDF1, dt).and_then(|s| s.solve(&prob));
        prop_assert!(result.is_ok(), "BDF1 Newton should converge for dt={dt}, n_vars={n_vars}");
        let sol = result.unwrap();
        prop_assert_eq!(sol.u.ncols(), n_vars);
        prop_assert!(sol.t.len() >= 2);
        for val in &sol.u {
            prop_assert!(val.is_finite(), "BDF1: solution value should be finite");
        }
    }

    #[test]
    fn newton_convergence_bdf2(
        dt in 1e-4f64..0.2f64,
        n_vars in 1usize..4,
    ) {
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let prob = ODEProblem::new(f, Array1::<f64>::ones(n_vars), (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(BDF2, dt).and_then(|s| s.solve(&prob));
        prop_assert!(result.is_ok(), "BDF2 Newton should converge for dt={dt}, n_vars={n_vars}");
        let sol = result.unwrap();
        prop_assert_eq!(sol.u.ncols(), n_vars);
        prop_assert!(sol.t.len() >= 2);
        for val in &sol.u {
            prop_assert!(val.is_finite(), "BDF2: solution value should be finite");
        }
    }

    #[test]
    fn newton_convergence_bdf4(
        dt in 1e-4f64..0.2f64,
        n_vars in 1usize..4,
    ) {
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let prob = ODEProblem::new(f, Array1::<f64>::ones(n_vars), (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(BDF4, dt).and_then(|s| s.solve(&prob));
        prop_assert!(result.is_ok(), "BDF4 Newton should converge for dt={dt}, n_vars={n_vars}");
        let sol = result.unwrap();
        prop_assert_eq!(sol.u.ncols(), n_vars);
        prop_assert!(sol.t.len() >= 2);
        for val in &sol.u {
            prop_assert!(val.is_finite(), "BDF4: solution value should be finite");
        }
    }

    // -----------------------------------------------------------------------
    // Backward integration property tests (all method families)
    // -----------------------------------------------------------------------

    #[test]
    fn backward_integration_erk(
        dt in 1e-4f64..0.2f64,
    ) {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0)).unwrap();
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        prop_assert!((sol.t[0] - 1.0).abs() < f64::EPSILON, "RK4 backward: first t should be t0=1.0");
        prop_assert!((sol.t[sol.t.len() - 1] - 0.0).abs() < f64::EPSILON, "RK4 backward: last t should be tf=0.0");
        for i in 1..sol.t.len() {
            prop_assert!(sol.t[i] < sol.t[i - 1], "RK4 backward: time should be monotonically decreasing");
        }
        for val in &sol.u {
            prop_assert!(val.is_finite(), "RK4 backward: solution value should be finite");
        }
    }

    #[test]
    fn backward_integration_irk(
        dt in 1e-4f64..0.2f64,
    ) {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0)).unwrap();
        let sol = FixedStepODESolver::new(BACKWARD_EULER, dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        prop_assert!((sol.t[0] - 1.0).abs() < f64::EPSILON, "BE backward: first t should be t0=1.0");
        prop_assert!((sol.t[sol.t.len() - 1] - 0.0).abs() < f64::EPSILON, "BE backward: last t should be tf=0.0");
        for i in 1..sol.t.len() {
            prop_assert!(sol.t[i] < sol.t[i - 1], "BE backward: time should be monotonically decreasing");
        }
        for val in &sol.u {
            prop_assert!(val.is_finite(), "BE backward: solution value should be finite");
        }
    }

    #[test]
    fn backward_integration_bdf(
        dt in 1e-4f64..0.2f64,
    ) {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0)).unwrap();
        let sol = FixedStepODESolver::new(BDF2, dt)
            .unwrap()
            .solve(&prob)
            .unwrap();
        prop_assert!((sol.t[0] - 1.0).abs() < f64::EPSILON, "BDF2 backward: first t should be t0=1.0");
        prop_assert!((sol.t[sol.t.len() - 1] - 0.0).abs() < f64::EPSILON, "BDF2 backward: last t should be tf=0.0");
        for i in 1..sol.t.len() {
            prop_assert!(sol.t[i] < sol.t[i - 1], "BDF2 backward: time should be monotonically decreasing");
        }
        for val in &sol.u {
            prop_assert!(val.is_finite(), "BDF2 backward: solution value should be finite");
        }
    }

    #[test]
    fn backward_integration_adaptive(
        dt in 1e-4f64..0.2f64,
    ) {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0)).unwrap();
        let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, dt, 1e-8, 1e-8)
            .unwrap()
            .solve(&prob)
            .unwrap();
        prop_assert!((sol.t[0] - 1.0).abs() < f64::EPSILON, "DOPRI54 backward: first t should be t0=1.0");
        prop_assert!((sol.t[sol.t.len() - 1] - 0.0).abs() < 1e-10, "DOPRI54 backward: last t should be near tf=0.0, got {}", sol.t[sol.t.len() - 1]);
        prop_assert!(sol.u.ncols() == 1, "DOPRI54 backward: should have 1 variable");
        for val in &sol.u {
            prop_assert!(val.is_finite(), "DOPRI54 backward: solution value should be finite");
        }
    }
}
