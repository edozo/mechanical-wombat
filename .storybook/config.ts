import { configure, addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { defaultTheme } from '../src/defaultTheme';

const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));

addParameters({
  backgrounds: [
    { name: 'orange', value: '#e67b17' },
    { name: 'dark blue', value: '#3b5998' },
  ],
});

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
