import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <Home />;

      case "about":
        return <About />;

      case "content":
        return <Content />;

      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="content-container">
        {renderPage()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h3>ReactPro</h3>

          <p>
            Building modern, responsive, and interactive
            user experiences with React.
          </p>

          <div className="footer-links">
            <span>Home</span>
            <span>About</span>
            <span>Content</span>
          </div>

          <p className="copyright">
            © 2025 ReactPro. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}