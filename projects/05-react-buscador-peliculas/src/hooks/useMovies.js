import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

// useMemo vs useCallback
// useMemo permite almacenar un valor computado entre renderizados
// useCallback mejora la sintaxis de useMemo para funciones

export default function useMovies({ sortByTitle }) {
  const [dataMovies, setDataMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(null);

  // const getMovies = useMemo(() => {
  //   return async ({ query }) => {
  //     if (previousSearch.current === query) {
  //       return;
  //     }
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       previousSearch.current = query;
  //       const movies = await searchMovies({ query });
  //       setDataMovies(movies);
  //     } catch (e) {
  //       setError(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  // }, []);

  const getMovies = useCallback(async ({ query }) => {
    if (previousSearch.current === query || !query) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = query;
      const movies = await searchMovies({ query });
      setDataMovies(movies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMoviesByTitle = useMemo(() => {
    return sortByTitle && dataMovies
      ? [...dataMovies].sort((a, b) => a.title.localeCompare(b.title))
      : dataMovies;
  }, [dataMovies, sortByTitle]);

  return { movies: sortedMoviesByTitle, getMovies, error, loading };
}
