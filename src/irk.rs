//! Butcher tableaus and solver for implicit Runge–Kutta (IRK) methods.
//!
//! IRK methods require solving a system of nonlinear equations at each step
//! (the stage equations). This module implements a simplified Newton iteration
//! with a finite-difference Jacobian, so that no additional user input is needed
//! beyond the right-hand side function `f(t, u)`.
//!
//! # Example
//!
//! ```
//! use ndarray::array;
//! use raznoor::{FixedStepODESolver, ODEProblem, ODESolver, BACKWARD_EULER};
//!
//! let f = |t: f64, u: &ndarray::Array1<f64>| array![-u[0]];
//! let prob = ODEProblem::new(f, array![1.0], (0.0, 1.0)).unwrap();
//! let sol = FixedStepODESolver::new(BACKWARD_EULER, 0.1).unwrap().solve(&prob).unwrap();
//! let u_last = sol.u[[sol.t.len() - 1, 0]];
//! let u_exact = (-1.0_f64).exp();
//! assert!((u_last - u_exact).abs() < 0.05);
//! ```

use ndarray::Array1;
use ndarray::Array2;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::linalg;
use crate::solver::ODEMethod;
use crate::types::RhsODEFn;

/// An implicit Runge–Kutta method defined by its Butcher tableau coefficients.
///
/// Unlike explicit methods, the `a` matrix is full (not strictly
/// lower-triangular), requiring a system of nonlinear equations to be solved
/// at each step.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future
/// releases.
#[derive(Debug, Clone, Copy)]
#[non_exhaustive]
pub struct ImplicitRungeKuttaMethod<T: 'static> {
    /// Runge-Kutta matrix (full square matrix) — `a[i][j]` for stage `i`,
    /// previous stage `j`.
    pub a: &'static [&'static [T]],
    /// Weights for the solution.
    pub b: &'static [T],
    /// Node positions.
    pub c: &'static [T],
    /// The order `p` of this method.
    pub order: usize,
}

/// Backward Euler method (first-order, L-stable, A-stable).
///
/// The simplest implicit RK method: a single stage, unconditionally stable
/// for stiff problems.
///
/// # Example
///
/// ```
/// use raznoor::BACKWARD_EULER;
/// assert_eq!(BACKWARD_EULER.b.len(), 1);
/// assert!((BACKWARD_EULER.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// ```
pub const BACKWARD_EULER: ImplicitRungeKuttaMethod<f64> = ImplicitRungeKuttaMethod {
    a: &[&[1.0_f64]],
    b: &[1.0_f64],
    c: &[1.0_f64],
    order: 1,
};

/// Implicit midpoint method (second-order, A-stable, symplectic).
///
/// A one-stage Gauss–Legendre method, suitable for Hamiltonian systems.
///
/// # Example
///
/// ```
/// use raznoor::IMPLICIT_MIDPOINT;
/// assert_eq!(IMPLICIT_MIDPOINT.b.len(), 1);
/// assert!((IMPLICIT_MIDPOINT.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// ```
pub const IMPLICIT_MIDPOINT: ImplicitRungeKuttaMethod<f64> = ImplicitRungeKuttaMethod {
    a: &[&[0.5_f64]],
    b: &[1.0_f64],
    c: &[0.5_f64],
    order: 2,
};

#[rustfmt::skip]
const CN_A: &[&[f64]] = &[
    &[0.0_f64, 0.0_f64],
    &[0.5_f64, 0.5_f64],
];

/// Crank–Nicolson method (second-order, A-stable).
///
/// Also known as the implicit trapezoidal rule. Widely used for diffusion
/// equations and parabolic PDEs.
///
/// # Example
///
/// ```
/// use raznoor::CRANK_NICOLSON;
/// assert_eq!(CRANK_NICOLSON.b.len(), 2);
/// assert!((CRANK_NICOLSON.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// ```
pub const CRANK_NICOLSON: ImplicitRungeKuttaMethod<f64> = ImplicitRungeKuttaMethod {
    a: CN_A,
    b: &[0.5_f64, 0.5_f64],
    c: &[0.0_f64, 1.0_f64],
    order: 2,
};

