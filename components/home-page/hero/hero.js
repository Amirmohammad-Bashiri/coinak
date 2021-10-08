import styles from "./hero.module.scss";

function Hero() {
  return (
    <section className="bg-gray-8 text-gray-1">
      <main className={styles.hero}>
        <div className={`${styles.hero__headline} mb-3`}>
          <h1>The Easiest Way to</h1>
          <h2>Track Multiple Currencies</h2>
        </div>
        <div className={`${styles.hero__description} text-gray-4`}>
          <p>
            Coinak allows you to monitor your favorite cryptos and get the
            latest details on trending news and price changes
          </p>
        </div>
      </main>
    </section>
  );
}

export default Hero;
