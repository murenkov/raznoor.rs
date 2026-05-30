#![warn(missing_docs)]

//! Explicit Runge-Kutta ODE solver for scalar and system initial value problems.
//!
//! # Example
//!
//! ```
//! use ndarray::array;
//! use raznur::{ODEProblem, solve, RUNGE_KUTTA_4};
//!
//! let f = |x: f64, y: &ndarray::Array1<f64>| array![2.0 * x + y[0]];
//! let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1));
//!
//! let sol = solve(&prob, &RUNGE_KUTTA_4, 0.01).unwrap();
//! let y_last = sol.u[[0, sol.t.len() - 1]];
//! let y_exact = 5.0_f64 * (1.1_f64 - 1.0_f64).exp() - 2.0 * 1.1 - 2.0;
//! assert!((y_last - y_exact).abs() < 1e-4);
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
pub use solver::{solve, solve_adaptive};
pub use types::{ODEProblem, ODESolution, SolverError};

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
            |x: T, y: &Array1<T>| array![T::from_f64(2.0).unwrap() * x + y[0]];
        let prob = ODEProblem {
            f,
            u0: array![T::from_f64(1.0).unwrap()],
            tspan: (T::from_f64(1.0).unwrap(), T::from_f64(1.1).unwrap()),
        };
        let ys: Vec<T> = (0..11)
            .map(|i| {
                T::from_f64(1.0).unwrap()
                    + T::from_f64(i as f64).unwrap() * T::from_f64(0.01).unwrap()
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
        let f: fn(T, &Array1<T>) -> Array1<T> = |_x: T, y: &Array1<T>| array![y[1], -y[0]];
        let prob = ODEProblem {
            f,
            u0: array![T::from_f64(0.0).unwrap(), T::from_f64(1.0).unwrap()],
            tspan: (T::from_f64(0.0).unwrap(), half_pi),
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
                let sol = solve(&prob, &$tableau, 0.01).unwrap();
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
                let sol = solve_adaptive(&prob, &$tableau, 0.01, $atol, $rtol).unwrap();
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
                let result = solve_adaptive(&prob, &$tableau, 0.01, 1e-4, 1e-4);
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
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0));
        let result = solve(&prob, &RUNGE_KUTTA_4, 0.0);
        assert!(result.is_ok(), "solve with dt=0 should not panic");
    }

    #[test]
    fn solve_negative_dt() {
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0));
        let result = solve(&prob, &RUNGE_KUTTA_4, -0.01);
        assert!(result.is_ok(), "solve with negative dt should not panic");
    }

    #[test]
    fn solve_dt_larger_than_tspan() {
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0));
        let sol = solve(&prob, &RUNGE_KUTTA_4, 2.0).unwrap();
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
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![f64::NAN], (0.0, 1.0));
        let result = solve(&prob, &RUNGE_KUTTA_4, 0.1);
        assert!(
            result.is_ok(),
            "solve with NaN initial condition should not panic"
        );
    }

    #[test]
    fn solve_inf_initial_condition() {
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![f64::INFINITY], (0.0, 1.0));
        let result = solve(&prob, &RUNGE_KUTTA_4, 0.1);
        assert!(
            result.is_ok(),
            "solve with Inf initial condition should not panic"
        );
    }

    #[test]
    fn solve_empty_system() {
        let f = |_t: f64, _y: &Array1<f64>| Array1::<f64>::zeros(0);
        let prob = ODEProblem::new(f, Array1::<f64>::zeros(0), (0.0, 1.0));
        let sol = solve(&prob, &RUNGE_KUTTA_4, 0.1).unwrap();
        assert_eq!(sol.u.nrows(), 0, "empty system should have 0 variables");
        assert!(sol.t.len() >= 2, "should have at least 2 time points");
    }

    #[test]
    fn solve_negative_direction() {
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0));
        let sol = solve(&prob, &RUNGE_KUTTA_4, 0.1).unwrap();
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
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![f64::NAN], (0.0, 0.0));
        let result = solve_adaptive(&prob, &DORMAND_PRINCE45, 0.01, 1e-6, 1e-6);
        assert!(
            result.is_ok(),
            "adaptive solve with NaN initial condition should not panic"
        );
    }

    #[test]
    fn solve_adaptive_inf_initial_condition() {
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![f64::INFINITY], (0.0, 0.0));
        let result = solve_adaptive(&prob, &DORMAND_PRINCE45, 0.01, 1e-6, 1e-6);
        assert!(
            result.is_ok(),
            "adaptive solve with Inf initial condition should not panic"
        );
    }

    #[test]
    fn solve_adaptive_negative_direction() {
        let f = |_t: f64, _y: &Array1<f64>| array![0.0];
        let prob = ODEProblem::new(f, array![1.0], (1.0, 0.0));
        let sol = solve_adaptive(&prob, &DORMAND_PRINCE45, 0.01, 1e-6, 1e-6).unwrap();
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
        let f = |_t: f64, y: &Array1<f64>| array![-y[0]];
        let prob = ODEProblem::new(f, array![1.0], (0.0, 1000.0));
        let result = solve_adaptive(&prob, &DORMAND_PRINCE45, 0.01, 1e-14, 1e-14);
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
            let f = |_t: f64, y: &Array1<f64>| -y.clone();
            let prob = ODEProblem::new(f, u0, (0.0, 1.0));
            let sol = solve(&prob, &RUNGE_KUTTA_4, dt).unwrap();
            prop_assert_eq!(sol.u.nrows(), n_vars, "number of solution variables should match");
            prop_assert!((sol.t[0] - 0.0).abs() < 1e-10, "first time point should be t0");
            prop_assert!((sol.t[sol.t.len() - 1] - 1.0).abs() < 1e-10, "last time point should be tf");
        }

        #[test]
        fn solve_property_tspan(
            dt in 1e-4f64..0.1f64,
        ) {
            let f = |_t: f64, y: &Array1<f64>| array![-y[0]];
            let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0));
            let sol = solve(&prob, &RUNGE_KUTTA_4, dt).unwrap();
            let n = sol.t.len();
            prop_assert!((sol.t[0] - 0.0).abs() < 1e-10, "first time point should be t0");
            prop_assert!((sol.t[n - 1] - 1.0).abs() < 1e-10, "last time point should be tf");
            for i in 1..n {
                prop_assert!(sol.t[i] > sol.t[i - 1], "time should be monotonically increasing");
            }
        }

        #[test]
        fn solve_adaptive_property(
            atol in 1e-12f64..1e-6f64,
            rtol in 1e-12f64..1e-6f64,
        ) {
            let f = |_t: f64, y: &Array1<f64>| array![-y[0]];
            let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0));
            let sol = solve_adaptive(&prob, &DORMAND_PRINCE45, 0.01, atol, rtol).unwrap();
            prop_assert_eq!(sol.u.nrows(), 1, "should have 1 variable");
            prop_assert!(sol.t.len() > 1, "should produce at least 2 time points");
            prop_assert!((sol.t[0] - 0.0).abs() < 1e-10, "first time point should be t0");
            prop_assert!((sol.t[sol.t.len() - 1] - 1.0).abs() < 1e-10, "last time point should be tf");
        }
    }
}
