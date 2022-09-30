// import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const mainReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(
  mainReducer,
  applyMiddleware(thunk),
);

export default store;
