import VolumeChangesItem from "./volume-changes-item/volume-changes-item";

import styles from "./coin-volume-changes.module.scss";

function CoinVolumeChanges({ coin }) {
  return (
    <div className={styles.container}>
      <div className={styles.changes}>
        <VolumeChangesItem title="Market Cap" value={coin.market_cap} />
        <VolumeChangesItem
          title="24 Hour Trading Vol"
          value={coin.market_cap_change_24h}
        />
        <VolumeChangesItem
          title="Circulating Supply"
          value={coin.circulating_supply}
        />
        <VolumeChangesItem title="Total Supply" value={coin.total_supply} />
      </div>
    </div>
  );
}

export default CoinVolumeChanges;
