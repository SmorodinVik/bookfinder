import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from './routes.js';
import ResultsPage from './pages/ResultsPage.jsx';
import BookPage from './pages/BookPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import NetworkErrorPage from './pages/NetworkErrorPage.jsx';
import MessageBar from './components/MessageBar.jsx';
import SearchBar from './components/SearchBar.jsx';

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <div>
        <header>
          <h1>{t('header.title')}</h1>
          <SearchBar />
          <MessageBar />
        </header>

        <Routes>
          <Route path={routes.bookPage} element={<BookPage />} />
          <Route path={routes.errorPage} element={<ErrorPage />} />
          <Route path={routes.networkErrorPage} element={<NetworkErrorPage />} />
          <Route path={routes.resultsPage} exact element={<ResultsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

      </div>
    </Router>
  );
};

export default connect(null, null)(App);