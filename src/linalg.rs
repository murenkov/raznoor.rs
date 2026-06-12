//! Shared linear algebra utilities for implicit ODE solvers.
//!
//! Provides LU factorisation / solve (pivoted Gaussian elimination)
//! and finite-difference Jacobian computation, used by both the
//! IRK and BDF modules.

use ndarray::Array1;
use ndarray::Array2;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::types::RhsODEFn;

/// Compute the finite-difference Jacobian `J = ∂f/∂u` at `(t, u)`.
///
/// Uses second-order central differences with step `h = 1e-6`.
/// The result is stored in `jac` (overwritten).
#[allow(clippy::many_single_char_names)]
pub(crate) fn compute_jacobian<T, F>(jac: &mut Array2<T>, f: &F, t: T, u: &Array1<T>)
where
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
{
    let n_vars = u.len();
    let h = T::from_f64(1e-6).unwrap();
    let two_h = T::from_f64(2.0).unwrap() * h;
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
pub(crate) fn lu_factor<T: Float>(a: &mut Array2<T>, piv: &mut [usize]) {
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
pub(crate) fn lu_solve<T: Float>(lu: &Array2<T>, piv: &[usize], b: &mut Array1<T>) {
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
