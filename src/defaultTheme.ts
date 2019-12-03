import { DefaultTheme } from 'styled-components';

const colors = {
  skyBlue: '#00B8D7',
  green: '#99C875',
  red: '#DB0010',
  steelBlue: '#E5EEFE',
  white: '#FFFFFF',
  black: '#212529',
  lighterSkyBlue: '#B4EEF9',
  lightSkyBlue: '#1DCEEC',
  darkSkyBlue: '#019FBA',
  darkerSkyBlue: '#00859C',
  lighterGreen: '#C8EAAF',
  lightGreen: '#A0D777',
  darkGreen: '#8AB26B',
  darkerGreen: '#75985B',
  gray1: '#F6F6F6',
  gray2: '#F2F2F2',
  gray3: '#D5D7DC',
  gray4: '#717171',
  gray5: '#4C4C4C',
  lighterSteelBlue: '#F7FAFC',
  lightSteelBlue: '#F1F5FD',
  darkSteelBlue: '#ABB8C5',
  darkerSteelBlue: '#818E9B',
  lightRed: '#FFC0C0',
  lighterRed: '#FCE8E8',
};

const font = {
  family: {
    title: "'Poppins', Helvetica Neue, Helvetica, Arial, sans-serif",
    body: "'Open Sans', Helvetica Neue, Helvetica, Arial, sans-serif",
  },
};

const defaultTheme: DefaultTheme = {
  name: 'Default Theme',
  borderRadius: {
    small: '2px',
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
      primaryLight: colors.lightSkyBlue,
      primaryDark: colors.darkSkyBlue,
      secondary: colors.green,
      secondaryLight: colors.lightGreen,
      secondaryDark: colors.darkGreen,
    },
  },
  font,
};

export { defaultTheme };
