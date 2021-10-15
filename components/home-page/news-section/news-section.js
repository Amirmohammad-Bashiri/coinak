import { useEffect, useState } from "react";

import { fetchCryptoNews } from "../../../clients/cryptoNewsClient";
import NewsItem from "./news-item/news-item";

import styles from "./news-section.module.scss";

function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchCryptoNews().then(data => {
      const newData = data.filter(Boolean);
      setNews(newData);
    });
  }, []);

  return (
    <section id="news" className="bg-gray-7">
      <div className={styles.news}>
        <div className={styles.news__header}>
          <h1>Latest Crypto News</h1>
        </div>
        <div className={styles.news__grid}>
          {news?.map((item, idx) => (
            <div key={idx} className={styles.news__item}>
              <NewsItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
