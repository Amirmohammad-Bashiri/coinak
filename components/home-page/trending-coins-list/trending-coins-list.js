import TrendingCoinCard from "../trending-coin-card/trending-coin-card";

import styles from "./trending-coin-list.module.scss";

function TrendingCoinsList() {
  return (
    <div className={styles["coins-list"]}>
      <TrendingCoinCard />
      <TrendingCoinCard />
      <TrendingCoinCard />
      <TrendingCoinCard />
      <TrendingCoinCard />
      <TrendingCoinCard />
      <TrendingCoinCard />
    </div>
  );
}

export default TrendingCoinsList;
