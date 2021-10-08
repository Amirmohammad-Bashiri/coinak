import TrendingCoinsList from "../trending-coins-list/trending-coins-list";

import styles from "./trending.module.scss";

function TrendingSection() {
  return (
    <section className="bg-gray-7 text-gray-1">
      <div className={styles.trending}>
        <div className={`mb-3 ${styles.trending__headline}`}>
          <h1>Trending Coins</h1>
        </div>

        <TrendingCoinsList />
      </div>
    </section>
  );
}

export default TrendingSection;
