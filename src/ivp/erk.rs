/// An explicit Runge–Kutta method defined by its Butcher tableau coefficients.
///
/// This struct is `#[non_exhaustive]`; new fields may be added in future releases.
///
/// Stores coefficients as static slices so that well-known methods can be
/// provided as `const` values.
#[derive(Debug, Clone, Copy)]
#[non_exhaustive]
pub struct ExplicitRungeKuttaMethod<T: 'static> {
    /// Runge-Kutta matrix (row slices of the lower-triangular part).
    pub a: &'static [&'static [T]],
    /// Higher-order weights for the solution.
    pub b: &'static [T],
    /// Lower-order embedded weights for error estimation (adaptive stepping).
    pub b_hat: &'static [T],
    /// Node positions.
    pub c: &'static [T],
    /// The (lower) order `p` of this method.
    pub order: usize,
}

#[rustfmt::skip]
const RK1_A: &[&[f64]] = &[
    &[0.0],
];

/// Explicit Euler method (first-order Runge–Kutta).
///
/// # Example
///
/// ```
/// use raznoor::RUNGE_KUTTA_1;
/// // First-order method: single stage, b coefficients sum to 1
/// assert_eq!(RUNGE_KUTTA_1.b.len(), 1);
/// assert!((RUNGE_KUTTA_1.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// // Non-adaptive method: b and b_hat are identical
/// assert_eq!(RUNGE_KUTTA_1.b, RUNGE_KUTTA_1.b_hat);
/// ```
pub const RUNGE_KUTTA_1: ExplicitRungeKuttaMethod<f64> = ExplicitRungeKuttaMethod {
    a: RK1_A,
    b: &[1.0],
    b_hat: &[1.0],
    c: &[0.0],
    order: 1,
};

#[rustfmt::skip]
const RK2_A: &[&[f64]] = &[
    &[0.0, 0.0],
    &[1.0, 0.0],
];

/// Explicit midpoint method (second-order Runge–Kutta).
///
/// # Example
///
/// ```
/// use raznoor::RUNGE_KUTTA_2;
/// // Second-order method: 2 stages, b coefficients sum to 1
/// assert_eq!(RUNGE_KUTTA_2.b.len(), 2);
/// assert!((RUNGE_KUTTA_2.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// assert_eq!(RUNGE_KUTTA_2.b, RUNGE_KUTTA_2.b_hat);
/// ```
pub const RUNGE_KUTTA_2: ExplicitRungeKuttaMethod<f64> = ExplicitRungeKuttaMethod {
    a: RK2_A,
    b: &[0.5, 0.5],
    b_hat: &[0.5, 0.5],
    c: &[0.0, 1.0],
    order: 2,
};

#[rustfmt::skip]
const RK3_A: &[&[f64]] = &[
    &[ 0.0, 0.0, 0.0],
    &[ 0.5, 0.0, 0.0],
    &[-1.0, 2.0, 0.0],
];

/// Kutta's third-order Runge–Kutta method.
///
/// # Example
///
/// ```
/// use raznoor::RUNGE_KUTTA_3;
/// // Third-order method: 3 stages, b coefficients sum to 1
/// assert_eq!(RUNGE_KUTTA_3.b.len(), 3);
/// assert!((RUNGE_KUTTA_3.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// assert_eq!(RUNGE_KUTTA_3.b, RUNGE_KUTTA_3.b_hat);
/// ```
pub const RUNGE_KUTTA_3: ExplicitRungeKuttaMethod<f64> = ExplicitRungeKuttaMethod {
    a: RK3_A,
    b: &[1.0 / 6.0, 2.0 / 3.0, 1.0 / 6.0],
    b_hat: &[1.0 / 6.0, 2.0 / 3.0, 1.0 / 6.0],
    c: &[0.0, 0.5, 1.0],
    order: 3,
};

#[rustfmt::skip]
const RK4_A: &[&[f64]] = &[
    &[0.0, 0.0, 0.0, 0.0],
    &[0.5, 0.0, 0.0, 0.0],
    &[0.0, 0.5, 0.0, 0.0],
    &[0.0, 0.0, 1.0, 0.0],
];

