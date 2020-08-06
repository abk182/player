import React, { FC } from 'react';
import Theme from 'src/uikit/Theme';
import ThemeToggleButton from 'src/uikit/Theme/ToggleButton';
import Intl from 'src/uikit/Intl';
import IntlToggleButton from 'src/uikit/Intl/ToggleButton';
import Player from 'src/Player';
import styles from './style.css';

const App: FC = () => {
  return (
    <Intl>
      <Theme>
        <div className={styles['container']}>
          <ThemeToggleButton />
          <IntlToggleButton />
          <Player />
        </div>
      </Theme>
    </Intl>
  );
};

export default App;
