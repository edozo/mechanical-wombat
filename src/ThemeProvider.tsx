import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const ComponentLibThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export { ComponentLibThemeProvider as ThemeProvider };
