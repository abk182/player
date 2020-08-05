import React, { FC, useState, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import { Props, State, Context, LOCALE } from './types';
import messages from './messages';

const Context = createContext<Context>(null);

const Intl: FC<Props> = ({ children }: Props) => {
  const [state, setState] = useState<State>({ locale: LOCALE.RU, messages: messages[LOCALE.RU] });
  return (
    <Context.Provider
      value={{
        ...state,
        setLocale: (locale: LOCALE) => setState({ ...state, locale, messages: messages[locale] }),
      }}
    >
      <IntlProvider
        key={state.locale}
        locale={state.locale}
        messages={state.messages}
        defaultLocale="ru"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Intl;
