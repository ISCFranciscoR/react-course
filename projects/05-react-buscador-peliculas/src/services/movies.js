import { API_CONSTANTS } from '../constants/api';

const mappedMovies = (movies) => {
  return movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
};

export async function searchMovies({ query }) {
  const moviesResponse = await fetch(
    `${API_CONSTANTS.BASE_ENDPOINT}?apiKey=${API_CONSTANTS.KEY}&s=${query}`
  );
  const moviesJSON = await moviesResponse.json();
  const movies = moviesJSON.Search;
  return mappedMovies(movies);
}
