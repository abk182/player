import { ReactNode } from 'react';

export enum LOCALE {
  RU = 'ru',
  EN = 'en',
}

export interface Props {
  children: ReactNode;
}

export interface State {
  locale: LOCALE;
  messages: Record<string, string>;
}

export interface Context extends State {
  setLocale: (locale: LOCALE) => void;
}
