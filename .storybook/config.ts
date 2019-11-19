import { configure } from '@storybook/react';
import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import { defaultTheme } from '../src/defaultTheme'

const themes = [defaultTheme];
addDecorator(withThemesProvider(themes));

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module)