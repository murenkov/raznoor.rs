//! Explicit Runge-Kutta ODE solver for scalar and system initial value problems.
//!
//! # Example
//!
//! ```
//! use ndarray::array;
//! use raznoor::{FixedStepODESolver, ODEProblem, ODESolver, RUNGE_KUTTA_4};
//!
//! let f = |t: f64, u: &ndarray::Array1<f64>| array![2.0 * t + u[0]];
//! let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1)).unwrap();
//!
//! let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap().solve(&prob).unwrap();
//! let u_last = sol.u[[0, sol.t.len() - 1]];
//! let u_exact = 5.0_f64 * (1.1_f64 - 1.0_f64).exp() - 2.0 * 1.1 - 2.0;
//! assert!((u_last - u_exact).abs() < 1e-4);
//! ```
//!
//! # Events
//!
//! Event detection allows you to monitor zero-crossings of a function `g(t, y)`
//! during integration. Terminal events stop the solver at the crossing time.
//!
//! ```
//! use ndarray::array;
//! use ndarray::Array1;
//! use raznoor::{Event, EventDirection, FixedStepODESolver, ODEProblem, ODESolver, RUNGE_KUTTA_4};
//!
//! let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
//!
//! let event = Event::new(
//!     Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
//!     true,
//!     EventDirection::Any,
//! );
//!
//! let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0)).unwrap()
//!     .with_events(vec![event]);
//!
//! let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap().solve(&prob).unwrap();
//! // Integration stops at t ≈ ln(2) where y(t) = 0.5
//! assert!((sol.t[sol.t.len() - 1] - (2.0_f64).ln()).abs() < 0.01);
//! assert_eq!(sol.events.len(), 1);
//! ```

/// Types used by the ODE solver.
pub mod types;

/// Butcher tableaus for explicit Runge-Kutta methods.
pub mod butcher;

/// Fixed-step and adaptive ODE solvers.
pub mod solver;

pub use butcher::{
    DORMAND_PRINCE45, ExplicitRungeKuttaMethod, FEHLBERG45, RUNGE_KUTTA_1, RUNGE_KUTTA_2,
    RUNGE_KUTTA_3, RUNGE_KUTTA_4, RUNGE_KUTTA_5,
};
pub use solver::{AdaptiveODESolver, FixedStepODESolver, ODESolver};
pub use types::{Event, EventDirection, EventRecord, ODEProblem, ODESolution, SolverError};

#[cfg(test)]
mod tests {
    use super::*;
    use ndarray::Array1;
    use ndarray::array;
    use num_traits::Float;
    use num_traits::FromPrimitive;

