import { useState, useEffect } from 'react';

const CAT_ENDPOINT_IMAGE_URL = (words) =>
  `https://cataas.com/cat/says/${words}?size=50&color=red&json=true`;
const CAT_PREFIX_IMG = 'https://cataas.com';

export default function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    if (!fact) return;
    // const firstWord = fact.split(' ').slice(0, 3).join(' ');
    const NUMBER_OF_WORDS = 1;
    const firstWord = fact.split(' ', NUMBER_OF_WORDS).join(' ');
    fetch(CAT_ENDPOINT_IMAGE_URL(firstWord))
      .then((response) => response.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
      });
  }, [fact]);
  return { imageUrl: `${CAT_PREFIX_IMG}${imageUrl}` };
}
