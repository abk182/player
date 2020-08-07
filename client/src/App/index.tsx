import React, { FC } from 'react';
import ThemeProvider from 'src/App/Theme/Provider';
import ThemeToggleButton from 'src/App/Theme/ToggleButton';
import IntlProvider from 'src/App/Intl/Provider';
import IntlToggleButton from 'src/App/Intl/ToggleButton';
import Player from 'src/App/Player';
import styles from './style.css';

const App: FC = () => {
  return (
    <IntlProvider>
      <ThemeProvider>
        <div className={styles['container']}>
          <ThemeToggleButton />
          <IntlToggleButton />
          <Player />
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
