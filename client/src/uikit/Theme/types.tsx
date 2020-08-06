import ReactChildren from 'react';

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface Props {
  children: ReactChildren;
}

export interface State {
  theme: THEME;
}

export interface Context extends State {
  setTheme: (theme: THEME) => void;
}
