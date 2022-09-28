import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: uuidv4(),
    title: 'Animal Farm',
    author: 'George Orwell',
  },
  {
    id: uuidv4(),
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
  },
];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return [
        state.filter((book) => book.id !== action.id),
      ];

    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
