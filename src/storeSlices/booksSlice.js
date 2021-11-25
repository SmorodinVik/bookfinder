import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: null,
  booksCount: null,
  lastBookIndex: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  // !!!Update Reducers!!!
  reducers: {
    addBooks: (state, { payload }) => {
      state.books = payload.items;
      state.booksCount = payload.items.length;
      if (payload.items.length <= 30) {
        state.lastBookIndex = payload.items.length - 1;
      } else {
        state.lastBookIndex = 29;
      }
    },
  },
});

const { actions, reducer } = booksSlice;

export const {
  addBooks,
} = actions;

export default reducer;
