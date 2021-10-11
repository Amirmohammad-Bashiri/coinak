import CurrenciesTableItem from "../currencies-table-item/currencies-table-item";

import styles from "./currencies-table.module.scss";

function CurrenciesTable({ coins }) {
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
          {coins?.map(coin => (
            <CurrenciesTableItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrenciesTable;
