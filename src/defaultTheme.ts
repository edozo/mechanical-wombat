import { DefaultTheme } from 'styled-components';

const colors = {
  // Sky blue
  skyBlueLighter: '#B4EEF9',
  skyBlueLight: '#1DCEEC',
  skyBlue: '#00B8D7',
  skyBlueDark: '#019FBA',
  skyBlueDarker: '#00859C',
  // Red
  redLighter: '#FCE8E8',
  redLight: '#FFC0C0',
  red: '#DB0010',
  // Misc
  white: '#FFFFFF',
  black: '#212529',
  // Green
  greenLighter: '#C8EAAF',
  greenLight: '#A0D777',
  green: '#99C875',
  greenDark: '#8AB26B',
  greenDarker: '#75985B',
  // Gray
  grayLighter: '#F6F6F6',
  grayLight: '#F2F2F2',
  gray: '#D5D7DC',
  grayDark: '#717171',
  grayDarker: '#4C4C4C',
  // Steel blue
  steelBlueLighter: '#F7FAFC',
  steelBlueLight: '#F1F5FD',
  steelBlue: '#E5EEFE',
  steelBlueDark: '#ABB8C5',
  steelBlueDarker: '#818E9B',
};

const font = {
  family: {
    main: "'Open Sans', Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  size: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    h5: '1rem',
    h6: '0.75rem',
    body: '1.125rem',
    bodySmall: '1rem',
    label: '0.875rem',
    small: '0.75rem',
  },
  lineHeight: {
    h1: '3.375rem',
    h2: '2.75rem',
    h3: '2.125rem',
    h4: '1.75rem',
    h5: '1.375rem',
    h6: '1rem',
    body: '1.5rem',
    bodySmall: '1.375rem',
    label: '1.5rem',
    small: '1rem', // TODO: confirm with Silvia
  },
  letterSpacing: {
    h1: '0.02rem',
    h2: '0.01rem',
    h3: '0.01rem',
    h4: '0.01rem',
    h5: '0.01rem',
    h6: '0.08rem',
  },
  weight: {
    bold: 700,
    semibold: 600,
    regular: 400,
  },
};

const defaultTheme: DefaultTheme = {
  name: 'Default Theme',
  spacing: {
    xxsmall: '4px',
    xsmall: '8px',
    small: '16px',
    base: '24px',
    large: '32px',
    xlarge: '48px',
    xxlarge: '64px',
  },
  icons: {
    xxsmall: '8px',
    xsmall: '12px',
    small: '16px',
    base: '20px',
    large: '24px',
    xlarge: '48px',
    xxlarge: '64px',
  },
  borderRadius: {
    xsmall: '1px',
    small: '3px',
    standard: '6px',
    large: '10px',
    xlarge: '9999px',
  },
  boxShadow: {
    xsmall: '1px 1px 10px rgba(0, 0, 0, 0)',
    small: '1px 1px 10px rgba(0, 0, 0, 0)',
    standard: '1px 1px 10px rgba(0, 0, 0, 0.25)',
    large: '1px 1px 10px rgba(0, 0, 0, 0)',
    xlarge: '1px 1px 10px rgba(0, 0, 0, 0)',
  },
  colors: {
    ...colors,
    aliases: {
      primary: colors.skyBlue,
      primaryLight: colors.skyBlueLight,
      primaryDark: colors.skyBlueDark,
      secondary: colors.green,
      secondaryLight: colors.greenLight,
      secondaryDark: colors.greenDark,
    },
  },
  font,
};

export { defaultTheme };
