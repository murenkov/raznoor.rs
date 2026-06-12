//! Backward Differentiation Formula (BDF) methods for stiff ODEs.
//!
//! BDF methods are linear multistep methods of orders 1–6. They are
//! A(α)-stable for orders 1–6 and L-stable for orders 1–2. BDF1 is
//! equivalent to backward Euler.
//!
//! At each step a nonlinear system is solved via simplified Newton
//! iteration with a finite-difference Jacobian, reusing the same
//! linear algebra infrastructure as the implicit Runge–Kutta module.
//!
//! # Startup
//!
//! Since BDF methods are multistep, the first few steps use
//! progressively lower orders (1, 2, …, target) to build up the
//! state history. This is transparent to the caller.
//!
//! # Example
//!
//! ```
//! use ndarray::array;
//! use raznoor::{BDF2, FixedStepODESolver, ODEProblem, ODESolver};
//!
//! let f = |_t: f64, u: &ndarray::Array1<f64>| array![-u[0]];
//! let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
//! let sol = FixedStepODESolver::new(BDF2, 0.1).unwrap().solve(&prob).unwrap();
//! let u_last = sol.u[[0, sol.t.len() - 1]];
//! let u_exact = (-1.0_f64).exp();
//! assert!((u_last - u_exact).abs() < 0.01);
//! ```

use ndarray::Array1;
use ndarray::Array2;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::irk;
use crate::solver::ODEMethod;
use crate::types::RhsODEFn;

// ---------------------------------------------------------------------------
// BDF coefficients (standard form)
// ---------------------------------------------------------------------------
//
// Σ_{j=0}^{k} α_j · y_{n+1−k+j} = h · β · f(t_{n+1}, y_{n+1})
//
// with α_k = 1.  The tables below store α_0 … α_{k−1} and β for k = 1…6.
// ---------------------------------------------------------------------------

const BDF_ALPHA: &[&[f64]] = &[
    &[-1.0_f64],                              // k = 1
    &[1.0_f64 / 3.0_f64, -4.0_f64 / 3.0_f64], // k = 2
    &[
        -2.0_f64 / 11.0_f64,
        9.0_f64 / 11.0_f64,
        -18.0_f64 / 11.0_f64,
    ], // k = 3
    &[
        3.0_f64 / 25.0_f64,
        -16.0_f64 / 25.0_f64,
        36.0_f64 / 25.0_f64,
        -48.0_f64 / 25.0_f64,
    ], // k = 4
    &[
        -12.0_f64 / 137.0_f64,
        75.0_f64 / 137.0_f64,
        -200.0_f64 / 137.0_f64,
        300.0_f64 / 137.0_f64,
        -300.0_f64 / 137.0_f64,
    ], // k = 5
    &[
        10.0_f64 / 147.0_f64,
        -72.0_f64 / 147.0_f64,
        225.0_f64 / 147.0_f64,
        -400.0_f64 / 147.0_f64,
        450.0_f64 / 147.0_f64,
        -360.0_f64 / 147.0_f64,
    ], // k = 6
];

const BDF_BETA: &[f64] = &[
    1.0_f64,
    2.0_f64 / 3.0_f64,
    6.0_f64 / 11.0_f64,
    12.0_f64 / 25.0_f64,
    60.0_f64 / 137.0_f64,
    60.0_f64 / 147.0_f64,
];

/// Maximum order supported by this implementation.
const BDF_MAX_ORDER: usize = 6;

const NEWTON_MAX_ITER: usize = 15;
const NEWTON_TOL: f64 = 1e-12;

// ---------------------------------------------------------------------------
// BDF method definition
// ---------------------------------------------------------------------------

/// A Backward Differentiation Formula method of a given order (1–6).
///
/// BDF methods are linear multistep methods well suited for stiff ODEs.
/// Orders 1–2 are L-stable; orders 3–6 are A(α)-stable with decreasing
/// stability angles.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future
/// releases.
#[derive(Debug, Clone, Copy)]
#[non_exhaustive]
pub struct BDFMethod<T> {
    /// The order of the BDF formula (1–6).
    pub order: usize,
    /// Phantom data to satisfy the type parameter.
    _phantom: std::marker::PhantomData<T>,
}