/// Classical fourth-order Runge–Kutta method (RK4).
///
/// # Example
///
/// ```
/// use raznoor::RUNGE_KUTTA_4;
/// // Fourth-order method: 4 stages, b coefficients sum to 1
/// assert_eq!(RUNGE_KUTTA_4.b.len(), 4);
/// assert!((RUNGE_KUTTA_4.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// assert_eq!(RUNGE_KUTTA_4.b, RUNGE_KUTTA_4.b_hat);
/// ```
pub const RUNGE_KUTTA_4: ExplicitRungeKuttaMethod<f64> = ExplicitRungeKuttaMethod {
    a: RK4_A,
    b: &[1.0 / 6.0, 1.0 / 3.0, 1.0 / 3.0, 1.0 / 6.0],
    b_hat: &[1.0 / 6.0, 1.0 / 3.0, 1.0 / 3.0, 1.0 / 6.0],
    c: &[0.0, 0.5, 0.5, 1.0],
    order: 4,
};

#[rustfmt::skip]
const RK5_A: &[&[f64]] = &[
    &[        0.0,        0.0,       0.0,         0.0,       0.0, 0.0],
    &[  1.0 / 4.0,        0.0,       0.0,         0.0,       0.0, 0.0],
    &[  1.0 / 8.0,  1.0 / 8.0,       0.0,         0.0,       0.0, 0.0],
    &[        0.0,        0.0, 1.0 / 2.0,         0.0,       0.0, 0.0],
    &[ 3.0 / 16.0, -3.0 / 8.0, 3.0 / 8.0,  9.0 / 16.0,       0.0, 0.0],
    &[ -3.0 / 7.0,  8.0 / 7.0, 6.0 / 7.0, -12.0 / 7.0, 8.0 / 7.0, 0.0],
];

/// Butcher's fifth-order Runge–Kutta method.
///
/// # Example
///
/// ```
/// use raznoor::RUNGE_KUTTA_5;
/// // Fifth-order method: 6 stages, b coefficients sum to 1
/// assert_eq!(RUNGE_KUTTA_5.b.len(), 6);
/// assert!((RUNGE_KUTTA_5.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// assert_eq!(RUNGE_KUTTA_5.b, RUNGE_KUTTA_5.b_hat);
/// ```
pub const RUNGE_KUTTA_5: ExplicitRungeKuttaMethod<f64> = ExplicitRungeKuttaMethod {
    a: RK5_A,
    b: &[
        7.0 / 90.0,
        0.0,
        32.0 / 90.0,
        12.0 / 90.0,
        32.0 / 90.0,
        7.0 / 90.0,
    ],
    b_hat: &[
        7.0 / 90.0,
        0.0,
        32.0 / 90.0,
        12.0 / 90.0,
        32.0 / 90.0,
        7.0 / 90.0,
    ],
    c: &[0.0, 1.0 / 4.0, 1.0 / 4.0, 1.0 / 2.0, 3.0 / 4.0, 1.0],
    order: 5,
};

#[rustfmt::skip]
const FEHLBERG45_A: &[&[f64]] = &[
    &[            0.0,              0.0,              0.0,             0.0,          0.0, 0.0],
    &[      1.0 / 4.0,              0.0,              0.0,             0.0,          0.0, 0.0],
    &[     3.0 / 32.0,       9.0 / 32.0,              0.0,             0.0,          0.0, 0.0],
    &[1932.0 / 2197.0, -7200.0 / 2197.0,  7296.0 / 2197.0,             0.0,          0.0, 0.0],
    &[  439.0 / 216.0,             -8.0,   3680.0 / 513.0, -845.0 / 4104.0,          0.0, 0.0],
    &[    -8.0 / 27.0,              2.0, -3544.0 / 2565.0, 1859.0 / 4104.0, -11.0 / 40.0, 0.0],
];

