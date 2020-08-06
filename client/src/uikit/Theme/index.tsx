import React, { FC, useState, useContext, createContext } from 'react';
import { THEME, Props, State, Context } from './types';

export const ThemeContext = createContext<Context>(null);

export const useTheme = (): Context => useContext<Context>(ThemeContext);

const Theme: FC<Props> = ({ children }: Props) => {
  const [state, setState] = useState<State>({ theme: THEME.LIGHT });
  return (
    <ThemeContext.Provider
      value={{ ...state, setTheme: (theme: THEME) => setState({ ...state, theme }) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
