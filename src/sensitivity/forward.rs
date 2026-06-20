//! Forward sensitivity analysis for ODE systems.
//!
//! Computes the sensitivity `∂u/∂θ` of an ODE solution with respect to model
//! parameters using the forward (tangent linear) sensitivity equations.
//!
//! The augmented ODE system has dimension `n + n × p` where `n` is the number
//! of state variables and `p` is the number of parameters. The augmented state
//! is `[u; vec(S)]` where `S = ∂u/∂θ` is an `n × p` sensitivity matrix.

use std::sync::Arc;

use ndarray::{Array1, Array2, Array3, s};
use num_traits::{Float, FromPrimitive};

use crate::ODESolver;
use crate::linalg::compute_jacobian;
use crate::types::{Event, ODEProblem, ODESolution, SolverError};
use crate::util::validate_initial_condition;

/// Problem definition for forward sensitivity analysis.
///
/// Extends an ODE system with explicit parameters so that the solver can
/// compute the sensitivity `∂u/∂θ` at each time step.
///
/// The right-hand side `f` must have the signature
/// `(t, u, θ) → du/dt`.
///
/// # Fields
///
/// * `f` — The parameterized right-hand side `f(t, u, θ)`.
/// * `u0` — The initial condition vector.
/// * `params` — The parameter vector `θ`.
/// * `tspan` — The time span `(t0, t1)`.
/// * `events` — Events to detect during integration (evaluated on the
///   original state only).
/// * `du0_dp` — Optional initial sensitivity `∂u₀/∂θ`. Defaults to a zero
///   matrix.
#[non_exhaustive]
pub struct ForwardSensitivityProblem<T, F> {
    f: F,
    u0: Array1<T>,
    params: Array1<T>,
    tspan: (T, T),
    events: Vec<Event<T>>,
    du0_dp: Option<Array2<T>>,
}

impl<T, F> ForwardSensitivityProblem<T, F> {
    /// Create a new forward sensitivity problem.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InvalidInitialCondition`] if `u0` contains NaN
    /// or infinite values.
    ///
    /// # Panics
    ///
    /// Panics if `u0` is not in standard (C-order) memory layout.
    pub fn new(f: F, u0: Array1<T>, params: Array1<T>, tspan: (T, T)) -> Result<Self, SolverError>
    where
        T: Float,
    {
        validate_initial_condition(u0.as_slice().unwrap())?;
        Ok(Self {
            f,
            u0,
            params,
            tspan,
            events: Vec::new(),
            du0_dp: None,
        })
    }

    /// Set the events to detect during integration.
    #[must_use]
    pub fn with_events(mut self, events: Vec<Event<T>>) -> Self {
        self.events = events;
        self
    }

    /// Set the initial sensitivity `∂u₀/∂θ`.
    #[must_use]
    pub fn with_du0_dp(mut self, du0_dp: Array2<T>) -> Self {
        self.du0_dp = Some(du0_dp);
        self
    }

    /// Return a reference to the right-hand side function.
    #[must_use]
    pub const fn f(&self) -> &F {
        &self.f
    }

    /// Return a reference to the initial condition vector.
    #[must_use]
    pub const fn u0(&self) -> &Array1<T> {
        &self.u0
    }

    /// Return a reference to the parameter vector.
    #[must_use]
    pub const fn params(&self) -> &Array1<T> {
        &self.params
    }

    /// Return the initial sensitivity matrix, if set.
    #[must_use]
    pub const fn du0_dp(&self) -> Option<&Array2<T>> {
        self.du0_dp.as_ref()
    }

    /// Return a reference to the time span.
    #[must_use]
    pub const fn tspan(&self) -> &(T, T) {
        &self.tspan
    }

    /// Return a slice of the events.
    #[must_use]
    pub fn events(&self) -> &[Event<T>] {
        &self.events
    }
}

/// Solver for forward sensitivity analysis.
///
/// Wraps any [`ODESolver`] (e.g. [`FixedStepODESolver`](crate::FixedStepODESolver)
/// or [`AdaptiveODESolver`](crate::AdaptiveODESolver)) and augments the ODE
/// system to propagate sensitivities alongside the state.
///
/// The augmented system has dimension `n + n × p` where `n` is the state
/// dimension and `p` is the number of parameters. The solver delegates to
/// the inner solver, which sees a larger ODE system.
///
/// # Type parameters
///
/// * `S` — The inner solver type.
///
/// # Example
///
/// ```
/// use ndarray::array;
/// use raznoor::{
///     FixedStepODESolver, ForwardSensitivityProblem, ForwardSensitivitySolver,
///     ODESolver, RUNGE_KUTTA_4,
/// };
///
/// // Parameterized ODE: u' = p * u
/// let f = |t: f64, u: &ndarray::Array1<f64>, p: &ndarray::Array1<f64>| {
///     ndarray::array![p[0] * u[0]]
/// };
///
/// let prob = ForwardSensitivityProblem::new(
///     f,
///     array![1.0],
///     array![0.5],
///     (0.0, 2.0),
/// ).unwrap();
///
/// let inner = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
/// let solver = ForwardSensitivitySolver::new(inner);
/// let result = solver.solve(&prob).unwrap();
///
/// // Access sensitivity ∂u/∂θ at each time step
/// let sens = result.sensitivities();
/// // sens.shape() == (n_times, 1, 1)
/// ```
pub struct ForwardSensitivitySolver<S> {
    inner: S,
}

