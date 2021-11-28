import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import * as booksActions from '../storeSlices/booksSlice.js';
import Card from '../components/Card.jsx';
import Spinner from '../components/Spinner.jsx';
import { pathMaker } from '../utils/pathCompiler.js';
import routes from '../routes.js';

const actionCreators = {
  setLastBooksIndex: booksActions.setLastBooksIndex,
  loadBooks: booksActions.loadBooks,
};

const mapStateToProps = ({
  books,
  booksCount,
  loadingState,
  lastBookIndex,
  currentRequest
}) => ({
  books,
  booksCount,
  loadingState,
  lastBookIndex,
  currentRequest,
});

const ResultsPage =  ({
  books,
  booksCount,
  loadBooks,
  loadingState,
  lastBookIndex,
  currentRequest,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (loadingState === 'failed') {
      navigate(routes.errorPage);
    }
  });

  const { t } = useTranslation();

  const handleLoadMore = async () => {
    const path = pathMaker(currentRequest, lastBookIndex);
    await loadBooks(path, lastBookIndex);
  };

  const showSpinner = loadingState === 'requesting';
  const showLoadBtn = !showSpinner && (booksCount - 1 > lastBookIndex);

  return (
    <div className="page-container">
      <div className="flex flex-wrap">
        {books.map((book) => <Card key={book.etag} bookInfo={book} />)}
      </div>
      {showSpinner && <Spinner />}
      {showLoadBtn && 
        <div className="flex">
          <button
            className="btn-big"
            onClick={handleLoadMore}
          >
            {t('buttons.loadMoreBtn')}
          </button>
        </div>
      }
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(ResultsPage);

