import { createGlobalStyle } from 'styled-components/macro';
import reboot from 'styled-reboot';
import { defaultTheme } from './defaultTheme';

const rebootOptions = {
  fontFamilyBase: defaultTheme.font.family.main,
  // TODO: Replace these with correct values when in theme
  // headingsMarginBottom: space[3],
  // paragraphMarginBottom: space[4],
  // labelMarginBottom: space[3],
  // lineHeightBase: font.lineHeights.display,
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@600&display=swap');
  ${reboot(rebootOptions)}
  * {
    box-sizing: border-box;
  }
`;

export { GlobalStyle };