impl<S> ForwardSensitivitySolver<S> {
    /// Create a new forward sensitivity solver wrapping the given ODE solver.
    #[must_use]
    pub const fn new(inner: S) -> Self {
        Self { inner }
    }
}

impl<S> ForwardSensitivitySolver<S> {
    /// Solve the forward sensitivity problem and return the sensitivities.
    ///
    /// The augmented ODE system (state + sensitivities) is constructed
    /// internally and solved using the wrapped solver. All Jacobians
    /// (`∂f/∂u` and `∂f/∂p`) are approximated via finite differences.
    ///
    /// # Errors
    ///
    /// Returns [`SolverError::InvalidParameters`] if the parameter vector is
    /// empty or the initial sensitivity matrix has the wrong shape.
    ///
    /// Returns [`SolverError::InvalidDiffStep`] if the default finite-difference
    /// step `1e-6` is not representable as `T`.
    ///
    /// Propagates errors from the inner solver (e.g.
    /// [`SolverError::InvalidStepSize`],
    /// [`SolverError::EventError`]).
    ///
    /// # Panics
    ///
    /// Panics if internal array shape assumptions are violated.
    pub fn solve<'a, T, F>(
        &self,
        prob: &'a ForwardSensitivityProblem<T, F>,
    ) -> Result<ForwardSensitivitySolution<T>, SolverError>
    where
        T: Float + FromPrimitive + 'static,
        F: Fn(T, &Array1<T>, &Array1<T>) -> Array1<T>,
        S: ODESolver<T, Box<dyn Fn(T, &Array1<T>) -> Array1<T> + 'a>>,
    {
        let n_vars = prob.u0.len();
        let n_params = prob.params.len();

        if n_params == 0 {
            return Err(SolverError::InvalidParameters);
        }

        if let Some(ref du0_dp) = prob.du0_dp
            && du0_dp.shape() != [n_vars, n_params]
        {
            return Err(SolverError::InvalidParameters);
        }

        let diff_step = T::from_f64(1e-6).ok_or(SolverError::InvalidDiffStep)?;

        // --- Build augmented initial condition ---
        let s0 = prob
            .du0_dp
            .clone()
            .unwrap_or_else(|| Array2::zeros((n_vars, n_params)));
        let aug_u0 = {
            let mut data = Vec::with_capacity(n_vars + n_vars * n_params);
            data.extend(prob.u0.iter().copied());
            data.extend(s0.iter().copied());
            Array1::from_vec(data)
        };

        // --- Build augmented right-hand side ---
        let aug_f = {
            let rhs = &prob.f;
            let params = prob.params.clone();
            let step = diff_step;

            #[allow(clippy::many_single_char_names)]
            move |t: T, aug_u: &Array1<T>| -> Array1<T> {
                let state = aug_u.slice(s![..n_vars]).to_owned();
                let s_slice = aug_u.slice(s![n_vars..]);
                let s_view = s_slice
                    .to_shape((n_vars, n_params))
                    .expect("augmented state tail has shape (n_vars, n_params)");

                let du = rhs(t, &state, &params);

                let mut jac_u = Array2::zeros((n_vars, n_vars));
                {
                    let f_bound = |t: T, u: &Array1<T>| -> Array1<T> { rhs(t, u, &params) };
                    compute_jacobian(&mut jac_u, &f_bound, t, &state, step);
                }

                let mut jac_p = Array2::zeros((n_vars, n_params));
                compute_param_jacobian(&mut jac_p, &rhs, t, &state, &params, step);

                let ds = jac_u.dot(&s_view) + &jac_p;
                let ds_vec = ds
                    .into_shape_with_order(n_vars * n_params)
                    .expect("sensitivity data has correct size for flattening");

                let mut result = Vec::with_capacity(n_vars + n_vars * n_params);
                result.extend(du.iter().copied());
                result.extend(ds_vec.iter().copied());
                Array1::from_vec(result)
            }
        };

        // --- Wrap events to extract original state ---
        let wrapped_events: Vec<Event<T>> = prob
            .events
            .iter()
            .map(|event| {
                let g_clone = Arc::clone(&event.g);
                let g_wrapped = Arc::new(move |t: T, aug_u: &Array1<T>| -> T {
                    let event_state = aug_u.slice(s![..n_vars]).to_owned();
                    g_clone(t, &event_state)
                });
                Event {
                    g: g_wrapped,
                    terminal: event.terminal,
                    direction: event.direction,
                }
            })
            .collect();

        // --- Create augmented ODE problem and solve ---
        let aug_prob = ODEProblem::new(
            Box::new(aug_f) as Box<dyn Fn(T, &Array1<T>) -> Array1<T> + 'a>,
            aug_u0,
            prob.tspan,
        )?
        .with_events(wrapped_events);

        let aug_sol = self.inner.solve(&aug_prob)?;

        Ok(ForwardSensitivitySolution {
            inner: aug_sol,
            n_vars,
            n_params,
        })
    }
}

