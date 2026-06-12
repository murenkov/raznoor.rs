//! Explicit and implicit Runge-Kutta ODE solvers for scalar and system initial value problems.
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
//! use std::sync::Arc;
//! use ndarray::array;
//! use ndarray::Array1;
//! use raznoor::{Event, EventDirection, FixedStepODESolver, ODEProblem, ODESolver, RUNGE_KUTTA_4};
//!
//! let f = |_t: f64, u: &Array1<f64>| array![-u[0]];
//!
//! let event = Event::new(
//!     Arc::new(|_t: f64, u: &Array1<f64>| u[0] - 0.5),
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
pub mod erk;

/// Butcher tableaus and Newton-based solver for implicit Runge-Kutta methods.
pub mod irk;

/// Backward Differentiation Formula (BDF) methods for stiff ODEs.
pub mod bdf;

/// Shared linear algebra utilities (LU factorisation, Jacobian).
pub(crate) mod linalg;

/// Fixed-step and adaptive ODE solvers.
mod solver;

/// Parallel batched ODE solves using rayon.
#[cfg(feature = "parallel")]
pub mod batch;

pub use bdf::{BDF1, BDF2, BDF3, BDF4, BDF5, BDF6, BDFMethod, BDFScratch};
pub use erk::{
    DORMAND_PRINCE45, ExplicitRKScratch, ExplicitRungeKuttaMethod, FEHLBERG45, RUNGE_KUTTA_1,
    RUNGE_KUTTA_2, RUNGE_KUTTA_3, RUNGE_KUTTA_4, RUNGE_KUTTA_5,
};
pub use irk::{
    BACKWARD_EULER, BEULER, CRANK_NICOLSON, GAUSS_LEGENDRE_4, IMPLICIT_MIDPOINT, ImplicitRKScratch,
    ImplicitRungeKuttaMethod, MIDPOINT_IMP, RADAU_IIA_3, RADAU_IIA_5, TRAPEZOIDAL,
};
pub use solver::{
    AdaptiveODESolver, AdaptiveRK, EnsembleODESolver, FixedStepODESolver, FixedStepRK, ODEMethod,
    ODESolver,
};
pub use types::{
    EnsembleODEProblem, Event, EventDirection, EventRecord, ODEProblem, ODESolution, RhsODEFn,
    SolverError,
};
