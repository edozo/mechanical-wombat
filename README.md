# mechanical-wombat

![Mechanical](./mechanical.gif)
mechanical - “operated by a machine or machinery.”

![Wombat](./wombat.gif)
 wombat - “a burrowing plant-eating Australian marsupial which resembles a small bear with short legs.”

> React UI component lib

[![NPM](https://img.shields.io/npm/v/mechanical-wombat.svg)](https://www.npmjs.com/package/mechanical-wombat)
[![NPM](https://badgen.net/bundlephobia/minzip/mechanical-wombat)](https://badgen.net/bundlephobia/minzip/mechanical-wombat)

## Install

```bash
yarn add mechanical-wombat
```

## Usage

```tsx
import { MyComponent } from 'mechanical-wombat';

export const Example: React.FC = ({ children }) => <Button {...props}>{children}</Button>;
```

## Default theme

```ts
const myTheme = {
  borderRadius: '5px',
  colors: {
    primary: 'green',
    secondary: 'blue',
  },
};
```

## Releasing
Once you have a PR that has gone in with the package JSON being bumped appropriately, you should tag the release in github and make sure it is in the list of releases.
Next step is to push the package to the npm registry.
In your local terminal, pull the latest code in the base branch and then run 
`npm publish --dry-run`
This will run the publish command but stop before actually publishing the package to check that everything will work fine.
If this works all fine then you can just run 
`npm publish` .

You can check the publish was successful here: https://www.npmjs.com/package/mechanical-wombat
