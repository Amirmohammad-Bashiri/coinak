import { useState, useEffect } from "react";

import { fetchCoins } from "../client";

export const useCoins = (currency = "usd", perPage = 30, page = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCoins(currency, perPage, page)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [currency, perPage, page]);

  return [data, loading, error];
};
