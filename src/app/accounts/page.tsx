"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Card from "@/components/CardComponent";
import SummaryCard from "@/components/SummaryCard";
import LastTransaction from "@/components/LastTransaction";
import DebitCreditOverview from "@/components/DebitCreditOverview";
import InvoicesSent from "@/components/InvoicesSent";

export default function Accounts() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

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
          <div className="accounts-grid">
            
            <div className="summary-cards-row">
              <SummaryCard
                title="My Balance"
                amount="$12,750"
                icon="/icons/balance.svg"
                color="#FFEEDD"
              />
              <SummaryCard
                title="Income"
                amount="$5,600"
                icon="/icons/income.svg"
                color="#DDEEFF"
              />
              <SummaryCard
                title="Expense"
                amount="$3,460"
                icon="/icons/expense.svg"
                color="#FFDDDD"
              />
              <SummaryCard
                title="Total Saving"
                amount="$7,920"
                icon="/icons/saving.svg"
                color="#DDF5DD"
              />
            </div>

            <div className="row-grid">
              <div>
                <h1 className="section-title">Last Transaction</h1>
                <LastTransaction
                  itemStyle={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  iconStyle={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </div>
              <div>
                <h1 className="section-title">My Card</h1>
                <Card />
              </div>
            </div>

            <div className="row-grid">
              <div>
                <h1 className="section-title">Debit & Credit Overview</h1>
                <DebitCreditOverview />
              </div>
              <div>
                <h1 className="section-title">Invoices Sent</h1>
                <InvoicesSent
                  itemStyle={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  iconStyle={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
