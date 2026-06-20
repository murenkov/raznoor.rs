//! Shared utility functions used across the crate.

use num_traits::Float;

use crate::types::SolverError;

/// Validate that no initial condition entry is NaN or infinite.
pub fn validate_initial_condition<T: Float>(u0: &[T]) -> Result<(), SolverError> {
    for &val in u0 {
        if val.is_nan() || val.is_infinite() {
            return Err(SolverError::InvalidInitialCondition);
        }
    }
    Ok(())
}
