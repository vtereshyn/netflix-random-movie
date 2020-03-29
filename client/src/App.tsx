import React, { FunctionComponent } from 'react';
import { JssProvider, createUseStyles } from 'react-jss';

import MovieScreen from './screens/MovieScreen';

import { StoreProvider } from './store/Provider';
import attachStylesheets from './assets/styles';

const useStyles = createUseStyles({
  mainWrapper: {
    color: '#fff',
    background: '#000',
    minHeight: '100vh'
  }
});

attachStylesheets();

const App: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <JssProvider id={{ minify: true }}>
      <StoreProvider>
        <main className={classes.mainWrapper}>
          <MovieScreen />
        </main>
      </StoreProvider>
    </JssProvider>
  );
};

export default App;
