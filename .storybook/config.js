import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { defaultTheme } from '../src/defaultTheme';
import { GlobalStyle } from '../src/globalStyle';

const req = require.context('../src', true, /\.stories\.tsx$/);
const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));
configure(req, module);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = cb => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

addDecorator(withGlobal);
configure(loadStories, module);
