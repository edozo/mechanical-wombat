import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, GlobalStyle } from 'mechanical-wombat';
import { App } from './App';

const myTheme = {
  colors: {
    primary: 'red',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
