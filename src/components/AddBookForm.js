import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const [newBook, setBook] = useState({
    item_id: '',
    title: '',
    author: '',
    category: 'Action',
  });

  const submit = { ...newBook, item_id: uuidv4() };
  const submithandler = (e) => {
    e.preventDefault();
    dispatch(addBook({ payload: submit, dispatch }));
    e.reset();
  };

  const titleChangeHandler = (e) => {
    setBook({
      ...newBook, title: e.target.value,
    });
  };

  const authorChangeHandler = (e) => {
    setBook({
      ...newBook, author: e.target.value,
    });
  };

  return (
    <div className="add-book">
      <h2>Add new book</h2>
      <form onSubmit={submithandler}>
        <input
          type="text"
          className="title-input"
          placeholder="Book title"
          onChange={titleChangeHandler}
          required
        />
        <input
          type="text"
          className="author-input"
          placeholder="Book author"
          onChange={authorChangeHandler}
          required
        />
        <select name="category" className="category-select">
          <option value="" defaultValue>Category</option>
        </select>
        <button className="submit-btn" type="submit">Add book</button>
      </form>
    </div>
  );
}

export default AddBookForm;
