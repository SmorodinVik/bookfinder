import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { paginationStep  } from '../constants.js';

const initialState = {
  currentRequest: '',
  loadingState: 'none',
  books: [],
  booksCount: null,
  lastBookIndex: 0,
  selectedBook: null,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    loadBooksRequest: (state) => {
      state.loadingState = 'requesting';
    },
    loadBooksError: (state, { payload }) => {
      state.loadingState = 'failed';
      state.statusMessage = 'messages.networkError';
      state.error = payload.err;
    },
    loadBooksSuccess: (state, { payload }) => {
      state.books = [...state.books, ...payload.items];
      state.loadingState = 'finished';
    },
    setCurrentRequest: (state, { payload }) => {
      state.currentRequest = payload.request;
    },
    setBooksCount: (state, { payload }) => {
      state.booksCount = payload.totalItems;
    },
    setLastBooksIndex: (state, { payload }) => {
      state.lastBookIndex = payload.lastIndex;
    },
    clearBooks: (state) => {
      state.booksCount = null;
      state.books = [];
      state.lastBookIndex = 0;
    },
    setSelectedBook: (state, { payload }) => {
      state.selectedBook = payload.book;
    }
  },
});

const { actions, reducer } = booksSlice;

export const loadBooks = (path, lastIndex = 0) => async (dispatch) => {
  dispatch(actions.loadBooksRequest());
  try {
    const { data } = await axios.get(path);
    const { totalItems } = data;
    if (totalItems > 0) {
      dispatch(actions.setLastBooksIndex({ lastIndex: lastIndex + paginationStep }));
      dispatch(actions.loadBooksSuccess({ items: data.items }));
    } else {
      dispatch(actions.loadBooksSuccess({ items: [] }));
    }
    lastIndex === 0 && dispatch(actions.setBooksCount({ totalItems }));
  } catch (err) {
    console.log(err);
    dispatch(actions.loadBooksError({ err }));
  }
};

export const {
  setCurrentRequest,
  setStatusMessage,
  setSelectedBook,
  setLastBooksIndex,
  clearBooks,
} = actions;

export default reducer;
