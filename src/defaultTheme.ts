import { DefaultTheme } from 'styled-components';

const colors = {
  // Sky blue
  skyBlueLighter: '#A5F0FF',
  skyBlueLight: '#49E0FF',
  skyBlue: '#00D4FF',
  skyBlueDark: '#02A6E1',
  skyBlueDarker: '#0086B6',
  // Green
  greenLighter: '#BAF58C',
  greenLight: '#95EF50',
  green: '#85DC42',
  greenDark: '#66AB37',
  greenDarker: '#51842E',
  // Orange
  orangeLighter: '#FFBDA0',
  orangeLight: '#FFA178',
  orange: '#FF8955',
  orangeDark: '#DE571B',
  orangeDarker: '#B4542B',
  // Purple
  purpleLighter: '#CC8DF1',
  purpleLight: '#A52CED',
  purple: '#7E0AC2',
  purpleDark: '#4E0A76',
  purpleDarker: '#2E0845',
  // Steel blue
  steelBlueLighter: '#F7FAFC',
  steelBlueLight: '#F1F5FD',
  steelBlue: '#E5EEFE',
  steelBlueDark: '#ABB8C5',
  steelBlueDarker: '#818E9B',
  // Misc
  white: '#FFFFFF',
  black: '#212529',
  // Gray
  grayLighter: '#F6F6F6',
  grayLight: '#F2F2F2',
  gray: '#D5D7DC',
  grayDark: '#717171',
  grayDarker: '#4C4C4C',
  // Red - TODO: ask Sylvia if this is still required now that we have the system UI colours
  redLighter: '#FCE8E8',
  redLight: '#FFC0C0',
  red: '#DB0010',

  system: {
    // Blue
    blueLighter: '#E1E9F5',
    blueLight: '#558FE5',
    blue: '#3865A9',
    blueDark: '#1D4A8E',
    blueDarker: '#072C64',
    // Green
    greenLighter: '#E3F8D7',
    greenLight: '#8ED961',
    green: '#6AA83A',
    greenDark: '#4A9013',
    greenDarker: '#2F6405',
    // Yellow
    yellowLighter: '#FFF8E0',
    yellowLight: '#FED64F',
    yellow: '#F6C10D',
    yellowDark: '#E1B212',
    yellowDarker: '#CC9E00',
    // Red
    redLighter: '#FDE5E2',
    redLight: '#E38C7F',
    red: '#D65846',
    redDark: '#B93421',
    redDarker: '#8C1F10',
  },
};

const font = {
  family: {
    main: "'Open Sans', Helvetica Neue, Helvetica, Arial, sans-serif",
    secondary: 'Poppins, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  size: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    h5: '1rem',
    h6: '0.75rem',
    text: {
      xlarge: '1.25rem',
      large: '1.125rem',
      base: '1rem',
      small: '0.875rem',
      xsmall: '0.75rem',
      xxsmall: '0.625rem',
    },
    special: {
      title: '1rem',
      subTitle: '0.875rem',
    },
  },
  lineHeight: {
    h1: '3.375rem',
    h2: '2.75rem',
    h3: '2.125rem',
    h4: '1.875rem',
    h5: '1.5rem',
    h6: '1rem',
    text: {
      xlarge: '1.875rem',
      large: '1.75rem',
      base: '1.5rem',
      small: '1.25rem',
      xsmall: '1rem',
      xxsmall: '0.875rem',
    },
    special: {
      title: '1.5rem',
      subTitle: '1.25rem',
    },
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

/**
 * NOTE: Please use breakpoints sparingly for now, they may hlp us out in some cases. But I do want us to consider container queries (with a polyfill) as it should lend itself to atomic design better: https://css-tricks.com/a-new-container-query-polyfill-that-just-works/
 */
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const minMedia = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
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
    xlarge: '32px',
    xxlarge: '48px',
  },
  borderRadius: {
    xsmall: '1px',
    small: '3px',
    standard: '6px',
    large: '10px',
    xlarge: '16px',
  },
  boxShadow: {
    xsmall: '0 0 2px 0 rgba(0,0,0,0.5)',
    small: '1px 1px 10px rgba(0, 0, 0, 0)',
    standard: '1px 1px 10px rgba(0, 0, 0, 0.25)',
    large: '0 5px 7px 0 rgba(0, 0, 0, 0.2)',
    xlarge: '0px 3px 12px rgba(0, 0, 0, 0.15)',
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
    appColors: {
      maps: colors.skyBlue,
      occupiers: '#7e0bc2',
      insight: '#ff8955',
      reports: colors.steelBlueDarker,
      extract: colors.steelBlueDarker,
    },
  },
  font,
  breakpoints,
  minMedia,
};

export { defaultTheme };
