import React from 'react';
import { connect } from 'react-redux';
import * as booksActions from '../storeSlices/booksSlice.js';
import defaultBook from '../img/defaultBook.jpg';

const actionCreators = {
  setSelectedBook: booksActions.setSelectedBook,
};

const Card = ({ bookInfo, setSelectedBook }) => {
  const { title, categories, authors, imageLinks } = bookInfo.volumeInfo;
  
  const cardTitle = title ? title : '';
  const category = categories ? categories[0] : '';
  const author = authors ? authors.join(', ') : '';
  const link = imageLinks ? imageLinks.thumbnail : defaultBook;
  
  const handleClick = () => {
    setSelectedBook({ book: bookInfo });
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="card-image" src={link} alt={title} />
      <p className="card-category">{category}</p>
      <h3 className="card-title">{cardTitle}</h3>
      <p className="card-author">{author}</p>
    </div>
  );
};

export default connect(null, actionCreators)(Card);