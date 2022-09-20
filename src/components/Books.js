/* eslint-disable */
import React from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';

const booksArr = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 2,
      title: 'Animal Farm',
      author: 'George Orwell',
    },
    {
      id: 3,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
    },
];

function Books() {
    return (
        <div>
          {booksArr.map((book) => (
            <Book key={book.id} title={book.title} author={book.author} />
          ))}
          <AddBookForm />
        </div>
      );
}

export default Books;
