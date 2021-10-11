import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const fetchTrendingCoins = async () => {
  const { data } = await client.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
  );

  return data;
};

export const fetchCoins = async (currency, perPage, page) => {
  const { data } = await client.get(
    `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
  );

  return data;
};
