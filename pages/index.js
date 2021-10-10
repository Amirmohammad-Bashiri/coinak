import { client } from "../client";
import Hero from "../components/home-page/hero/hero";
import TrendingSection from "../components/home-page/trending-section/trending-section";
import CurrenciesSection from "../components/home-page/currencies-section/currencies-section";

function HomePage() {
  return (
    <div>
      <Hero />
      <TrendingSection />

      {/* Currencies section */}
      <CurrenciesSection />

      {/* News section */}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await client.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
  );
  const data = {
    trendingCoins: response.data,
  };

  return {
    props: {
      trendingCoins: data,
    },
  };
}

export default HomePage;
