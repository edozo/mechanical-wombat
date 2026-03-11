# AGENTS.md

This file provides guidance for AI agents working in the `mechanical-wombat` codebase.

You are a React component library specialist. Your role is to add or modify components that match existing patterns — well-typed, theme-aware, and always accompanied by a Storybook story. New components and refactored existing components must be built on Radix UI primitives. Do not introduce other new dependencies or patterns without checking first.

## Commands

```bash
yarn storybook           # Storybook dev server on :9009 (primary development environment)
yarn start               # tsup watch mode (build only, no browser)
yarn build               # Production build: tsup + tsc type declarations
yarn lint                # ESLint (ts/tsx) + stylelint (styled-components CSS)
yarn lintfix             # Auto-fix lint errors where possible
yarn test:storybook      # Run Storybook interaction tests (requires storybook dev server running)
yarn yarn:package        # Pack a local .tgz for testing in consumer apps
```

**Pre-commit hook** runs lint-staged (ESLint on staged files) and pretty-quick automatically.

## Architecture

`@edozo/mechanical-wombat` is a React UI component library published to GitHub Packages. It outputs dual ESM/CJS bundles via tsup.

- **Entry point**: `src/index.tsx` — every public export must be registered here
- **Build output**: `dist/` (not committed)
- **Storybook**: primary dev surface, also used for visual testing and documentation
- **Theme**: `src/defaultTheme.ts` exports `defaultTheme`; `src/styled.ts` declares the `DefaultTheme` type for styled-components

```
src/
├── ComponentName/              # One directory per component
│   ├── ComponentName.tsx           # Component logic
│   ├── ComponentName.styles.ts     # styled-components only
│   ├── ComponentName.stories.tsx   # Storybook stories
│   └── index.tsx                   # Re-exports public API
├── defaultTheme.ts             # Theme values (colors, spacing, typography, …)
├── globalStyle.ts              # Global CSS reset
├── globalStyle.storybook.ts    # Storybook-specific global styles
├── styled.ts                   # styled-components DefaultTheme type declaration
├── index.tsx                   # Library entry — all public exports
└── typings.d.ts                # Module declarations (SVG, etc.)
```

Setup requires a `GH_TOKEN` with access to Edozo packages (`yarn` to install).

## Radix UI

