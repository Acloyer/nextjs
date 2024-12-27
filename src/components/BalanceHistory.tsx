"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler);

const BalanceHistory: React.FC = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance History",
        data: [200, 400, 300, 600, 500, 400, 800],
        borderColor: "#2D60FF",
        backgroundColor: "rgba(45, 96, 255, 0.2)",
        tension: 0.4,
        fill: true,

        pointBackgroundColor: "#2D60FF", 
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 4,        
        pointHoverRadius: 4,   
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        grid: { display: false },
      },
      y: {
        grid: { color: "rgba(224, 224, 224, 0.5)" },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div
      style={{
        width: "350px",
        height: "235px",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={{ width: "100%", height: "160px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistory;
