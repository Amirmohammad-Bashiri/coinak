import { Line } from "react-chartjs-2";

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./coin-chart.module.scss";

function CoinChart({ marketData, loading }) {
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
          size: 15,
          weight: "normal",
        },
        bodyFont: {
          size: 17,
          weight: "bold",
        },
        mode: "index",
        intersect: false,
        padding: 20,
        caretPadding: 14,
        caretSize: 8,
        yAlign: "center",
      },
    },

    hover: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div className={styles.chart__body}>
      {loading ? (
        <div className={styles.chart__body__placeholder}>
          <Loader
            className={styles.chart__body__placeholder__loader}
            type="Rings"
            color="#e5e7eb"
            height={200}
            width={200}
          />
        </div>
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}

export default CoinChart;
