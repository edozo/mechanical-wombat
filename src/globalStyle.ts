import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import { defaultTheme } from './defaultTheme';

const rebootOptions = {
  fontFamilyBase: defaultTheme.font.family.main,
};

const GlobalStyle = createGlobalStyle`
  ${reboot(rebootOptions)}
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${defaultTheme.font.family.main};
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${defaultTheme.font.family.secondary};
    font-weight: 600;
  }

  /* TODO: Remove once navbar, navbar items, links and buttons are included as components */
  p, a {
    color: ${defaultTheme.colors.grayDarker};
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyle };
