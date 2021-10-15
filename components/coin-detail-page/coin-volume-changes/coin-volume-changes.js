import VolumeChangesItem from "./volume-changes-item/volume-changes-item";

import styles from "./coin-volume-changes.module.scss";

function CoinVolumeChanges() {
  return (
    <div className={styles.container}>
      <div className={styles.changes}>
        <VolumeChangesItem
          title="Market cap"
          detail="0.50%"
          volume="275,580,894"
        />
        <VolumeChangesItem title="Volume" detail="0.75%" volume="23,274,917" />
        <VolumeChangesItem
          title="Circulating supply"
          detail="ETH"
          volume="116,275,913"
        />
      </div>
    </div>
  );
}

export default CoinVolumeChanges;
