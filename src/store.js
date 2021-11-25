import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './storeSlices/booksSlice.js';

export default () => configureStore({
  reducer: booksReducer,
});
