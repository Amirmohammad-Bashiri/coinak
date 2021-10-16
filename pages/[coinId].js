import { useRouter } from "next/router";

import CoinChart from "@components/coin-detail-page/coin-chart/coin-chart";
import CoinVolumeChanges from "@components/coin-detail-page/coin-volume-changes/coin-volume-changes";
import { fetchCoinDetails } from "../clients/coinGeckoClient";

function CoinDetailsPage({ coin }) {
  const { query } = useRouter();

  return (
    <div style={{ height: "100vh" }} className="bg-gray-8">
      <CoinVolumeChanges coin={coin} />
      <CoinChart coinId={query.coinId} />
      {/* CoinPirceStatistics  */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchCoinDetails("usd", context.query.coinId);

  return {
    props: {
      coin: data[0],
    },
  };
}

export default CoinDetailsPage;
