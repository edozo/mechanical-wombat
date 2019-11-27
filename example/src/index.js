import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider, { GlobalStyle } from 'test-ui-lib';

import './index.css';
import App from './App';

const myTheme = {
  colors: {
    primary: 'red',
  },
};

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
);