impl<T> BDFMethod<T> {
    /// Create a BDF method of the given order (clamped to 1–6).
    #[must_use]
    pub fn new(order: usize) -> Self {
        Self {
            order: order.clamp(1, BDF_MAX_ORDER),
            _phantom: std::marker::PhantomData,
        }
    }
}

// ---------------------------------------------------------------------------
// BDF constants (order 1–6)
// ---------------------------------------------------------------------------

/// BDF method of order 1 (equivalent to backward Euler).
pub const BDF1: BDFMethod<f64> = BDFMethod {
    order: 1,
    _phantom: std::marker::PhantomData,
};

/// BDF method of order 2.
pub const BDF2: BDFMethod<f64> = BDFMethod {
    order: 2,
    _phantom: std::marker::PhantomData,
};

/// BDF method of order 3.
pub const BDF3: BDFMethod<f64> = BDFMethod {
    order: 3,
    _phantom: std::marker::PhantomData,
};

/// BDF method of order 4.
pub const BDF4: BDFMethod<f64> = BDFMethod {
    order: 4,
    _phantom: std::marker::PhantomData,
};

/// BDF method of order 5.
pub const BDF5: BDFMethod<f64> = BDFMethod {
    order: 5,
    _phantom: std::marker::PhantomData,
};

/// BDF method of order 6.
pub const BDF6: BDFMethod<f64> = BDFMethod {
    order: 6,
    _phantom: std::marker::PhantomData,
};

// ---------------------------------------------------------------------------
// Scratch buffers
// ---------------------------------------------------------------------------

/// Pre-allocated scratch buffers for a BDF integration step.
///
/// Created once by [`BDFMethod::prepare`] and reused on every step.
#[derive(Debug, Clone)]
pub struct BDFScratch<T> {
    /// Ring-buffer of past states (oldest first).
    /// Contains at most `max_history` entries (`target_order` − 1).
    pub(crate) history: Vec<Array1<T>>,
    /// Number of steps taken so far (used for startup order ramp-up).
    pub(crate) steps_taken: usize,
    /// Finite-difference Jacobian matrix `J = ∂f/∂u`, shape `(n, n)`.
    pub(crate) jac: Array2<T>,
    /// Newton system matrix `M = I − h·β·J`, shape `(n, n)`.
    pub(crate) system: Array2<T>,
    /// LU permutation vector, length `n`.
    pub(crate) pivot: Vec<usize>,
    /// Flat work vector for Newton residual, length `n`.
    pub(crate) work: Array1<T>,
}

impl<T: Float> BDFScratch<T> {
    /// Maximum number of past states to retain in the history ring buffer.
    fn max_history(target_order: usize) -> usize {
        target_order.saturating_sub(1)
    }
}

// ---------------------------------------------------------------------------
// ODEMethod trait implementation
// ---------------------------------------------------------------------------

impl<T: Float + FromPrimitive> ODEMethod<T> for BDFMethod<f64> {
    type Scratch = BDFScratch<T>;

    fn prepare(&self, n_vars: usize) -> Self::Scratch {
        let order = self.order.clamp(1, BDF_MAX_ORDER);
        BDFScratch {
            history: Vec::with_capacity(BDFScratch::<T>::max_history(order)),
            steps_taken: 0,
            jac: Array2::zeros((n_vars, n_vars)),
            system: Array2::zeros((n_vars, n_vars)),
            pivot: vec![0; n_vars],
            work: Array1::zeros(n_vars),
        }
    }

