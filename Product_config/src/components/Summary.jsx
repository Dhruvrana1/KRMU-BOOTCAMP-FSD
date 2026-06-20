function Summary({ config, price }) {
  return (
    <div className="summary-card">
      <h3>Configuration Summary</h3>

      <p>
        <strong>Brand:</strong>{" "}
        {config.brand}
      </p>

      <p>
        <strong>Processor:</strong>{" "}
        {config.processor}
      </p>

      <p>
        <strong>RAM:</strong>{" "}
        {config.ram}
      </p>

      <p>
        <strong>Storage:</strong>{" "}
        {config.storage}
      </p>

      <p>
        <strong>Color:</strong>{" "}
        {config.color}
      </p>

      <h2>₹ {price.toLocaleString()}</h2>
    </div>
  );
}

export default Summary;