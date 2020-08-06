import React, { FC } from 'react';
import Theme from 'src/uikit/Theme';
import Intl from 'src/uikit/Intl';
import Player from 'src/Player';

const App: FC = () => {
  return (
    <Intl>
      <Theme>
        <Player />
      </Theme>
    </Intl>
  );
};

export default App;
