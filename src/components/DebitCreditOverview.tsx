"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DebitCreditOverview() {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Debit",
        data: [3000, 2500, 4000, 6000, 3500, 4500, 6000],
        backgroundColor: "#2D60FF",     
        borderRadius: 6,                
        barPercentage: 0.4,             
        categoryPercentage: 0.6,        
      },
      {
        label: "Credit",
        data: [2000, 4000, 3000, 3500, 4000, 7000, 5500],
        backgroundColor: "#FFC107",    
        borderRadius: 6,
        barPercentage: 0.4,
        categoryPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          font: {
            size: 14,
            family: "Inter, sans-serif",
          },
          color: "#6B7280",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.formattedValue}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          color: "#E5E7EB",          
          borderDash: [3, 3],        
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 13,
            family: "Inter, sans-serif",
          },
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "#E5E7EB",
          borderDash: [3, 3],
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 13,
            family: "Inter, sans-serif",
          },
          callback: (value) => `$${value}`,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <p
        style={{
          marginBottom: "20px",
          fontSize: "14px",
          color: "#6B7280",
          fontFamily: "Inter, sans-serif",
        }}
      >
        $7,560 Debited &amp; $5,420 Credited in this Week
      </p>

      <div style={{ width: "100%", height: "300px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
