"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MyExpenseComponent from "@/components/MyExpenseComponent";
import TransactionTable from "@/components/TransactionTable";
import Card from "@/components/CardComponent";
import SecondCardComponent from "@/components/SecondCard";

export default function Transactions() {
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

        <div style={{ padding: "20px" }}>
          <div className="transaction-grid" style={{ marginTop: "50px" }}>
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
                My Expense
              </h1>
              <MyExpenseComponent />
            </div>
          </div>

          <br />

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
            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
}
