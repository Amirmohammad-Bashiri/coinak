import Loader from "react-loader-spinner";

import CurrenciesTableItem from "../currencies-table-item/currencies-table-item";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./currencies-table.module.scss";

function CurrenciesTable({ coins, loading }) {
  return (
    <div className={styles.container}>
      <table className={styles.currencies__table}>
        {loading ? (
          <div className={styles.table__placeholder}>
            <Loader type="Rings" color="#e5e7eb" height={150} width={150} />
          </div>
        ) : (
          <>
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
              {coins?.map(coin => (
                <CurrenciesTableItem key={coin.id} coin={coin} />
              ))}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}

export default CurrenciesTable;
