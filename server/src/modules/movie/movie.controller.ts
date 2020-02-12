import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from '../../common/types';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getHello(): Promise<Movie> {
    return this.movieService.getRandom();
  }
}
