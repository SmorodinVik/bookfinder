import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import * as booksActions from '../storeSlices/booksSlice.js';
import Card from '../components/Card.jsx';
import Spinner from '../components/Spinner.jsx';
import { pathMaker } from '../utils/pathCompiler.js';
import { paginationStep } from '../constants.js';

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
  setLastBooksIndex,
}) => {
  const { t } = useTranslation();

  const handleLoadMore = async () => {
    const path = pathMaker(currentRequest, lastBookIndex + 1);
    setLastBooksIndex({ index: lastBookIndex + paginationStep });
    await loadBooks(path);
  };

  return (
    <div className="books-container">
      <div className="flex flex-wrap">
      {books.map((book) => <Card key={book.id} bookInfo={book} />)}
      </div>
      {(loadingState === 'requesting' && <Spinner />) ||
      (booksCount > lastBookIndex
        && <div className="flex">
         <button
          className="load-more-btn"
          onClick={handleLoadMore}
          >
            {t('buttons.loadMoreBtn')}
          </button>
      </div>)}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(ResultsPage);
