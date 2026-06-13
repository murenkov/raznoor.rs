#![allow(missing_docs)]
#![cfg(feature = "parallel")]

use std::sync::Arc;

use ndarray::Array1;
use ndarray::Array2;
use ndarray::array;
use proptest::prelude::*;
use raznoor::{
    AdaptiveODESolver, DORMAND_PRINCE45, EnsembleODEProblem, EnsembleODESolver, Event,
    EventDirection, FixedStepODESolver, RUNGE_KUTTA_4,
};

#[test]
fn batch_fixed_step() {
    let f = |t: f64, u: &Array1<f64>| array![2.0f64.mul_add(t, u[0])];
    let u0 = array![[1.0], [0.5], [0.0]];
    let ensemble = EnsembleODEProblem::new(f, u0, (1.0, 1.1)).unwrap();
    let solver = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
    let results = solver.solve_batch(&ensemble);
    assert_eq!(results.len(), 3);
    for result in &results {
        assert!(result.is_ok());
    }
    let t_len = results[0].as_ref().unwrap().t.len();
    for result in &results {
        assert_eq!(result.as_ref().unwrap().t.len(), t_len);
    }
}

#[test]
fn batch_adaptive() {
    let f = |t: f64, u: &Array1<f64>| array![2.0f64.mul_add(t, u[0])];
    let u0 = array![[1.0], [0.5], [0.0]];
    let ensemble = EnsembleODEProblem::new(f, u0, (1.0, 1.1)).unwrap();
    let solver = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6).unwrap();
    let results = solver.solve_batch(&ensemble);
    assert_eq!(results.len(), 3);
    for result in &results {
        assert!(result.is_ok());
    }
}

#[test]
fn batch_single_member() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let u0 = array![[42.0]];
    let ensemble = EnsembleODEProblem::new(f, u0, (0.0, 1.0)).unwrap();
    let solver = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
    let results = solver.solve_batch(&ensemble);
    assert_eq!(results.len(), 1);
    assert!(results[0].is_ok());
}

#[test]
fn batch_adaptive_single_member() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let u0 = array![[42.0]];
    let ensemble = EnsembleODEProblem::new(f, u0, (0.0, 1.0)).unwrap();
    let solver = AdaptiveODESolver::new(DORMAND_PRINCE45, 0.01, 1e-6, 1e-6).unwrap();
    let results = solver.solve_batch(&ensemble);
    assert_eq!(results.len(), 1);
    assert!(results[0].is_ok());
}

#[test]
fn batch_with_events() {
    let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
    let event = Event::new(
        Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
        true,
        EventDirection::Any,
    );
    let u0 = array![[1.0], [2.0], [3.0]];
    let ensemble = EnsembleODEProblem::new(f, u0, (0.0, 5.0))
        .unwrap()
        .with_events(vec![event]);
    let solver = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
    let results = solver.solve_batch(&ensemble);
    assert_eq!(results.len(), 3);
    for (i, result) in results.iter().enumerate() {
        let sol = result.as_ref().unwrap();
        assert!(
            !sol.events.is_empty(),
            "member {i} should trigger the event"
        );
        let u0_i = ensemble.u0().row(i)[0];
        let expected_t = (u0_i / 0.5).ln();
        assert!(
            (sol.t[sol.t.len() - 1] - expected_t).abs() < 0.01,
            "member {i}: final t={} should be near ln({}/0.5)={expected_t}",
            sol.t[sol.t.len() - 1],
            u0_i,
        );
    }
}

proptest! {
    #[test]
    fn batch_property(
        dt in 1e-4f64..0.5f64,
        n_vars in 1usize..5,
        n_members in 1usize..5,
    ) {
        let f = |_t: f64, u: &Array1<f64>| -u.clone();
        let u0 = Array2::<f64>::ones((n_members, n_vars));
        let ensemble = EnsembleODEProblem::new(f, u0, (0.0, 1.0)).unwrap();
        let solver = FixedStepODESolver::new(RUNGE_KUTTA_4, dt).unwrap();
        let results = solver.solve_batch(&ensemble);
        prop_assert_eq!(results.len(), n_members);
        for result in &results {
            prop_assert!(result.is_ok());
            let sol = result.as_ref().unwrap();
            prop_assert_eq!(sol.u.ncols(), n_vars);
        }
    }
}