/// Fehlberg's embedded 4(5) method (RKF45).
///
/// # Example
///
/// ```
/// use raznoor::FEHLBERG45;
/// // Embedded 4(5) method: 6 stages, b coefficients sum to 1
/// assert_eq!(FEHLBERG45.b.len(), 6);
/// assert!((FEHLBERG45.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// // Adaptive method: b and b_hat are distinct
/// assert_ne!(FEHLBERG45.b, FEHLBERG45.b_hat);
/// ```
pub const FEHLBERG45: ExplicitRungeKuttaMethod<f64> = ExplicitRungeKuttaMethod {
    a: FEHLBERG45_A,
    b: &[
        16.0 / 135.0,
        0.0,
        6656.0 / 12825.0,
        28561.0 / 56430.0,
        -9.0 / 50.0,
        2.0 / 55.0,
    ],
    b_hat: &[
        25.0 / 216.0,
        0.0,
        1408.0 / 2565.0,
        2197.0 / 4104.0,
        -1.0 / 5.0,
        0.0,
    ],
    c: &[0.0, 1.0 / 4.0, 3.0 / 8.0, 12.0 / 13.0, 1.0, 1.0 / 2.0],
    order: 4,
};

#[rustfmt::skip]
const DORMAND_PRINCE45_A: &[&[f64]] = &[
    &[             0.0,               0.0,              0.0,            0.0,               0.0,         0.0, 0.0],
    &[       1.0 / 5.0,               0.0,              0.0,            0.0,               0.0,         0.0, 0.0],
    &[      3.0 / 40.0,        9.0 / 40.0,              0.0,            0.0,               0.0,         0.0, 0.0],
    &[     44.0 / 45.0,      -56.0 / 15.0,       32.0 / 9.0,            0.0,               0.0,         0.0, 0.0],
    &[19372.0 / 6561.0, -25360.0 / 2187.0, 64448.0 / 6561.0, -212.0 / 729.0,               0.0,         0.0, 0.0],
    &[ 9017.0 / 3168.0,     -355.0 / 33.0, 46732.0 / 5247.0,   49.0 / 176.0, -5103.0 / 18656.0,         0.0, 0.0],
    &[    35.0 / 384.0,               0.0,   500.0 / 1113.0,  125.0 / 192.0,  -2187.0 / 6784.0, 11.0 / 84.0, 0.0],
];

/// Dormand–Prince embedded 4(5) method (DOPRI54).
///
/// # Example
///
/// ```
/// use raznoor::DORMAND_PRINCE45;
/// // Embedded 4(5) method: 7 stages, b coefficients sum to 1
/// assert_eq!(DORMAND_PRINCE45.b.len(), 7);
/// assert!((DORMAND_PRINCE45.b.iter().sum::<f64>() - 1.0).abs() < 1e-15);
/// // Adaptive method: b and b_hat are distinct
/// assert_ne!(DORMAND_PRINCE45.b, DORMAND_PRINCE45.b_hat);
/// ```
pub const DORMAND_PRINCE45: ExplicitRungeKuttaMethod<f64> = ExplicitRungeKuttaMethod {
    a: DORMAND_PRINCE45_A,
    b: &[
        35.0 / 384.0,
        0.0,
        500.0 / 1113.0,
        125.0 / 192.0,
        -2187.0 / 6784.0,
        11.0 / 84.0,
        0.0,
    ],
    b_hat: &[
        5179.0 / 57600.0,
        0.0,
        7571.0 / 16695.0,
        393.0 / 640.0,
        -92097.0 / 339_200.0,
        187.0 / 2100.0,
        1.0 / 40.0,
    ],
    c: &[0.0, 1.0 / 5.0, 3.0 / 10.0, 4.0 / 5.0, 8.0 / 9.0, 1.0, 1.0],
    order: 4,
};

use ndarray::Array1;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::solver::ODEMethod;
use crate::types::RhsODEFn;

/// Pre-allocated scratch buffers for an explicit Runge–Kutta method.
///
/// Created once by [`ExplicitRungeKuttaMethod::prepare`] and reused on every
/// step to avoid per-step allocations.
#[derive(Debug, Clone)]
pub struct ExplicitRKScratch<T> {
    /// Stage derivative vectors `k_1 … k_s`.
    pub(crate) ks: Vec<Array1<T>>,
    /// Temporary argument buffer used when computing each stage.
    pub(crate) arg: Array1<T>,
    /// Buffered weighted combination `∑ b[i]·ks[i]`.
    du: Array1<T>,
    /// Pre-computed `b - b_hat` coefficients for error estimation.
    b_diff: Vec<f64>,
}

impl<T: Float + FromPrimitive> ODEMethod<T> for ExplicitRungeKuttaMethod<f64> {
    type Scratch = ExplicitRKScratch<T>;

