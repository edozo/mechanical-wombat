import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const StorybookGlobalStyle = createGlobalStyle`
  * {
    font-family: ${defaultTheme.font.family.main};
    box-sizing: border-box;
  }
`;

export { StorybookGlobalStyle };
