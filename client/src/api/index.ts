import axios from 'axios';
import { Dispatch } from 'react';

import * as TYPE from '../store/actions/types';

const endpointUrl = (url = '') => `http://localhost:9000/${url}`;

interface Store {
  type: keyof typeof TYPE;
  dispatch?: Dispatch<any>;
}

export default {
  test: {
    get: ({ dispatch, type }: Store) =>
      axios
        .get(endpointUrl('movie'))
        .then(response => dispatch!({ payload: response.data, type }))
  }
};
