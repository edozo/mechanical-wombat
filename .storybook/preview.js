import { withGlobalStyles } from './custom/withGlobalStyles';
import { withThemesProvider } from "themeprovider-storybook";
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