import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Theme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          ThemeApp
        </div>
        
        {/* Desktop Navigation */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Desktop Theme Selector */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="theme-selector hidden md:block"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-button md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Navigation</span>
              <button
                onClick={closeMobileMenu}
                className="mobile-menu-close"
                aria-label="Close mobile menu"
              >
                ✕
              </button>
            </div>
            
            <div className="mobile-menu-content">
              <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                About
              </Link>
              <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                Contact
              </Link>
              
              <div className="mobile-theme-selector-container">
                <label htmlFor="mobile-theme-select" className="mobile-theme-label">
                  Select Theme
                </label>
                <select
                  id="mobile-theme-select"
                  value={theme}
                  onChange={(e) => {
                    setTheme(e.target.value as Theme);
                    closeMobileMenu();
                  }}
                  className="mobile-theme-selector"
                >
                  <option value="theme1">Theme 1 - Minimalist</option>
                  <option value="theme2">Theme 2 - Dark Professional</option>
                  <option value="theme3">Theme 3 - Colorful Creative</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;