"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

interface WeeklyActivityProps {
}

const WeeklyActivity: React.FC<WeeklyActivityProps> = () => {
  const series = [
    {
      name: "Deposit",
      data: [500, 350, 250, 500, 150, 400, 450],
    },
    {
      name: "Withdraw",
      data: [300, 200, 150, 280, 100, 250, 300],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "45%",
      },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: "#6B7280",
      },
      markers: {
        width: 12,
        height: 12,
        radius: 12,
      },
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      labels: {
        style: {
          colors: "#9CA3AF",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9CA3AF",
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
        },
        formatter: (val) => `${val}`,
      },
      min: 0,
    },
    colors: ["#1814F3", "#16DBCC"], 
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        fontFamily: "Inter",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          marginBottom: "16px",
          color: "#6B7280",
        }}
      >
        Track your daily deposits and withdrawals over the week
      </p>

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default WeeklyActivity;
