"use client";
import React from "react";

const invoices = [
  {
    icon: "/icons/apple.svg",
    name: "Apple Store",
    timeAgo: "5h ago",
    amount: "$450",
  },
  {
    icon: "/icons/user-l.svg",
    name: "Michael",
    timeAgo: "2 days ago",
    amount: "$160",
  },
  {
    icon: "/icons/playstation.svg",
    name: "Playstation",
    timeAgo: "5 days ago",
    amount: "$1085",
  },
  {
    icon: "/icons/user-l.svg",
    name: "William",
    timeAgo: "10 days ago",
    amount: "$90",
  },
];

const InvoicesSent = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {invoices.map((invoice, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            fontFamily: "Inter",
            borderBottom: index !== invoices.length - 1 ? "1px solid #E6E6E6" : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={invoice.icon} alt={invoice.name} style={{ width: "40px", height: "100%" }} />
            <div>
              <h3 style={{ fontSize: "14px", fontWeight: "bold", margin: "0", fontFamily: "Inter" }}>
                {invoice.name}
              </h3>
              <p style={{ fontSize: "12px", color: "#718EBF", margin: "0" }}>{invoice.timeAgo}</p>
            </div>
          </div>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "#233", margin: "0" }}>{invoice.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default InvoicesSent;
