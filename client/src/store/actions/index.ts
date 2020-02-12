import * as ACTION_TYPE from './types';
import { StoreType } from '../../types';

export const reducer = (
  state: StoreType,
  action: { type: keyof typeof ACTION_TYPE; payload: any }
) => {
  switch (action.type) {
    case ACTION_TYPE.GET_MOVIE:
      return { ...state, movie: action.payload };
    case ACTION_TYPE.GET_MOVIE_RESET:
      return {};
    default:
      return state;
  }
};
