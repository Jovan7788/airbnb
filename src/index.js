import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '@/assets/theme';

import "normalize.css";
import "@/assets/css/index.less"

import App from '@/App';
import store from '@/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Suspense>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
        </Provider>
      </Suspense>
    </HashRouter>
);
