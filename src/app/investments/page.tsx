"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SummaryCardInvest from "@/components/SummaryCardInvest";
import InvestmentList from "@/components/InvestmentList";
import StockTable from "@/components/StockTable";

import {
  LineChart as RechartLine,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Investments() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const yearlyData = [
    { year: 2016, value: 10000 },
    { year: 2017, value: 20000 },
    { year: 2018, value: 30000 },
    { year: 2019, value: 15000 },
    { year: 2020, value: 35000 },
    { year: 2021, value: 40000 },
  ];

  const monthlyData = [
    { month: "2016", value: 10000 },
    { month: "2017", value: 15000 },
    { month: "2018", value: 21000 },
    { month: "2019", value: 17000 },
    { month: "2020", value: 25000 },
    { month: "2021", value: 35000 },
  ];

  return (
    <div style={{ display: "flex", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <Sidebar isVisible={isSidebarVisible} />

      <div
        style={{
          flex: 1,
          marginLeft: isSidebarVisible ? "250px" : "0",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Header toggleSidebar={toggleSidebar} />

        <div style={{ padding: "20px", marginTop: "50px" }}>
          <div className="investments-summary-row">
            <SummaryCardInvest
              title="Total Invested Amount"
              amount="$150,000"
              icon="/icons/invested.svg"
              color="#DCFAF8"
            />
            <SummaryCardInvest
              title="Number of Investments"
              amount="1,250"
              icon="/icons/investments2.svg"
              color="#FFE0EB"
            />
            <SummaryCardInvest
              title="Rate of Return"
              amount="+5.80%"
              icon="/icons/return.svg"
              color="#E7EDFF"
            />
          </div>

          <div className="two-charts-grid">
            <div className="chart-card">
              <h1 className="chart-title">Yearly Total Investment</h1>
              <div style={{ width: "100%", height: "300px" }}>
                <ResponsiveContainer>
                  <RechartLine data={yearlyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis
                      stroke="#6B7280"
                      tickFormatter={(val) => `$${val.toLocaleString()}`}
                    />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Investment"]} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#FF9F00"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </RechartLine>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart-card">
              <h1 className="chart-title">Monthly Revenue</h1>
              <div style={{ width: "100%", height: "300px" }}>
                <ResponsiveContainer>
                  <RechartLine data={monthlyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#6B7280" />
                    <YAxis
                      stroke="#6B7280"
                      tickFormatter={(val) => `$${val.toLocaleString()}`}
                    />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#00C5D9"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </RechartLine>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="investment-stock-grid">
            <div>
              <h1 className="section-title">My Investment</h1>
              <InvestmentList />
            </div>
            <div>
              <h1 className="section-title">Trending Stock</h1>
              <StockTable
                stocks={[
                  { id: 1, name: "Trivago", price: "$520", return: "+5%" },
                  { id: 2, name: "Canon", price: "$480", return: "+10%" },
                  { id: 3, name: "Uber Food", price: "$350", return: "-3%" },
                  { id: 4, name: "Nokia", price: "$940", return: "+2%" },
                  { id: 5, name: "Tiktok", price: "$670", return: "-12%" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
