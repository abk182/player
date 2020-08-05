import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import Theme, { THEME } from 'src/uikit/Theme';
import Player from 'src/Player';

const App = (): ReactElement => {
  return (
    <Theme.Provider value={THEME.LIGHT}>
      <Player />
    </Theme.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
