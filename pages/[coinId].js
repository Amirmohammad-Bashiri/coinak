import { useRouter } from "next/router";
import Head from "next/head";

import CoinData from "@components/coin-detail-page/coin-data.js/coin-data";
import CoinVolumeChanges from "@components/coin-detail-page/coin-volume-changes/coin-volume-changes";
import { fetchCoinDetails } from "../clients/coinGeckoClient";

function CoinDetailsPage({ coin }) {
  const { query } = useRouter();

  return (
    <div className="bg-gray-8">
      <Head>
        <title>
          {coin.name} ({coin.symbol.toUpperCase()}) Price and Chart | Coinak:{" "}
          {coin.name} price, {coin.symbol} price
        </title>
      </Head>
      <CoinVolumeChanges coin={coin} />
      <CoinData coinId={query.coinId} coin={coin} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetchCoinDetails("usd", context.query.coinId);

  if (!data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      coin: data[0],
    },
  };
}

export default CoinDetailsPage;
