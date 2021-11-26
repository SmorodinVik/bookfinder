import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusMessage: null,
  booksLoadingStatus: 'finished',
  books: null,
  booksCount: null,
  lastBookIndex: null,
};

const paginationStep = 30;

const booksSlice = createSlice({
  name: 'books',
  initialState,
  // !!!Update Reducers!!!
  reducers: {
    setStatusMessage: (state, { payload }) => {
      state.statusMessage = payload.message;
    },
    setBooksLoadingStatus: (state, { payload }) => {
      state.booksLoadingStatus = payload.status;
    },
    loadBooks: (state, { payload }) => {
      state.books = payload.items;
      state.booksCount = payload.items.length;
      if (payload.items.length <= paginationStep) {
        state.lastBookIndex = payload.items.length - 1;
      } else {
        state.lastBookIndex = paginationStep - 1;
      }
    },
  },
});

const { actions, reducer } = booksSlice;

export const {
  loadBooks,
  setBooksLoadingStatus,
  setStatusMessage,
} = actions;

export default reducer;
