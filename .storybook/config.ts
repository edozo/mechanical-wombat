import { configure } from '@storybook/react';
import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import { defaultTheme } from '../src/defaultTheme'
import { addParameters } from '@storybook/react';

const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));

addParameters({
  backgrounds: [
    { name: 'orange', value: '#e67b17' },
    { name: 'dark blue', value: '#3b5998' },
  ],
});

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module)