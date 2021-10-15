import VolumeChangesItem from "./volume-changes-item/volume-changes-item";

import styles from "./coin-volume-changes.module.scss";

function CoinVolumeChanges() {
  return (
    <div className={styles.container}>
      <div className={styles.changes}>
        <VolumeChangesItem />
        <VolumeChangesItem />
        <VolumeChangesItem />
      </div>
    </div>
  );
}

export default CoinVolumeChanges;
