import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const StorybookGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700'); /* update to match the design system */
  * {
    font-family: ${defaultTheme.font.family.main};
    box-sizing: border-box;
  }
`;

export { StorybookGlobalStyle };
