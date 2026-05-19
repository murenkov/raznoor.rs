# raznur

A Rust library for solving ordinary differential equations (ODEs) using explicit Runge-Kutta methods.

## Features

- First-order explicit Runge-Kutta (Euler's method)
- Second-order explicit Runge-Kutta (midpoint method)
- Fourth-order explicit Runge-Kutta (classic RK4)
- Generic over floating-point types (`f32`, `f64`)
- Error handling via `SolverError` instead of panics

## Usage

Add `raznur` to your `Cargo.toml`:

```toml
[dependencies]
raznur = "0.1.0"
```

Example solving `y' = 2x + y` with `y(1) = 1` over `[1.0, 1.1]`:

```rust
use raznur::{ODEProblem, DEAlgorithm, solve};

let fun = |x: f64, y: f64| 2.0 * x + y;
let prob = ODEProblem {
    f: fun,
    u0: 1.0,
    tspan: (1.0, 1.1),
};

let sol = solve(&prob, DEAlgorithm::ExplicitRungeKutta4, 0.01).unwrap();
for (t, u) in sol.t.iter().zip(sol.u[0].iter()) {
    println!("t = {t:.2}, y = {u:.6}");
}
```

## Algorithms

| Variant                   | Order | Description                     |
|---------------------------|-------|---------------------------------|
| `ExplicitRungeKutta1`     | 1     | Forward Euler method            |
| `ExplicitRungeKutta2`     | 2     | Midpoint (modified Euler) method|
| `ExplicitRungeKutta4`     | 4     | Classic fourth-order RK method  |

## License

MIT
