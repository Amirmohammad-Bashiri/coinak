import { useState } from "react";
import { useInView } from "react-intersection-observer";

import { useCoins } from "@hooks/useCoins";
import CurrenciesTable from "./currencies-table/currencies-table";

import styles from "./currencies-section.module.scss";

function CurrenciesSection() {
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({ threshold: 0 });
  const [coins, loading, error] = useCoins(inView, page);

  const hasNext = page < 250;
  const hasPrev = page > 1;

  const nextPage = () => {
    if (hasNext) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (hasPrev) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <section ref={ref} id="currencies" className="bg-gray-8">
      <div className={styles.currencies}>
        <div className={styles.currencies__header}>
          <h1>Cryptocurrency Prices by Market Cap</h1>
        </div>
        <CurrenciesTable
          coins={coins}
          loading={loading}
          prevPage={prevPage}
          nextPage={nextPage}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      </div>
    </section>
  );
}

export default CurrenciesSection;
