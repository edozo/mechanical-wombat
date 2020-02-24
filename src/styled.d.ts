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
    };
    font: {
      family: {
        main: string;
      };
      size: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        body: string;
        bodySmall: string;
        label: string;
        small: string;
      };
      lineHeight: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        body: string;
        bodySmall: string;
        label: string;
        small: string;
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
  }
}
