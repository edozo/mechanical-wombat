# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.3.2] - 2026-03-10

### Added

- Storybook interaction tests via `@storybook/test-runner` and `@storybook/addon-interactions`.
- `Switch` component: `Interactions` story with a `play` function covering toggle on/off.
- `yarn test:storybook` script — runs all `play` functions against a live Storybook server.
- CircleCI `test-storybook` job — builds static Storybook, serves it with `npx serve`, and runs interaction tests headlessly via Playwright; gates the `publish` job.

## [4.3.1] - 2026-03-10

### Added

- `AGENTS.md` and `CLAUDE.md` with AI agent guidance: Radix UI for new/refactored components, styled-components only, theme tokens sourced from `src/defaultTheme.ts`.

## [4.3.0] - 2026-02-12

### Added

- New shadow tokens.

## [4.2.0] - 2026-02-12

### Added

- New `ButtonV3` component (first pass).

## [4.1.1] - 2026-02-11

### Changed

- Convert new typography scale tokens from `px` to `rem`.
- Convert preferred spacing tokens from `px` to `rem`.

## [4.1.0] - 2026-02-10

### Added

- `bold` font weight to theme tokens.

## [4.0.0] - 2026-02-10

### Changed

- **BREAKING:** `ThemeProvider` no longer accepts a `theme` prop override.
- `ThemeProvider` now always uses the library `defaultTheme`.

## [3.8.1] - 2026-02-09

### Changed

- Loosen types for app name to aid rebrand refactor.

### Deprecated

- Legacy `Icons` library in favour of Lucide.

## [3.8.0] - 2026-02-09

### Added

- New/rebrand header and nav bar.

### Changed

- Build configured to use absolute paths.

## [3.7.1] - 2026-02-06

### Changed

- Refactor style prop usage.

## [3.7.0] - 2026-02-06

### Added

- New/rebrand colour tokens.

## [3.6.0] - 2026-02-05

### Added

- New/rebrand typography tokens.

## [3.5.0] - 2026-02-05

### Added

- Lucide Icon wrapper.

## [3.4.0] - 2025-12-11

### Added

- Edozo Extract logo.

## [3.3.0] - 2025-11-18

### Added

- AI Icon.

## [3.2.0] - 2025-11-17

### Added

- `NotificationBarAccordion` to allow a collapsible section in the notification bar.

## [3.1.1] - 2025-10-16

### Added

- Scripts to deploy Storybook to S3.

## [3.1.0] - 2025-10-16

### Added

- `small` size option for the `DropDown` component.
- `small` size option for the `GlobalSearch` component.

## [3.0.0] - 2025-10-08

### Changed

- **BREAKING:** `AppHeader` now accepts only a `url` prop instead of both `stageUrl` and `prodUrl`. Consumers must derive the correct URL in their own apps.

[unreleased]: https://github.com/edozo/mechanical-wombat/compare/v4.3.2...HEAD
[4.3.2]: https://github.com/edozo/mechanical-wombat/compare/v4.3.1...v4.3.2
[4.3.1]: https://github.com/edozo/mechanical-wombat/compare/v4.3.0...v4.3.1
[4.3.0]: https://github.com/edozo/mechanical-wombat/compare/v4.2.0...v4.3.0
[4.2.0]: https://github.com/edozo/mechanical-wombat/compare/v4.1.1...v4.2.0
[4.1.1]: https://github.com/edozo/mechanical-wombat/compare/v4.1.0...v4.1.1
[4.1.0]: https://github.com/edozo/mechanical-wombat/compare/v4.0.0...v4.1.0
[4.0.0]: https://github.com/edozo/mechanical-wombat/compare/v3.8.1...v4.0.0
[3.8.1]: https://github.com/edozo/mechanical-wombat/compare/v3.8.0...v3.8.1
[3.8.0]: https://github.com/edozo/mechanical-wombat/compare/v3.7.1...v3.8.0
[3.7.1]: https://github.com/edozo/mechanical-wombat/compare/v3.7.0...v3.7.1
[3.7.0]: https://github.com/edozo/mechanical-wombat/compare/v3.6.0...v3.7.0
[3.6.0]: https://github.com/edozo/mechanical-wombat/compare/v3.5.0...v3.6.0
[3.5.0]: https://github.com/edozo/mechanical-wombat/compare/v3.4.0...v3.5.0
[3.4.0]: https://github.com/edozo/mechanical-wombat/compare/v3.3.0...v3.4.0
[3.3.0]: https://github.com/edozo/mechanical-wombat/compare/v3.2.0...v3.3.0
[3.2.0]: https://github.com/edozo/mechanical-wombat/compare/v3.1.1...v3.2.0
[3.1.1]: https://github.com/edozo/mechanical-wombat/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/edozo/mechanical-wombat/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/edozo/mechanical-wombat/releases/tag/v3.0.0
