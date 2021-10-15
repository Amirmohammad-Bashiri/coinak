import styles from "./volume-changes-item.module.scss";

function VolumeChangesItem() {
  return (
    <div className={styles.changes__item}>
      <div className={styles.changes__item__header}>
        <h4>Market cap</h4>
        <h5>0.50%</h5>
      </div>

      <div className={styles["divider--horizontal"]}></div>

      <div className={styles.changes__item__body}>
        <p>$275,580,894</p>
      </div>
    </div>
  );
}

export default VolumeChangesItem;
