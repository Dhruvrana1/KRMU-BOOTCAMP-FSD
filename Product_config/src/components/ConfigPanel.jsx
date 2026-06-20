function ConfigPanel({ config, setConfig }) {
  return (
    <div className="config-card">
      <h2>Customize Laptop</h2>

      <label>Brand</label>
      <select
        value={config.brand}
        onChange={(e) =>
          setConfig({
            ...config,
            brand: e.target.value,
          })
        }
      >
        <option>Dell</option>
        <option>HP</option>
        <option>Lenovo</option>
      </select>

      <label>Processor</label>
      <select
        value={config.processor}
        onChange={(e) =>
          setConfig({
            ...config,
            processor: e.target.value,
          })
        }
      >
        <option>i5</option>
        <option>i7</option>
        <option>i9</option>
      </select>

      <label>RAM</label>
      <select
        value={config.ram}
        onChange={(e) =>
          setConfig({
            ...config,
            ram: e.target.value,
          })
        }
      >
        <option>8GB</option>
        <option>16GB</option>
        <option>32GB</option>
      </select>

      <label>Storage</label>
      <select
        value={config.storage}
        onChange={(e) =>
          setConfig({
            ...config,
            storage: e.target.value,
          })
        }
      >
        <option>512GB SSD</option>
        <option>1TB SSD</option>
      </select>

      <label>Color</label>
      <select
        value={config.color}
        onChange={(e) =>
          setConfig({
            ...config,
            color: e.target.value,
          })
        }
      >
        <option>Black</option>
        <option>Silver</option>
        <option>Blue</option>
      </select>
    </div>
  );
}

export default ConfigPanel;