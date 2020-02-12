import React, { FunctionComponent } from 'react';

import MovieScreen from './screens/MovieScreen';

import { StoreProvider } from './store/StoreProvider';

const App: FunctionComponent = () => (
  <StoreProvider>
    <main className="wrapper">
      <MovieScreen />
    </main>
  </StoreProvider>
);

export default App;
