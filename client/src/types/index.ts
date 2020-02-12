export interface Movie {
  id: string;
  slug: string;
  title: string;
  overview: string;
  classification: string;
  tagline: string;
  imdb_rating: number;
}

export interface StoreType {
  movie: Movie | null;
}
