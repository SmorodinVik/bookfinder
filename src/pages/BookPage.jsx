import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import defaultBook from '../img/defaultBook.jpg';

const mapStateToProps = ({ selectedBook }) => ({ selectedBook });

const BookPage = ({ selectedBook }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { title, categories, authors, imageLinks, description } = selectedBook.volumeInfo;
  const bookTitle = title || '';
  const category = categories ? categories.join('/') : '';
  const author = authors ? authors.join(', ') : '';
  const link = imageLinks ? imageLinks.thumbnail : defaultBook;
  const about = description ? description : t('messages.noDescription');

  return (
    <div>
      <div className="page-container flex flex-wrap">
        <div className="flex flex-wrap book-container">
          <img className="book-image" src={link} alt={title} />
          <div className="book-info">
            <p className="book-category">{category}</p>
            <h3 className="book-title">{bookTitle}</h3>
            <p className="book-author">{author}</p>
            <div className="book-description">
              <p>{about}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <button className="btn-big" onClick={() => navigate(-1)}>{t('buttons.backBtn')}</button>
      </div>
    </div>
    
  );
};

export default connect(mapStateToProps, null)(BookPage);