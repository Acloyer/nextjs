import React from "react";

const SummaryCard = ({ title, amount, icon, color }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "20px",
        gap: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        minWidth: "200px",
        height: "100px",
      }}
      >
      <div
        style={{
          borderRadius: "50%",
          width: "50px",
          backgroundColor: color,
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={icon} alt={title} style={{ width: "30px", height: "30px" }} />
      </div>
      <div>
        <h4
          style={{
            fontSize: "14px",
            color: "#718EBF",
            marginBottom: "5px",
            fontFamily: "Inter",
            fontWeight: "500",
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontSize: "18px",
            color: "#233",
            fontWeight: "bold",
            fontFamily: "Inter",
          }}
        >
          {amount}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
