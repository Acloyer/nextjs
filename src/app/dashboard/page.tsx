"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WeeklyActivity from "@/components/WeeklyActivity";
import ExpenseStatistics from "@/components/ExpenseStatistics";
import Card from "@/components/CardComponent";
import SecondCardComponent from "@/components/SecondCard";
import RecentTransactions from "@/components/RecentTransactions";
import BalanceHistory from "@/components/BalanceHistory";
import QuickTransfer from "@/components/QuickTransfer";

export default function Dashboard() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

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

        <div style={{ padding: "20px", marginTop: "60px" }}>
          <div className="row-grid" style={{ marginBottom: "20px" }}>
            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontFamily: "Inter",
                }}
              >
                My Cards
              </h1>
              <div style={{ display: "flex", gap: "10px" }}>
                <Card />
                <SecondCardComponent />
              </div>
            </div>

            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontFamily: "Inter",
                }}
              >
                Recent Transactions
              </h1>
              <RecentTransactions />
            </div>
          </div>

          <div className="row-grid" style={{ marginBottom: "20px" }}>
            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontFamily: "Inter",
                }}
              >
                Weekly Activity
              </h1>
              <WeeklyActivity />
            </div>
            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontFamily: "Inter",
                }}
              >
                Expense Statistics
              </h1>
              <ExpenseStatistics />
            </div>
          </div>

          <div className="row-grid">
            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontFamily: "Inter",
                }}
              >
                Quick Transfer
              </h1>
              <QuickTransfer />
            </div>
            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontFamily: "Inter",
                }}
              >
                Balance History
              </h1>
              <BalanceHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
