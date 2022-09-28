import { createAsyncThunk } from '@reduxjs/toolkit';

// API id a0z7u9fR7yuxVcKAbO6z
const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/a0z7u9fR7yuxVcKAbO6z/books';

const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore-cms/books/GET_BOOK';

const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case 'bookstore-cms/books/ADD_BOOK/fulfilled':
      return [...state, action.book];

    case 'bookstore-cms/books/REMOVE_BOOK/fulfilled':
      return [
        state.filter((book) => book.id !== action.id),
      ];

    case 'bookstore-cms/books/GET_BOOK/fulfilled':
      return action.payload;

    default:
      return state;
  }
}

const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(APIurl, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return book;
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${APIurl}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const getBook = createAsyncThunk(GET_BOOK, async () => {
  const response = await fetch(APIurl);
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return books;
});

export { addBook, removeBook, getBook };
