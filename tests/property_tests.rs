#![allow(missing_docs)]

use ndarray::Array1;
use ndarray::array;
use proptest::prelude::*;
use raznoor::{
    AdaptiveODESolver, DORMAND_PRINCE45, FixedStepODESolver, ODEProblem, ODESolver, RUNGE_KUTTA_4,
};

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
