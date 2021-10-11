import Image from "next/image";

import { numberFormatter } from "../../../../utils/numberFormatter";

import styles from "./currencies-table-item.module.scss";

function CurrenciesTableItem({ coin }) {
  const coinId = coin.image.split("/")[5];
  const sparklineUrl = `https://www.coingecko.com/coins/${coinId}/sparkline`;

  return (
    <tr>
      <td>
        <div className={styles.currencies__table__coin}>
          <Image src={coin.image} alt={coin.symbol} width={25} height={25} />{" "}
          <span>{coin.name}</span>
        </div>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${numberFormatter(coin.current_price)}</td>
      <td>{coin.market_cap_change_percentage_24h}%</td>
      <td>${numberFormatter(coin.total_volume)}</td>
      <td>${numberFormatter(coin.market_cap)}</td>
      <td className={styles.currencies__table__sparkline}>
        <Image
          src={sparklineUrl}
          alt="sparkline"
          layout="responsive"
          height={30}
          width="100%"
          objectFit="contain"
        />
      </td>
    </tr>
  );
}

export default CurrenciesTableItem;
