import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const InvestmentList = () => {
  const investments = [
    {
      name: "Apple Store",
      category: "E-commerce, Marketplace",
      value: "$54,000",
      returnValue: "+16%",
      icon: "/icons/apple2.svg",
      returnColor: "#16A34A",
    },
    {
      name: "Samsung Mobile",
      category: "E-commerce, Marketplace",
      value: "$25,300",
      returnValue: "-4%",
      icon: "/icons/samsung.svg",
      returnColor: "#DC2626",
    },
    {
      name: "Tesla Motors",
      category: "Electric Vehicles",
      value: "$8,200",
      returnValue: "+25%",
      icon: "/icons/tesla.svg",
      returnColor: "#16A34A",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0)",
        padding: "10px",
        width: "100%",
        maxWidth: "725px",
        fontFamily: "Inter",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {investments.map((investment, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px",
            borderRadius: "12px",
            backgroundColor: "white", 
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px"}}>
            <img
              src={investment.icon}
              alt={investment.name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "20px",
                backgroundColor: "#F3F4F6",
                padding: "10px",
              }}
            />
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "0",
                  color: "#1F2937",
                }}
              >
                {investment.name}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#718EBF",
                  margin: "0",
                }}
              >
                {investment.category}
              </p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                margin: "0",
                color: "#1F2937",
              }}
            >
              {investment.value}
            </p>
            <p
              style={{
                fontSize: "12px",
                color: investment.returnColor,
                margin: "0",
              }}
            >
              {investment.returnValue}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestmentList;
