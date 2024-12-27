"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CardComponent from "@/components/CardComponent";
import SecondCardComponent from "@/components/SecondCard";
import ThirdCardComponent from "@/components/ThirdCardComponent";
import CardExpenseStatistics from "@/components/CardExpenseStatistics";
import CardList from "@/components/CardList";
import AddNewCard from "@/components/AddNewCard";
import CardSetting from "@/components/CardSetting";

export default function CreditCardsPage() {
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
          <h1 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px" }}>
            Credit Cards
          </h1>

          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>
            My Cards
          </h2>
          <div className="cards-row" style={{ marginBottom: "30px" }}>
            <CardComponent />
            <SecondCardComponent />
            <ThirdCardComponent />
          </div>

          <div className="card-sections-grid" style={{ marginBottom: "30px" }}>
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>
                Card Expense Statistics
              </h2>
              <CardExpenseStatistics />
            </div>

            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>
                Card List
              </h2>
              <CardList />
            </div>
          </div>

          <div className="card-sections-grid">
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>
                Add New Card
              </h2>
              <AddNewCard />
            </div>

            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>
                Card Settings
              </h2>
              <CardSetting />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
