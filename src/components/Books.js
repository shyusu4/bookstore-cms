/* eslint-disable */
import React from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';
import { useSelector } from 'react-redux';

function Books() {
  const booksArr = useSelector((state) => state.books);

    return (
        <div>
          {booksArr.map((book) => (
            <div key={book.item_id}>
            <Book id={book.item_id} title={book.title} author={book.author} />
            </div>
          ))}
          <AddBookForm />
        </div>
      );
}

export default Books;
