/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

class App extends React.Component {
  render() {
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
}

export default App;
