import styles from "./news-skeleton.module.scss";

function NewsSkeleton() {
  return (
    <div className={styles.skeleton__body}>
      <div className={styles.skeleton__text}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.skeleton__image}></div>
    </div>
  );
}

export default NewsSkeleton;
