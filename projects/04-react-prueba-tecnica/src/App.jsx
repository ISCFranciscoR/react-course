import './App.css';
import useCatImage from './hooks/useCatImage';
import useCatFact from './hooks/useCatFact';

export default function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={refreshFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Imagen obtenida aleatoriamente con el hecho "${fact}"`}
        />
      )}
    </main>
  );
}
