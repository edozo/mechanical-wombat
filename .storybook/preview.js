import { withGlobalStyles } from './custom/withGlobalStyles';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { defaultTheme } from '../src/defaultTheme';

export const parameters = {
  backgrounds: {
    values: [
      { name: 'orange', value: '#e67b17' },
      { name: 'dark blue', value: '#3b5998' },
    ],
  },
}

const themes = [defaultTheme];
export const decorators = [withGlobalStyles, withThemesProvider(themes)]