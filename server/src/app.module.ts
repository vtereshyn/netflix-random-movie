import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), MovieModule]
})
export class AppModule {}
