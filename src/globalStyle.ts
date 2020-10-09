import { createGlobalStyle } from 'styled-components';
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
  ${reboot(rebootOptions)}
  * {
    box-sizing: border-box;
  }
`;

export { GlobalStyle };
