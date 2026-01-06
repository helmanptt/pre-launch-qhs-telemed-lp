import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Theme = 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Always initialize as 'light'
  const theme: Theme = 'light';

  useEffect(() => {
    // Enforce light mode class on mount
    const root = window.document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    // Clean up any previous persistence
    localStorage.removeItem('theme');
  }, []);

  const toggleTheme = () => {
    // No-op: Theme switching is disabled
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};