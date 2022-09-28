import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const clear = () => {
    setTitle('');
    setAuthor('');
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title,
      author,
    }));
    clear();
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="add-book">
      <h2>Add new book</h2>
      <form>
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
        <button className="submit-btn" type="submit" onClick={addBookHandler}>Add book</button>
      </form>
    </div>
  );
}

export default AddBookForm;