    fn residual<T: Float>(xs: &[T], ys: &[T]) -> Result<T, &'static str> {
        if xs.len() != ys.len() {
            return Err("arrays should have equal length");
        }
        let diffs = std::iter::zip(xs, ys).map(|(&x, &y)| (x - y).abs());
        let mut max = T::zero();
        for diff in diffs {
            if diff > max {
                max = diff;
            }
        }
        Ok(max)
    }

    type ProblemSetup<T> = (ODEProblem<T, fn(T, &Array1<T>) -> Array1<T>>, Vec<Vec<T>>);

    fn linear_problem<T: Float + FromPrimitive>() -> ProblemSetup<T> {
        let f: fn(T, &Array1<T>) -> Array1<T> =
            |t: T, u: &Array1<T>| array![T::from_f64(2.0).unwrap() * t + u[0]];
        let prob = ODEProblem {
            f,
            u0: array![T::from_f64(1.0).unwrap()],
            tspan: (T::from_f64(1.0).unwrap(), T::from_f64(1.1).unwrap()),
            events: Vec::new(),
        };
        let ys: Vec<T> = (0..11)
            .map(|i| {
                T::from_f64(1.0).unwrap()
                    + T::from_f64(f64::from(i)).unwrap() * T::from_f64(0.01).unwrap()
            })
            .map(|x| {
                T::from_f64(5.0).unwrap() * (x - T::from_f64(1.0).unwrap()).exp()
                    - T::from_f64(2.0).unwrap() * x
                    - T::from_f64(2.0).unwrap()
            })
            .collect();
        (prob, vec![ys])
    }

    fn oscillator_problem<T: Float + FromPrimitive>() -> ProblemSetup<T> {
        let half_pi = T::from_f64(std::f64::consts::FRAC_PI_2).unwrap();
        let dt = T::from_f64(0.01).unwrap();
        let n_steps = num_traits::cast::<T, usize>((half_pi / dt).floor()).unwrap_or(0);
        let f: fn(T, &Array1<T>) -> Array1<T> = |_t: T, u: &Array1<T>| array![u[1], -u[0]];
        let prob = ODEProblem {
            f,
            u0: array![T::from_f64(0.0).unwrap(), T::from_f64(1.0).unwrap()],
            tspan: (T::from_f64(0.0).unwrap(), half_pi),
            events: Vec::new(),
        };
        let mut xs: Vec<T> = Vec::with_capacity(n_steps + 2);
        xs.push(T::from_f64(0.0).unwrap());
        for i in 1..n_steps {
            xs.push(dt * T::from_usize(i).unwrap());
        }
        xs.push(half_pi);
        let ys0: Vec<T> = xs.iter().map(|&t| t.sin()).collect();
        let ys1: Vec<T> = xs.iter().map(|&t| t.cos()).collect();
        (prob, vec![ys0, ys1])
    }

    macro_rules! ode_test {
        ($name:ident, $tableau:expr, $setup:expr) => {
            #[test]
            fn $name() {
                let (prob, reference) = $setup;
                let sol = FixedStepODESolver::new($tableau, 0.01)
                    .unwrap()
                    .solve(&prob)
                    .unwrap();
                for (i, ref_traj) in reference.iter().enumerate() {
                    let computed = sol.u.row(i);
                    let res = residual(computed.as_slice().unwrap(), ref_traj).unwrap();
                    assert!(res <= 0.01);
                }
            }
        };
    }

    ode_test!(solve_erk1_f32, RUNGE_KUTTA_1, linear_problem::<f32>());
    ode_test!(solve_erk2_f32, RUNGE_KUTTA_2, linear_problem::<f32>());
    ode_test!(solve_erk3_f32, RUNGE_KUTTA_3, linear_problem::<f32>());
    ode_test!(solve_erk4_f32, RUNGE_KUTTA_4, linear_problem::<f32>());
    ode_test!(solve_erk5_f32, RUNGE_KUTTA_5, linear_problem::<f32>());
    ode_test!(solve_fehlberg45_f32, FEHLBERG45, linear_problem::<f32>());
    ode_test!(solve_dopri54_f32, DORMAND_PRINCE45, linear_problem::<f32>());
    ode_test!(solve_erk1_f64, RUNGE_KUTTA_1, linear_problem::<f64>());
    ode_test!(solve_erk2_f64, RUNGE_KUTTA_2, linear_problem::<f64>());
    ode_test!(solve_erk3_f64, RUNGE_KUTTA_3, linear_problem::<f64>());
    ode_test!(solve_erk4_f64, RUNGE_KUTTA_4, linear_problem::<f64>());
    ode_test!(solve_erk5_f64, RUNGE_KUTTA_5, linear_problem::<f64>());
    ode_test!(solve_fehlberg45_f64, FEHLBERG45, linear_problem::<f64>());
    ode_test!(solve_dopri54_f64, DORMAND_PRINCE45, linear_problem::<f64>());

    ode_test!(
        solve_system_two_vars_erk1,
        RUNGE_KUTTA_1,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_erk2,
        RUNGE_KUTTA_2,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_erk3,
        RUNGE_KUTTA_3,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_erk4,
        RUNGE_KUTTA_4,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_erk5,
        RUNGE_KUTTA_5,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_fehlberg45,
        FEHLBERG45,
        oscillator_problem::<f64>()
    );
    ode_test!(
        solve_system_two_vars_dopri54,
        DORMAND_PRINCE45,
        oscillator_problem::<f64>()
    );

    macro_rules! adaptive_test {
        ($name:ident, $tableau:expr, $setup:expr, $atol:expr, $rtol:expr) => {
            #[test]
            fn $name() {
                let (prob, reference) = $setup;
                let sol = AdaptiveODESolver::new($tableau, 0.01, $atol, $rtol).unwrap().solve(&prob).unwrap();
                let n_t = sol.t.len();
                for (i, ref_traj) in reference.iter().enumerate() {
                    let computed_last = sol.u.row(i)[n_t - 1];
                    let ref_last = ref_traj[ref_traj.len() - 1];
                    assert!(
                        (computed_last - ref_last).abs() <= 0.01,
                        "final state mismatch for variable {i}: computed={computed_last}, ref={ref_last}"
                    );
                }
            }
        };
    }

    adaptive_test!(
        solve_adaptive_fehlberg45_f32,
        FEHLBERG45,
        linear_problem::<f32>(),
        1e-4f32,
        1e-4f32
    );
    adaptive_test!(
        solve_adaptive_dopri54_f32,
        DORMAND_PRINCE45,
        linear_problem::<f32>(),
        1e-4f32,
        1e-4f32
    );
    adaptive_test!(
        solve_adaptive_fehlberg45_f64,
        FEHLBERG45,
        linear_problem::<f64>(),
        1e-8f64,
        1e-8f64
    );
    adaptive_test!(
        solve_adaptive_dopri54_f64,
        DORMAND_PRINCE45,
        linear_problem::<f64>(),
        1e-8f64,
        1e-8f64
    );
    adaptive_test!(
        solve_adaptive_fehlberg45_osc,
        FEHLBERG45,
        oscillator_problem::<f64>(),
        1e-6f64,
        1e-6f64
    );
    adaptive_test!(
        solve_adaptive_dopri54_osc,
        DORMAND_PRINCE45,
        oscillator_problem::<f64>(),
        1e-6f64,
        1e-6f64
    );

    macro_rules! adaptive_not_supported_test {
        ($name:ident, $tableau:expr) => {
            #[test]
            fn $name() {
                let (prob, _reference) = linear_problem::<f64>();
                let result =
                    AdaptiveODESolver::new($tableau, 0.01, 1e-4, 1e-4).and_then(|s| s.solve(&prob));
                assert!(result.is_err());
                assert_eq!(result.unwrap_err(), SolverError::AdaptiveNotSupported);
            }
        };
    }

    adaptive_not_supported_test!(solve_adaptive_erk1_not_supported, RUNGE_KUTTA_1);
    adaptive_not_supported_test!(solve_adaptive_erk2_not_supported, RUNGE_KUTTA_2);
    adaptive_not_supported_test!(solve_adaptive_erk3_not_supported, RUNGE_KUTTA_3);
    adaptive_not_supported_test!(solve_adaptive_erk4_not_supported, RUNGE_KUTTA_4);
    adaptive_not_supported_test!(solve_adaptive_erk5_not_supported, RUNGE_KUTTA_5);

    // ── Edge-case tests for solve() ──

    #[test]
    fn solve_zero_dt() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.0).and_then(|s| s.solve(&prob));
        assert!(
            matches!(result, Err(SolverError::InvalidStepSize)),
            "solve with dt=0 should return InvalidStepSize error"
        );
    }

    #[test]
    fn solve_negative_dt() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
        let result = FixedStepODESolver::new(RUNGE_KUTTA_4, -0.01).and_then(|s| s.solve(&prob));
        assert!(
            matches!(result, Err(SolverError::InvalidStepSize)),
            "solve with negative dt should return InvalidStepSize error"
        );
    }

    #[test]
    fn solve_dt_larger_than_tspan() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 2.0)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert_eq!(
            sol.t.len(),
            2,
            "dt larger than tspan should produce exactly 2 time points"
        );
        assert!((sol.t[0] - 0.0).abs() < f64::EPSILON);
        assert!((sol.t[1] - 1.0).abs() < f64::EPSILON);
        assert!(
            (sol.u[[0, 1]] - 1.0).abs() < f64::EPSILON,
            "solution should remain at u0"
        );
    }

    #[test]
    fn solve_nan_initial_condition() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let result = ODEProblem::new(f, array![f64::NAN], (0.0, 1.0));
        assert!(
            matches!(result, Err(SolverError::InvalidInitialCondition)),
            "ODEProblem::new with NaN initial condition should return InvalidInitialCondition error"
        );
    }

    #[test]
    fn solve_inf_initial_condition() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let result = ODEProblem::new(f, array![f64::INFINITY], (0.0, 1.0));
        assert!(
            matches!(result, Err(SolverError::InvalidInitialCondition)),
            "ODEProblem::new with Inf initial condition should return InvalidInitialCondition error"
        );
    }

    #[test]
    fn solve_empty_system() {
        let f = |_t: f64, _u: &Array1<f64>| Array1::<f64>::zeros(0);
        let prob = ODEProblem::new(f, Array1::<f64>::zeros(0), (0.0, 1.0)).unwrap();
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert_eq!(sol.u.nrows(), 0, "empty system should have 0 variables");
        assert!(sol.t.len() >= 2, "should have at least 2 time points");
    }

    #[test]
    fn solve_negative_direction() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0)).unwrap();
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.1)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert!(
            (sol.t[0] - 1.0).abs() < f64::EPSILON,
            "first time point should be t0"
        );
        assert!(
            (sol.t[sol.t.len() - 1] - 0.0).abs() < f64::EPSILON,
            "last time point should be tf"
        );
        for i in 1..sol.t.len() {
            assert!(
                sol.t[i] < sol.t[i - 1],
                "time should be monotonically decreasing"
            );
        }
    }

    // ── Edge-case tests for solve_adaptive() ──

    #[test]
    fn solve_adaptive_nan_initial_condition() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let result = ODEProblem::new(f, array![f64::NAN], (0.0, 0.0));
        assert!(
            matches!(result, Err(SolverError::InvalidInitialCondition)),
            "ODEProblem::new with NaN initial condition should return InvalidInitialCondition error"
        );
    }

    #[test]
    fn solve_adaptive_inf_initial_condition() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let result = ODEProblem::new(f, array![f64::INFINITY], (0.0, 0.0));
        assert!(
            matches!(result, Err(SolverError::InvalidInitialCondition)),
            "ODEProblem::new with Inf initial condition should return InvalidInitialCondition error"
        );
    }

    #[test]
    fn solve_adaptive_negative_direction() {
        let f = |_t: f64, _u: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0)).unwrap();
        let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert_eq!(sol.u.nrows(), 1);
        assert!(
            (sol.t[0] - 1.0).abs() < f64::EPSILON,
            "first time point should be t0"
        );
        assert!(
            (sol.t[sol.t.len() - 1] - 0.0).abs() < f64::EPSILON,
            "last time point should be tf"
        );
    }

    #[test]
    fn solve_adaptive_tight_tolerances() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1000.0)).unwrap();
        let result = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-14, 1e-14)
            .and_then(|s| s.solve(&prob));
        assert!(
            result.is_ok(),
            "adaptive solve with tight tolerances should not panic"
        );
        let sol = result.unwrap();
        assert_eq!(sol.u.nrows(), 1);
        assert!(sol.t.len() > 1, "should produce at least 2 time points");
    }

    // ── Property-based tests ──

    use proptest::prelude::*;

    proptest! {
        #[test]
        fn solve_property_positive_dt(
            dt in 1e-4f64..0.5f64,
            n_vars in 1usize..5,
        ) {
            let u0 = Array1::<f64>::ones(n_vars);
            let f = |_t: f64, u: &Array1<f64>| -u.clone();
            let prob = ODEProblem::new(f, u0, (0.0, 1.0)).unwrap();
            let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, dt).unwrap().solve(&prob).unwrap();
            prop_assert_eq!(sol.u.nrows(), n_vars, "number of solution variables should match");
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
            prop_assert_eq!(sol.u.nrows(), 1, "should have 1 variable");
            prop_assert!(sol.t.len() > 1, "should produce at least 2 time points");
            prop_assert!((sol.t[0] - prob.tspan.0).abs() < f64::EPSILON, "first time point should be t0");
            prop_assert!((sol.t[sol.t.len() - 1] - prob.tspan.1).abs() < f64::EPSILON, "last time point should be tf");
        }
    }

    // ── Event detection tests ──

    #[test]
    fn event_terminal_fixed() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
            true,
            EventDirection::Any,
        );
        let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let expected = (2.0_f64).ln();
        assert!(
            (sol.t[sol.t.len() - 1] - expected).abs() < 0.01,
            "terminal event at t={} should be near ln(2)={}",
            sol.t[sol.t.len() - 1],
            expected
        );
        assert!(!sol.events.is_empty(), "should have recorded an event");
        assert!(
            (sol.events[0].t - expected).abs() < 0.01,
            "event time should be near ln(2)"
        );
    }

    #[test]
    fn event_non_terminal_fixed() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
            false,
            EventDirection::Any,
        );
        let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert!(
            (sol.t[sol.t.len() - 1] - 5.0).abs() < f64::EPSILON,
            "non-terminal event should integrate to end of tspan"
        );
        assert!(!sol.events.is_empty(), "should have recorded an event");
    }

    #[test]
    fn event_direction_decreasing() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
            true,
            EventDirection::Decreasing,
        );
        let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert!(
            (sol.t[sol.t.len() - 1] - (2.0_f64).ln()).abs() < 0.01,
            "decreasing event should trigger at ln(2)"
        );
    }

    #[test]
    fn event_direction_increasing_no_crossing() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
            true,
            EventDirection::Increasing,
        );
        let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert!(
            (sol.t[sol.t.len() - 1] - 5.0).abs() < f64::EPSILON,
            "increasing event should not trigger on decreasing function"
        );
        assert!(sol.events.is_empty(), "no events should be recorded");
    }

    #[test]
    fn event_no_crossing() {
        let f = |_t: f64, _u: &Array1<f64>| array![1.0];
        let event = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] + 1.0),
            true,
            EventDirection::Any,
        );
        let prob = ODEProblem::new(f, array![0.0], (0.0, 1.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert!(
            (sol.t[sol.t.len() - 1] - 1.0).abs() < f64::EPSILON,
            "no event should fire"
        );
        assert!(sol.events.is_empty(), "no events should be recorded");
    }

    #[test]
    fn event_terminal_adaptive() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
            true,
            EventDirection::Any,
        );
        let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let expected = (2.0_f64).ln();
        assert!(
            (sol.t[sol.t.len() - 1] - expected).abs() < 0.01,
            "terminal adaptive event t={} should be near ln(2)={}",
            sol.t[sol.t.len() - 1],
            expected
        );
        assert!(!sol.events.is_empty(), "should have recorded an event");
    }

    #[test]
    fn event_multiple_first_terminal_wins() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event_early = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
            true,
            EventDirection::Any,
        );
        let event_late = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.25),
            true,
            EventDirection::Any,
        );
        let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
            .unwrap()
            .with_events(vec![event_late, event_early]);
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap();
        let expected = (2.0_f64).ln();
        assert!(
            (sol.t[sol.t.len() - 1] - expected).abs() < 0.01,
            "should stop at earlier event (ln(2))"
        );
    }

    #[test]
    fn event_solution_field_populated() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let event = Event::new(
            Box::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
            true,
            EventDirection::Any,
        );
        let prob = ODEProblem::new(f, array![1.0], (0.0, 5.0))
            .unwrap()
            .with_events(vec![event]);
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert_eq!(sol.events.len(), 1, "one event should be recorded");
        assert_eq!(sol.events[0].event_index, 0);
        assert!(
            (sol.events[0].u[0] - 0.5).abs() < 0.01,
            "u at event should be near 0.5"
        );
    }

    #[test]
    fn event_no_events_no_overhead() {
        let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
        let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01)
            .unwrap()
            .solve(&prob)
            .unwrap();
        assert!(sol.events.is_empty(), "no events should be recorded");
    }
}
