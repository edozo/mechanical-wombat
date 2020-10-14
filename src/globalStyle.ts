import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import { defaultTheme } from './defaultTheme';

const rebootOptions = {
  fontFamilyBase: defaultTheme.font.family.main,
};

const GlobalStyle = createGlobalStyle`
  ${reboot(rebootOptions)}
  * {
    box-sizing: border-box;
  }
`;

export { GlobalStyle };
