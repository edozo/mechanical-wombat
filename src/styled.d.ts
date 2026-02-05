import 'styled-components';

declare module 'styled-components' {
  interface SizeHelper {
    xsmall: string;
    small: string;
    standard: string;
    large: string;
    xlarge: string;
  }
  export interface DefaultTheme {
    name: string;
    spacing: {
      xxsmall: string;
      xsmall: string;
      small: string;
      base: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    icons: {
      xxsmall: string;
      xsmall: string;
      small: string;
      base: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    borderRadius: SizeHelper;
    boxShadow: SizeHelper;
    colors: {
      aliases: {
        primaryLight: string;
        primary: string;
        primaryDark: string;
        secondaryLight: string;
        secondary: string;
        secondaryDark: string;
      };
      // Sky blue
      skyBlueLighter: string;
      skyBlueLight: string;
      skyBlue: string;
      skyBlueDark: string;
      skyBlueDarker: string;
      // Red
      redLighter: string;
      redLight: string;
      red: string;
      // Orange
      orangeLighter: string;
      orangeLight: string;
      orange: string;
      orangeDark: string;
      orangeDarker: string;
      // Purple
      purpleLighter: string;
      purpleLight: string;
      purple: string;
      purpleDark: string;
      purpleDarker: string;
      // Misc
      white: string;
      black: string;
      // Green
      greenLighter: string;
      greenLight: string;
      green: string;
      greenDark: string;
      greenDarker: string;
      // Gray
      grayLighter: string;
      grayLight: string;
      gray: string;
      grayDark: string;
      grayDarker: string;
      // Steel blue
      steelBlueLighter: string;
      steelBlueLight: string;
      steelBlue: string;
      steelBlueDark: string;
      steelBlueDarker: string;
      system: {
        // Blue
        blueLighter: string;
        blueLight: string;
        blue: string;
        blueDark: string;
        blueDarker: string;
        // Green
        greenLighter: string;
        greenLight: string;
        green: string;
        greenDark: string;
        greenDarker: string;
        // Yellow
        yellowLighter: string;
        yellowLight: string;
        yellow: string;
        yellowDark: string;
        yellowDarker: string;
        // Red
        redLighter: string;
        redLight: string;
        red: string;
        redDark: string;
        redDarker: string;
      };
      appColors: {
        maps: string;
        occupiers: string;
        insight: string;
        reports: string;
        extract: string;
      };
    };
    /**
     * @deprecated Use `typography` instead.
     */
    font: {
      family: {
        main: string;
        secondary: string;
      };
      size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        text: {
          xlarge: string;
          large: string;
          base: string;
          small: string;
          xsmall: string;
          xxsmall: string;
        };
        special: {
          title: string;
          subTitle: string;
        };
      };
      lineHeight: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        text: {
          xlarge: string;
          large: string;
          base: string;
          small: string;
          xsmall: string;
          xxsmall: string;
        };
        special: {
          title: string;
          subTitle: string;
        };
      };
      letterSpacing: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
      weight: {
        bold: number;
        semibold: number;
        regular: number;
      };
    };
    typography: {
      fontFamily: {
        sans: string;
      };
      fontWeight: {
        regular: number;
        medium: number;
        semibold: number;
      };
      letterSpacing: {
        normal: string;
        tight: string;
      };
      fontSize: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
      };
      lineHeight: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
      };
      role: {
        body: {
          size: 'md';
          lineHeight: 'md';
          weight: 'regular';
          letterSpacing: 'normal';
        };
        caption: {
          size: 'xs';
          lineHeight: 'xs';
          weight: 'regular';
          letterSpacing: 'normal';
        };
        label: {
          size: 'sm';
          lineHeight: 'sm';
          weight: 'medium';
          letterSpacing: 'normal';
        };
        headingSm: {
          size: 'xl';
          lineHeight: 'xl';
          weight: 'semibold';
          letterSpacing: 'normal';
        };
        headingMd: {
          size: '2xl';
          lineHeight: '2xl';
          weight: 'semibold';
          letterSpacing: 'tight';
        };
        headingLg: {
          size: '3xl';
          lineHeight: '3xl';
          weight: 'semibold';
          letterSpacing: 'tight';
        };
        display: {
          size: '4xl';
          lineHeight: '4xl';
          weight: 'semibold';
          letterSpacing: 'tight';
        };
      };
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    minMedia: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}