    #[allow(clippy::many_single_char_names)]
    fn step_with_scratch<F: RhsODEFn<T>>(
        &self,
        f: &F,
        t: T,
        dt: T,
        u: &Array1<T>,
        scratch: &mut Self::Scratch,
    ) -> Array1<T> {
        let target_order = self.order.clamp(1, BDF_MAX_ORDER);
        let n_vars = u.len();

        // Effective order during startup ramp-up.
        let k = scratch.steps_taken + 1;
        let k = if k > target_order { target_order } else { k };

        // --- 1. Build ψ = − Σ_{j=0}^{k−1} α_j · y_{n−k+1+j} ---
        let alpha = BDF_ALPHA[k - 1];
        let beta = BDF_BETA[k - 1];
        let history_len = scratch.history.len();

        let mut psi = Array1::<T>::zeros(n_vars);
        for (j, &a_f64) in alpha.iter().enumerate().take(k) {
            let a = T::from_f64(a_f64).unwrap();
            let y = if j < k - 1 {
                // y_{n−k+1+j} lives in history.
                // history[0] = y_0, …, history[history_len−1] = y_{n−1}.
                // The window starts at offset = j + history_len + 1 − k.
                // Reordered to avoid usize underflow (k ≤ history_len + 1).
                &scratch.history[j + history_len + 1 - k]
            } else {
                // y_n = current state passed as `u`.
                u
            };
            ndarray::Zip::from(&mut psi)
                .and(y)
                .for_each(|p, &v| *p = *p - a * v);
        }

        // --- 2. Compute Jacobian J = ∂f/∂u at (t, u) ---
        irk::compute_jacobian(&mut scratch.jac, f, t, u);

        // --- 3. Build Newton system matrix M = I − h·β·J ---
        let hbeta = dt * T::from_f64(beta).unwrap();
        scratch.system.fill(T::zero());
        for i in 0..n_vars {
            for p in 0..n_vars {
                let val = -hbeta * scratch.jac[[i, p]];
                scratch.system[[i, p]] = if i == p { T::one() + val } else { val };
            }
        }

        // --- 4. LU factorize M ---
        irk::lu_factor(&mut scratch.system, &mut scratch.pivot);

        // --- 5. Newton iteration ---
        // Initial guess: u_new = u (the state from the previous step).
        let mut u_new = u.clone();
        let tol = T::from_f64(NEWTON_TOL).unwrap();
        let mut converged = false;

        for _ in 0..NEWTON_MAX_ITER {
            // Residual: r = u_new − h·β·f(t+dt, u_new) − ψ
            let f_val = f(t + dt, &u_new);
            let mut max_res = T::zero();
            for i in 0..n_vars {
                let r = u_new[i] - hbeta * f_val[i] - psi[i];
                scratch.work[i] = r;
                let rabs = r.abs();
                if rabs > max_res {
                    max_res = rabs;
                }
            }

            if max_res < tol {
                converged = true;
                break;
            }

            // Solve M · Δ = −r   (work contains the residual).
            for entry in &mut scratch.work {
                *entry = -(*entry);
            }
            irk::lu_solve(&scratch.system, &scratch.pivot, &mut scratch.work);

            // Update u_new += Δ
            for i in 0..n_vars {
                u_new[i] = u_new[i] + scratch.work[i];
            }
        }

        if !converged {
            // Fallback: fixed-point (Picard) iteration.
            for _ in 0..20 {
                let f_val = f(t + dt, &u_new);
                let mut max_res = T::zero();
                for i in 0..n_vars {
                    let r = u_new[i] - hbeta * f_val[i] - psi[i];
                    scratch.work[i] = r;
                    let rabs = r.abs();
                    if rabs > max_res {
                        max_res = rabs;
                    }
                }
                if max_res < tol {
                    break;
                }
                // Fixed-point update: u_new = ψ + h·β·f(t+dt, u_new)
                for i in 0..n_vars {
                    u_new[i] = psi[i] + hbeta * f_val[i];
                }
            }
        }

        // --- 6. Update scratch state ---
        // Push the just-completed state (u, i.e. y_n) into the history.
        // max_history = target_order - 1, so the history holds at most
        // that many past states (the current state is always passed as `u`).
        if scratch.history.len() > BDFScratch::<T>::max_history(target_order) {
            // Drop oldest entry.
            scratch.history.remove(0);
        }
        scratch.history.push(u.clone());
        scratch.steps_taken += 1;

        u_new
    }
}
