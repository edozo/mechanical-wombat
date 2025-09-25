# mechanical-wombat

> React UI component lib

## Installation

`yarn add @edozo/mechanical/wombat`

Please make sure you have set the `GH_TOKEN` environment variable on your machine, which should be your personal GitHub token with access to Edozo's packages. See more [here](https://edozohq.atlassian.net/wiki/spaces/DEV/pages/2629238785/Dev+environmen.t+set+up#Access-to-Github-Packages).

### Usage

```tsx
import { MyComponent } from '@edozo/mechanical-wombat';

export const Example: React.FC = ({ children }) => <Button {...props}>{children}</Button>;
```

~~[Hosted Storybook](https://5f86b8bef322ef002224b643-dyvtiddehm.chromatic.com/) to find a list of currently available components~~
[Hosted Storybook](https://edozo.github.io/mechanical-wombat/) to find a list of currently available components

[Default theme values](https://github.com/edozo/mechanical-wombat/blob/main/src/defaultTheme.ts)

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

## Testing changes to this library with another application before publishing it

You might want to make sure your changes work when used in another application/library locally before publishing a new version of the library. To do this, you can run `yarn pack`, which will package the library and create a `tgz` file in the project root directory. In your consuming app, you can then run `yarn add ./path/to/package-name-version.tgz`

## Contributing and publishing

When making changes to this library, please make sure you:

1. Add tests and run them
2. Update the version number in `package.json`
3. Commit changes to a branch, open a PR and get it reviewed
4. Once approved, merge to the `main` branch

All changes to `main` will trigger a build/publish in CircleCI (`GH_TOKEN` will be changed to `GH_PACKAGE_WRITE`, which is a token with permissions to write to GH packages). Once published, you can then upgrade the version of the library in the consuming application. You can check that the version has been published [here](https://github.com/edozo/mechanical-wombat/pkgs/npm/mechanical-wombat).

### Adding icons

To add a new Icon, [follow these steps](https://github.com/edozo/mechanical-wombat/blob/main/src/Icons/preparing-svgs.md) before creating a PR
