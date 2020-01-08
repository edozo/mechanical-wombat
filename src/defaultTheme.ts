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
  gray1: '#F6F6F6',
  gray2: '#F2F2F2',
  gray3: '#D5D7DC',
  gray4: '#717171',
  gray5: '#4C4C4C',
  // Steel blue
  steelBlueLighter: '#F7FAFC',
  steelBlueLight: '#F1F5FD',
  steelBlue: '#E5EEFE',
  steelBlueDark: '#ABB8C5',
  steelBlueDarker: '#818E9B',
};

const font = {
  family: {
    title: "'Poppins', Helvetica Neue, Helvetica, Arial, sans-serif",
    body: "'Open Sans', Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  size: {
    bodySmall: '16px',
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
  borderRadius: {
    small: '1px',
    standard: '5px',
    large: '50px',
  },
  boxShadow: {
    small: '1px 1px 10px rgba(0, 0, 0, 0.25)',
    standard: '1px 1px 10px rgba(0, 0, 0, 0.25)',
    large: '1px 1px 10px rgba(0, 0, 0, 0.25)',
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
