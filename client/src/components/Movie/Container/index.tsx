import React, { FunctionComponent } from 'react';

/**
 * Components
 */
import MovieItem from '../Item';
import MainContainer from '../../../containers/Main';
import PrimaryButton, { SecondaryButton } from '../../Button';
import ContentWrapper from '../../../containers/ContentWrapper';

/**
 * Types
 */
import { Movie } from '../../../shared/types';

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
  <MainContainer>
    <ContentWrapper>
      <PrimaryButton onClick={onRandomMovieClick}>
        Get random movie
      </PrimaryButton>

      <SecondaryButton onClick={onSaveMovieClick}>Save</SecondaryButton>
    </ContentWrapper>

    <MovieItem movie={movie} />
  </MainContainer>
);

export default Container;
