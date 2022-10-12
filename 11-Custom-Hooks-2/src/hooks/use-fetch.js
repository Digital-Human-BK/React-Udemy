import { useCallback, useState } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(config.url, {
        method: config.method || 'GET',
        headers: config.headers || {},
        body: JSON.stringify(config.body) || null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useFetch;