    fn prepare(&self, n_vars: usize) -> Self::Scratch {
        let b_diff: Vec<f64> = self
            .b
            .iter()
            .zip(self.b_hat.iter())
            .map(|(&b, &bh)| b - bh)
            .collect();
        ExplicitRKScratch {
            ks: vec![Array1::zeros(n_vars); self.c.len()],
            arg: Array1::zeros(n_vars),
            du: Array1::zeros(n_vars),
            b_diff,
        }
    }

    fn step_with_scratch<F: RhsODEFn<T>>(
        &self,
        f: &F,
        t: T,
        dt: T,
        u: &Array1<T>,
        scratch: &mut Self::Scratch,
    ) -> (Array1<T>, Array1<T>) {
        compute_stages(f, t, dt, u, self, scratch);
        weighted_sum_into(&scratch.ks, self.b, &mut scratch.du);
        let mut out = Array1::zeros(u.len());
        ndarray::Zip::from(&mut out)
            .and(u)
            .and(&scratch.du)
            .for_each(|r, &uv, &duv| *r = uv + dt * duv);
        let du_new = f(t + dt, &out);
        (out, du_new)
    }

    fn step_with_error_with_scratch<F: RhsODEFn<T>>(
        &self,
        f: &F,
        t: T,
        dt: T,
        u: &Array1<T>,
        scratch: &mut Self::Scratch,
    ) -> (Array1<T>, Array1<T>, Array1<T>) {
        compute_stages(f, t, dt, u, self, scratch);
        weighted_sum_into(&scratch.ks, self.b, &mut scratch.du);
        let delta = weighted_sum(&scratch.ks, &scratch.b_diff);
        let mut u_new = Array1::zeros(u.len());
        ndarray::Zip::from(&mut u_new)
            .and(u)
            .and(&scratch.du)
            .for_each(|r, &uv, &duv| *r = uv + dt * duv);
        let du_new = f(t + dt, &u_new);
        (u_new, du_new, delta)
    }

    fn supports_adaptive(&self) -> bool {
        self.b != self.b_hat
    }

    fn order(&self) -> usize {
        self.order
    }
}

/// Fill `scratch.ks[m]` with `f(t + c[m]*dt, u + dt*∑ a[m][j]·k[j])`.
fn compute_stages<T, F>(
    f: &F,
    t: T,
    dt: T,
    u: &Array1<T>,
    method: &ExplicitRungeKuttaMethod<f64>,
    scratch: &mut ExplicitRKScratch<T>,
) where
    T: Float + FromPrimitive,
    F: RhsODEFn<T>,
{
    for m in 0..method.c.len() {
        scratch.arg.assign(u);
        for (j, k) in scratch.ks.iter().enumerate() {
            let coeff = T::from_f64(method.a[m][j]).unwrap();
            if coeff != T::zero() {
                ndarray::Zip::from(&mut scratch.arg)
                    .and(k)
                    .for_each(|a, &kv| *a = *a + dt * coeff * kv);
            }
        }
        scratch.ks[m] = f(t + T::from_f64(method.c[m]).unwrap() * dt, &scratch.arg);
    }
}

/// Write the weighted sum `∑ weights[m] · ks[m]` into `out`.
fn weighted_sum_into<T: Float + FromPrimitive>(
    ks: &[Array1<T>],
    weights: &[f64],
    out: &mut Array1<T>,
) {
    out.fill(T::zero());
    for (m, k) in ks.iter().enumerate() {
        let coeff = T::from_f64(weights[m]).unwrap();
        if coeff != T::zero() {
            ndarray::Zip::from(&mut *out)
                .and(k)
                .for_each(|s, &kv| *s = *s + coeff * kv);
        }
    }
}

/// Compute the weighted sum `∑ weights[m] · ks[m]`.
fn weighted_sum<T: Float + FromPrimitive>(ks: &[Array1<T>], weights: &[f64]) -> Array1<T> {
    let n = ks[0].len();
    let mut sum = Array1::<T>::zeros(n);
    for (m, k) in ks.iter().enumerate() {
        let coeff = T::from_f64(weights[m]).unwrap();
        if coeff != T::zero() {
            ndarray::Zip::from(&mut sum)
                .and(k)
                .for_each(|s, &kv| *s = *s + coeff * kv);
        }
    }
    sum
}
