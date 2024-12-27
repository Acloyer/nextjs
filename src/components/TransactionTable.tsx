"use client";
import React, { useState } from "react";

const transactions = [
  {
    description: "Spotify Subscription",
    transactionId: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: -2500,
  },
  {
    description: "Freepik Sales",
    transactionId: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: 750,
  },
  {
    description: "Mobile Service",
    transactionId: "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: -150,
  },
  {
    description: "Wilson",
    transactionId: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: -1050,
  },
  {
    description: "Emilly",
    transactionId: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: 840,
  },
];

const TransactionTable = () => {
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "income") return transaction.amount > 0;
    if (filter === "expense") return transaction.amount < 0;
    return true;
  });

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            background: filter === "all" ? "#2D60FF" : "transparent",
            color: filter === "all" ? "#fff" : "#2D60FF",
            border: "1px solid #2D60FF",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontFamily: "Inter",
          }}
        >
          All Transactions
        </button>
        <button
          onClick={() => setFilter("income")}
          style={{
            background: filter === "income" ? "#2D60FF" : "transparent",
            color: filter === "income" ? "#fff" : "#2D60FF",
            border: "1px solid #2D60FF",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontFamily: "Inter",
          }}
        >
          Income
        </button>
        <button
          onClick={() => setFilter("expense")}
          style={{
            background: filter === "expense" ? "#2D60FF" : "transparent",
            color: filter === "expense" ? "#fff" : "#2D60FF",
            border: "1px solid #2D60FF",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontFamily: "Inter",
          }}
        >
          Expense
        </button>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px", color: "#718EBF" }}>Description</th>
            <th style={{ padding: "10px", color: "#718EBF" }}>Transaction ID</th>
            <th style={{ padding: "10px", color: "#718EBF" }}>Type</th>
            <th style={{ padding: "10px", color: "#718EBF" }}>Card</th>
            <th style={{ padding: "10px", color: "#718EBF" }}>Date</th>
            <th style={{ padding: "10px", color: "#718EBF" }}>Amount</th>
            <th style={{ padding: "10px", color: "#718EBF" }}>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr
              key={index}
              style={{
                borderBottom: "1px solid rgba(223, 234, 242, 1)",
              }}
            >
              <td style={{ padding: "10px" }}>{transaction.description}</td>
              <td style={{ padding: "10px" }}>{transaction.transactionId}</td>
              <td style={{ padding: "10px" }}>{transaction.type}</td>
              <td style={{ padding: "10px" }}>{transaction.card}</td>
              <td style={{ padding: "10px" }}>{transaction.date}</td>
              <td
                style={{
                  padding: "10px",
                  color: transaction.amount < 0 ? "#FF4B4A" : "#41D4A8",
                  fontWeight: "600",
                }}
              >
                {transaction.amount > 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}
              </td>
              <td style={{ padding: "10px" }}>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "transparent",
                    border: "1px solid #2D60FF",
                    color: "#2D60FF",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
