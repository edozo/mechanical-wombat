import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider from 'test-ui-lib';

import './index.css'
import App from './App'

const myTheme = {
  colors: {
    primary: "red",
  }
};

ReactDOM.render(
    <ThemeProvider theme={myTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)
