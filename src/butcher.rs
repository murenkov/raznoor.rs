use ndarray::{Array1, Array2};
use num_traits::Float;
use num_traits::FromPrimitive;

type Matrix<T> = Array2<T>;

/// A Butcher tableau describing an explicit Runge–Kutta method.
#[derive(Debug, Clone)]
pub struct ButcherTableau<T: Float> {
    /// Runge-Kutta matrix (pairwise stage couplings).
    pub a: Matrix<T>,
    /// Higher-order weights for the solution.
    pub b: Array1<T>,
    /// Lower-order embedded weights for error estimation (adaptive stepping).
    pub b_embedded: Array1<T>,
    /// Node positions.
    pub c: Array1<T>,
}

/// Build a [`ButcherTableau`] from coefficient slices.
///
/// # Parameters
/// * `a_coeffs` — Row slices of the Runge–Kutta matrix (padded with zeros to form a square).
/// * `b_coeffs` — Higher-order weight coefficients.
/// * `b_embedded_coeffs` — Lower-order embedded weight coefficients (for adaptive error estimation).
/// * `c_coeffs` — Node position coefficients.
pub fn build_tableau<T>(
    a_coeffs: &[&[f64]],
    b_coeffs: &[f64],
    b_embedded_coeffs: &[f64],
    c_coeffs: &[f64],
) -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    let cast = |x: f64| -> T {
        FromPrimitive::from_f64(x).expect("Butcher tableau coefficients are valid f64 constants")
    };

    let n_stages = c_coeffs.len();
    let mut a_arr = Vec::with_capacity(n_stages * n_stages);
    for row in a_coeffs {
        for &val in *row {
            a_arr.push(cast(val));
        }
    }
    let a = Matrix::from_shape_vec((n_stages, n_stages), a_arr)
        .expect("Butcher tableau A matrix is square");

    let b: Array1<T> = b_coeffs.iter().map(|&x| cast(x)).collect();
    let b_embedded: Array1<T> = b_embedded_coeffs.iter().map(|&x| cast(x)).collect();
    let c: Array1<T> = c_coeffs.iter().map(|&x| cast(x)).collect();

    ButcherTableau {
        a,
        b,
        b_embedded,
        c,
    }
}

/// Returns the Butcher tableau for the first-order explicit Runge-Kutta method (Euler's method).
pub fn erk1<T>() -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    build_tableau(&[&[0.0]], &[1.0], &[1.0], &[0.0])
}

/// Returns the Butcher tableau for the second-order explicit Runge-Kutta method (midpoint method).
pub fn erk2<T>() -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    build_tableau(
        &[&[0.0, 0.0], &[1.0, 0.0]],
        &[0.5, 0.5],
        &[0.5, 0.5],
        &[0.0, 1.0],
    )
}

/// Returns the Butcher tableau for the third-order explicit Runge-Kutta method (Kutta's method).
pub fn erk3<T>() -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    build_tableau(
        &[&[0.0, 0.0, 0.0], &[0.5, 0.0, 0.0], &[-1.0, 2.0, 0.0]],
        &[1.0 / 6.0, 2.0 / 3.0, 1.0 / 6.0],
        &[1.0 / 6.0, 2.0 / 3.0, 1.0 / 6.0],
        &[0.0, 0.5, 1.0],
    )
}

/// Returns the Butcher tableau for the classical fourth-order explicit Runge-Kutta method (RK4).
pub fn erk4<T>() -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    build_tableau(
        &[
            &[0.0, 0.0, 0.0, 0.0],
            &[0.5, 0.0, 0.0, 0.0],
            &[0.0, 0.5, 0.0, 0.0],
            &[0.0, 0.0, 1.0, 0.0],
        ],
        &[1.0 / 6.0, 1.0 / 3.0, 1.0 / 3.0, 1.0 / 6.0],
        &[1.0 / 6.0, 1.0 / 3.0, 1.0 / 3.0, 1.0 / 6.0],
        &[0.0, 0.5, 0.5, 1.0],
    )
}

