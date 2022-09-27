const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';
const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          completed: false,
        },
      ];

    case REMOVE_BOOK:
      return [
        state.filter((book) => book.id !== action.payload),
      ];

    default:
      return state;
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    title: book.title,
    author: book.author,
  };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: id };
}
