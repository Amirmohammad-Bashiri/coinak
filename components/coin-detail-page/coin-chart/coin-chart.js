import { Line } from "react-chartjs-2";

import { useMarketData } from "@hooks/useMarketData";

import styles from "./coin-chart.module.scss";

function CoinChart({ coinId }) {
  const { marketData, loading } = useMarketData("usd", coinId, "7");
  if (!loading) console.log(marketData);

  const labels = marketData.map(item =>
    new Date(item[0]).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
  const values = marketData.map(item => item[1]);

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        fill: false,
        pointBorderWidth: 2,
        pointBackgroundColor: "#111827",
        pointBorderColor: "#10b981",
        borderColor: "#10b981",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        titleFont: {
          weight: "normal",
        },
        bodyFont: {
          size: 14,
          weight: "bold",
        },
        mode: "nearest",
        intersect: false,
        padding: 20,
        caretPadding: 14,
        caretSize: 8,
        yAlign: "center",
      },
    },

    hover: {
      mode: "nearest",
      intersect: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <div className={styles.chart__header}>
          <button>USD</button>
          <button>EUR</button>
        </div>
        <div className={styles.chart__body}>
          <Line data={data} options={options} />
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.price__header}></div>
        <div className={styles.price__body}></div>
      </div>
    </div>
  );
}

export default CoinChart;
