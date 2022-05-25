import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
import { Config } from './CoinPriceChartConfig';
import styles from '../styles/Charts.module.css';

export default function CoinPriceChart(props) {
  /** Retrieve the final item within an array nested in an array */
  const currentPrice = props.prices.at(-1).at(-1).toFixed(2)

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: new Date(el[0]).toLocaleString().substr(11, 9),
        y: el[1].toFixed(2)
      };
    });
  };

  const data = {
    datasets: [
      {
        label: 'Bitcoin Price',
        fill: true,
        data: formatData(props.prices),
        borderColor: '#0089fc',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderWidth: 3,
        pointRadius: props.pointRadius,
        tension: 0,
      }
    ]
  };

  return (
    <div className={styles.container}>
      <div className={styles.coinInfo}>
        <p className={styles.coinDesc}>Bitcoin Price</p>
        <h2 className={styles.coinPrice}>${currentPrice}<span className={styles.currency}>&nbsp;usd</span></h2>
      </div>
      <div>
        <Line data={data} options={Config} />
      </div>
    </div>
  );
};
