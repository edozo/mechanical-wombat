import { ThemeProvider, DefaultTheme } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const ComponentLibThemeProvider = ({
  theme,
  children,
}: {
  theme: DefaultTheme;
  children: React.ReactNode;
}): JSX.Element => {
  const mergedTheme: DefaultTheme = {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
  };
  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

export { ComponentLibThemeProvider as ThemeProvider };
