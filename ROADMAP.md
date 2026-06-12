# Roadmap

## v0.2

- [x] Support for systems of ODEs (vector-valued right-hand sides)
- [x] Additional Runge-Kutta methods (e.g. RK3, RK5, Fehlberg, Dormand–Prince)
- [x] Variable step-size (adaptive) integration
- [x] Refactor kernels: replace `DEAlgorithm` enum with individual Butcher tableau functions
- [x] Event detection (root-finding during integration)

## v0.3

- [x] Stiff solver support (implicit Runge-Kutta, BDF methods)
- [ ] ~~`no_std` support (cancelled)~~
- [x] Parallel/rayon-based batched solves
- [ ] Interpolation routines (dense output)

## v0.4

- [ ] Boundary value problem (BVP) solvers
- [ ] Delay differential equation (DDE) support
- [ ] Sensitivity analysis / adjoint methods
- [ ] Python bindings (via PyO3)
