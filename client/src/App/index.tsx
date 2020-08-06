import React, { ReactElement } from 'react';
import Theme, { THEME } from 'src/uikit/Theme';
import Player from 'src/Player';

const App = (): ReactElement => {
  return (
    <Theme.Provider value={THEME.LIGHT}>
      <Player />
    </Theme.Provider>
  );
};

export default App;
