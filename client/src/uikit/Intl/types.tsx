import { ReactChildren } from 'react';

export enum LOCALE {
  RU = 'ru',
  EN = 'en',
}

export interface Props {
  children: ReactChildren;
}

export interface State {
  locale: LOCALE;
  messages: Record<string, string>;
}

export interface Context extends State {
  setLocale: (locale: LOCALE) => void;
}
