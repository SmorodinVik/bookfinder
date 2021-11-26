import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchBar from './components/SearchBar.jsx';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t('header.title')}</h1>
        <SearchBar />
      </header>
      <footer>
        <button>{'load more'}</button>
      </footer>
    </div>
  );
};

export default App;