import * as React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    primary: 'green',
    secondary: 'blue',
  },
};

const ComponentLibThemeProvider = (props: any) => {
  const mergedTheme: DefaultTheme =  {
    ...defaultTheme,
    ...props.theme,
    colors: {
      ...defaultTheme.colors,
    ...props.theme.colors,
  }
  }
  return (
    <ThemeProvider theme={mergedTheme}>
      {props.children}
    </ThemeProvider>
  );
}

export default ComponentLibThemeProvider;