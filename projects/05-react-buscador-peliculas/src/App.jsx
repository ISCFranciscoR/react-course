import { useCallback, useRef, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Movies from './components/Movies';
import useMovies from './hooks/useMovies';
import useSearch from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
  const [sortByTitle, setSortByTitle] = useState(false);
  const { query, setQuery, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ query, sortByTitle });
  const debounceSearch = useCallback(
    debounce((query) => {
      getMovies({ query });
    }, 500),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // const fields = new FormData(event.target);
    //
    // const query = fields.get('query');
    // Forma no controlada
    /*
    const formData = new FormData(event.target);
    const { query } = Object.fromEntries(formData);
    if (!query) {
      return;
    }
    console.log(query);
    */
    getMovies({ query });
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debounceSearch(newQuery);
  };

  const handleSort = () => {
    setSortByTitle(!sortByTitle);
  };

  return (
    <>
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            value={query}
            onChange={handleChange}
            placeholder="Avengers, Star Wars, The Matriz..."
          />
          <button type="submit">Buscar</button>
          <div className="search-options">
            <label htmlFor="sort-by-title">
              <input
                type="checkbox"
                name="sort-by-title"
                id="sort-by-title"
                value={sortByTitle}
                onChange={handleSort}
              />
              Ordenar por título
            </label>
          </div>
        </form>
        <div
          style={{ color: '#c0392b', textAlign: 'center', fontSize: '0.75rem' }}
        >
          {error && <strong>{error}</strong>}
        </div>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <Movies movies={movies} />
        </main>
      )}
    </>
  );
}

export default App;
