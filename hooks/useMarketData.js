import { useEffect, useState } from "react";

import { fetchCoinMarketData } from "../clients/coinGeckoClient";

export function useMarketData(currency, coinId, days) {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchCoinMarketData(currency, coinId, days)
      .then(data => {
        setMarketData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [currency, coinId, days]);

  return { marketData, loading, error };
}
