import { DefaultTheme } from 'styled-components';

/* COLORS */
export const statusColors = {
  info: {
    50: '#EFF4FA',
    100: '#E1E9F5',
    200: '#C7D6EE',
    300: '#9DB9E6',
    400: '#6F99DA',
    500: '#3865A9',
    600: '#2F5692',
    700: '#1D4A8E',
    800: '#12386D',
    900: '#072C64',
    950: '#051E45',
  },
  success: {
    50: '#F1FAEA',
    100: '#E3F8D7',
    200: '#C8EFB0',
    300: '#A6E27E',
    400: '#8ED961',
    500: '#6AA83A',
    600: '#5A9430',
    700: '#4A9013',
    800: '#356F0E',
    900: '#2F6405',
    950: '#1C3F02',
  },
  warning: {
    50: '#FFFBEA',
    100: '#FFF8E0',
    200: '#FEEEB3',
    300: '#FEDF6A',
    400: '#FED64F',
    500: '#F6C10D',
    600: '#E1B212',
    700: '#CDA50F',
    800: '#B28E00',
    900: '#8A6F00',
    950: '#4F3F00',
  },
  danger: {
    50: '#FDEDEC',
    100: '#FDE5E2',
    200: '#F5B7B1',
    300: '#E38C7F',
    400: '#D97063',
    500: '#D65846',
    600: '#B93421',
    700: '#A52818',
    800: '#8C1F10',
    900: '#6E140A',
    950: '#3F0A05',
  },
} as const;

const colors = {
  neutral: {
    50: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F3F4F6',
    300: '#E5E7EB',
    400: '#D1D5DB',
    500: '#9CA3AF',
    600: '#6B7280',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#0B1220',
  },
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BEDBFF',
    300: '#8EC5FF',
    400: '#51A2FF',
    500: '#2B7FFF',
    600: '#155DFC',
    700: '#1447E6',
    800: '#193CB8',
    900: '#1C398E',
    950: '#162456',
  },
  indigo: {
    50: '#F3F2FD',
    100: '#E5E3FA',
    200: '#C9C4F2',
    300: '#A79DE7',
    400: '#7F6FD9',
    500: '#5B4EC8',
    600: '#4335B4',
    700: '#332694',
    800: '#241A6E',
    900: '#1A134F',
    950: '#110C33',
  },
  teal: {
    50: '#F0FDFA',
    100: '#CBFBF1',
    200: '#96F7E4',
    300: '#46ECD5',
    400: '#00D5BE',
    500: '#00BBA7',
    600: '#009689',
    700: '#00786F',
    800: '#005F5A',
    900: '#0B4F4A',
    950: '#022F2E',
  },
  status: statusColors,
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

/* FONT */
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

/* TYPOGRAPHY */
export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  letterSpacing: {
    normal: '0',
    tight: '-0.01em',
  },
  scale: {
    '2xs': { size: '10px', lineHeight: '14px' },
    xs: { size: '12px', lineHeight: '16px' },
    sm: { size: '14px', lineHeight: '20px' },
    md: { size: '16px', lineHeight: '24px' },
    lg: { size: '18px', lineHeight: '28px' },
    xl: { size: '20px', lineHeight: '28px' },
    '2xl': { size: '24px', lineHeight: '32px' },
    '3xl': { size: '32px', lineHeight: '40px' },
    '4xl': { size: '40px', lineHeight: '48px' },
  },
  // fontSize: {
  //   '2xs': '10px',
  //   xs: '12px',
  //   sm: '14px',
  //   md: '16px',
  //   lg: '18px',
  //   xl: '20px',
  //   '2xl': '24px',
  //   '3xl': '32px',
  //   '4xl': '40px',
  // },
  // lineHeight: {
  //   '2xs': '14px',
  //   xs: '16px',
  //   sm: '20px',
  //   md: '24px',
  //   lg: '28px',
  //   xl: '28px',
  //   '2xl': '32px',
  //   '3xl': '40px',
  //   '4xl': '48px',
  // },
  role: {
    body: { scale: 'md', weight: 'regular', letterSpacing: 'normal' },
    caption: { scale: 'xs', weight: 'regular', letterSpacing: 'normal' },
    label: { scale: 'sm', weight: 'medium', letterSpacing: 'normal' },
    headingSm: { scale: 'xl', weight: 'semibold', letterSpacing: 'normal' },
    headingMd: { scale: '2xl', weight: 'semibold', letterSpacing: 'tight' },
    headingLg: { scale: '3xl', weight: 'semibold', letterSpacing: 'tight' },
    display: { scale: '4xl', weight: 'semibold', letterSpacing: 'tight' },
  },
};

/**
/** BREAKPOINTS
 * NOTE: Please use breakpoints sparingly for now, they may hlp us out in some cases. But I do want us to consider container queries (with a polyfill) as it should lend itself to atomic design better: https://css-tricks.com/a-new-container-query-polyfill-that-just-works/
 */
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

/* MIN MEDIA */
const minMedia = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
};

/* SPACING */
const spacing = {
  // ❌ legacy (avoid using these tokens)
  xxsmall: '4px',
  xsmall: '8px',
  small: '16px',
  base: '24px',
  large: '32px',
  xlarge: '48px',
  xxlarge: '64px',

  // ✅ preferred (new usage)
  '3xs': '1px',
  '2xs': '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

/* ICONS */
const icons = {
  // ❌ legacy (avoid using these tokens)
  xxsmall: '8px',
  xsmall: '12px',
  small: '16px',
  base: '20px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '48px',

  // ✅ preferred (new usage)
  sm: '16px',
  md: '20px',
  lg: '24px',
};

const defaultTheme: DefaultTheme = {
  name: 'Default Theme',
  spacing,
  icons,
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
  typography,
  breakpoints,
  minMedia,
};

export { defaultTheme };
