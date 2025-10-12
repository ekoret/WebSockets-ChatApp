import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { randomInRange } from "./VerticalBarChart";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "A dataset",
      data: Array.from({ length: 100 }, () => ({
        x: randomInRange(-100, 100),
        y: randomInRange(-100, 100),
      })),
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

function ScatterChart() {
  return <Scatter options={options} data={data} />;
}

export default ScatterChart;
