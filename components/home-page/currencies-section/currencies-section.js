import Image from "next/image";

import CurrenciesTable from "./currencies-table/currencies-table";

import styles from "./currencies-section.module.scss";

function CurrenciesSection() {
  return (
    <section className="bg-gray-8">
      <div className={styles.currencies}>
        <div className={styles.currencies__header}>
          <h1>Cryptocurrency Prices by Market Cap</h1>
        </div>

        <CurrenciesTable />

        {/* <div className={styles.currencies__list}>
          <div className={styles.currencies__list__header}>
            <p>Coin</p>
            <p>Symbol</p>
            <p>Price</p>
            <p>24h</p>
            <p>24h Volume</p>
            <p>Mkt Cap</p>
            <p>Last 7 Days</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.currencies__list__item}>
            <div>Bitcoin</div>
            <div>BTC</div>
            <div>$55,084.14</div>
            <div>0.4%</div>
            <div>$36,086,993,736</div>
            <div>$1,048,334,984,400</div>
            <div className={styles.currencies__list__item__sparkline}>
              <Image
                src="https://www.coingecko.com/coins/1/sparkline"
                alt="sparkline"
                height={50}
                width={150}
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.currencies__list__item}>
            <div>Ethereum</div>
            <div>ETH</div>
            <div>$3,583.12</div>
            <div>-0.5%</div>
            <div>$16,213,097,763</div>
            <div>$423,598,821,584</div>
            <div className={styles.currencies__list__item__sparkline}>
              <Image
                src="https://www.coingecko.com/coins/975/sparkline"
                alt="sparkline"
                height={50}
                width={150}
                objectFit="contain"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default CurrenciesSection;
