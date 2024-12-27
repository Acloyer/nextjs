"use client";
const QuickTransfer: React.FC = () => {
  const users = [
    { name: "Livia Bator", role: "CEO", image: "/images/livia.png" },
    { name: "Randy Press", role: "Director", image: "/images/randy.png" },
    { name: "Workman", role: "Designer", image: "/images/workman.png" },
  ];

  return (
    <div
      style={{
        width: "350px",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "20px",
        fontFamily: "Inter",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          fontFamily: "Inter",
          marginBottom: "20px",
        }}
      >
        {users.map((user, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={user.image}
              alt={user.name}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                fontFamily: "Inter",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "14px", fontFamily: "Inter", fontWeight: "600", margin: "0" }}>
              {user.name}
            </p>
            <p
              style={{
                fontSize: "12px",
                fontFamily: "Inter",
                color: "rgba(113, 142, 191, 1)",
                margin: "0",
              }}
            >
              {user.role}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", fontFamily: "Inter", gap: "10px", alignItems: "center" }}>
        <input
          type="number"
          placeholder="Write Amount"
          style={{
            flex: 1,
            fontFamily: "Inter",
            padding: "10px",
            border: "1px solid #E0E0E0",
            borderRadius: "10px",
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#2D60FF",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontFamily: "Inter",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
