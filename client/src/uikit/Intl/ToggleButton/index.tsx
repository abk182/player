import React, { FC, useContext } from 'react';
import { useIntl } from 'react-intl';
import Button from 'src/uikit/Button';
import { IntlContext } from 'src/uikit/Intl';
import { LOCALE } from 'src/uikit/Intl/types';

const IntlToggleButton: FC = () => {
  const intl = useIntl();
  const { locale, setLocale } = useContext(IntlContext);

  return (
    <Button
      onClick={() => {
        const locales = Object.values(LOCALE) as Array<LOCALE>;
        const nextLocale =
          locales.indexOf(locale) === locales.length - 1
            ? locales[0]
            : locales[locales.indexOf(locale) + 1];
        setLocale(nextLocale);
      }}
    >
      {intl.formatMessage({ id: 'locale' }, { locale })}
    </Button>
  );
};

export default IntlToggleButton;
