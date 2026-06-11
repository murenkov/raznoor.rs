# raznoor

A Rust library for solving ordinary differential equations (ODEs) using explicit and implicit Runge-Kutta methods.

## Features

- Explicit Runge-Kutta methods of orders 1 through 5
- Adaptive embedded Runge-Kutta pairs (Fehlberg45, Dormand–Prince45)
- **Implicit** Runge-Kutta methods: Backward Euler, Implicit Midpoint, Crank–Nicolson, Gauss–Legendre 4, Radau IIA (orders 3 and 5)
- Implicit methods use simplified Newton iteration with finite-difference Jacobian (no user-provided Jacobian required)
- Event detection (root-finding during integration) with terminal and directional events
- Generic over floating-point types (`f32`, `f64`)
- Error handling via `SolverError` instead of panics

## Usage

Add `raznoor` to your `Cargo.toml`:

```toml
[dependencies]
raznoor = "0.2.0"
```

Example solving `u' = 2t + u` with `u(1) = 1` over `[1.0, 1.1]`:

```rust
use ndarray::array;
use raznoor::{FixedStepODESolver, ODEProblem, RUNGE_KUTTA_4};

let f = |t: f64, u: &ndarray::Array1<f64>| array![2.0 * t + u[0]];
let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1)).unwrap();

let sol = FixedStepODESolver::new(RUNGE_KUTTA_4, 0.01).unwrap().solve(&prob).unwrap();
for (t, u) in sol.t.iter().zip(sol.u.row(0).iter()) {
    println!("t = {t:.2}, u = {u:.6}");
}
```

## Extensibility

New method families (e.g. implicit Runge–Kutta, BDF) can be added by implementing the
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
    ) -> Array1<f64> {
        let k = f(t, u);
        ndarray::Zip::from(u).and(&k).map_collect(|&uv, &kv| uv + dt * kv)
    }
}

let prob = ODEProblem::new(|t, u| array![-u[0]], array![1.0], (0.0, 1.0)).unwrap();
let sol = FixedStepODESolver::new(MyCustomMethod, 0.01).unwrap().solve(&prob).unwrap();
```

## Algorithms

| Variant                   | Order | Description                     |
|---------------------------|-------|---------------------------------|
| `RUNGE_KUTTA_1`           | 1     | Forward Euler method            |
| `RUNGE_KUTTA_2`           | 2     | Midpoint (modified Euler) method|
| `RUNGE_KUTTA_3`           | 3     | Kutta's third-order method      |
| `RUNGE_KUTTA_4`           | 4     | Classic fourth-order RK method  |
| `RUNGE_KUTTA_5`           | 5     | Butcher's fifth-order method    |
| `FEHLBERG45`              | 4(5)  | Fehlberg embedded RK pair       |
| `DORMAND_PRINCE45`        | 4(5)  | Dormand–Prince embedded RK pair |

## License

MIT
