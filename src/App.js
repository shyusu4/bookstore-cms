/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" />
          <Route path="/categories" />
        </Routes>
      </div>
    );
  }
}

export default App;
