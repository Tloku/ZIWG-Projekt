import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const useAxiosPost = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(url, payload, {
          config: {
            headers: {
              "Content-Type": "application/json",
            },
          },
        });

        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { data, error, loaded };
};

export default useAxiosPost;
