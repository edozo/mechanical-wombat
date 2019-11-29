import { configure, addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { defaultTheme } from '../src/defaultTheme';
import { withGlobalStyles } from './custom/withGlobalStyles';

// Load stories
const req = require.context('../src', true, /\.stories\.tsx$/);

// Load themes and pass themes to theme switcher storybook UI
const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));

// Load global styles into storybook UI
addDecorator(withGlobalStyles);

// Set background colour options
addParameters({
  backgrounds: [
    { name: 'orange', value: '#e67b17' },
    { name: 'dark blue', value: '#3b5998' },
  ],
});

configure(req, module);