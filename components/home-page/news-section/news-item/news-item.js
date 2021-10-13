import Image from "next/image";

import styles from "./news-item.module.scss";

function NewsItem({ item }) {
  return (
    <div className={styles.item__header}>
      <h3>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </h3>
      <div>
        <Image
          src={item.image.thumbnail.contentUrl}
          alt="news thumbnail"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
}

export default NewsItem;
