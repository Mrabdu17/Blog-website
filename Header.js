// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderFooter.css'; // Import your CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to My Blog</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create" className="btn btn-primary">
              Create Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
