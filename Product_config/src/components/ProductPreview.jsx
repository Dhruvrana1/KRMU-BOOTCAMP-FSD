function ProductPreview({ config, price }) {
  return (
    <div className="preview-card">
      <div className="laptop">💻</div>

      <h2>{config.brand} Laptop</h2>

      <div className="specs">
        <div className="spec-item">
          ⚡
          <span>{config.processor}</span>
        </div>

        <div className="spec-item">
          🧠
          <span>{config.ram}</span>
        </div>

        <div className="spec-item">
          💾
          <span>{config.storage}</span>
        </div>

        <div className="spec-item">
          🎨
          <span>{config.color}</span>
        </div>
      </div>

      <div className="price">
        ₹ {price.toLocaleString()}
      </div>

      <button>Configure Now</button>
    </div>
  );
}

export default ProductPreview;