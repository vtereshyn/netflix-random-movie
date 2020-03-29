import React, { FunctionComponent } from 'react';

import { Movie as MovieType } from '../../../shared/types';

interface Props {
  movie: MovieType | null;
}

const Movie: FunctionComponent<Props> = ({ movie }) => (
  <article>
    <h2>{movie?.title}</h2>
    <h3>{movie?.overview}</h3>

    <span>{movie?.imdb_rating}</span>
    <span>{movie?.classification}</span>
  </article>
);

export default Movie;
