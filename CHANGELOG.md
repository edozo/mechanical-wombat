# Changelog

## v3.0.0

- Update `AppHeader` to:
  - Accept only a `url` instead of both a `stageUrl` and `prodUrl`. Users are required to derive their url within their own apps.

## v3.1.0

- Add `small` size option for the DropDown component.
- Add `small` size option for the GlobalSearch component.

## v3.1.1

- Add reach scripts to push to s3.

## v3.2.0

- Add `NotificationBarAccordion` to allow collapsible section in notification bar.

## v3.3.0

- Add AI Icon.

## v3.4.0

- Add Edozo Extract logo.

## v3.5.0

- Implement Lucide Icon wrapper.

## v3.6.0

- Add new/rebrand typography tokens.

## v3.7.0

- Add new/rebrand colour tokens.

## v3.7.1

- Refactor style prop usage.

## v3.8.0

- Add new/rebrand header/nav bar.
- Setup build to use absolute paths.

## v3.8.1

- Loosen types for app name (this aids the refactor for rebrand and we can tighten later).
- Deprecate legacy `Icons` library in favor of Lucide.

## v4.0.0

- BREAKING: `ThemeProvider` no longer accepts a `theme` prop override.
- `ThemeProvider` now always uses the library `defaultTheme`.

## v4.1.0

- Add 'bold' font weight to theme tokens.

## v4.1.1

- Convert new typography scale tokens from `px` to `rem`.
- Convert preferred spacing tokens from `px` to `rem`.

## v4.2.0

- Implement new buttons.

## v4.3.0

- Add new shadow tokens.
