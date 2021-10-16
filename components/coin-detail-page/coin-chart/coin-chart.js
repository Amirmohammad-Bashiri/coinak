import { useMarketData } from "@hooks/useMarketData";

function CoinChart({ coinId }) {
  const { marketData, loading } = useMarketData("usd", coinId, "7");
  if (!loading) console.log(marketData);

  return <div></div>;
}

export default CoinChart;
