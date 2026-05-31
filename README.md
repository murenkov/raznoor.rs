# raznoor

A Rust library for solving ordinary differential equations (ODEs) using explicit Runge-Kutta methods.

## Features

- Explicit Runge-Kutta methods of orders 1 through 5
- Adaptive embedded Runge-Kutta pairs (Fehlberg45, Dormand–Prince45)
- Event detection (root-finding during integration) with terminal and directional events
- Generic over floating-point types (`f32`, `f64`)
- Error handling via `SolverError` instead of panics

## Usage

Add `raznoor` to your `Cargo.toml`:

```toml
[dependencies]
raznoor = "0.1.0"
```

Example solving `y' = 2x + y` with `y(1) = 1` over `[1.0, 1.1]`:

```rust
use ndarray::array;
use raznoor::{ODEProblem, solve, RUNGE_KUTTA_4};

let f = |x: f64, y: &ndarray::Array1<f64>| array![2.0 * x + y[0]];
let prob = ODEProblem::new(f, array![1.0], (1.0, 1.1));

let sol = solve(&prob, &RUNGE_KUTTA_4, 0.01).unwrap();
for (t, u) in sol.t.iter().zip(sol.u.row(0).iter()) {
    println!("t = {t:.2}, y = {u:.6}");
}
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
