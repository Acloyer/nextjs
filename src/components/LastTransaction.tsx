"use client";
import React from "react";

const transactions = [
  {
    icon: "/icons/spotify.svg",
    title: "Spotify Subscription",
    date: "25 Jan 2021",
    type: "Shopping",
    card: "1234 ****",
    status: "Pending",
    amount: "-$150",
    amountColor: "rgba(255, 75, 74, 1)", 
  },
  {
    icon: "/icons/service.svg",
    title: "Mobile Service",
    date: "25 Jan 2021",
    type: "Service",
    card: "1234 ****",
    status: "Completed",
    amount: "-$340",
    amountColor: "rgba(255, 75, 74, 1)",
  },
  {
    icon: "/icons/user-l.svg",
    title: "Emilly Wilson",
    date: "25 Jan 2021",
    type: "Transfer",
    card: "1234 ****",
    status: "Completed",
    amount: "+$780",
    amountColor: "rgba(65, 212, 168, 1)", 
  },
];

const LastTransaction = () => {
  return (
    <div
      style={{
        fontFamily: "Inter",
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {transactions.map((transaction, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            fontFamily: "Inter",
            borderBottom: index !== transactions.length - 1 ? "1px solid #E6E6E6" : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "Inter"}}>
            <img src={transaction.icon} alt={transaction.title} style={{ width: "40px", height: "40px" }} />
            <div>
              <h3 style={{ fontSize: "14px", fontWeight: "bold", margin: "0", fontFamily: "Inter" }}>
                {transaction.title}
              </h3>
              <p style={{ fontSize: "12px", color: "#718EBF", margin: "0", fontFamily: "Inter",}}>{transaction.date}</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "14px", color: "#718EBF", fontFamily: "Inter", margin: "0" }}>{transaction.type}</p>
            <p style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "Inter", margin: "0", color: transaction.amountColor }}>
              {transaction.amount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastTransaction;
