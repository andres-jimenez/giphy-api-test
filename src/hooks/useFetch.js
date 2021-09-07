import { useEffect, useState } from 'react';

export const useFetch = endpoint => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const getData = async endpoint => {
      try {
        const response = await fetch(endpoint);
        const responseJson = await response.json();
        if (response.ok) {
          setData(responseJson.data);
          setPending(false);
        } else {
          throw new Error(responseJson.message);
        }
      } catch (error) {
        setData(null);
        setPending(false);
        console.log('Error: ' + error.message);
      }
    };
    getData(endpoint);
  }, [endpoint]);

  return { data, pending };
};
