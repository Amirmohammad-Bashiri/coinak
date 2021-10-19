import { useState } from "react";
import Image from "next/image";

import { useMarketData } from "@hooks/useMarketData";
import { priceFormatter } from "@utils/priceFormatter";
import CoinChart from "../coin-chart/coin-chart";

import styles from "./coin-data.module.scss";

function CoinData({ coinId, coin }) {
  const [currency, setCurrency] = useState("usd");
  const [days, setDays] = useState("1");
  const { marketData, loading } = useMarketData(currency, coinId, days);

  const priceChangePercentage = coin.price_change_percentage_24h.toFixed(2);
  const isPriceDown = String(priceChangePercentage).startsWith("-");
  const priceChangeClass = isPriceDown ? "price__down" : "price__up";

  const handleCurrencyChange = e => {
    setCurrency(e.target.value);
  };

  const handleDaysChange = e => {
    setDays(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <div className={styles.chart__header}>
          <select value={currency} onChange={handleCurrencyChange}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
          <select value={days} onChange={handleDaysChange}>
            <option value="1">24h</option>
            <option value="7">7d</option>
            <option value="14">14d</option>
            <option value="30">30d</option>
            <option value="90">90d</option>
          </select>
        </div>

        <CoinChart marketData={marketData} />
      </div>

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
              {priceFormatter(coin.price_change_24h)}
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
    </div>
  );
}

export default CoinData;