#[rustfmt::skip]
#[allow(clippy::unreadable_literal)]
const GL2_A: &[&[f64]] = &[
    &[ 0.25_f64,                    -0.038_675_134_594_812_87_f64],
    &[ 0.538_675_134_594_812_9_f64,  0.25_f64                    ],
];

/// Two-stage Gauss–Legendre method (fourth-order, A-stable, symplectic).
///
/// The highest-order A-stable method for two stages. Symplectic property
/// makes it ideal for Hamiltonian systems.
///
/// # Example
///
/// ```
/// use raznoor::GAUSS_LEGENDRE_4;
/// assert_eq!(GAUSS_LEGENDRE_4.b.len(), 2);
/// assert!((GAUSS_LEGENDRE_4.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// ```
pub const GAUSS_LEGENDRE_4: ImplicitRungeKuttaMethod<f64> = ImplicitRungeKuttaMethod {
    a: GL2_A,
    b: &[0.5_f64, 0.5_f64],
    #[allow(clippy::unreadable_literal)]
    c: &[0.211_324_865_405_187_13_f64, 0.788_675_134_594_812_9_f64],
    order: 4,
};

#[rustfmt::skip]
const RADAU_IIA_3_A: &[&[f64]] = &[
    &[ 5.0_f64 / 12.0_f64, -1.0_f64 / 12.0_f64],
    &[           0.75_f64,            0.25_f64],
];

/// Radau IIA method with two stages (third-order, L-stable, stiffly accurate).
///
/// L-stable (damping at infinity), making it well-suited for stiff problems
/// and index-1 differential-algebraic equations.
///
/// # Example
///
/// ```
/// use raznoor::RADAU_IIA_3;
/// assert_eq!(RADAU_IIA_3.b.len(), 2);
/// assert!((RADAU_IIA_3.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// ```
pub const RADAU_IIA_3: ImplicitRungeKuttaMethod<f64> = ImplicitRungeKuttaMethod {
    a: RADAU_IIA_3_A,
    b: &[0.75_f64, 0.25_f64],
    c: &[1.0_f64 / 3.0_f64, 1.0_f64],
    order: 3,
};

#[rustfmt::skip]
#[allow(clippy::excessive_precision, clippy::unreadable_literal)]
const RADAU_IIA_5_A: &[&[f64]] = &[
    &[
        0.196_815_477_223_660_44_f64,
        -0.065_535_425_850_198_38_f64,
        0.023_770_974_348_220_15_f64,
    ],
    &[
        0.394_424_314_739_087_3_f64,
        0.292_073_411_665_228_43_f64,
        -0.041_548_752_125_997_92_f64,
    ],
    &[
        0.376_403_062_700_467_25_f64,
        0.512_485_826_188_421_6_f64,
        1.0_f64 / 9.0_f64,
    ],
];

/// Radau IIA method with three stages (fifth-order, L-stable, stiffly accurate).
///
/// The three-stage Radau IIA is a widely-used high-order L-stable method
/// for stiff ODEs and DAEs.
///
/// # Example
///
/// ```
/// use raznoor::RADAU_IIA_5;
/// assert_eq!(RADAU_IIA_5.b.len(), 3);
/// assert!((RADAU_IIA_5.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// ```
pub const RADAU_IIA_5: ImplicitRungeKuttaMethod<f64> = ImplicitRungeKuttaMethod {
    a: RADAU_IIA_5_A,
    b: &[
        0.376_403_062_700_467_25_f64,
        0.512_485_826_188_421_6_f64,
        1.0_f64 / 9.0_f64,
    ],
    #[allow(clippy::unreadable_literal)]
    c: &[
        0.155_051_025_721_682_22_f64,
        0.644_948_974_278_317_8_f64,
        1.0_f64,
    ],
    order: 5,
};

