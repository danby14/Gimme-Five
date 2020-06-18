import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';

import App from './components/App';
import GlobalStyles from './theme/globalStyles';
import Theme from './theme/theme';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
