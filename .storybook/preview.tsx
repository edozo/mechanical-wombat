import React from 'react';
import { withGlobalStyles } from './custom/withGlobalStyles';
import { defaultTheme } from '../src/defaultTheme';
import { ThemeProvider } from '../src/ThemeProvider';

export const parameters = {
  backgrounds: {
    values: [
      { name: 'orange', value: '#e67b17' },
      { name: 'dark blue', value: '#3b5998' },
      { name: 'light gray', value: '#e6e6e6' },
    ],
  },
};

export const decorators = [
  withGlobalStyles,
  Story => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];
