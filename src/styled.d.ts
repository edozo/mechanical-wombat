import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;
    colors: {
      aliases: {
        primary: string;
        primaryLight: string;
        primaryDark: string;
        secondary: string;
        secondaryLight: string;
        secondaryDark: string;
      };
      skyBlue: string;
      green: string;
      red: string;
      steelBlue: string;
      white: string;
      black: string;
      lighterSkyBlue: string;
      lightSkyBlue: string;
      darkSkyBlue: string;
      darkerSkyBlue: string;
      lighterGreen: string;
      lightGreen: string;
      darkGreen: string;
      darkerGreen: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      lighterSteelBlue: string;
      lightSteelBlue: string;
      darkSteelBlue: string;
      darkerSteelBlue: string;
      lightRed: string;
      lighterRed: string;
    };
    font: {
      family: {
        title: string;
        body: string;
      };
    };
  }
}
