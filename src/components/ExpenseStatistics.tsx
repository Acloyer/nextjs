"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

import { Pie } from "react-chartjs-2";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ExpenseStatistics() {
  const data: ChartData<"pie"> = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        label: "Expenses",
        data: [30, 15, 20, 35], 
        backgroundColor: ["#222E5D", "#FF8A00", "#FF00CE", "#2D60FF"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 14,
            family: "Inter, sans-serif",
          },
          color: "#6B7280",
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed;
            return `${value}%`;
          },
        },
      },
      datalabels: {
        color: "#FFFFFF",
        font: {
          size: 14,
          family: "Inter, sans-serif",
          weight: "bold",
        },
        formatter: (value, context) => {
          const dataArr = context.chart.data.datasets[0].data as number[];
          const total = dataArr.reduce((acc, cur) => acc + cur, 0);
          const percentage = (value / total) * 100;
          return percentage.toFixed(1) + "%";
        },
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        fontFamily: "Inter",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "450px",
      }}
    >
      <p style={{ fontSize: "14px", marginBottom: "16px", color: "#6B7280" }}>
        A quick breakdown of your expenses
      </p>

      <div style={{ width: "100%", height: "300px", margin: "0 auto" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
