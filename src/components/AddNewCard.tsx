"use client";

import React from "react";

const AddNewCard = () => {
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
      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label
            htmlFor="cardType"
            style={{ display: "block", fontSize: "14px", color: "#6B7280" }}
          >
            Card Type
          </label>
          <input
            type="text"
            id="cardType"
            placeholder="Classic"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "14px",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="nameOnCard"
            style={{ display: "block", fontSize: "14px", color: "#6B7280" }}
          >
            Name On Card
          </label>
          <input
            type="text"
            id="nameOnCard"
            placeholder="My Cards"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "14px",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="cardNumber"
            style={{ display: "block", fontSize: "14px", color: "#6B7280" }}
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            placeholder="**** **** ****"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "14px",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="expirationDate"
            style={{ display: "block", fontSize: "14px", color: "#6B7280" }}
          >
            Expiration Date
          </label>
          <input
            type="date"
            id="expirationDate"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              fontSize: "14px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#2D60FF",
            color: "#ffffff",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddNewCard;
