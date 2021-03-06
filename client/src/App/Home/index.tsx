import React, { FC } from 'react';
import ThemeToggleButton from 'src/App/Theme/ToggleButton';
import IntlToggleButton from 'src/App/Intl/ToggleButton';
import Player from 'src/App/Player';
import styles from './style.css';

export const Home: FC = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['buttons']}>
        <ThemeToggleButton />
        <IntlToggleButton />
      </div>
      <Player className={styles['player']} src="http://localhost:3000/sample.m3u8" />
    </div>
  );
};

export default Home;