/// Pre-allocated scratch buffers for an implicit Runge–Kutta step.
///
/// Created once by [`ImplicitRungeKuttaMethod::prepare`] and reused on every
/// step to avoid per-step allocations.
#[derive(Debug, Clone)]
pub struct ImplicitRKScratch<T> {
    /// Stage derivative vectors `k_1 … k_s` (also serve as Newton iterate).
    pub(crate) ks: Vec<Array1<T>>,
    /// Per-stage argument buffer for RHS evaluation.
    pub(crate) args: Vec<Array1<T>>,
    /// Jacobian matrix `J = ∂f/∂u`, shape `(n, n)`.
    pub(crate) jac: Array2<T>,
    /// System matrix `M = I_{s·n} - dt · (A ⊗ J)`, shape `(s·n, s·n)`.
    pub(crate) system: Array2<T>,
    /// LU permutation vector, length `s·n`.
    pub(crate) pivot: Vec<usize>,
    /// Flat work vector of length `s·n` for the Newton residual.
    pub(crate) work: Array1<T>,
}

const NEWTON_MAX_ITER: usize = 15;

impl<T: Float + FromPrimitive> ODEMethod<T> for ImplicitRungeKuttaMethod<f64> {
    type Scratch = ImplicitRKScratch<T>;

    fn order(&self) -> usize {
        self.order
    }

