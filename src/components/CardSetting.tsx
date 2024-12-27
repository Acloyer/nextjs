"use client";

import React from "react";

const CardSetting = () => {
  const settings = [
    {
      icon: "/icons/block-card.svg",
      title: "Block Card",
      description: "Instantly block your card",
      bgColor: "rgba(253, 230, 138, 0.2)",
    },
    {
      icon: "/icons/change-pin.svg",
      title: "Change Pin Code",
      description: "Choose another pin code",
      bgColor: "rgba(191, 219, 254, 0.2)",
    },
    {
      icon: "/icons/google-pay.svg",
      title: "Add to Google Pay",
      description: "Withdraw without any card",
      bgColor: "rgba(254, 202, 202, 0.2)", 
    },
    {
      icon: "/icons/apple.svg",
      title: "Add to Apple Pay",
      description: "Withdraw without any card",
      bgColor: "rgba(167, 243, 208, 0.2)", 
    },
    {
      icon: "/icons/apple2.svg",
      title: "Add to Apple Store",
      description: "Withdraw without any card",
      bgColor: "rgba(233, 213, 255, 0.2)", 
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        maxWidth: "400px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {settings.map((setting, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "15px 0",
              borderBottom:
                index !== settings.length - 1
                  ? "1px solid #E5E7EB"
                  : "none",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: setting.bgColor,
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "15px",
              }}
            >
              <img
                src={setting.icon}
                alt={setting.title}
                style={{
                  width: "24px",
                  height: "24px",
                  filter: "opacity(0.8)",
                }}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: 0,
                  color: "#1F2937",
                }}
              >
                {setting.title}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                  margin: 0,
                }}
              >
                {setting.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSetting;
