import { useState, useCallback } from 'react';
const UseCustomHtpp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestconfig, datapassing) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestconfig.url, {
        method: requestconfig.method ? requestconfig.method : 'GET',
        body: requestconfig.body ? JSON.stringify(requestconfig.body) : null,
        headers: requestconfig.headers ? requestconfig.headers : {},
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      datapassing(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default UseCustomHtpp;
