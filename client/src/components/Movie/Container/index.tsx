import React, { FunctionComponent } from 'react';

/**
 * Components
 */
import MovieItem from '../Item';

/**
 * Types
 */
import { Movie } from '../../../types';

interface Props {
  movie: Movie | null;
  onSaveMovieClick: () => void;
  onRandomMovieClick: () => void;
}

const Container: FunctionComponent<Props> = ({
  movie,
  onSaveMovieClick,
  onRandomMovieClick
}) => (
  <section
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    <button type="button" onClick={onRandomMovieClick}>
      Get random movie
    </button>

    <button type="button" onClick={onSaveMovieClick}>
      save
    </button>
    <MovieItem movie={movie} />
  </section>
);

export default Container;
