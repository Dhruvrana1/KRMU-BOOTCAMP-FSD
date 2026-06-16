export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = ["home", "about", "content"];

  return (
    <nav className="navbar">
      <div className="logo">
        React<span>Pro</span>
      </div>

      <div className="nav-links">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`nav-item ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}