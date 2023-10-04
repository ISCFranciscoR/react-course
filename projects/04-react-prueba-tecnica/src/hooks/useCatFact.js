import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts';

export default function useCatFact() {
  const [fact, setFact] = useState();
  const refreshFact = async () => {
    const fact = await getRandomFact();
    setFact(fact);
  };

  useEffect(() => {
    refreshFact();
  }, []);

  return { fact, refreshFact };
}
