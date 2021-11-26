import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import SearchBar from './components/SearchBar.jsx';
import Spinner from './components/Spinner.jsx';

const mapStateToProps = ({ booksLoadingStatus }) => ({ booksLoadingStatus });

const App = ({ booksLoadingStatus }) => {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t('header.title')}</h1>
        <SearchBar />
      </header>
      <section className="books-container flex flex-wrap">
      
      </section>
      {booksLoadingStatus === 'loading' && <Spinner />}
      <footer>
        <button>{'load more'}</button>
      </footer>
    </div>
  );
};

export default connect(mapStateToProps, null)(App);