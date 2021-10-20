import { useState, useEffect } from "react";

import { fetchCryptoNews } from "../clients/cryptoNewsClient";

export const useNews = inView => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (inView) {
      setLoading(true);
      fetchCryptoNews().then(
        data => {
          const newData = data.filter(Boolean);
          setNews(newData);
          setLoading(false);
        },
        error => {
          setError(error.message);
          setLoading(false);
        }
      );
    }
  }, [inView]);

  return [news, loading, error];
};
