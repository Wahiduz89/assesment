import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Theme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const getHeaderClass = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-white shadow-md border-b';
      case 'theme2':
        return 'bg-gray-900 shadow-lg';
      case 'theme3':
        return 'bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl';
      default:
        return 'bg-white shadow-md';
    }
  };

  const getTextClass = () => {
    switch (theme) {
      case 'theme1':
        return 'text-gray-800 hover:text-blue-600';
      case 'theme2':
        return 'text-white hover:text-gray-300';
      case 'theme3':
        return 'text-white hover:text-yellow-200';
      default:
        return 'text-gray-800';
    }
  };

  const getLogoClass = () => {
    switch (theme) {
      case 'theme1':
        return 'font-sans font-semibold text-xl';
      case 'theme2':
        return 'font-serif font-bold text-2xl';
      case 'theme3':
        return 'font-serif font-bold text-2xl';
      default:
        return 'font-sans font-semibold text-xl';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClass()}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className={`${getLogoClass()} ${getTextClass()}`}>
          ThemeApp
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className={`transition-colors ${getTextClass()}`}>
            Home
          </Link>
          <Link to="/about" className={`transition-colors ${getTextClass()}`}>
            About
          </Link>
          <Link to="/contact" className={`transition-colors ${getTextClass()}`}>
            Contact
          </Link>
        </nav>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="px-3 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
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