import React, { useEffect, useContext } from 'react';

/**
 * API
 */
import api from '../../api';

import Movie from '../../components/Movie';

/**
 * Store
 */
import { Store } from '../../store/StoreProvider';
import * as ACTION_TYPE from '../../store/actions/types';

const MovieScreen = () => {
  const { dispatch, state } = useContext(Store);
  useEffect(() => {
    api.test.get({ dispatch, type: ACTION_TYPE.GET_MOVIE });
  }, [dispatch]);

  return <Movie movie={state.movie} />;
};

export default MovieScreen;
