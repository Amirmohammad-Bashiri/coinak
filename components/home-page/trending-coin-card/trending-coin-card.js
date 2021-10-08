import Image from "next/image";

import styles from "./trending-coin-card.module.scss";

import coinImage from "./dogecoin.png";

function TrendingCoinCard() {
  return (
    <div className={`${styles.card} bg-gray-8 text-gray-2 p-2`}>
      <div className={styles.card__background}></div>
      <div className={styles.card__header}>
        <h3>Bitcoin</h3>
        <Image src={coinImage} alt="bitcoin" width={30} height={30} />
      </div>

      <div className={styles["card__header--divide"]}></div>

      <div className={`${styles.card__body} text-gray-3`}>
        <p>Price: 44.5K</p>
        <p>Market Cap: 836.78</p>
        <p>Daily Change: -3.37%</p>
      </div>
    </div>
  );
}

export default TrendingCoinCard;
