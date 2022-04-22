import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './store';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import darkTheme from './styles/colors/darkTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Provider store={Store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);