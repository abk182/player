import React, { FC, useState, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import { Props, State, Context, LOCALE } from 'src/App/Intl/Provider/types';
import messages from 'src/App/Intl/messages';

export const IntlContext = createContext<Context>(null);

const Intl: FC<Props> = ({ children }: Props) => {
  const [state, setState] = useState<State>({ locale: LOCALE.RU, messages: messages[LOCALE.RU] });
  return (
    <IntlContext.Provider
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
    </IntlContext.Provider>
  );
};

export default Intl;
