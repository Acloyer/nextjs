const StockTable = ({ stocks }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "20px",
        display: "grid",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", paddingBottom: "10px", color: "#718EBF" }}>SL No</th>
            <th style={{ textAlign: "left", paddingBottom: "10px", color: "#718EBF" }}>Name</th>
            <th style={{ textAlign: "right", paddingBottom: "10px", color: "#718EBF" }}>Price</th>
            <th style={{ textAlign: "right", paddingBottom: "10px", color: "#718EBF" }}>Return</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td style={{ padding: "10px 0", color: "#233" }}>{stock.id}</td>
              <td style={{ padding: "10px 0", color: "#233" }}>{stock.name}</td>
              <td style={{ textAlign: "right", padding: "10px 0", color: "#233" }}>{stock.price}</td>
              <td
                style={{
                  textAlign: "right",
                  padding: "10px 0",
                  color: stock.return.includes("-") ? "red" : "#41D4A8",
                }}
              >
                {stock.return}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
