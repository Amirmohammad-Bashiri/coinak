import Link from "next/link";

import TrendingCoinCard from "../trending-coin-card/trending-coin-card";

import styles from "./trending-coin-list.module.scss";

function TrendingCoinsList({ trendingCoins }) {
  return (
    <div className={styles["coins-list"]}>
      {trendingCoins?.map(trendingCoin => (
        <Link href={`/${trendingCoin.id}`} key={trendingCoin.id}>
          <a>
            <TrendingCoinCard coin={trendingCoin} />
          </a>
        </Link>
      ))}
    </div>
  );
}

export default TrendingCoinsList;