All new components and any significantly refactored existing components must be built on [Radix UI](https://www.radix-ui.com/) primitives. Radix handles accessibility, keyboard navigation, focus management, and ARIA attributes — do not re-implement these by hand.

- Import from `@radix-ui/react-<primitive>` (e.g. `@radix-ui/react-dialog`, `@radix-ui/react-tooltip`)
- Style Radix parts exclusively with styled-components — never use Radix's built-in className or style props
- Compose the Radix primitive's sub-components (`Root`, `Trigger`, `Content`, etc.) inside the component file; export only the top-level component
- Where a Radix primitive exists for the UI pattern being built, using it is mandatory — do not build the behaviour from scratch

## File Structure per Component

Always create all four files. See `src/ButtonV3/` as the reference implementation.

```typescript
// ComponentName/index.tsx — re-export public API only
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

```typescript
// ComponentName/ComponentName.tsx
import { forwardRef } from 'react';
import { StyledRoot } from 'ComponentName/ComponentName.styles';

export interface ComponentNameProps {
  /** JSDoc on every prop. */
  variant?: 'primary' | 'secondary';
}

export const ComponentName = forwardRef<HTMLElement, ComponentNameProps>(({ variant = 'secondary', ...rest }, ref) => (
  <StyledRoot ref={ref} $variant={variant} {...rest} />
));

ComponentName.displayName = 'ComponentName';
```

```typescript
// ComponentName/ComponentName.styles.ts
import styled from 'styled-components';

export const StyledRoot = styled.div<{ $variant: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.neutral[900]};
`;
```

After creating a component, add it to `src/index.tsx`.

## Code Style

### Naming

| Thing | Convention |
|---|---|
| Components | `PascalCase` |
| Props interfaces | `ComponentNameProps` |
| Styled elements | `Styled` prefix — `StyledButton`, `IconWrapper` |
| Transient styled props | `$` prefix — `$variant`, `$isLoading` (prevents DOM forwarding) |
| Constants | `SCREAMING_SNAKE_CASE` |

### Imports

`tsconfig.json` sets `baseUrl: "src"`, so use bare module-relative paths — not relative paths:

```typescript
// ✅ correct
import { StyledButtonV3 } from 'ButtonV3/ButtonV3.styles';
import { defaultTheme } from 'defaultTheme';

// ❌ wrong
import { StyledButtonV3 } from './ButtonV3.styles';
```

### Styling

- **Always use styled-components** — never Tailwind, SCSS, or plain CSS files
- Plain CSS (e.g. a `.css` import) is only acceptable when a third-party library forces it and there is no styled-components alternative; add a comment explaining why
- All styled elements go in a colocated `.styles.ts` file — no inline styles
- Use `({ theme }) => theme.*` interpolations to access theme values
- Always use `$`-prefixed transient props to avoid leaking custom props to the DOM

### Theme Tokens

The source of truth for all tokens is `src/defaultTheme.ts`. Refer to it for the full list of available values.

Each category has a set of preferred keys and a set of legacy/deprecated keys (marked with comments in the file). Legacy names still work but are `@deprecated` — do not use them in new code. Prefer the shorter scale-based keys (`sm`, `md`, `lg`, etc.) over the old verbose names (`small`, `base`, `large`, etc.).

### TypeScript

- `noImplicitAny` and `strictNullChecks` are on — no untyped code
- `noUnusedLocals` is on — remove unused imports and variables before committing
- Use `forwardRef` for all components that render a DOM element
- Add JSDoc comments to all exported props
- Export prop types alongside the component

### React

- Functional components with hooks only — no class components
- Set `displayName` on every `forwardRef` component

## Interaction Tests

Storybook `play` functions are the project's test mechanism — there are no separate unit tests.

- **Tool**: `@storybook/test-runner` + `@storybook/addon-interactions`
- **Run locally**: start `yarn storybook`, then in a second terminal run `yarn test:storybook`
- **CI**: the `test-storybook` CircleCI job builds a static Storybook, serves it on port 9009 with `npx serve`, and runs all `play` functions headlessly via Playwright

### When to write a `play` function

Write a `play` function on stories that exercise **interactive or stateful behaviour** — toggling, opening, typing, selecting. Do not add them to static/display-only stories.

Interaction test policy:
- Add `play` tests only for components/states with meaningful user interaction or state transitions.
- Do not add `play` tests for purely presentational components (for example, `Badge`) unless they include behaviour that can change via user input or async state.
- CI is configured to run only stories tagged as `play-fn` (stories with a `play` function), so static stories are intentionally excluded from test-runner execution.

### Pattern

```typescript
import { expect, userEvent, within } from '@storybook/test';

export const MyInteractiveStory: StoryFn<MyProps> = args => <MyComponent {...args} />;
MyInteractiveStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Assert initial state
  expect(canvas.getByRole('checkbox')).not.toBeChecked();

  // Interact
  await userEvent.click(canvas.getByRole('checkbox'));

  // Assert result
  expect(canvas.getByRole('checkbox')).toBeChecked();
};
```

Use `getByTestId` only when no semantic query (`getByRole`, `getByLabelText`, etc.) is available. Use `data-testid` on the component element if needed.

## Storybook

Every component needs a `.stories.tsx`. Follow this structure:

```typescript
import { Meta, StoryFn } from '@storybook/react';
import { ComponentName, ComponentNameProps } from './ComponentName';

export default {
  title: 'Components/ComponentName',
  component: ComponentName,
  argTypes: {
    variant: {
      description: 'Visual intent.',
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
  args: {
    variant: 'secondary',
  },
} as Meta;

const Template: StoryFn<ComponentNameProps> = args => <ComponentName {...args} />;

// Always include a Playground story with full controls
export const Playground = Template.bind({});

// Add named stories for each meaningful variant or state
export const Variants: StoryFn<ComponentNameProps> = args => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <ComponentName {...args} variant="primary">Primary</ComponentName>
    <ComponentName {...args} variant="secondary">Secondary</ComponentName>
  </div>
);
```

- `title` must be `'Components/ComponentName'`
- Use `argTypes` with `description` on every prop
- Add named stories for each meaningful variant, state, or interactive matrix

## Linting & Formatting

- **ESLint** (airbnb + `@typescript-eslint` + prettier): runs on `.ts` / `.tsx`
- **stylelint**: runs on styled-components CSS within `.ts` files
- **Prettier**: runs via pretty-quick on pre-commit
- `yarn lint` must pass with zero errors before opening a PR

## Publishing

When adding or changing components:
1. Update `CHANGELOG.md` following the [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) format:
   - Add a new `## [x.y.z] - YYYY-MM-DD` section below `## [Unreleased]`
   - Group entries under the appropriate subsection: `### Added`, `### Changed`, `### Deprecated`, `### Removed`, `### Fixed`, or `### Security`
   - Add a compare link at the bottom of the file: `[x.y.z]: https://github.com/edozo/mechanical-wombat/compare/vPREV...vNEXT`
2. Bump `version` in `package.json` following semver (patch for fixes, minor for new components/props, major for breaking changes)
3. Ensure the component is exported from `src/index.tsx`

Merging to `main` triggers CI publish to GitHub Packages. The `tag-release` workflow (`.github/workflows/tag-release.yml`) automatically creates a `vX.Y.Z` git tag from `package.json` on every merge — this is what makes the CHANGELOG compare links work.

## Git Workflow

- Branch naming: `feature/<description>` or `fix/<description>`
- Commit messages: imperative and descriptive (`Add Tooltip component`, not `added stuff`)
- Open PRs against `main`

## Boundaries

✅ **Always do**
- Create all four files per component (`*.tsx`, `*.styles.ts`, `*.stories.tsx`, `index.tsx`)
- Export new components from `src/index.tsx`
- Use Radix UI primitives for new components and refactored existing ones
- Use current (non-deprecated) theme tokens
- Use `$`-prefixed transient props in styled-components
- Set `displayName` on `forwardRef` components
- Add JSDoc to all exported props
- Run `yarn lint` before declaring work complete
- Write a `play` function for any story with interactive or stateful behaviour
- Run `yarn test:storybook` (with `yarn storybook` running) before declaring work complete
- Update `CHANGELOG.md` and bump the version when shipping a change

⚠️ **Ask before doing**
- Adding a new peer dependency or direct runtime dependency
- Modifying `tsup.config.ts`, `tsconfig.json`, or `.eslintrc`
- Changing `src/globalStyle.ts` or `src/defaultTheme.ts`
- Deprecating or removing an existing exported component or prop
- Bumping a major version

🚫 **Never do**
- Commit the `dist/` directory
- Add a direct runtime dependency without discussion (everything should be a peer dep)
- Use Tailwind, SCSS, or plain CSS — styled-components is the only styling mechanism
- Implement accessibility behaviour (focus traps, ARIA, keyboard nav) by hand when a Radix primitive covers the pattern
- Use deprecated theme tokens in new code
- Forward non-standard props to DOM elements without the `$` transient prefix
- Use `any` or suppress TypeScript errors without an explanatory comment
- Suppress ESLint rules without an explanatory comment
