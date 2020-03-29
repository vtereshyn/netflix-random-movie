/* global process */

import axios from 'axios';
import { Dispatch } from 'react';

import * as TYPE from '../store/actions/types';
import { Movie } from '../shared/types';

const endpointUrl = (url = '') => `${process.env.REACT_APP_API_URL}/${url}`;

interface Store {
  type: keyof typeof TYPE;
  dispatch?: Dispatch<any>;
}

export default {
  movie: {
    random: ({ dispatch, type }: Store) =>
      axios
        .get(endpointUrl('movies/random'))
        .then(response => dispatch!({ payload: response.data, type })),

    get: ({ dispatch, type, id }: Store & { id: string }) =>
      axios
        .get(endpointUrl(`movies?id=${id}`))
        .then(response => dispatch!({ payload: response.data, type })),

    getAll: ({ dispatch, type }: Store) =>
      axios
        .get(endpointUrl('movies'))
        .then(response => dispatch!({ payload: response.data, type })),

    save: ({ dispatch, type, ...params }: Store & { movie: Movie }) =>
      axios
        .post(endpointUrl('movies'), params)
        .then(response => dispatch!({ payload: response.data, type }))
  }
};
