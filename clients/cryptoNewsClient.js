import axios from "axios";

const cryptoNewsClient = axios.create({
  baseURL: "https://bing-news-search1.p.rapidapi.com",
});

const config = {
  headers: {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
  },
};

export const fetchCryptoNews = async () => {
  const { data } = await cryptoNewsClient.get(
    "/news/search?q=Cryptocurrency&safeSearch=off&textFormat=Raw&freshness=Day&count=8",
    config
  );

  return data.value;
};
