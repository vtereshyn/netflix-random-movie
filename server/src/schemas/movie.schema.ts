import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  id: String,
  slug: String,
  title: String,
  overview: String,
  imdbRating: Number,
  rtCriticsRating: Number,
});
