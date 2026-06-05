use ndarray::Array1;
use num_traits::Float;
use num_traits::FromPrimitive;
use rayon::prelude::*;

use crate::solver::{AdaptiveODESolver, EnsembleODESolver, FixedStepODESolver, ODESolver};
use crate::types::{EnsembleODEProblem, ODEProblem, ODESolution, SolverError};

fn solve_batch_impl<T, F, S>(
    solver: &S,
    ensemble: &EnsembleODEProblem<T, F>,
) -> Vec<Result<ODESolution<T>, SolverError>>
where
    T: Float + FromPrimitive + Send + Sync,
    F: Fn(T, &Array1<T>) -> Array1<T> + Clone + Send + Sync,
    S: ODESolver<T, F> + Sync,
{
    (0..ensemble.u0().nrows())
        .into_par_iter()
        .map(|i| {
            let u0_i = ensemble.u0().row(i).to_owned();
            let prob = ODEProblem {
                f: ensemble.f().clone(),
                u0: u0_i,
                tspan: ensemble.tspan(),
                events: ensemble.events().to_vec(),
            };
            solver.solve(&prob)
        })
        .collect()
}

impl<T, F> EnsembleODESolver<T, F> for FixedStepODESolver<T>
where
    T: Float + FromPrimitive + Send + Sync,
    F: Fn(T, &Array1<T>) -> Array1<T> + Clone + Send + Sync,
{
    fn solve_batch(
        &self,
        ensemble: &EnsembleODEProblem<T, F>,
    ) -> Vec<Result<ODESolution<T>, SolverError>> {
        solve_batch_impl(self, ensemble)
    }
}

impl<T, F> EnsembleODESolver<T, F> for AdaptiveODESolver<T>
where
    T: Float + FromPrimitive + Send + Sync,
    F: Fn(T, &Array1<T>) -> Array1<T> + Clone + Send + Sync,
{
    fn solve_batch(
        &self,
        ensemble: &EnsembleODEProblem<T, F>,
    ) -> Vec<Result<ODESolution<T>, SolverError>> {
        solve_batch_impl(self, ensemble)
    }
}
