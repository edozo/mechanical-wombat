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
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      // Steel blue
      steelBlueLighter: string;
      steelBlueLight: string;
      steelBlue: string;
      steelBlueDark: string;
      steelBlueDarker: string;
    };
    font: {
      family: {
        title: string;
        body: string;
      };
      size: {
        bodySmall: string;
        label: string;
      };
      weight: {
        bold: number;
        semibold: number;
        regular: number;
      };
    };
  }
}
