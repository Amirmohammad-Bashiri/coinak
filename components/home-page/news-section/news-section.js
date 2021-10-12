import { useEffect, useState } from "react";
import Image from "next/image";

import { fetchCryptoNews } from "../../../clients/cryptoNewsClient";

import styles from "./news-section.module.scss";

function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchCryptoNews().then(data => {
      setNews(data);
      console.table(data);
    });
  }, []);

  return (
    <section id="news" className="bg-gray-7">
      <div className={styles.news}>
        <div className={styles.news__header}>
          <h1>Latest Crypto News</h1>
        </div>
        <div className={styles.news__grid}>
          {news.map((item, idx) => (
            <div key={idx} className={styles.news__item}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
