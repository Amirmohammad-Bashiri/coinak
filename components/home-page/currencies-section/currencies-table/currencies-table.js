import Image from "next/image";

import styles from "./currencies-table.module.scss";

function CurrenciesTable() {
  return (
    <div className={styles.container}>
      <table className={styles.currencies__table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt Cap</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.currencies__table__coin}>
                <Image
                  src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                  alt="bitcoin"
                  width={20}
                  height={20}
                />{" "}
                <span>Bitcoin</span>
              </div>
            </td>
            <td>BTC</td>
            <td>$55,651.80</td>
            <td>-3.4%</td>
            <td>$36,086,993,736</td>
            <td>$6,806,011</td>
            <td className={styles.currencies__table__sparkline}>
              <Image
                src="https://www.coingecko.com/coins/975/sparkline"
                alt="sparkline"
                layout="responsive"
                height={30}
                width="100%"
                objectFit="contain"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.currencies__table__coin}>
                <Image
                  src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                  alt="bitcoin"
                  width={20}
                  height={20}
                />{" "}
                <span>Bitcoin</span>
              </div>
            </td>
            <td>BTC</td>
            <td>$55,651.80</td>
            <td>1.2%</td>
            <td>$36,086,993,736</td>
            <td>$1,048,334,984,400</td>
            <td className={styles.currencies__table__sparkline}>
              <Image
                src="https://www.coingecko.com/coins/1/sparkline"
                alt="sparkline"
                layout="responsive"
                height={30}
                width="100%"
                objectFit="contain"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.currencies__table__coin}>
                <Image
                  src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                  alt="bitcoin"
                  width={20}
                  height={20}
                />{" "}
                <span>Bitcoin</span>
              </div>
            </td>
            <td>BTC</td>
            <td>$55,651.80</td>
            <td>1.2%</td>
            <td>$36,086,993,736</td>
            <td>$1,048,334,984,400</td>
            <td className={styles.currencies__table__sparkline}>
              <Image
                src="https://www.coingecko.com/coins/1/sparkline"
                alt="sparkline"
                layout="responsive"
                height={30}
                width="100%"
                objectFit="contain"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.currencies__table__coin}>
                <Image
                  src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                  alt="bitcoin"
                  width={20}
                  height={20}
                />{" "}
                <span>Bitcoin</span>
              </div>
            </td>
            <td>BTC</td>
            <td>$55,651.80</td>
            <td>1.2%</td>
            <td>$36,086,993,736</td>
            <td>$1,048,334,984,400</td>
            <td className={styles.currencies__table__sparkline}>
              <Image
                src="https://www.coingecko.com/coins/1/sparkline"
                alt="sparkline"
                layout="responsive"
                height={30}
                width="100%"
                objectFit="contain"
              />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.currencies__table__coin}>
                <Image
                  src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                  alt="bitcoin"
                  width={20}
                  height={20}
                />{" "}
                <span>Bitcoin</span>
              </div>
            </td>
            <td>BTC</td>
            <td>$55,651.80</td>
            <td>1.2%</td>
            <td>$36,086,993,736</td>
            <td>$1,048,334,984,400</td>
            <td className={styles.currencies__table__sparkline}>
              <Image
                src="https://www.coingecko.com/coins/1/sparkline"
                alt="sparkline"
                layout="responsive"
                height={30}
                width="100%"
                objectFit="contain"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CurrenciesTable;
