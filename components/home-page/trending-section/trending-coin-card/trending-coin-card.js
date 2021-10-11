import Image from "next/image";

import { hasDecimal } from "@utils/hasDecimal";

import styles from "./trending-coin-card.module.scss";

function TrendingCoinCard({ coin }) {
  const currentPrice = hasDecimal
    ? coin.current_price
    : coin.current_price.toFixed(2);
  const marketCapChange = coin.market_cap_change_percentage_24h.toFixed(2);
  const isCapNegative = marketCapChange.startsWith("-");
  const formattedPercentageChange = isCapNegative
    ? marketCapChange
    : `+${marketCapChange}`;
  const marketCapChangeClass = isCapNegative ? "text-red-1" : "text-emerald-3";

  return (
    <div className={`${styles.card} text-gray-2 p-2`}>
      <div className={styles.card__background}></div>
      <div className={styles.card__header}>
        <h3>{coin.name}</h3>
        <Image src={coin.image} alt={coin.name} width={30} height={30} />
      </div>

      <div className={styles["card__header--divide"]}></div>

      <div className={`${styles.card__body} text-gray-3`}>
        <p>Price: ${currentPrice}</p>
        <p>Market Cap: {coin.market_cap}</p>
        <p>
          Daily Change:{" "}
          <span className={marketCapChangeClass}>
            {formattedPercentageChange}%
          </span>
        </p>
      </div>
    </div>
  );
}

export default TrendingCoinCard;
