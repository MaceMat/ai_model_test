import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-button">Home</Link>
      <Link to="/news" className="header-button">News</Link>
    </header>
  );
};

export default Header;
