import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <main className="main-content">
        <h1 className="page-title">About ThemeApp</h1>
        
        <p className="page-description">
          ThemeApp is a demonstration of modern web development techniques, showcasing the power of 
          dynamic theming and responsive design. Our application provides users with multiple visual 
          experiences through carefully crafted themes that adapt not only colors but entire layouts 
          and typography systems.
        </p>

        <p className="page-description">
          Built with React, TypeScript, and Tailwind CSS, this application represents the intersection 
          of technical excellence and user experience design. Each theme tells a different visual story 
          while maintaining consistent functionality and accessibility standards.
        </p>

        <div className="content-card">
          <h2 className="card-title">
            Technical Features
          </h2>
          <p className="card-description">
            Our application demonstrates advanced frontend development concepts including Context API 
            for state management, localStorage for persistence, React Router for navigation, and 
            responsive design principles. The theming system provides smooth transitions and maintains 
            user preferences across sessions.
          </p>
        </div>

        <div className="content-card">
          <h2 className="card-title">
            Design Philosophy
          </h2>
          <p className="card-description">
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