import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1 className="logo">Bookstore CMS</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
