import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const getContainerClass = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-gray-50 min-h-screen font-sans';
      case 'theme2':
        return 'bg-gray-800 min-h-screen font-serif flex';
      case 'theme3':
        return 'bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen font-serif';
      default:
        return 'bg-gray-50 min-h-screen';
    }
  };

  const getMainClass = () => {
    switch (theme) {
      case 'theme1':
        return 'pt-20 px-4 max-w-4xl mx-auto';
      case 'theme2':
        return 'flex-1 pt-20 px-6';
      case 'theme3':
        return 'pt-20 px-4 max-w-5xl mx-auto';
      default:
        return 'pt-20 px-4 max-w-4xl mx-auto';
    }
  };

  const getTitleClass = () => {
    switch (theme) {
      case 'theme1':
        return 'text-3xl font-light text-gray-800 mb-6';
      case 'theme2':
        return 'text-4xl font-bold text-white mb-8';
      case 'theme3':
        return 'text-4xl font-bold text-purple-800 mb-8 text-center';
      default:
        return 'text-3xl font-light text-gray-800 mb-6';
    }
  };

  const getTextClass = () => {
    switch (theme) {
      case 'theme1':
        return 'text-gray-600 leading-relaxed mb-6';
      case 'theme2':
        return 'text-gray-300 leading-loose mb-8 text-lg';
      case 'theme3':
        return 'text-purple-700 leading-relaxed mb-8 text-lg';
      default:
        return 'text-gray-600 leading-relaxed mb-6';
    }
  };

  const getCardClass = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-white p-6 rounded-lg shadow-sm border mt-8';
      case 'theme2':
        return 'bg-gray-700 p-8 rounded-lg border border-gray-600 mt-10';
      case 'theme3':
        return 'bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-200 mt-10';
      default:
        return 'bg-white p-6 rounded-lg shadow-sm border mt-8';
    }
  };

  const getSidebarClass = () => {
    if (theme !== 'theme2') return 'hidden';
    return 'w-64 bg-gray-900 border-r border-gray-700 p-6 pt-20';
  };

  const getSidebarItemClass = () => {
    return 'block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded mb-2 transition-colors';
  };

  return (
    <div className={`transition-all duration-500 ${getContainerClass()}`}>
      <div className={getSidebarClass()}>
        <h3 className="text-white font-bold text-lg mb-4">About Sections</h3>
        <a href="#mission" className={getSidebarItemClass()}>Our Mission</a>
        <a href="#team" className={getSidebarItemClass()}>Team</a>
        <a href="#values" className={getSidebarItemClass()}>Values</a>
        <a href="#history" className={getSidebarItemClass()}>History</a>
      </div>

      <main className={getMainClass()}>
        <h1 className={getTitleClass()}>About ThemeApp</h1>
        
        <p className={getTextClass()}>
          ThemeApp is a demonstration of modern web development techniques, showcasing the power of 
          dynamic theming and responsive design. Our application provides users with multiple visual 
          experiences through carefully crafted themes that adapt not only colors but entire layouts 
          and typography systems.
        </p>

        <p className={getTextClass()}>
          Built with React, TypeScript, and Tailwind CSS, this application represents the intersection 
          of technical excellence and user experience design. Each theme tells a different visual story 
          while maintaining consistent functionality and accessibility standards.
        </p>

        <div className={getCardClass()}>
          <h2 className={theme === 'theme2' ? 'text-2xl font-bold text-white mb-4' : theme === 'theme3' ? 'text-2xl font-bold text-purple-800 mb-4' : 'text-2xl font-semibold text-gray-800 mb-4'}>
            Technical Features
          </h2>
          <p className={getTextClass()}>
            Our application demonstrates advanced frontend development concepts including Context API 
            for state management, localStorage for persistence, React Router for navigation, and 
            responsive design principles. The theming system provides smooth transitions and maintains 
            user preferences across sessions.
          </p>
        </div>

        <div className={getCardClass()}>
          <h2 className={theme === 'theme2' ? 'text-2xl font-bold text-white mb-4' : theme === 'theme3' ? 'text-2xl font-bold text-purple-800 mb-4' : 'text-2xl font-semibold text-gray-800 mb-4'}>
            Design Philosophy
          </h2>
          <p className={getTextClass()}>
            Each theme represents a different design philosophy. Theme 1 embraces minimalism with clean 
            lines and subtle shadows. Theme 2 provides a professional dark mode experience with serif 
            typography. Theme 3 celebrates creativity with vibrant colors and playful card-based layouts.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;