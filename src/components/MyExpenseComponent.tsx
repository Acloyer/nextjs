"use client";
import React from "react";

const MyExpenseComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        width: "100%",
        maxWidth: "350px",
        height: "235px",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {[
          { month: "Aug", height: "20", color: "rgba(237, 240, 247, 1)" },
          { month: "Sep", height: "60", color: "rgba(237, 240, 247, 1)" },
          { month: "Oct", height: "30", color: "rgba(237, 240, 247, 1)" },
          { month: "Nov", height: "20", color: "rgba(237, 240, 247, 1)" },
          { month: "Dec", height: "80", color: "#41D4A8", label: "$12,500" },
          { month: "Jan", height: "30", color: "rgba(237, 240, 247, 1)" },
        ].map((data, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: data.color,
                width: "20px",
                height: `${data.height}px`,
                borderRadius: "8px",
                marginBottom: "5px",
                position: "relative",
              }}
            >
              {data.label && (
                <span
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#233",
                  }}
                >
                  {data.label}
                </span>
              )}
            </div>
            <p style={{ fontSize: "12px", color: "#718EBF" }}>{data.month}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExpenseComponent;
