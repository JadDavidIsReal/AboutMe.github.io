import React from 'react';
import './Header.css';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="logo">
              <a href="/">JAD</a>
            </div>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="hamburger">
            <button>
              {/* Add hamburger icon here */}
              &#9776;
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
