import './App.css';
import Loading from './components/Loading';
import Movies from './components/Movies';
import useMovies from './hooks/useMovies';
import useSearch from './hooks/useSearch';

function App() {
  const { query, setQuery, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ query });

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
    getMovies();
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
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
