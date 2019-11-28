import { configure, addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { defaultTheme } from '../src/defaultTheme';
import { withGlobalStyles } from './custom/withGlobalStyles'

const req = require.context('../src', true, /\.stories\.tsx$/);
const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));
configure(req, module);

addParameters({
  backgrounds: [
    { name: 'orange', value: '#e67b17' },
    { name: 'dark blue', value: '#3b5998' },
  ],
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withGlobalStyles);
configure(loadStories, module);
