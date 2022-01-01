import Image from "next/image";

import { priceFormatter } from "@utils/priceFormatter";

import styles from "./coin-price-statistics.module.scss";

function CoinPriceStatistics({ coin }) {
  const priceChangePercentage = coin.price_change_percentage_24h.toFixed(2);
  const isPriceDown = String(priceChangePercentage).startsWith("-");
  const priceChangeClass = isPriceDown ? "price__down" : "price__up";

  return (
    <div className={styles.price}>
      <div className={styles.price__header}>
        <div className={styles.price__header__logo}>
          <Image src={coin.image} alt="Coin Logo" width={70} height={70} />
        </div>
        <div className={styles.price__header__info}>
          <p className={styles.price__header__info__symbol}>
            {coin.symbol.toUpperCase()}
          </p>
          <p>Price statistics</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.price__body}>
        <div className={styles.price__body__item}>
          <p>Price</p>
          <span>{priceFormatter(coin.current_price)}</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.price__body__item}>
          <p>Price Change</p>
          <span className={styles[priceChangeClass]}>
            ${priceFormatter(coin.price_change_24h.toFixed(2))}
          </span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.price__body__item}>
          <p>Price Change Percentage</p>
          <span className={styles[priceChangeClass]}>
            {priceChangePercentage}%
          </span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.price__body__item}>
          <p>24h High</p>
          <span>{coin.high_24h}</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.price__body__item}>
          <p>24h Low</p>
          <span>{coin.low_24h}</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.price__body__item}>
          <p>Volume</p>
          <span>{priceFormatter(coin.total_volume)}</span>
        </div>
        <div className={styles.divider}></div>
      </div>
    </div>
  );
}

export default CoinPriceStatistics;
