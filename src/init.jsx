import i18next from 'i18next';
import React from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';
import resources from './locales';
import App from './App.jsx';
import createStore from './store.js';

const init = async () => {
  const i18n = i18next.createInstance();
  await i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
  });

  const store = createStore();

  return (
    <StoreProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StoreProvider>
  );
};

export default init;
