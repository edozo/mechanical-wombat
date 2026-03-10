# mechanical-wombat

> React UI component lib

## Installation

`yarn add @edozo/mechanical-wombat`

Please make sure you have set the `GH_TOKEN` environment variable on your machine, which should be your personal GitHub token with access to Edozo's packages. See more [here](https://edozohq.atlassian.net/wiki/spaces/DEV/pages/2629238785/Dev+environmen.t+set+up#Access-to-Github-Packages).

### Usage

```tsx
import { MyComponent } from '@edozo/mechanical-wombat';

export const Example: React.FC = ({ children }) => <Button {...props}>{children}</Button>;
```

### Component docs

- [ButtonV3 docs](./src/ButtonV3/README.md)

### Typography font (Inter)

This library expects the Inter font to be available in the consuming app. Add the following
to your app’s `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Lucide Icons (Peer Dependency)

Lucide icons are provided via a peer dependency and wrapped by the UI library so defaults stay consistent.
This is **additive** and does **not** change any existing icon APIs or behavior.

Usage:

```tsx
import { Search } from 'lucide-react';
import { LucideIcon } from '@edozo/mechanical-wombat';

export const Example = () => <LucideIcon icon={Search} size="sm" />;
```

Defaults and API:

- Size API: `sm | md | lg` mapped to `theme.icons.sm/md/lg`.
- Stroke: `strokeWidth=2`, `strokeLinecap="round"`, `strokeLinejoin="round"`.
- Color: default `theme.colors.grayDarker`, override via `color` prop (overrides should follow branding).
- Stroke-only: `fill="none"` enforced.

### Custom Lucide-Style Icons (SVG Files)

You can add your own icons as SVG files and wrap them with the same Lucide defaults.

Example:

```tsx
// src/LucideIcons/custom/index.ts
import MyBrandSvg from './my-brand-icon.svg';
import { createLucideIcon } from '../Lucide';

export const LucideMyBrand = createLucideIcon(MyBrandSvg);
```

Design rules:

- `viewBox="0 0 24 24"`
- stroke-only paths (no fills)
- `strokeWidth=2`, `strokeLinecap="round"`, `strokeLinejoin="round"` (defaults from wrapper)
- See https://lucide.dev/guide/design/icon-design-guide

### ESM and tree shaking

This library ships both ESM and CJS builds. To get the best tree shaking, make sure your bundler resolves the ESM entry (`module` / `exports` `import`) rather than the CJS `main`. Most modern bundlers do this by default, but if you see large bundles, check that your tooling is using the ESM build.

Note: Icon exports are provided via a barrel (`src/Icons/index.tsx`) with named exports. This is tree‑shakable in modern ESM bundlers. Avoid importing the CJS build if you want optimal tree shaking.

~~[Hosted Storybook](https://5f86b8bef322ef002224b643-dyvtiddehm.chromatic.com/) to find a list of currently available components~~
[Hosted Storybook](https://edozo.github.io/mechanical-wombat/) to find a list of currently available components

[Default theme values](https://github.com/edozo/mechanical-wombat/blob/main/src/Theme/defaultTheme.ts)

## Development

### Up and running

#### Prerequisites:

- Have [NVM](https://github.com/nvm-sh/nvm) installed
- Be using the version of node outlined in `.nvmrc`. You can do this by running `nvm use` in the root of the project and following the instructions.
- Be using [Yarn](https://yarnpkg.com/)

#### Steps

- Checkout the repo and `cd` into it.
- Open your terminal of choice.
- Run `yarn` to install the dependencies.
- Open another terminal window/tab at the same location.
- In the first terminal run `yarn start`.
- In the second run `yarn storybook` this will open your browser at localhost port 9009.
- You are now ready to start developing reusable components.
- `lucide-react` is a peer dependency; ensure the consuming app installs it.

## Testing changes to this library with another application before publishing it

You might want to make sure your changes work when used in another application/library locally before publishing a new version of the library. To do this, you can run `yarn pack`, which will package the library and create a `tgz` file in the project root directory. In your consuming app, you can then run `yarn add ./path/to/package-name-version.tgz`

## Testing

Storybook interaction tests (`play` functions) are the primary test mechanism. They run automatically in the Interactions panel when you load a story, and headlessly via the test runner.

**Running locally** (requires Storybook to be running):

```bash
# Terminal 1
yarn storybook

# Terminal 2
yarn test:storybook
```

**CI** — the `test-storybook` CircleCI job builds a static Storybook, serves it, and runs all `play` functions headlessly via Playwright.

### Writing interaction tests

Add a `play` function to any story that has meaningful interactive behaviour:

```tsx
import { expect, userEvent, within } from '@storybook/test';

export const MyStory: StoryFn<Props> = args => <MyComponent {...args} />;
MyStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  expect(canvas.getByText('Done')).toBeInTheDocument();
};
```

Only add `play` functions to stories with stateful or interactive behaviour — static/display-only stories don't need them.

## Contributing and publishing

When making changes to this library, please make sure you:

1. Write or update interaction tests for any interactive behaviour and confirm they pass (`yarn test:storybook`)
2. Update the version number in `package.json`
3. Commit changes to a branch, open a PR and get it reviewed
4. Once approved, merge to the `main` branch

All changes to `main` will trigger a build/publish in CircleCI (`GH_TOKEN` will be changed to `GH_PACKAGE_WRITE`, which is a token with permissions to write to GH packages). Once published, you can then upgrade the version of the library in the consuming application. You can check that the version has been published [here](https://github.com/edozo/mechanical-wombat/pkgs/npm/mechanical-wombat).

### Adding icons

To add a new Icon, [follow these steps](https://github.com/edozo/mechanical-wombat/blob/main/src/Icons/preparing-svgs.md) before creating a PR
