import Movie from './Movie';
import NoMovies from './NoMovies';

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? (
    <div className="movies-grid">
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie}></Movie>;
      })}
    </div>
  ) : (
    <NoMovies />
  );
}
