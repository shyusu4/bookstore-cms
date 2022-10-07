/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  return (
    <div className="book-item">

      <div className="book-info">
        <p className="genre">Action</p>
        <h2 className="title">{title}</h2>
        <h3 className="author">{author}</h3>
        <ul className="interaction">
          <li>
            <button type="button">Comments</button>
            |
          </li>
          <li>
            <button type="button" onClick={() => dispatch(removeBook({ id, dispatch }))}>Remove</button>
            |
          </li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="progress-container">
        <CircularProgressBar
          animationSmooth="1s ease-out"
          colorCircle="#f1f1f1"
          colorSlice="#FF6D00"
          percent={Math.floor(Math.random() * 100) + 15}
          linearGradient={['#379cf6', '#307bbe']}
          size={200}
        />
      </div>
      <div className="progress-details">
        <div className="current-chapter">CURRENT CHAPTER</div>
        <div className="chapter-number">
          Chapter
          {' '}
          {Math.floor(Math.random() * 60) + 3}
        </div>
        <button type="button">Update progress</button>
      </div>

    </div>
  );
}

export default Book;
