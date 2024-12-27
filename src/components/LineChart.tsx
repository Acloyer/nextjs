import { Line } from "react-chartjs-2";

const LineChart = ({ data, color }) => {
  const chartData = {
    labels: data.map((point) => point.year || point.month),
    datasets: [
      {
        label: "",
        data: data.map((point) => point.value),
        fill: false,
        borderColor: color,
        backgroundColor: color,
        tension: 0.3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "rgba(0, 0, 0, 0.1)" }, ticks: { stepSize: 10000 } },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
