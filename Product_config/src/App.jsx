import { useState } from "react";
import Navbar from "./components/Navbar";
import ConfigPanel from "./components/ConfigPanel";
import ProductPreview from "./components/ProductPreview";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [config, setConfig] = useState({
    brand: "Dell",
    processor: "i5",
    ram: "8GB",
    storage: "512GB SSD",
    color: "Black",
  });

  const calculatePrice = () => {
    let price = 50000;

    if (config.processor === "i7") price += 10000;
    if (config.processor === "i9") price += 20000;

    if (config.ram === "16GB") price += 5000;
    if (config.ram === "32GB") price += 10000;

    if (config.storage === "1TB SSD") price += 7000;

    return price;
  };

  return (
    <>
      <Navbar />

      <div className="hero">
        <ConfigPanel
          config={config}
          setConfig={setConfig}
        />

        <div>
          <ProductPreview
            config={config}
            price={calculatePrice()}
          />

          <Summary
            config={config}
            price={calculatePrice()}
          />
        </div>
      </div>
    </>
  );
}

export default App;