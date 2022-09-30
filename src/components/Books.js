/* eslint-disable */
import React, {useEffect} from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';
import { useSelector, useDispatch } from 'react-redux';

function Books() {
  const booksArr = useSelector((state) => state.books);
  
    return (
        <div>
          {booksArr.map((book) => (
            <Book id={book.item_id} key={book.item_id} title={book.title} author={book.author} />
          ))}
          <AddBookForm />
        </div>
      );
}

export default Books;
