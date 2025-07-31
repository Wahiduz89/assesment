import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  getThemeClasses: (element: string) => string;
}

const themeClasses = {
  theme1: {
    container: 'bg-gray-50 min-h-screen font-sans',
    main: 'pt-20 px-4 max-w-6xl mx-auto',
    header: 'bg-white shadow-md border-b',
    text: 'text-gray-800 hover:text-blue-600',
    title: 'text-3xl font-light text-gray-800 mb-4',
    paragraph: 'text-gray-600 leading-relaxed mb-6',
    button: 'bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors',
    card: 'bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow',
    input: 'w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4',
    label: 'block text-gray-700 font-medium mb-2',
    logo: 'font-sans font-semibold text-xl'
  },
  theme2: {
    container: 'bg-gray-800 min-h-screen font-serif flex',
    main: 'flex-1 pt-20 px-6',
    header: 'bg-gray-900 shadow-lg',
    text: 'text-white hover:text-gray-300',
    title: 'text-4xl font-bold text-white mb-6',
    paragraph: 'text-gray-300 leading-loose mb-8 text-lg',
    button: 'bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all',
    card: 'bg-gray-700 p-6 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors',
    input: 'w-full p-4 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6',
    label: 'block text-white font-bold mb-3 text-lg',
    logo: 'font-serif font-bold text-2xl'
  },
  theme3: {
    container: 'bg-gradient-to-br from-yellow-100 to-pink-100 min-h-screen font-serif',
    main: 'pt-20 px-4 max-w-7xl mx-auto',
    header: 'bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl',
    text: 'text-white hover:text-yellow-200',
    title: 'text-4xl font-bold text-purple-800 mb-6 text-center',
    paragraph: 'text-purple-700 leading-relaxed mb-8 text-center text-lg',
    button: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105',
    card: 'bg-white p-6 rounded-2xl shadow-xl border-2 border-pink-200 hover:shadow-2xl hover:scale-105 transition-all transform',
    input: 'w-full p-4 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 mb-6',
    label: 'block text-blue-800 font-bold mb-3 text-lg',
    logo: 'font-serif font-bold text-2xl'
  }
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('theme1');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const getThemeClasses = (element: string): string => {
    const themeConfig = themeClasses[theme];
    return themeConfig[element as keyof typeof themeConfig] || '';
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, getThemeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};