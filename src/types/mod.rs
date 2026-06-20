/// ODE solver error types.
pub mod error;
/// Event detection types (event functions, directions, records).
pub mod event;
/// ODE problem and ensemble problem definitions.
pub mod problem;
/// ODE solution struct with dense output support.
pub mod solution;

/// Trait alias for the ODE right-hand side function `f(t, u)`.
///
/// Defines the signature `f(t, u) -> u'` for a system of ODEs where `u` is the
/// state vector and `u'` is its time derivative.
///
/// This trait is automatically implemented for all closures and function items
/// matching the signature `Fn(T, &Array1<T>) -> Array1<T>`.
pub trait RhsODEFn<T>: Fn(T, &ndarray::Array1<T>) -> ndarray::Array1<T> {}

impl<T, F> RhsODEFn<T> for F where F: Fn(T, &ndarray::Array1<T>) -> ndarray::Array1<T> {}

pub use error::SolverError;
pub use event::{Event, EventDirection, EventRecord};
pub use problem::{EnsembleODEProblem, ODEProblem};
pub use solution::ODESolution;