/// Returns the Butcher tableau for Butcher's fifth-order explicit Runge-Kutta method.
pub fn erk5<T>() -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    build_tableau(
        &[
            &[0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            &[1.0 / 4.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            &[1.0 / 8.0, 1.0 / 8.0, 0.0, 0.0, 0.0, 0.0],
            &[0.0, 0.0, 1.0 / 2.0, 0.0, 0.0, 0.0],
            &[3.0 / 16.0, -3.0 / 8.0, 3.0 / 8.0, 9.0 / 16.0, 0.0, 0.0],
            &[
                -3.0 / 7.0,
                8.0 / 7.0,
                6.0 / 7.0,
                -12.0 / 7.0,
                8.0 / 7.0,
                0.0,
            ],
        ],
        &[
            7.0 / 90.0,
            0.0,
            32.0 / 90.0,
            12.0 / 90.0,
            32.0 / 90.0,
            7.0 / 90.0,
        ],
        &[
            7.0 / 90.0,
            0.0,
            32.0 / 90.0,
            12.0 / 90.0,
            32.0 / 90.0,
            7.0 / 90.0,
        ],
        &[0.0, 1.0 / 4.0, 1.0 / 4.0, 1.0 / 2.0, 3.0 / 4.0, 1.0],
    )
}

/// Returns the Butcher tableau for Fehlberg's embedded 4(5) method (RKF45).
pub fn fehlberg45<T>() -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    build_tableau(
        &[
            &[0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            &[1.0 / 4.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            &[3.0 / 32.0, 9.0 / 32.0, 0.0, 0.0, 0.0, 0.0],
            &[
                1932.0 / 2197.0,
                -7200.0 / 2197.0,
                7296.0 / 2197.0,
                0.0,
                0.0,
                0.0,
            ],
            &[
                439.0 / 216.0,
                -8.0,
                3680.0 / 513.0,
                -845.0 / 4104.0,
                0.0,
                0.0,
            ],
            &[
                -8.0 / 27.0,
                2.0,
                -3544.0 / 2565.0,
                1859.0 / 4104.0,
                -11.0 / 40.0,
                0.0,
            ],
        ],
        &[
            16.0 / 135.0,
            0.0,
            6656.0 / 12825.0,
            28561.0 / 56430.0,
            -9.0 / 50.0,
            2.0 / 55.0,
        ],
        &[
            25.0 / 216.0,
            0.0,
            1408.0 / 2565.0,
            2197.0 / 4104.0,
            -1.0 / 5.0,
            0.0,
        ],
        &[0.0, 1.0 / 4.0, 3.0 / 8.0, 12.0 / 13.0, 1.0, 1.0 / 2.0],
    )
}

/// Returns the Butcher tableau for the Dormand–Prince embedded 4(5) method (DOPRI54).
pub fn dormand_prince45<T>() -> ButcherTableau<T>
where
    T: Float + FromPrimitive,
{
    build_tableau(
        &[
            &[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            &[1.0 / 5.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            &[3.0 / 40.0, 9.0 / 40.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            &[44.0 / 45.0, -56.0 / 15.0, 32.0 / 9.0, 0.0, 0.0, 0.0, 0.0],
            &[
                19372.0 / 6561.0,
                -25360.0 / 2187.0,
                64448.0 / 6561.0,
                -212.0 / 729.0,
                0.0,
                0.0,
                0.0,
            ],
            &[
                9017.0 / 3168.0,
                -355.0 / 33.0,
                46732.0 / 5247.0,
                49.0 / 176.0,
                -5103.0 / 18656.0,
                0.0,
                0.0,
            ],
            &[
                35.0 / 384.0,
                0.0,
                500.0 / 1113.0,
                125.0 / 192.0,
                -2187.0 / 6784.0,
                11.0 / 84.0,
                0.0,
            ],
        ],
        &[
            35.0 / 384.0,
            0.0,
            500.0 / 1113.0,
            125.0 / 192.0,
            -2187.0 / 6784.0,
            11.0 / 84.0,
            0.0,
        ],
        &[
            5179.0 / 57600.0,
            0.0,
            7571.0 / 16695.0,
            393.0 / 640.0,
            -92097.0 / 339200.0,
            187.0 / 2100.0,
            1.0 / 40.0,
        ],
        &[0.0, 1.0 / 5.0, 3.0 / 10.0, 4.0 / 5.0, 8.0 / 9.0, 1.0, 1.0],
    )
}
