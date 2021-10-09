import Hero from "../components/home-page/hero/hero";
import TrendingSection from "../components/home-page/trending-section.js/trending-section";
import { client } from "../client";

function HomePage({ trendingCoins }) {
  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Trending section */}
      <TrendingSection />

      {/* Currencies section */}

      {/* News section */}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await client.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false"
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
