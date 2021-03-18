import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './defaultTheme';

const GlobalStyle = createGlobalStyle`
  /* Simple style reset - start */
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  /* Simple style reset - end */

  body {
    font-family: ${defaultTheme.font.family.main};
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
