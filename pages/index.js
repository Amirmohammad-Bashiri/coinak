import dynamic from "next/dynamic";

import { fetchTrendingCoins } from "../clients/coinGeckoClient";
import Hero from "@components/home-page/hero/hero";
import TrendingSection from "@components/home-page/trending-section/trending-section";

const CurrenciesSection = dynamic(() =>
  import("@components/home-page/currencies-section/currencies-section")
);

function HomePage({ trendingCoins }) {
  return (
    <div>
      <Hero />
      <TrendingSection trendingCoins={trendingCoins} />
      <CurrenciesSection />

      {/* News section */}
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetchTrendingCoins();

  return {
    props: {
      trendingCoins: data,
    },
  };
}

export default HomePage;
