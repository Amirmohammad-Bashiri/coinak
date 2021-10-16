import { priceFormatter } from "@utils/priceFormatter";

import styles from "./volume-changes-item.module.scss";

function VolumeChangesItem({ title, value }) {
  const volume = value ? priceFormatter(value) : "INFINITE";

  return (
    <div className={styles.changes__item}>
      <div className={styles.changes__item__header}>
        <h4>{title}</h4>
      </div>

      <div className={styles["divider--horizontal"]}></div>

      <div className={styles.changes__item__body}>
        <p>{volume}</p>
      </div>
    </div>
  );
}

export default VolumeChangesItem;
