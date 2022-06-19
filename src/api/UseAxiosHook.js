import { useEffect, useState } from "react";

const UseAxiosCustom = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        console.log("Success");
        setResponse(res.data);
        setError(null);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { response, error, loading };
};

export default UseAxiosCustom;
