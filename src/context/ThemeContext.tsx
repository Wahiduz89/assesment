import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Available theme options
export type Theme = 'theme1' | 'theme2' | 'theme3';

// Theme context interface
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create theme context
const ThemeContext = createContext<ThemeContextType | null>(null);

// Hook to access theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

// Theme provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('theme1');

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['theme1', 'theme2', 'theme3'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Set theme and save to localStorage
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      <div className={`theme-${theme} transition-all duration-500`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};