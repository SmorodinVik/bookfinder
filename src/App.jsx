import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <h1>{t('searchBar.title')}</h1>
  );
};

export default App;