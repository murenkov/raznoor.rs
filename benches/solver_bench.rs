#![allow(missing_docs, clippy::all, clippy::pedantic, clippy::nursery)]

use criterion::{Criterion, Throughput, criterion_group, criterion_main};
use ndarray::{Array1, array};
use raznoor::{
    AdaptiveODESolver, DORMAND_PRINCE45, ExplicitRungeKuttaMethod, FEHLBERG45, FixedStepODESolver,
    ODEProblem, ODESolver, RUNGE_KUTTA_1, RUNGE_KUTTA_2, RUNGE_KUTTA_3, RUNGE_KUTTA_4,
    RUNGE_KUTTA_5,
};
use std::hint::black_box;

type ERKMethod = ExplicitRungeKuttaMethod<f64>;

const ALL_METHODS: &[(&str, &ERKMethod)] = &[
    ("RK1", &RUNGE_KUTTA_1),
    ("RK2", &RUNGE_KUTTA_2),
    ("RK3", &RUNGE_KUTTA_3),
    ("RK4", &RUNGE_KUTTA_4),
    ("RK5", &RUNGE_KUTTA_5),
    ("Fehlberg45", &FEHLBERG45),
    ("DP45", &DORMAND_PRINCE45),
];

const ADAPTIVE_METHODS: &[(&str, &ERKMethod)] =
    &[("Fehlberg45", &FEHLBERG45), ("DP45", &DORMAND_PRINCE45)];

// --- Problem definitions ---

fn linear_f32() -> ODEProblem<f32, impl Fn(f32, &Array1<f32>) -> Array1<f32>> {
    ODEProblem::new(
        |t: f32, u: &Array1<f32>| -> Array1<f32> { array![2.0 * t + u[0]] },
        array![1.0],
        (1.0, 10.0),
    )
    .expect("failed to create problem")
}

fn linear_f64() -> ODEProblem<f64, impl Fn(f64, &Array1<f64>) -> Array1<f64>> {
    ODEProblem::new(
        |t: f64, u: &Array1<f64>| -> Array1<f64> { array![2.0 * t + u[0]] },
        array![1.0],
        (1.0, 10.0),
    )
    .expect("failed to create problem")
}

fn oscillator() -> ODEProblem<f64, impl Fn(f64, &Array1<f64>) -> Array1<f64>> {
    ODEProblem::new(
        |_t: f64, u: &Array1<f64>| -> Array1<f64> { array![u[1], -u[0]] },
        array![0.0, 1.0],
        (0.0, 100.0),
    )
    .expect("failed to create problem")
}

fn large_problem() -> ODEProblem<f64, impl Fn(f64, &Array1<f64>) -> Array1<f64>> {
    ODEProblem::new(
        |t: f64, u: &Array1<f64>| -> Array1<f64> { array![(t + u[0]).sin() * u[0].cos()] },
        array![0.5],
        (0.0, 100.0),
    )
    .expect("failed to create problem")
}

// --- Benchmark groups ---

fn bench_fixed_step(c: &mut Criterion) {
    let mut group = c.benchmark_group("fixed_step");
    let p32 = linear_f32();
    let p64 = linear_f64();

    for (name, method) in ALL_METHODS {
        for &(label, dt) in &[("coarse", 0.1f64), ("fine", 0.01f64)] {
            let n_steps = ((p64.tspan.1 - p64.tspan.0) / dt) as usize;
            let n_times = n_steps + 1;

            group.throughput(Throughput::Bytes(
                (std::mem::size_of::<f32>() * (n_times * 2)) as u64,
            ));
            group.bench_function(format!("{name}_f32_{label}"), |b| {
                b.iter(|| {
                    FixedStepODESolver::new(**method, black_box(dt as f32))
                        .unwrap()
                        .solve(black_box(&p32))
                        .unwrap()
                })
            });

            group.throughput(Throughput::Bytes(
                (std::mem::size_of::<f64>() * (n_times * 2)) as u64,
            ));
            group.bench_function(format!("{name}_f64_{label}"), |b| {
                b.iter(|| {
                    FixedStepODESolver::new(**method, black_box(dt))
                        .unwrap()
                        .solve(black_box(&p64))
                        .unwrap()
                })
            });
        }
    }
    group.finish();
}

fn bench_adaptive(c: &mut Criterion) {
    let mut group = c.benchmark_group("adaptive");
    let p32 = linear_f32();
    let p64 = linear_f64();

    for (name, method) in ADAPTIVE_METHODS {
        group.bench_function(format!("{name}_f32"), |b| {
            b.iter(|| {
                AdaptiveODESolver::new(
                    **method,
                    black_box(0.1f32),
                    black_box(1e-4f32),
                    black_box(1e-4f32),
                )
                .unwrap()
                .solve(black_box(&p32))
                .unwrap()
            })
        });
        group.bench_function(format!("{name}_f64"), |b| {
            b.iter(|| {
                AdaptiveODESolver::new(
                    **method,
                    black_box(0.1f64),
                    black_box(1e-8f64),
                    black_box(1e-8f64),
                )
                .unwrap()
                .solve(black_box(&p64))
                .unwrap()
            })
        });
    }
    group.finish();
}

fn bench_system(c: &mut Criterion) {
    let mut group = c.benchmark_group("system");
    let prob = oscillator();

    for (name, method) in ALL_METHODS {
        group.throughput(Throughput::Bytes(
            (std::mem::size_of::<f64>() * 3 * 10_001usize) as u64,
        ));
        group.bench_function(format!("{name}_fixed"), |b| {
            b.iter(|| {
                FixedStepODESolver::new(**method, black_box(0.01))
                    .unwrap()
                    .solve(black_box(&prob))
                    .unwrap()
            })
        });
    }

    for (name, method) in ADAPTIVE_METHODS {
        group.bench_function(format!("{name}_adaptive"), |b| {
            b.iter(|| {
                AdaptiveODESolver::new(**method, black_box(0.01), black_box(1e-6), black_box(1e-6))
                    .unwrap()
                    .solve(black_box(&prob))
                    .unwrap()
            })
        });
    }
    group.finish();
}

fn bench_large(c: &mut Criterion) {
    let mut group = c.benchmark_group("large");
    let prob = large_problem();
    let n_times = 100_001usize;

    for (name, method) in ALL_METHODS {
        group.throughput(Throughput::Bytes(
            (std::mem::size_of::<f64>() * 2 * n_times) as u64,
        ));
        group.bench_function(format!("{name}_100k"), |b| {
            b.iter(|| {
                FixedStepODESolver::new(**method, black_box(0.001))
                    .unwrap()
                    .solve(black_box(&prob))
                    .unwrap()
            })
        });
    }
    group.finish();
}

fn bench_precision(c: &mut Criterion) {
    let mut group = c.benchmark_group("precision");
    let p32 = linear_f32();
    let p64 = linear_f64();

    group.bench_function("RK4_f32", |b| {
        b.iter(|| {
            FixedStepODESolver::new(RUNGE_KUTTA_4, black_box(0.01))
                .unwrap()
                .solve(black_box(&p32))
                .unwrap()
        })
    });
    group.bench_function("RK4_f64", |b| {
        b.iter(|| {
            FixedStepODESolver::new(RUNGE_KUTTA_4, black_box(0.01))
                .unwrap()
                .solve(black_box(&p64))
                .unwrap()
        })
    });
    group.finish();
}

criterion_group!(
    benches,
    bench_fixed_step,
    bench_adaptive,
    bench_system,
    bench_large,
    bench_precision,
);
criterion_main!(benches);
