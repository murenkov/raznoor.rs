use criterion::{Criterion, black_box, criterion_group, criterion_main};
use raznur::{DEAlgorithm, ODEProblem, solve};

fn ode_solver(c: &mut Criterion) {
    let mut group = c.benchmark_group("solver");

    let prob_f32 = ODEProblem {
        f: |x: f32, y: f32| -> f32 { 2.0 * x + y },
        u0: 1.0,
        tspan: (1.0, 10.0),
    };
    let prob_f64 = ODEProblem {
        f: |x: f64, y: f64| -> f64 { 2.0 * x + y },
        u0: 1.0,
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

fn ode_solver_large(c: &mut Criterion) {
    let mut group = c.benchmark_group("large_problem");

    let prob_f64 = ODEProblem {
        f: |x: f64, y: f64| -> f64 { (x + y).sin() * y.cos() },
        u0: 0.5,
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

fn precision_compare(c: &mut Criterion) {
    let mut group = c.benchmark_group("precision");

    let prob_f32 = ODEProblem {
        f: |x: f32, y: f32| -> f32 { 2.0 * x + y },
        u0: 1.0,
        tspan: (1.0, 10.0),
    };
    let prob_f64 = ODEProblem {
        f: |x: f64, y: f64| -> f64 { 2.0 * x + y },
        u0: 1.0,
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
