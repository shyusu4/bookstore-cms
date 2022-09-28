import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  return (
    <div className="book-item">

      <div className="book-info">
        <p className="genre">Action</p>
        <h2 className="title">{title}</h2>
        <h3 className="author">{author}</h3>
        <ul className="interaction">
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={() => dispatch(removeBook(id))} id={id}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>

      <div className="progress">
        <div className="progress-bar" />
        <div className="progress-amount">
          <div className="percentage">80%</div>
          <div className="status">Completed</div>
        </div>
      </div>

      <div className="progress-details">
        <div className="name">CURRENT CHAPTER</div>
        <div className="current-chapter">Chapter 20</div>
        <button type="button">Update progress</button>
      </div>

    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
