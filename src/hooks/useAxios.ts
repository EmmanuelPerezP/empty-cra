import { useState, useEffect } from 'react';
import axios from 'axios';

interface AxiosArguments {
  url?: string;
  method?: 'post' | 'get';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

const useAxios = ({ url: rootUrl, method: rootMethod, data: rootData = null }: AxiosArguments) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchLazy = async ({ url, method, data }: AxiosArguments) => {
    setLoading(true);
    try {
      const res = await axios({ url: url || rootUrl, method: method || rootMethod, data: data || rootData });
      setResponse(res.data);
      return res.data;
    } catch (err) {
      // setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await axios({ url: rootUrl, method: rootMethod, data: rootData });
      setResponse(res.data);
      return res.data;
    } catch (err) {
      // setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (rootMethod === 'get') {
      fetch();
    }
  }, []);

  return [fetchLazy, { response, error, loading }] as const;
};

export default useAxios;
