# raznoor

A Rust library for solving ordinary differential equations (ODEs) using explicit Runge-Kutta, implicit Runge-Kutta, and BDF methods.

## Features

- Explicit Runge-Kutta methods of orders 1 through 5
- Adaptive embedded Runge-Kutta pairs (Fehlberg45, Dormand–Prince45)
- **Implicit** Runge-Kutta methods: Backward Euler, Implicit Midpoint, Crank–Nicolson, Gauss–Legendre 4, Radau IIA (orders 3 and 5)
- **BDF** (Backward Differentiation Formula) methods of orders 1–6 (linear multistep, A(α)-stable)
- Implicit methods use simplified Newton iteration with finite-difference Jacobian (no user-provided Jacobian required)
- Event detection (root-finding during integration) with terminal and directional events
- Generic over floating-point types (`f32`, `f64`)
- Error handling via `SolverError` instead of panics
- **Parallel** ensemble solving via `rayon` (optional `parallel` feature)
- **Forward sensitivity analysis** (parameter sensitivities via state augmentation)

## Usage

Add `raznoor` to your `Cargo.toml`:

```toml
[dependencies]
raznoor = "0.3.0"
```

Example solving `u' = 2t + u` with `u(1) = 1` over `[1.0, 1.1]`:

```rust
use ndarray::array;
use raznoor::{FixedStepODESolver, ODEProblem, RUNGE_KUTTA_4};

let f = |t: f64, u: &ndarray::Array1<f64>| array![2.0 * t + u[0]];
let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1)).unwrap();

let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap().solve(&prob).unwrap();
for (t, u) in sol.t.iter().zip(sol.u.column(0).iter()) {
    println!("t = {t:.2}, u = {u:.6}");
}
```

## Parallel ensemble solving

Enable parallel solving of multiple ODE problems with the `parallel` feature:

```toml
[dependencies]
raznoor = { version = "0.2.0", features = ["parallel"] }
```

[`EnsembleODEProblem`] groups initial conditions into a 2‑D array of shape
`(n_members, n_vars)` so you can solve the same ODE system for many starting points.
The [`EnsembleODESolver`] trait (implemented by both [`FixedStepODESolver`] and
[`AdaptiveODESolver`]) distributes work across the rayon thread pool:

```rust
use ndarray::array;
use ndarray::Array1;
use raznoor::{EnsembleODEProblem, EnsembleODESolver, FixedStepODESolver, RUNGE_KUTTA_4};

let f = |t: f64, u: &Array1<f64>| array![2.0 * t + u[0]];
let u0 = array![[1.0], [0.5], [0.0]];
let ensemble = EnsembleODEProblem::new(f, u0, (1.0, 1.1)).unwrap();
let solver = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap();
let results = solver.solve_batch(&ensemble);

assert_eq!(results.len(), 3);
assert!(results.iter().all(|r| r.is_ok()));
```

This is especially useful for **Monte Carlo simulations**, parameter sweeps, and
ensemble forecasting where you need to explore many initial conditions with the
same dynamics.

## Sensitivity analysis

Compute parameter sensitivities `∂u/∂θ` alongside the ODE solution using forward sensitivity analysis:

```rust
use ndarray::array;
use raznoor::{
    FixedStepODESolver, ForwardSensitivityProblem, ForwardSensitivitySolver, RUNGE_KUTTA_4,
};

// Parameterised ODE: u' = p * u
let f = |_t: f64, u: &ndarray::Array1<f64>, p: &ndarray::Array1<f64>| array![p[0] * u[0]];

let prob = ForwardSensitivityProblem::new(f, array![1.0], array![0.5], (0.0, 2.0)).unwrap();

let solver = ForwardSensitivitySolver::new(
    FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap(),
);
let result = solver.solve(&prob).unwrap();

// Trajectories and sensitivities at each time step
let states = result.states();
let sensitivities = result.sensitivities();
```

Any [`ODESolver`] backed solver ([`FixedStepODESolver`], [`AdaptiveODESolver`]) can be
wrapped — the sensitivity system is solved via state augmentation.

## Extensibility

New method families can be added by implementing the
[`ODEMethod`](https://docs.rs/raznoor/latest/raznoor/trait.ODEMethod.html) trait:

```rust
use ndarray::{Array1, array};
use raznoor::{FixedStepODESolver, ODEMethod, ODEProblem, RhsODEFn};

struct MyCustomMethod;

impl ODEMethod<f64> for MyCustomMethod {
    type Scratch = ();
    fn prepare(&self, _n_vars: usize) -> Self::Scratch { () }
    fn step_with_scratch<F: RhsODEFn<f64>>(
        &self, f: &F, t: f64, dt: f64, u: &Array1<f64>, _scratch: &mut Self::Scratch,
    ) -> (Array1<f64>, Array1<f64>) {
        let k = f(t, u);
        let u_new = ndarray::Zip::from(u).and(&k).map_collect(|&uv, &kv| uv + dt * kv);
        let du_new = f(t + dt, &u_new);
        (u_new, du_new)
    }
}

let prob = ODEProblem::new(|t, u| array![-u[0]], array![1.0], (0.0, 1.0)).unwrap();
let sol = FixedStepODESolver::new(MyCustomMethod, 0.01).unwrap().solve(&prob).unwrap();
```

## Algorithms

### Explicit Runge–Kutta

| Variant                   | Order | Description                     |
|---------------------------|-------|---------------------------------|
| `RUNGE_KUTTA_1`           | 1     | Forward Euler method            |
| `RUNGE_KUTTA_2`           | 2     | Midpoint (modified Euler) method|
| `RUNGE_KUTTA_3`           | 3     | Kutta's third-order method      |
| `RUNGE_KUTTA_4`           | 4     | Classic fourth-order RK method  |
| `RUNGE_KUTTA_5`           | 5     | Butcher's fifth-order method    |
| `FEHLBERG45`              | 4(5)  | Fehlberg embedded RK pair       |
| `DORMAND_PRINCE45`        | 4(5)  | Dormand–Prince embedded RK pair |

### Implicit Runge–Kutta

| Variant                   | Order | Description                     |
|---------------------------|-------|---------------------------------|
| `BACKWARD_EULER`          | 1     | Backward Euler (L-stable)       |
| `IMPLICIT_MIDPOINT`       | 2     | Implicit midpoint (symplectic)  |
| `CRANK_NICOLSON`          | 2     | Crank–Nicolson / trapezoidal    |
| `GAUSS_LEGENDRE_4`        | 4     | Two-stage Gauss–Legendre        |
| `RADAU_IIA_3`             | 3     | Two-stage Radau IIA (L-stable)  |
| `RADAU_IIA_5`             | 5     | Three-stage Radau IIA (L-stable)|

### BDF (Backward Differentiation Formula)

| Variant                   | Order | Description                     |
|---------------------------|-------|---------------------------------|
| `BDF1`                    | 1     | BDF order 1 (L-stable)          |
| `BDF2`                    | 2     | BDF order 2 (L-stable)          |
| `BDF3`                    | 3     | BDF order 3 (A(α)-stable)       |
| `BDF4`                    | 4     | BDF order 4                     |
| `BDF5`                    | 5     | BDF order 5                     |
| `BDF6`                    | 6     | BDF order 6                     |

## License

MIT
