import { useState, useEffect } from "react";

import { fetchCoins } from "../clients/coinGeckoClient";

export const useCoins = (page = 1, inView, currency = "usd", perPage = 10) => {
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
