import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const StorybookGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@600&display=swap');
  * {
    font-family: ${defaultTheme.font.family.main};
    box-sizing: border-box;
  }
`;

export { StorybookGlobalStyle };
