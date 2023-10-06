import { useState, useEffect, useRef } from 'react';

export default function useSearch() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState();
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === '';
      return;
    }
    if (query === '') {
      setError('No se puede buscar una película vacía');
      return;
    }
    if (query?.length < 3) {
      setError('No se puede buscar una película con menos de 3 caracteres');
      return;
    }
    setError(null);
  }, [query]);

  return { query, setQuery, error };
}
