import { useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

export default function useMovies({ query }) {
  const [dataMovies, setDataMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(null);

  const getMovies = async () => {
    if (previousSearch.current === query) {
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
  };
  return { movies: dataMovies, getMovies, error, loading };
}
