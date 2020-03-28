import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

/**
 * Models
 */
import { Model, Document } from 'mongoose';

/**
 * Config & Types
 */
import { config } from '../../config';
import { Movie } from '../../common/types';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('Movie') private MovieModel: Model<Movie & Document>
  ) {}

  public async get(id: string): Promise<Movie> {
    return this.MovieModel.findOne({ id });
  }

  public async getAll(): Promise<Movie[]> {
    return this.MovieModel.find().exec();
  }

  public async save(movie: Movie): Promise<Movie> {
    const savedMovie = await this.get(movie.id);
    if (savedMovie) {
      throw new Error(`You've already saved ${movie.title}`);
    }

    const createdMovie = new this.MovieModel(movie);
    return createdMovie.save();
  }

  public async getRandom(): Promise<Movie> {
    const response = await axios.get(
      `${config.apiUrl}?availability=onAnySource&content_kind=both&nocache=true`
    );
    return response.data;
  }
}
