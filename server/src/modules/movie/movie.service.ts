import axios from 'axios';
import { Injectable } from '@nestjs/common';

import { config } from '../../config';
import { Movie } from '../../common/types';

@Injectable()
export class MovieService {
  async getRandom(): Promise<Movie> {
    const response = await axios.get(
      `${config.apiUrl}?availability=onAnySource&content_kind=both&nocache=true`
    );
    return response.data;
  }
}
