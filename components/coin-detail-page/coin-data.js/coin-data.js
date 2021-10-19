import { useState } from "react";

import { useMarketData } from "@hooks/useMarketData";
import CoinChart from "../coin-chart/coin-chart";
import CoinPriceStatistics from "../coin-price-statistics/coin-price-statistics";

import styles from "./coin-data.module.scss";

function CoinData({ coinId, coin }) {
  const [currency, setCurrency] = useState("usd");
  const [days, setDays] = useState("1");
  const { marketData, loading } = useMarketData(currency, coinId, days);

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

        <CoinChart marketData={marketData} loading={loading} />
      </div>

      <CoinPriceStatistics coin={coin} />
    </div>
  );
}

export default CoinData;
