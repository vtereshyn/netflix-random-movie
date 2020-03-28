import { Controller, Get, Post, Body } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from '../../common/types';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('random')
  public random(): Promise<Movie> {
    return this.movieService.getRandom();
  }

  @Get()
  public all(): Promise<Movie[]> {
    return this.movieService.getAll();
  }

  @Post()
  public async save(@Body() request: { movie: Movie }): Promise<Movie> {
    return this.movieService.save(request.movie);
  }
}
