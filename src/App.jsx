import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import SearchBar from './components/SearchBar.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import MessageBar from './components/MessageBar.jsx';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t('header.title')}</h1>
        <SearchBar />
        <MessageBar />
      </header>
      <ResultsPage />
    </div>
  );
};

export default connect(null, null)(App);