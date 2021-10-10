import CurrenciesTable from "./currencies-table/currencies-table";

import styles from "./currencies-section.module.scss";

function CurrenciesSection() {
  return (
    <section className="bg-gray-8">
      <div className={styles.currencies}>
        <div className={styles.currencies__header}>
          <h1>Cryptocurrency Prices by Market Cap</h1>
        </div>

        <div className={styles.currencies__table__container}>
          <CurrenciesTable />
        </div>
      </div>
    </section>
  );
}

export default CurrenciesSection;
