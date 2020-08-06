import React, { FC, useContext } from 'react';
import { useIntl } from 'react-intl';
import Button from 'src/uikit/Button';
import { IntlContext } from 'src/uikit/Intl';

const IntlToggleButton: FC = () => {
  const intl = useIntl();
  const { locale, setLocale } = useContext(IntlContext);

  return <Button>{intl.formatMessage({ id: 'hello {locale}' }, { locale })}</Button>;
};

export default IntlToggleButton;
