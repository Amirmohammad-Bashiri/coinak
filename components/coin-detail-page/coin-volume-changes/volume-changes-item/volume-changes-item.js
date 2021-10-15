import styles from "./volume-changes-item.module.scss";

function VolumeChangesItem({ title, detail, volume }) {
  return (
    <div className={styles.changes__item}>
      <div className={styles.changes__item__header}>
        <h4>{title}</h4>
        <h5>{detail}</h5>
      </div>

      <div className={styles["divider--horizontal"]}></div>

      <div className={styles.changes__item__body}>
        <p>${volume}</p>
      </div>
    </div>
  );
}

export default VolumeChangesItem;
