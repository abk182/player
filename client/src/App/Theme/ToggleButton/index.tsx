import React, { FC, useContext } from 'react';
import { useIntl } from 'react-intl';
import Button from 'src/uikit/Button';
import { ThemeContext } from 'src/App/Theme/Provider';
import { THEME } from 'src/App/Theme/Provider/types';

const ThemeToggleButton: FC = () => {
  const intl = useIntl();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={() => {
        const themes = Object.values(THEME) as Array<THEME>;
        const nextTheme =
          themes.indexOf(theme) === themes.length - 1
            ? themes[0]
            : themes[themes.indexOf(theme) + 1];
        setTheme(nextTheme);
      }}
    >
      {intl.formatMessage({ id: 'theme' }, { theme })}
    </Button>
  );
};

export default ThemeToggleButton;
