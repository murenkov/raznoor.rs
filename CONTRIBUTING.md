# Contributing

## Development Setup

1. Fork and clone the repo.
1. Install the Rust toolchain via [rustup](https://rustup.rs/).
1. Run `cargo build` to fetch dependencies and compile the project.
1. Run `rustup component add clippy rustfmt` to install linting and formatting tools.
1. (Optional) Run `pre-commit install` to install git hooks if you use pre-commit.

## Working on Issues

- Keep commits focused on a single concern.
- Use git branches with meaningful names (e.g. `fix/`, `feat/`, `docs/` prefix).
- Before committing, run `cargo fmt`, `cargo clippy`, and `cargo test`.
- Write commit messages using the [conventional commits](https://www.conventionalcommits.org/) convention.
- Use both a short description line and a detailed commit message body.

## Code Quality

This project uses **rustfmt** for code formatting and **clippy** for linting.
Both can be run directly:

- `cargo fmt`
- `cargo clippy`

## Testing

Run the test suite with:

- `cargo test`
- `cargo bench`

All tests must pass before a pull request is merged.

## Pull Requests

- Open PRs against the `main` branch.
- Keep PRs focused on a single concern.
- Ensure all formatting, linting, and tests pass.
- Request review from a maintainer once ready.
