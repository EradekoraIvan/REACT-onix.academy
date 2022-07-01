import React, { useState, useContext, createContext } from 'react';
import { chengeCssVariables } from '../servisces/chengeCssVariables';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

const ThemeContext = createContext();

export function ThemeProvaider({ children, ...props }) {
  const [theme, setTheme] = useState(null);

  const change = (name) => {
    setTheme(name);
    chengeCssVariables(name);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        change
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvaider;
export const useTheme = () => useContext(ThemeContext);
