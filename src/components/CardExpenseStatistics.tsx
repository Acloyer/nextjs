"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CardExpenseStatistics = () => {
  const data = {
    labels: ["DBL Bank", "BRC Bank", "ABM Bank", "MCP Bank"],
    datasets: [
      {
        data: [25, 20, 30, 25],
        backgroundColor: ["#4C49ED", "#FCA5A5", "#41D4A8", "#FDBA74"], 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          font: {
            family: "Inter",
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        maxWidth: "310px",
        fontFamily: "Inter, sans-serif",
        height: "300px",
      }}
    >
      <div style={{ height: "200px", position: "relative" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default CardExpenseStatistics;
