# test-ui-lib

> React UI component lib

[![NPM](https://img.shields.io/npm/v/test-ui-lib.svg)](https://www.npmjs.com/package/test-ui-lib)

## Install

```bash
yarn add test-ui-lib
```

## Usage

```tsx
import * as React from 'react'

import { MyComponent } from 'test-ui-lib'

class Example extends React.Component {
  render () {
    return (
      <MyComponent meaningOfLife={42} />
    )
  }
}
```

## Default theme
```ts
const myTheme = {
  borderRadius: '5px',
  colors: {
    primary: 'green',
    secondary: 'blue',
  },
}
```

## License

MIT © [martinmcneela](https://github.com/martinmcneela)

## Todo

- [x] Remove PropTypes
- [x] Update all relevant packages
- [ ] Add styled-components
- [ ] Try to import as a private repo to app
- [ ] Add styled-theming
- [ ] Add eslint
- [ ] Add prettier
- [ ] Add stylelint
- [ ] Add husky
- [ ] Add storybook (with knobs, actions, viewport, story source, docgen...etc... - https://storybook.js.org/docs/addons/addon-gallery/)
- [ ] Add testing setup
- [ ] Get gh-pages working (with storybook)
- [ ] Setup git merging/workflow rules
