import axios from "axios";
import { useState } from "react"

const useFetch = (query) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (params) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.publicapis.org/${query}`, params);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    fetchData: (params) => fetchData(params),
    response,
    loading,
    error
  }
}

export default useFetch