import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setBooksLoadingStatus: (state, { payload }) => {
      state.booksLoadingStatus = payload.status;
    },
    addBooks: (state, { payload }) => {
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
  addBooks,
  setBooksLoadingStatus,
} = actions;

export default reducer;
