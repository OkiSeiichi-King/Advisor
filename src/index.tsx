import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import './index.css';
import App from './App';
import { store } from './store';
import reportWebVitals from './reportWebVitals';

import common_en from './translations/en/common.json';
import common_it from './translations/it/common.json';
import common_fr from './translations/fr/common.json';
import common_gm from './translations/gm/common.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common_en,
    },
    it: {
      common: common_it,
    },
    fr: { common: common_fr },
    gm: { common: common_gm },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
