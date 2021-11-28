import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import * as booksActions from '../storeSlices/booksSlice.js';
import defaultBook from '../img/defaultBook.jpg';
import routes from '../routes.js';

const mapStateToProps = ({ selectedBook }) => ({ selectedBook });

const BookPage = ({ selectedBook }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { title, categories, authors, imageLinks, description } = selectedBook.volumeInfo;
  
  const bookTitle = title ? title : '';
  const category = categories ? categories.join('/') : '';
  const author = authors ? authors.join(', ') : '';
  const link = imageLinks ? imageLinks.thumbnail : defaultBook;
  const about = description ? description : 'No description';

  return (
    <div className="page-container">
      <div className="flex flex-wrap">{about}</div>
      <div className="flex">
        <button className="btn-big" onClick={() => navigate(-1)}>{t('buttons.backBtn')}</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(BookPage);