    fn prepare(&self, n_vars: usize) -> Self::Scratch {
        let num_stages = self.c.len();
        let sn = num_stages * n_vars;
        ImplicitRKScratch {
            ks: vec![Array1::zeros(n_vars); num_stages],
            args: vec![Array1::zeros(n_vars); num_stages],
            jac: Array2::zeros((n_vars, n_vars)),
            system: Array2::zeros((sn, sn)),
            pivot: vec![0; sn],
            work: Array1::zeros(sn),
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
    ) -> (Array1<T>, Array1<T>) {
        // Simplified Newton iteration for the stage equations.
        // The stage equations are:
        //   k_i = f(t + c_i·dt,  u + dt·Σ_j a_ij·k_j)
        //
        // The residual for Newton:
        //   r_i = k_i - f(t + c_i·dt,  u + dt·Σ_j a_ij·k_j)

        let method = self;
        let num_stages = method.c.len();
        let n_vars = u.len();

        // --- 1. Initial guess: k_i = f(t, u) for all i ---
        let f0 = f(t, u);
        for stage in 0..num_stages {
            scratch.ks[stage].assign(&f0);
        }

        // --- 2. Finite-difference Jacobian J at (t, u) ---
        let scale = u.iter().fold(T::one(), |m, &x| T::max(m, x.abs()));
        let h = T::from_f64(1e-8).unwrap() * scale;
        linalg::compute_jacobian(&mut scratch.jac, f, t, u, h);

        // --- 3. Build the system matrix M = I - dt · (A ⊗ J) ---
        build_system_matrix(method, &mut scratch.system, dt, &scratch.jac);

        // --- 4. LU factorize M ---
        linalg::lu_factor(&mut scratch.system, &mut scratch.pivot);

        // --- 5. Newton iteration ---
        let tol = T::from_f64(1e-12).unwrap();
        let mut converged = false;

        for _ in 0..NEWTON_MAX_ITER {
            // Evaluate stages and build residual (flat in scratch.work)
            let max_res = compute_stage_residual(
                method,
                f,
                t,
                dt,
                u,
                &scratch.ks,
                &mut scratch.args,
                &mut scratch.work,
            );

            if max_res < tol {
                converged = true;
                break;
            }

            // Solve M · Δk = -work  (work contains the residual).
            // The matrix M is stored in scratch.system (LU factorized).
            for entry in &mut scratch.work {
                *entry = -(*entry);
            }

            // Apply permutation and solve
            linalg::lu_solve(&scratch.system, &scratch.pivot, &mut scratch.work);

            // Update k_i += Δk_i  (Δk is unpacked from scratch.work)
            for stage in 0..num_stages {
                for var in 0..n_vars {
                    scratch.ks[stage][var] =
                        scratch.ks[stage][var] + scratch.work[stage * n_vars + var];
                }
            }
        }

        if !converged {
            // Fall back to Picard iteration if Newton fails to converge.
            // This can happen for highly stiff problems with aggressive step sizes.
            for _ in 0..20 {
                let max_res = compute_stage_residual(
                    method,
                    f,
                    t,
                    dt,
                    u,
                    &scratch.ks,
                    &mut scratch.args,
                    &mut scratch.work,
                );
                if max_res < tol {
                    break;
                }
                // Picard update: set k_i = f_i (the just-evaluated RHS).
                // After compute_stage_residual, scratch.work contains k_i - f_i,
                // and we want k_i = f_i, so new_k_i = k_i - r_i.
                for stage in 0..num_stages {
                    for var in 0..n_vars {
                        scratch.ks[stage][var] =
                            scratch.ks[stage][var] - scratch.work[stage * n_vars + var];
                    }
                }
            }
        }

        // --- 6. Compute u_{n+1} = u_n + dt · Σ_i b_i · k_i ---
        let mut du = Array1::<T>::zeros(n_vars);
        for (stage, weight) in method.b.iter().enumerate() {
            let coeff = dt * T::from_f64(*weight).unwrap();
            if coeff != T::zero() {
                ndarray::Zip::from(&mut du)
                    .and(&scratch.ks[stage])
                    .for_each(|d, &k| *d = *d + coeff * k);
            }
        }
        ndarray::Zip::from(&mut du)
            .and(u)
            .for_each(|d, &uv| *d = uv + *d);
        let du_new = f(t + dt, &du);
        (du, du_new)
    }
}

/// Build the system matrix `M = I_{s·n} - dt · (A ⊗ J)`.
///
/// `M` has shape `(s·n, s·n)` and is stored in `system` (overwritten).
fn build_system_matrix<T>(
    method: &ImplicitRungeKuttaMethod<f64>,
    system: &mut Array2<T>,
    dt: T,
    jac: &Array2<T>,
) where
    T: Float + FromPrimitive,
{
    let num_stages = method.c.len();
    let n_vars = jac.nrows();
    system.fill(T::zero());

    for i in 0..num_stages {
        for j in 0..num_stages {
            let coeff = -dt * T::from_f64(method.a[i][j]).unwrap();
            for p in 0..n_vars {
                let row = i * n_vars + p;
                for q in 0..n_vars {
                    let col = j * n_vars + q;
                    let val = if i == j && p == q {
                        T::one() + coeff * jac[[p, q]]
                    } else {
                        coeff * jac[[p, q]]
                    };
                    system[[row, col]] = val;
                }
            }
        }
    }
}

/// Evaluate all stages and pack the Newton residual into `r_flat`.
///
/// After calling this, `r_flat[p] = k_i[p] - f_i[p]` where `i = p / n`.
/// Returns the infinity norm of the residual (maximum absolute value).
#[allow(clippy::too_many_arguments, clippy::many_single_char_names)]
fn compute_stage_residual<T, F>(
    method: &ImplicitRungeKuttaMethod<f64>,
    f: &F,
    t: T,
    dt: T,
    u: &Array1<T>,
    ks: &[Array1<T>],
    args: &mut [Array1<T>],
    r_flat: &mut Array1<T>,
) -> T
where
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
{
    let num_stages = method.c.len();
    let n_vars = u.len();
    let mut max_res = T::zero();

    for i in 0..num_stages {
        // Build the argument:  u + dt · Σ_j a_ij · k_j
        args[i].assign(u);
        for (j, k_j) in ks.iter().enumerate().take(num_stages) {
            let coeff = T::from_f64(method.a[i][j]).unwrap();
            if coeff != T::zero() {
                ndarray::Zip::from(&mut args[i])
                    .and(k_j)
                    .for_each(|a, &k| *a = *a + dt * coeff * k);
            }
        }

        // Evaluate RHS
        let t_stage = t + T::from_f64(method.c[i]).unwrap() * dt;
        let fi = f(t_stage, &args[i]);

        // Residual r_i = k_i - f_i
        for var in 0..n_vars {
            let r = ks[i][var] - fi[var];
            r_flat[i * n_vars + var] = r;
            let rabs = r.abs();
            if rabs > max_res {
                max_res = rabs;
            }
        }
    }

    max_res
}