/// The result of a forward sensitivity analysis.
///
/// Wraps the underlying [`ODESolution`] of the augmented system and provides
/// convenient access to the state trajectories and sensitivity matrices.
#[derive(Debug, Clone)]
pub struct ForwardSensitivitySolution<T> {
    /// The solution of the augmented ODE system.
    inner: ODESolution<T>,
    /// Number of state variables.
    n_vars: usize,
    /// Number of parameters.
    n_params: usize,
}

impl<T> ForwardSensitivitySolution<T> {
    /// Return the state trajectories as a matrix of shape `(n_times, n_vars)`.
    #[must_use]
    pub fn states(&self) -> Array2<T>
    where
        T: Clone,
    {
        self.inner.u.slice(s![.., ..self.n_vars]).to_owned()
    }

    /// Return the sensitivity trajectories as a 3D array of shape
    /// `(n_times, n_vars, n_params)`.
    ///
    /// Entry `[k, i, j]` is `∂u_i/∂θ_j` at time step `k`.
    ///
    /// # Panics
    ///
    /// Panics if the underlying solution data is not contiguous (indicates
    /// a bug).
    #[must_use]
    pub fn sensitivities(&self) -> Array3<T>
    where
        T: Clone,
    {
        let n_times = self.inner.u.nrows();
        let sens_data = self.inner.u.slice(s![.., self.n_vars..]).to_owned();
        sens_data
            .into_shape_with_order((n_times, self.n_vars, self.n_params))
            .expect("sensitivity data is contiguous and can be reshaped to 3D")
    }

    /// Return the sensitivity matrix at a specific time step.
    ///
    /// Returns an `n_vars × n_params` matrix `S` where `S[i, j] = ∂u_i/∂θ_j`.
    ///
    /// # Panics
    ///
    /// Panics if `step` is out of bounds of the solution time points.
    #[must_use]
    pub fn sensitivity_at(&self, step: usize) -> Array2<T>
    where
        T: Clone,
    {
        let row = self.inner.u.row(step);
        let sens_slice = row.slice(s![self.n_vars..]).to_owned();
        sens_slice
            .into_shape_with_order((self.n_vars, self.n_params))
            .expect("sensitivity slice has correct size for reshaping")
    }

    /// Return a reference to the underlying augmented ODE solution.
    #[must_use]
    pub const fn inner(&self) -> &ODESolution<T> {
        &self.inner
    }

    /// Consume the wrapper and return the underlying augmented solution.
    #[must_use]
    pub fn into_inner(self) -> ODESolution<T> {
        self.inner
    }

    /// Return the number of state variables.
    #[must_use]
    pub const fn n_vars(&self) -> usize {
        self.n_vars
    }

    /// Return the number of parameters.
    #[must_use]
    pub const fn n_params(&self) -> usize {
        self.n_params
    }
}

// --- Private helpers ---

/// Compute the parameter Jacobian `∂f/∂θ` via central finite differences.
///
/// Evaluates `f(t, u, θ ± h)` for each parameter `θ_j` and fills `jac`
/// (shape `(n, p)`).
#[allow(clippy::many_single_char_names)]
fn compute_param_jacobian<T, F>(
    jac: &mut Array2<T>,
    f: &F,
    t: T,
    u: &Array1<T>,
    params: &Array1<T>,
    h: T,
) where
    T: Float,
    F: Fn(T, &Array1<T>, &Array1<T>) -> Array1<T>,
{
    let n = u.len();
    let p = params.len();
    let two_h = h + h;
    let mut p_plus = params.to_owned();
    let mut p_minus = params.to_owned();
    for j in 0..p {
        p_plus[j] = p_plus[j] + h;
        p_minus[j] = p_minus[j] - h;
        let f_plus = f(t, u, &p_plus);
        let f_minus = f(t, u, &p_minus);
        for i in 0..n {
            jac[[i, j]] = (f_plus[i] - f_minus[i]) / two_h;
        }
        p_plus[j] = params[j];
        p_minus[j] = params[j];
    }
}
