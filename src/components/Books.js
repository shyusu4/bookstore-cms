/* eslint-disable */
import React from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function Books() {
  const booksArr = useSelector((state) => state.books);

    return (
        <div>
          {booksArr.map((book) => (
            <div key={uuidv4()}>
            <Book id={uuidv4()} title={book.title} author={book.author} />
            </div>
          ))}
          <AddBookForm />
        </div>
      );
}

export default Books;
