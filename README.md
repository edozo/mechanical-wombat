# mechanical-wombat

> React UI component lib

[![NPM](https://img.shields.io/npm/v/mechanical-wombat.svg)](https://www.npmjs.com/package/mechanical-wombat)
[![NPM](https://badgen.net/bundlephobia/minzip/mechanical-wombat)](https://badgen.net/bundlephobia/minzip/mechanical-wombat)



## Usage in projects

### Install

```bash
yarn add mechanical-wombat
```

### Usage

```tsx
import { MyComponent } from 'mechanical-wombat';

export const Example: React.FC = ({ children }) => <Button {...props}>{children}</Button>;
```

## Development

### Up and running

##### Prerequisites: 

* Have [NVM](https://github.com/nvm-sh/nvm) installed 
* Be using the version of node outlined in `.nvmrc`. You can do this by running `nvm use` in the root of the project and following the instructions.
* Be using [Yarn](https://yarnpkg.com/)

##### Steps

* Checkout the repo and `cd` into it.
* Open your terminal of choice.
* Run `yarn` to install the dependencies.
* Open another terminal window/tab at the same location.
* In the first terminal run `yarn start`.
* In the second run `yarn storybook` this will open your browser at localhost port 9009.
* You are now ready to start developing reusable components.

### Releasing

**Only ever release from the main branch, this means all code has been reviewed and approved. If you are unsure, don't release.**

**TODO: Build a pipeline for this**

Once you have a PR that has gone in with the package JSON being bumped appropriately, you should tag the release in github and make sure it is in the list of releases.
Next step is to push the package to the npm registry.
In your local terminal, pull the latest code in the base branch and then run 
`npm publish --dry-run`
This will run the publish command but stop before actually publishing the package to check that everything will work fine.
If this works all fine then you can just run 
`npm publish` .

You can check the publish was successful here: https://www.npmjs.com/package/mechanical-wombat
