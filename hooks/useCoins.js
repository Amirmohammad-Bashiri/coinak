import { useState, useEffect } from "react";

import { fetchCoins } from "../client";

export const useCoins = (inView, page = 1, currency = "usd", perPage = 10) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (inView) {
      setLoading(true);

      fetchCoins(currency, perPage, page)
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [inView, currency, perPage, page]);

  return [data, loading, error];
};
