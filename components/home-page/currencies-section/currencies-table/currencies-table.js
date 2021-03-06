import Loader from "react-loader-spinner";

import CurrenciesTableItem from "../currencies-table-item/currencies-table-item";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./currencies-table.module.scss";

function CurrenciesTable(props) {
  const { coins, loading } = props;

  return (
    <div className={styles.container}>
      <table className={styles.currencies__table}>
        {loading ? (
          <tbody>
            <tr className={styles.table__placeholder}>
              <td style={{ borderBottom: 0 }}>
                <Loader type="Rings" color="#e5e7eb" height={150} width={150} />
              </td>
            </tr>
          </tbody>
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
