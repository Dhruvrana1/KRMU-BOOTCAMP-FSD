export default function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>
          Build Modern React
          <span> Experiences</span>
        </h1>

        <p>
          A professional React application featuring
          reusable components, smooth transitions,
          responsive layouts, and engaging user
          experiences.
        </p>

        <button className="primary-btn">
          Explore More
        </button>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>⚡ Fast</h3>
          <p>
            Optimized UI interactions and smooth
            rendering.
          </p>
        </div>

        <div className="card">
          <h3>🎨 Modern</h3>
          <p>
            Professional design inspired by modern SaaS
            platforms.
          </p>
        </div>

        <div className="card">
          <h3>📱 Responsive</h3>
          <p>
            Works seamlessly across desktop and mobile.
          </p>
        </div>
      </div>
    </div>
  );
}