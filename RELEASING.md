# Releasing

This document describes how to ship a new version of `@edozo/mechanical-wombat` to GitHub Packages.

## How releases work

Merging to `main` is the release trigger. The CI pipeline runs automatically:

1. **`build-and-test`** — lint, type-check, build
2. **`test-storybook`** — builds Storybook, serves it, runs all interaction tests via Playwright
3. **`publish`** _(only on `main`, after both above pass)_ — builds the package and runs `npm publish` to GitHub Packages
4. **`deploy-storybook`** _(only on `main`, after publish)_ — deploys the static Storybook to GitHub Pages
5. **`tag-release`** GitHub Actions workflow — creates a `vX.Y.Z` git tag from `package.json` on every merge to `main`

If the version in `package.json` hasn't changed, `npm publish` will fail — GitHub Packages rejects duplicate versions. **Always bump the version before merging.**

## Pre-merge checklist

Before opening or merging your PR, verify:

- [ ] `yarn lint` passes with zero errors
- [ ] `yarn typecheck` passes
- [ ] `yarn build` succeeds
- [ ] `yarn storybook` is running and `yarn test` passes
- [ ] `version` in `package.json` is bumped (see [Versioning](#versioning) below)
- [ ] `CHANGELOG.md` has a new versioned entry and a compare link (see [Changelog](#changelog) below)
- [ ] Any new components are exported from `src/index.tsx`

## Versioning

Follow [Semantic Versioning](https://semver.org/):

| Change type | Bump |
|---|---|
| Bug fix, internal change | `patch` — e.g. `7.0.0` → `7.0.1` |
| New component, new prop, backwards-compatible addition | `minor` — e.g. `7.0.0` → `7.1.0` |
| Breaking change (removed export, changed prop API) | `major` — e.g. `7.0.0` → `8.0.0` |

Edit `version` in `package.json` directly.

## Changelog

`CHANGELOG.md` follows [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/).

**1. Move content from `[Unreleased]` into a new versioned section:**

```markdown
## [Unreleased]

## [7.1.0] - 2026-03-18

### Added

- Add `MyComponent` with `variant` and `size` props.
```

**2. Add a compare link at the bottom of the file:**

```markdown
[7.1.0]: https://github.com/edozo/mechanical-wombat/compare/v7.0.0...v7.1.0
```

The previous version's tag is already in the list — just add the new line above it.

## After merging

Once the PR lands on `main`:

- Watch the [CircleCI pipeline](https://app.circleci.com/pipelines/github/edozo/mechanical-wombat) to confirm all jobs pass and `publish` succeeds.
- The GitHub Actions `tag-release` workflow will automatically push a `vX.Y.Z` tag — confirm it appears under [Releases/Tags](https://github.com/edozo/mechanical-wombat/tags).
- The published package will be visible in [GitHub Packages](https://github.com/edozo/mechanical-wombat/packages).

## Consuming the new version

Downstream apps install from GitHub Packages and need a `GH_TOKEN` with `read:packages` scope in their environment. Once published, bump the version in the consumer's `package.json` and run `yarn`.
