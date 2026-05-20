use criterion::{Criterion, black_box, criterion_group, criterion_main};
use ndarray::Array1;
use ndarray::array;
use raznur::{DEAlgorithm, ODEProblem, solve};

/// Benchmark ODE solver accuracy and performance across algorithm/type combinations.
fn ode_solver(c: &mut Criterion) {
    let mut group = c.benchmark_group("solver");

    let prob_f32 = ODEProblem {
        f: |x: f32, y: &Array1<f32>| -> Array1<f32> { array![2.0 * x + y[0]] },
        u0: array![1.0],
        tspan: (1.0, 10.0),
    };
    let prob_f64 = ODEProblem {
        f: |x: f64, y: &Array1<f64>| -> Array1<f64> { array![2.0 * x + y[0]] },
        u0: array![1.0],
        tspan: (1.0, 10.0),
    };

    for (name, alg) in [
        ("RK1", DEAlgorithm::ExplicitRungeKutta1),
        ("RK2", DEAlgorithm::ExplicitRungeKutta2),
        ("RK4", DEAlgorithm::ExplicitRungeKutta4),
    ] {
        group.bench_function(format!("{name}_f64_coarse"), |b| {
            b.iter(|| solve(black_box(&prob_f64), black_box(alg.clone()), black_box(0.1)))
        });
        group.bench_function(format!("{name}_f64_fine"), |b| {
            b.iter(|| {
                solve(
                    black_box(&prob_f64),
                    black_box(alg.clone()),
                    black_box(0.01),
                )
            })
        });
        group.bench_function(format!("{name}_f32_coarse"), |b| {
            b.iter(|| solve(black_box(&prob_f32), black_box(alg.clone()), black_box(0.1)))
        });
        group.bench_function(format!("{name}_f32_fine"), |b| {
            b.iter(|| {
                solve(
                    black_box(&prob_f32),
                    black_box(alg.clone()),
                    black_box(0.01),
                )
            })
        });
    }

    group.finish();
}

/// Benchmark ODE solvers on a large problem with 100k steps.
fn ode_solver_large(c: &mut Criterion) {
    let mut group = c.benchmark_group("large_problem");

    let prob_f64 = ODEProblem {
        f: |x: f64, y: &Array1<f64>| -> Array1<f64> { array![(x + y[0]).sin() * y[0].cos()] },
        u0: array![0.5],
        tspan: (0.0, 100.0),
    };

    for (name, alg) in [
        ("RK1", DEAlgorithm::ExplicitRungeKutta1),
        ("RK2", DEAlgorithm::ExplicitRungeKutta2),
        ("RK4", DEAlgorithm::ExplicitRungeKutta4),
    ] {
        group.bench_function(format!("{name}_100k_steps"), |b| {
            b.iter(|| {
                solve(
                    black_box(&prob_f64),
                    black_box(alg.clone()),
                    black_box(0.001),
                )
            })
        });
    }

    group.finish();
}

/// Compare the precision of RK4 between f32 and f64.
fn precision_compare(c: &mut Criterion) {
    let mut group = c.benchmark_group("precision");

    let prob_f32 = ODEProblem {
        f: |x: f32, y: &Array1<f32>| -> Array1<f32> { array![2.0 * x + y[0]] },
        u0: array![1.0],
        tspan: (1.0, 10.0),
    };
    let prob_f64 = ODEProblem {
        f: |x: f64, y: &Array1<f64>| -> Array1<f64> { array![2.0 * x + y[0]] },
        u0: array![1.0],
        tspan: (1.0, 10.0),
    };

    group.bench_function("RK4_f32", |b| {
        b.iter(|| {
            solve(
                black_box(&prob_f32),
                black_box(DEAlgorithm::ExplicitRungeKutta4),
                black_box(0.01),
            )
        })
    });
    group.bench_function("RK4_f64", |b| {
        b.iter(|| {
            solve(
                black_box(&prob_f64),
                black_box(DEAlgorithm::ExplicitRungeKutta4),
                black_box(0.01),
            )
        })
    });

    group.finish();
}

criterion_group!(benches, ode_solver, ode_solver_large, precision_compare);
criterion_main!(benches);
