import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const StorybookGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins|Open+Sans'); /* update to match the design system */
  * {
    font-family: ${defaultTheme.font.family.body}
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${defaultTheme.font.family.title}
  }
`;

export { StorybookGlobalStyle };
