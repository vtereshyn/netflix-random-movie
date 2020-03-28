import React, { useEffect, useContext, useCallback } from 'react';

/**
 * API
 */
import api from '../../api';

import MovieContainer from '../../components/Movie/Container';

/**
 * Store
 */
import { Store } from '../../store/Provider';
import * as ACTION_TYPE from '../../store/actions/types';

const MovieScreen = () => {
  const { dispatch, state } = useContext(Store);

  const handleGetRandomMovie = useCallback(() => {
    api.movie.random({ dispatch, type: ACTION_TYPE.GET_RANDOM_MOVIE });
  }, [dispatch]);

  useEffect(() => {
    handleGetRandomMovie();

    return () => {
      dispatch!(ACTION_TYPE.GET_RANDOM_MOVIE_RESET);
    };
  }, [dispatch, handleGetRandomMovie]);

  function handleSave() {
    api.movie.save({
      dispatch,
      type: ACTION_TYPE.SAVE_MOVIE,
      movie: state.movie!
    });
  }

  return (
    <MovieContainer
      movie={state.movie}
      onSaveMovieClick={handleSave}
      onRandomMovieClick={handleGetRandomMovie}
    />
  );
};

export default MovieScreen;
