
import { useState } from "react";
import "./App.css";

const navigation = [
  { id: "overview", icon: "◈", label: "Overview" },
  { id: "explorer", icon: "◎", label: "Moon Explorer" },
  { id: "sites", icon: "⌖", label: "Landing Sites" },
  { id: "comparison", icon: "▥", label: "Comparison" },
  { id: "hazards", icon: "△", label: "Hazard Analysis" },
];

const metrics = [
  { label: "SUN VISIBILITY", value: "—", unit: "Awaiting geometry", icon: "☼" },
  { label: "EARTH VISIBILITY", value: "—", unit: "Awaiting geometry", icon: "◉" },
  { label: "SURFACE TEMPERATURE", value: "—", unit: "Awaiting validated data", icon: "◌" },
  { label: "LANDING HAZARDS", value: "—", unit: "Awaiting terrain analysis", icon: "△" },
];

function App() {
  const [activePage, setActivePage] = useState("overview");

  const currentPage = navigation.find((item) => item.id === activePage);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-symbol">L</div>
          <div>
            <h1>LUNAR<span>COMMAND</span></h1>
            <p>LANDING SITE NAVIGATOR</p>
          </div>
        </div>

        <div className="sidebar-label">WORKSPACE</div>

        <nav className="navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => setActivePage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {activePage === item.id && <span className="active-indicator" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="mission-card">
            <div className="mission-card-top">
              <span className="status-dot" />
              MISSION STATUS
            </div>
            <h3>Prototype phase</h3>
            <p>Scientific data integration in progress.</p>
          </div>

          <div className="sidebar-footer">
            <span>SPACE APPS CHALLENGE</span>
            <span>GLOBAL LUNAR EXPLORATION</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            <span>MISSION CENTER</span>
            <span className="breadcrumb-divider">/</span>
            <strong>{currentPage?.label.toUpperCase()}</strong>
          </div>

          <div className="topbar-right">
            <div className="live-status">
              <span className="status-dot" />
              SYSTEM ONLINE
            </div>
            <div className="topbar-divider" />
            <div className="mission-code">LLSN / 2026</div>
          </div>
        </header>

        {activePage === "overview" ? (
          <Dashboard />
        ) : (
          <PlaceholderPage page={currentPage?.label} />
        )}
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page-content">
      <section className="welcome-section">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" />
            GLOBAL LUNAR INTELLIGENCE
          </div>
          <h2>Explore the Moon.<br /><span>Find the landing site.</span></h2>
          <p className="welcome-description">
            An integrated view of lunar terrain, environmental conditions,
            visibility and potential landing hazards.
          </p>
        </div>

        <div className="date-display">
          <span>MISSION ENVIRONMENT</span>
          <strong>GLOBAL MOON</strong>
          <small>Location and time selection pending</small>
        </div>
      </section>

      <section className="metrics-grid">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <div className="metric-top">
              <span>{metric.label}</span>
              <span className="metric-icon">{metric.icon}</span>
            </div>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-unit">{metric.unit}</div>
          </article>
        ))}
      </section>

      <section className="workspace-grid">
        <article className="panel lunar-panel">
          <div className="panel-heading">
            <div>
              <div className="panel-kicker">PRIMARY VISUALIZATION</div>
              <h3>Lunar surface explorer</h3>
            </div>
            <span className="panel-tag">GLOBAL VIEW</span>
          </div>

          <div className="moon-stage">
            <div className="moon-orbit orbit-one" />
            <div className="moon-orbit orbit-two" />
            <div className="moon-glow" />
            <div className="moon-sphere">
              <div className="moon-craters" />
            </div>
            <div className="moon-caption">
              <span className="caption-dot" />
              LUNAR GLOBE PREVIEW
            </div>
            <div className="map-overlay-label">
              <span>MAP ENGINE</span>
              <strong>INTEGRATION PENDING</strong>
            </div>
          </div>

          <div className="map-footer">
            <div>
              <span className="footer-label">COORDINATES</span>
              <strong>Not selected</strong>
            </div>
            <div>
              <span className="footer-label">DATA COVERAGE</span>
              <strong>Not verified</strong>
            </div>
            <button className="text-button" disabled>
              OPEN EXPLORER <span>↗</span>
            </button>
          </div>
        </article>

        <article className="panel intelligence-panel">
          <div className="panel-heading">
            <div>
              <div className="panel-kicker">MISSION ANALYTICS</div>
              <h3>Site intelligence</h3>
            </div>
            <span className="subtle-icon">⌁</span>
          </div>

          <div className="intelligence-intro">
            Select a lunar location to inspect available environmental data.
          </div>

          {[
            ["01", "Solar illumination", "Sun geometry"],
            ["02", "Earth communication", "Earth visibility"],
            ["03", "Thermal conditions", "Temperature data"],
            ["04", "Surface safety", "Terrain and hazards"],
          ].map(([number, title, description]) => (
            <div className="intelligence-row" key={number}>
              <span className="intelligence-number">{number}</span>
              <div className="intelligence-copy">
                <strong>{title}</strong>
                <span>{description}</span>
              </div>
              <span className="pending-pill">PENDING</span>
            </div>
          ))}

          <div className="validation-note">
            <span>ⓘ</span>
            Scientific outputs will appear only when validated data is available.
          </div>
        </article>
      </section>

      <section className="bottom-grid">
        <article className="panel bottom-panel">
          <div className="panel-heading">
            <div>
              <div className="panel-kicker">EXPLORATION WORKSPACE</div>
              <h3>Landing site candidates</h3>
            </div>
            <span className="panel-tag">0 VERIFIED</span>
          </div>
          <div className="empty-state">
            <div className="empty-icon">⌖</div>
            <strong>No verified sites yet</strong>
            <span>Candidate locations will appear after data integration.</span>
          </div>
        </article>

        <article className="panel bottom-panel">
          <div className="panel-heading">
            <div>
              <div className="panel-kicker">DATA PIPELINE</div>
              <h3>Module readiness</h3>
            </div>
            <span className="panel-tag">IN DEVELOPMENT</span>
          </div>

          <div className="pipeline-list">
            {["Frontend interface", "Backend API", "Lunar terrain data", "Sun / Earth geometry", "Hazard analysis"].map((item, index) => (
              <div className="pipeline-row" key={item}>
                <span>{item}</span>
                <span className={index === 0 ? "pipeline-active" : "pipeline-pending"}>
                  {index === 0 ? "READY" : "PENDING"}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <footer className="page-footer">
        <span>LUNAR COMMAND <span className="footer-separator">/</span> SPACE APPS CHALLENGE</span>
        <span>DATA-DRIVEN EXPLORATION · SCIENTIFIC VALIDATION REQUIRED</span>
      </footer>
    </div>
  );
}

function PlaceholderPage({ page }) {
  return (
    <div className="page-content placeholder-page">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        MISSION WORKSPACE
      </div>
      <h2>{page}</h2>
      <p>This module is part of the Lunar Landing Site Navigator.</p>
      <div className="panel placeholder-panel">
        <div className="empty-icon">◈</div>
        <h3>Module integration pending</h3>
        <p>This workspace will be connected to its corresponding data and API.</p>
      </div>
    </div>
  );
}

export default App;
