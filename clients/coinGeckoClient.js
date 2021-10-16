import axios from "axios";

const coinGeckoClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const fetchTrendingCoins = async () => {
  const { data } = await coinGeckoClient.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
  );

  return data;
};

export const fetchCoins = async (currency, perPage, page) => {
  const { data } = await coinGeckoClient.get(
    `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
  );

  return data;
};

export const fetchCoinDetails = async (currency, coinId) => {
  const { data } = await coinGeckoClient.get(
    `/coins/markets?vs_currency=${currency}&ids=${coinId}&order=market_cap_desc&per_page=1&page=1&sparkline=false`
  );

  return data;
};

export const fetchCoinMarketData = async (currency, coinId, days) => {
  const { data } = await coinGeckoClient.get(
    `/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
  );

  return data.prices;
};
