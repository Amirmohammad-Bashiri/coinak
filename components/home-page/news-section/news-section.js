import { useInView } from "react-intersection-observer";

import NewsItem from "./news-item/news-item";
import NewsSkeleton from "./news-skeleton/news-skeleton";
import { useNews } from "@hooks/useNews";

import styles from "./news-section.module.scss";

function NewsSection() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const [news, loading, error] = useNews(inView);

  return (
    <section ref={ref} id="news" className="bg-gray-7">
      <div className={styles.news}>
        <div className={styles.news__header}>
          <h1>Latest Crypto News</h1>
        </div>
        {loading ? (
          <div className={styles.news__grid}>
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
          </div>
        ) : (
          <div className={styles.news__grid}>
            {news?.map((item, idx) => (
              <div key={idx} className={styles.news__item}>
                <NewsItem item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsSection;
