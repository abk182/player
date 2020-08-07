import { ReactNode } from 'react';

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface Props {
  children: ReactNode;
}

export interface State {
  theme: THEME;
}

export interface Context extends State {
  setTheme: (theme: THEME) => void;
}
