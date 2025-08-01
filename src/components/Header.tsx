import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Theme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          ThemeApp
        </div>
        
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="theme-selector"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;