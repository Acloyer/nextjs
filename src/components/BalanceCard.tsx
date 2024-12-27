const BalanceCard = ({ title, value, color }) => {
    return (
      <div
        style={{
          backgroundColor: color,
          padding: "20px",
          borderRadius: "15px",
          textAlign: "center",
          flex: 1,
          marginRight: "10px",
        }}
      >
        <h4 style={{ fontSize: "14px", fontWeight: "600" }}>{title}</h4>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{value}</p>
      </div>
    );
  };
  