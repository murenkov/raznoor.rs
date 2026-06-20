//! Shared linear algebra utilities for implicit ODE solvers.
//!
//! Provides LU factorisation / solve (pivoted Gaussian elimination)
//! and finite-difference Jacobian computation, used by both the
//! IRK and BDF modules.

use ndarray::Array1;
use ndarray::Array2;
use num_traits::Float;

use crate::types::RhsODEFn;

/// Compute the finite-difference Jacobian `J = ∂f/∂u` at `(t, u)`.
///
/// Uses second-order central differences with caller-provided step `h`.
/// The result is stored in `jac` (overwritten).
#[allow(clippy::many_single_char_names)]
pub fn compute_jacobian<T, F>(jac: &mut Array2<T>, f: &F, t: T, u: &Array1<T>, h: T)
where
    T: Float,
    F: RhsODEFn<T>,
{
    let n_vars = u.len();
    let two_h = h + h;
    let mut u_plus = u.to_owned();
    let mut u_minus = u.to_owned();

    for var in 0..n_vars {
        u_plus[var] = u_plus[var] + h;
        u_minus[var] = u_minus[var] - h;
        let f_plus = f(t, &u_plus);
        let f_minus = f(t, &u_minus);
        for i in 0..n_vars {
            jac[[i, var]] = (f_plus[i] - f_minus[i]) / two_h;
        }
        u_plus[var] = u[var];
        u_minus[var] = u[var];
    }
}

/// LU factorization with partial pivoting (in-place, PA = LU).
///
/// On return, `a` contains the LU factors (L in the strict lower triangle,
/// U in the upper triangle including the diagonal). `piv` receives the
/// row permutation: `piv[k]` is the index of the row that was swapped
/// with row `k` at step `k`.
pub fn lu_factor<T: Float>(a: &mut Array2<T>, piv: &mut [usize]) {
    let n = a.nrows();
    for k in 0..n {
        // Find pivot (largest element in column k, rows k..n-1)
        let mut max_val = T::zero();
        let mut max_row = k;
        for i in k..n {
            let val = a[[i, k]].abs();
            if val > max_val {
                max_val = val;
                max_row = i;
            }
        }
        piv[k] = max_row;

        if max_val == T::zero() {
            continue;
        }

        // Swap rows k and max_row
        if max_row != k {
            for j in 0..n {
                let tmp = a[[k, j]];
                a[[k, j]] = a[[max_row, j]];
                a[[max_row, j]] = tmp;
            }
        }

        // Compute multipliers and update remaining rows
        for i in (k + 1)..n {
            let factor = a[[i, k]] / a[[k, k]];
            a[[i, k]] = factor;
            for j in (k + 1)..n {
                a[[i, j]] = a[[i, j]] - factor * a[[k, j]];
            }
        }
    }
}

/// Solve `A · x = b` using an LU factorisation computed by [`lu_factor`].
///
/// `lu` is the in-place factorised matrix, `piv` is the permutation from
/// `lu_factor`.  `b` is modified in-place to contain the solution `x`.
pub fn lu_solve<T: Float>(lu: &Array2<T>, piv: &[usize], b: &mut Array1<T>) {
    let n = lu.nrows();

    // Apply row permutations
    for k in 0..n {
        let p = piv[k];
        if p != k {
            let tmp = b[k];
            b[k] = b[p];
            b[p] = tmp;
        }
    }

    // Forward substitution: L · y = P · b
    for i in 0..n {
        for j in 0..i {
            b[i] = b[i] - lu[[i, j]] * b[j];
        }
    }

    // Backward substitution: U · x = y
    for i in (0..n).rev() {
        for j in (i + 1)..n {
            b[i] = b[i] - lu[[i, j]] * b[j];
        }
        b[i] = b[i] / lu[[i, i]];
    }
}

#[cfg(test)]
mod tests {
    use ndarray::{Array1, Array2, array};
    use proptest::prelude::*;

    use super::*;

    fn linear_scalar_rhs(_t: f64, u: &Array1<f64>) -> Array1<f64> {
        array![2.0 * u[0]]
    }

    fn nonlinear_scalar_rhs(_t: f64, u: &Array1<f64>) -> Array1<f64> {
        array![u[0].sin()]
    }

    fn linear_2x2_rhs(_t: f64, u: &Array1<f64>) -> Array1<f64> {
        array![(-2.0f64).mul_add(u[0], u[1]), 2.0f64.mul_add(-u[1], u[0])]
    }

    fn nonlinear_2d_rhs(_t: f64, u: &Array1<f64>) -> Array1<f64> {
        array![u[1], -u[0].sin() - u[1]]
    }

    fn max_abs_diff(a: &Array2<f64>, b: &Array2<f64>) -> f64 {
        let mut max = 0.0;
        for i in 0..a.nrows() {
            for j in 0..a.ncols() {
                let diff = (a[[i, j]] - b[[i, j]]).abs();
                if diff > max {
                    max = diff;
                }
            }
        }
        max
    }

    proptest! {
        #[test]
        fn jacobian_linear_scalar(u_val in -5.0f64..5.0f64, h in 1e-6f64..1e-3f64) {
            let u = array![u_val];
            let mut jac_fd = Array2::zeros((1, 1));
            compute_jacobian(&mut jac_fd, &linear_scalar_rhs, 0.0, &u, h);
            let jac_exact = array![[2.0]];
            let diff = max_abs_diff(&jac_fd, &jac_exact);
            prop_assert!(diff < 1e-8, "linear scalar: |J_fd - J_exact| = {} >= 1e-8", diff);
        }

        #[test]
        fn jacobian_nonlinear_scalar(u_val in -5.0f64..5.0f64, h in 1e-6f64..1e-3f64) {
            let u = array![u_val];
            let mut jac_fd = Array2::zeros((1, 1));
            compute_jacobian(&mut jac_fd, &nonlinear_scalar_rhs, 0.0, &u, h);
            let jac_exact = array![[u[0].cos()]];
            let diff = max_abs_diff(&jac_fd, &jac_exact);
            let tol = h.mul_add(h, 1e-9);
            prop_assert!(diff < tol, "nonlinear scalar: |J_fd - J_exact| = {} >= {} (h={})", diff, tol, h);
        }

        #[test]
        fn jacobian_linear_2x2(u0 in -5.0f64..5.0f64, u1 in -5.0f64..5.0f64, h in 1e-6f64..1e-3f64) {
            let u = array![u0, u1];
            let mut jac_fd = Array2::zeros((2, 2));
            compute_jacobian(&mut jac_fd, &linear_2x2_rhs, 0.0, &u, h);
            let jac_exact = array![[-2.0, 1.0], [1.0, -2.0]];
            let diff = max_abs_diff(&jac_fd, &jac_exact);
            prop_assert!(diff < 1e-8, "linear 2x2: |J_fd - J_exact| = {} >= 1e-8", diff);
        }

        #[test]
        fn jacobian_nonlinear_2d(u0 in -2.0f64..2.0f64, u1 in -2.0f64..2.0f64, h in 1e-6f64..1e-3f64) {
            let u = array![u0, u1];
            let mut jac_fd = Array2::zeros((2, 2));
            compute_jacobian(&mut jac_fd, &nonlinear_2d_rhs, 0.0, &u, h);
            let jac_exact = array![[0.0, 1.0], [-u[0].cos(), -1.0]];
            let diff = max_abs_diff(&jac_fd, &jac_exact);
            let tol = h.mul_add(h, 1e-9);
            prop_assert!(diff < tol, "nonlinear 2d: |J_fd - J_exact| = {} >= {} (h={})", diff, tol, h);
        }
    }
}
