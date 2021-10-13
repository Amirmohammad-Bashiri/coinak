import Image from "next/image";

import { priceFormatter } from "@utils/priceFormatter";

import styles from "./trending-coin-card.module.scss";

function TrendingCoinCard({ coin }) {
  const currentPrice = priceFormatter(coin.current_price);
  const marketCapChange = coin.market_cap_change_percentage_24h.toFixed(1);
  const marketCap = priceFormatter(coin.market_cap);
  const isCapNegative = marketCapChange.startsWith("-");
  const marketCapChangeClass = isCapNegative ? "text-red-1" : "text-emerald-3";

  return (
    <div className={`${styles.card} text-gray-2 p-2`}>
      <div className={styles.card__header}>
        <h3>{coin.name}</h3>
        <Image src={coin.image} alt={coin.name} width={30} height={30} />
      </div>

      <div className={styles["card__header--divide"]}></div>

      <div className={`${styles.card__body} text-gray-3`}>
        <p>Price: {currentPrice}</p>
        <p>Market Cap: {marketCap}</p>
        <p>
          Daily Change:{" "}
          <span className={marketCapChangeClass}>{marketCapChange}%</span>
        </p>
      </div>
    </div>
  );
}

export default TrendingCoinCard;
