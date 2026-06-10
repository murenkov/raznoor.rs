use ndarray::Array1;
use num_traits::Float;
use num_traits::FromPrimitive;

use crate::butcher::ExplicitRungeKuttaMethod;

pub(crate) struct StepperContext<'a, T, F> {
    pub(crate) method: &'a ExplicitRungeKuttaMethod<f64>,
    pub(crate) f: &'a F,
    pub(crate) ks: &'a mut [Array1<T>],
    pub(crate) arg: &'a mut Array1<T>,
}

pub(crate) struct StepState<'a, T> {
    pub(crate) t: T,
    pub(crate) u: &'a Array1<T>,
}

pub(crate) fn compute_stages<T, F>(t: T, dt: T, u: &Array1<T>, ctx: &mut StepperContext<T, F>)
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    let cast = |x: &f64| T::from_f64(*x).unwrap();
    for m in 0..ctx.method.c.len() {
        ctx.arg.assign(u);
        for (j, k) in ctx.ks.iter().enumerate() {
            let coeff = cast(&ctx.method.a[m][j]);
            if coeff != T::zero() {
                ndarray::Zip::from(&mut *ctx.arg)
                    .and(k)
                    .for_each(|a, &kv| *a = *a + dt * coeff * kv);
            }
        }
        ctx.ks[m] = (ctx.f)(t + cast(&ctx.method.c[m]) * dt, ctx.arg);
    }
}

pub(crate) fn weighted_sum<T: Float + FromPrimitive>(
    ks: &[Array1<T>],
    weights: &[f64],
) -> Array1<T> {
    let cast = |x: &f64| T::from_f64(*x).unwrap();
    let n = ks[0].len();
    let mut sum = Array1::<T>::zeros(n);
    for (m, k) in ks.iter().enumerate() {
        let coeff = cast(&weights[m]);
        if coeff != T::zero() {
            ndarray::Zip::from(&mut sum)
                .and(k)
                .for_each(|s, &kv| *s = *s + coeff * kv);
        }
    }
    sum
}

pub(crate) fn advance<T, F>(t: T, dt: T, u: &Array1<T>, ctx: &mut StepperContext<T, F>) -> Array1<T>
where
    T: Float + FromPrimitive,
    F: Fn(T, &Array1<T>) -> Array1<T>,
{
    compute_stages(t, dt, u, ctx);
    let du = weighted_sum(ctx.ks, ctx.method.b);
    ndarray::Zip::from(u)
        .and(&du)
        .map_collect(|&uv, &duv| uv + dt * duv)
}
