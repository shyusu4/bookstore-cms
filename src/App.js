/* eslint-disable react/prefer-stateless-function */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/configureStore';
import { getBook } from './redux/books/books';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
