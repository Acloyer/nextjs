"use client";
import React from "react";

const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      id: 1,
      icon: "/icons/deposit-card.svg",
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      amountColor: "rgba(255, 75, 74, 1)", 
      circleColor: "rgba(255, 245, 217, 1)",
    },
    {
      id: 2,
      icon: "/icons/paypal.svg",
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      amountColor: "rgba(65, 212, 168, 1)", 
      circleColor: "rgba(231, 237, 255, 1)",
    },
    {
      id: 3,
      icon: "/icons/wire-transfer.svg",
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      amountColor: "rgba(65, 212, 168, 1)", 
      circleColor: "rgba(220, 250, 248, 1)",
    },
  ];

  return (
    <div
      style={{
        width: "300px",
        fontFamily: "Inter",
        height: "235px",
        gap: "10px",
        borderRadius: "25px",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            style={{
              width: "100%",
              height: "35px",
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              borderRadius: "12px",
              fontFamily: "Inter",
              backgroundColor: "white", 
              padding: "30px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                fontFamily: "Inter",
                borderRadius: "50%",
                backgroundColor: transaction.circleColor, 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
              }}
            >
              <img
                src={transaction.icon}
                alt={transaction.title}
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "'Inter', sans-serif",
                  margin: 0,
                  color: "rgba(35, 35, 35, 1)", 
                }}
              >
                {transaction.title}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(113, 142, 191, 1)", 
                  margin: 0,
                }}
              >
                {transaction.date}
              </p>
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "'Inter', sans-serif",
                color: transaction.amountColor,
                margin: 0,
                textAlign: "right",
              }}
            >
              {transaction.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
