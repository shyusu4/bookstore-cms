import { createAsyncThunk } from '@reduxjs/toolkit';
// APIurl id = 56IrfFVkJdbMmaDysAVk
const APIurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/56IrfFVkJdbMmaDysAVk/books';

const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore-cms/books/GET_BOOK';

const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case 'bookstore-cms/books/ADD_BOOK':
      return [...state, action.payload];

    case 'bookstore-cms/books/REMOVE_BOOK':
      return state.filter((book) => book.item_id !== action.payload);

    case 'bookstore-cms/books/GET_BOOK':
      return action.payload;

    default: return state;
  }
}

const addBook = createAsyncThunk(ADD_BOOK, async (action) => {
  const { payload, dispatch } = action;
  await fetch(APIurl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  dispatch({
    type: ADD_BOOK,
    payload,
  });
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (action) => {
  const { id, dispatch } = action;
  const APIurlId = `${APIurl}/${id}`;
  await fetch(APIurlId, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
});

const getBook = createAsyncThunk(GET_BOOK, (action) => {
  const dispatch = action;
  fetch(APIurl).then((response) => response.json())
    .then((data) => {
      const books = Object.keys(data).map((key) => {
        const book = data[key][0];
        return {
          item_id: key,
          ...book,
        };
      });
      dispatch({
        type: GET_BOOK,
        payload: books,
      });
    });
});

export { addBook, removeBook, getBook };
