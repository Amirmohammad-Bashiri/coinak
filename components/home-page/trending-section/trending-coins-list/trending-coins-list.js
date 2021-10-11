import TrendingCoinCard from "../trending-coin-card/trending-coin-card";

import styles from "./trending-coin-list.module.scss";

function TrendingCoinsList({ trendingCoins }) {
  return (
    <div className={styles["coins-list"]}>
      {trendingCoins?.map(trendingCoin => (
        <TrendingCoinCard key={trendingCoin.id} coin={trendingCoin} />
      ))}
    </div>
  );
}

export default TrendingCoinsList;
