import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as actions from '../storeSlices/booksSlice.js';

const mapStateToProps = ({ booksLoadingStatus }) => ({ booksLoadingStatus });

const actionCreators = {
  addBooks: actions.addBooks,
  setBooksLoadingStatus: actions.setBooksLoadingStatus,
};

const SearchBar = ({ addBooks, setBooksLoadingStatus, booksLoadingStatus }) => {
  const { t } = useTranslation();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const f = useFormik({
    initialValues: {
      searchInput: '',
      categories: 'all',
      sortBy: 'relevance',
    },
    onSubmit: async ({ searchInput, categories, sortBy }) => {
      console.log(searchInput, categories, sortBy);
    },
  });

  return (
    <form onSubmit={f.handleSubmit}>
      <div className="flex input-box">
        <label htmlFor="searchInput" className="sr-only">{t('searchBar.searchInput')}</label>
        <input
          className="search-input"
          ref={inputRef}
          id="searchInput"
          name="searchInput"
          type="text"
          onChange={f.handleChange}
          value={f.values.searchInput}
        />
        <button type="submit" className="btn">Find</button>
      </div>
      <div className="flex flex-wrap">
        <div className="flex form-selectors">
          <span>{t('searchBar.categories')}</span>
          <select
            id="categories"
            name="categories"
            type="text"
            onChange={f.handleChange}
            value={f.values.categories}
          >
            <option value="all">{t('categorySelect.all')}</option>
            <option value="art">{t('categorySelect.art')}</option>
            <option value="biography">{t('categorySelect.biography')}</option>
            <option value="computers">{t('categorySelect.computers')}</option>
            <option value="history">{t('categorySelect.history')}</option>
            <option value="medical">{t('categorySelect.medical')}</option>
            <option value="poetry">{t('categorySelect.poetry')}</option>
        </select>
        </div>
        <div className="flex form-selectors">
          <span>{t('searchBar.sortBy')}</span>
          <select
            id="sortBy"
            name="sortBy"
            type="text"
            onChange={f.handleChange}
            value={f.values.sortBy}
          >
            <option value="relevance">{t('sortBySelect.relevance')}</option>
            <option value="newest">{t('sortBySelect.newest')}</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, actionCreators)(SearchBar);
