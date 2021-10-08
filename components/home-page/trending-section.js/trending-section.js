import TrendingCoinsList from "../trending-coins-list/trending-coins-list";

import styles from "./trending.module.scss";

function TrendingSection() {
  return (
    <section>
      <div>
        <h1>Trending Coins</h1>
      </div>

      <TrendingCoinsList />
    </section>
  );
}

export default TrendingSection;
