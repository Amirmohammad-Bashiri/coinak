import { useInView } from "react-intersection-observer";

import { useCoins } from "../../../hooks/useCoins";
import CurrenciesTable from "./currencies-table/currencies-table";

import styles from "./currencies-section.module.scss";

function CurrenciesSection() {
  const { ref, inView } = useInView({ threshold: 0 });
  const [coins, loading, error] = useCoins(inView);

  return (
    <section ref={ref} id="currencies" className="bg-gray-8">
      <div className={styles.currencies}>
        <div className={styles.currencies__header}>
          <h1>Cryptocurrency Prices by Market Cap</h1>
        </div>
        <CurrenciesTable coins={coins} loading={loading} />
      </div>
    </section>
  );
}

export default CurrenciesSection;
