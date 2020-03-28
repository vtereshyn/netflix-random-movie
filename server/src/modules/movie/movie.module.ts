import { MongooseModule } from '@nestjs/mongoose';
import { Module, HttpModule } from '@nestjs/common';

import { MovieSchema } from '../../schemas';

import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }])
  ],
  providers: [MovieService],
  controllers: [MovieController],
  exports: [MovieService]
})
export class MovieModule {}
