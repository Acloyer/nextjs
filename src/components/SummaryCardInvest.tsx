import React from "react";

const SummaryCardInvest = ({ title, amount, icon, color }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "20px",
        gap: "25px",
        minWidth: "557px",
        height: "120px",
      }}
      >
      <div
        style={{
          borderRadius: "50%",
          width: "70px",
          backgroundColor: color,
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={icon} alt={title} style={{ width: "31px", height: "31px" }} />
      </div>
      <div>
        <h4
          style={{
            fontSize: "16px",
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

export default SummaryCardInvest;
