'use client';

const FilterPanel: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input
        type="date"
        placeholder="Select Date"
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontFamily: "Inter",
          fontSize: "14px",
        }}
      />
      <select
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontFamily: "Inter",
          fontSize: "14px",
        }}
      >
        <option value="all">All Transactions</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="number"
        placeholder="Min Amount"
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontFamily: "Inter",
          fontSize: "14px",
          width: "150px",
        }}
      />
      <input
        type="number"
        placeholder="Max Amount"
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontFamily: "Inter",
          fontSize: "14px",
          width: "150px",
        }}
      />
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#2D60FF",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          fontFamily: "Inter",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;
