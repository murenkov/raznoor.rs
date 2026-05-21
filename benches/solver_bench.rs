use criterion::{Criterion, black_box, criterion_group, criterion_main};
use ndarray::Array1;
use ndarray::array;
use raznur::{ODEProblem, RUNGE_KUTTA_1, RUNGE_KUTTA_2, RUNGE_KUTTA_4, solve};

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

    for (name, method) in [
        ("RK1", &RUNGE_KUTTA_1 as &_),
        ("RK2", &RUNGE_KUTTA_2 as &_),
        ("RK4", &RUNGE_KUTTA_4 as &_),
    ] {
        group.bench_function(format!("{name}_f64_coarse"), |b| {
            b.iter(|| solve(black_box(&prob_f64), method, black_box(0.1)))
        });
        group.bench_function(format!("{name}_f64_fine"), |b| {
            b.iter(|| solve(black_box(&prob_f64), method, black_box(0.01)))
        });
        group.bench_function(format!("{name}_f32_coarse"), |b| {
            b.iter(|| solve(black_box(&prob_f32), method, black_box(0.1)))
        });
        group.bench_function(format!("{name}_f32_fine"), |b| {
            b.iter(|| solve(black_box(&prob_f32), method, black_box(0.01)))
        });
    }

    group.finish();
}

fn ode_solver_large(c: &mut Criterion) {
    let mut group = c.benchmark_group("large_problem");

    let prob_f64 = ODEProblem {
        f: |x: f64, y: &Array1<f64>| -> Array1<f64> { array![(x + y[0]).sin() * y[0].cos()] },
        u0: array![0.5],
        tspan: (0.0, 100.0),
    };

    for (name, method) in [
        ("RK1", &RUNGE_KUTTA_1 as &_),
        ("RK2", &RUNGE_KUTTA_2 as &_),
        ("RK4", &RUNGE_KUTTA_4 as &_),
    ] {
        group.bench_function(format!("{name}_100k_steps"), |b| {
            b.iter(|| solve(black_box(&prob_f64), method, black_box(0.001)))
        });
    }

    group.finish();
}

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
        b.iter(|| solve(black_box(&prob_f32), &RUNGE_KUTTA_4, black_box(0.01)))
    });
    group.bench_function("RK4_f64", |b| {
        b.iter(|| solve(black_box(&prob_f64), &RUNGE_KUTTA_4, black_box(0.01)))
    });

    group.finish();
}

criterion_group!(benches, ode_solver, ode_solver_large, precision_compare);
criterion_main!(benches);
