import React, { FC } from 'react';
import 'regenerator-runtime/runtime';
import ThemeProvider, { ThemeContext } from 'src/App/Theme/Provider';
import IntlProvider from 'src/App/Intl/Provider';
import Home from './Home';
import styles from './style.css';
import { StylesProvider } from '@material-ui/core/styles';

const App: FC = () => {
  return (
    <StylesProvider injectFirst>
      <IntlProvider>
        <ThemeProvider>
          <ThemeContext.Consumer>
            {({ theme }) => (
              <div className={`${styles['container']} ${theme}`}>
                <Home />
              </div>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </IntlProvider>
    </StylesProvider>
  );
};

export default App;
