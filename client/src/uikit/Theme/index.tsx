import React, { useContext } from 'react';

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

const ThemeContext = React.createContext<THEME>(THEME.LIGHT);

export const useTheme = (): THEME => useContext(ThemeContext);

export default ThemeContext;
