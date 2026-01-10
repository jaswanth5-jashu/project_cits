import "../css/pipeline.css";

function Pipeline() {
  return (
    <div className="pipeline-page">

      {/* TOP HEADER */}
      <section className="pipeline-header">
        <h1>Project Pipeline</h1>
        <p>
          Track our ongoing initiatives and upcoming projects delivering innovative
          <br /> solutions across industries.
        </p>
      </section>

      {/* ACTIVE PROJECTS */}
      <section className="pipeline-section active-section">
        <h2 className="section-title">Active Projects</h2>
        <p className="section-sub">
          Currently in progress – delivering excellence every day
        </p>

        <div className="project-grid">

          <div className="project-card active-card">
            <div className="card-top">
              <h3>Enterprise Cloud Migration</h3>
              <span className="badge active">Active</span>
            </div>

            <p className="client">Fortune 500 Financial Corp</p>
            <p className="desc">
              Complete infrastructure migration to AWS with zero downtime strategy.
            </p>

            <div className="progress-box">
              <div className="progress-text">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <span style={{ "--progress": "75%" }}></span>
              </div>
            </div>

            <p className="date">
              <i className="bi bi-calendar"></i> Jan 2024 → Jun 2024
            </p>
          </div>

          <div className="project-card active-card">
            <div className="card-top">
              <h3>AI Analytics Platform</h3>
              <span className="badge active">Active</span>
            </div>

            <p className="client">Healthcare Solutions Inc</p>
            <p className="desc">
              Predictive analytics dashboard for patient care optimization.
            </p>

            <div className="progress-box">
              <div className="progress-text">
                <span>Progress</span>
                <span>45%</span>
              </div>
              <div className="progress-bar">
                <span style={{ "--progress": "45%" }}></span>
              </div>
            </div>

            <p className="date">
              <i className="bi bi-calendar"></i> Mar 2024 → Sep 2024
            </p>
          </div>

        </div>
      </section>

      {/* UPCOMING PROJECTS */}
      <section className="pipeline-section upcoming-section">
        <h2 className="section-title">Upcoming Projects</h2>
        <p className="section-sub">
          Planned initiatives scheduled for upcoming execution
        </p>

        <div className="project-grid">

          <div className="project-card upcoming-card">
            <div className="card-top">
              <h3>Digital Transformation Suite</h3>
              <span className="badge upcoming">Upcoming</span>
            </div>

            <p className="client">Retail Chain Networks</p>
            <p className="desc">
              POS, inventory, and enterprise digital modernization project.
            </p>

            <p className="date">
              <i className="bi bi-calendar"></i> Jul 2024 → Dec 2024
            </p>
          </div>

          <div className="project-card upcoming-card">
            <div className="card-top">
              <h3>Cybersecurity Infrastructure</h3>
              <span className="badge upcoming">Upcoming</span>
            </div>

            <p className="client">Government Agency</p>
            <p className="desc">
              Zero-trust security architecture and compliance framework.
            </p>

            <p className="date">
              <i className="bi bi-calendar"></i> Aug 2024 → Feb 2025
            </p>
          </div>

        </div>
      </section>

      {/* COMPLETED PROJECTS */}
      <section className="pipeline-section completed-section">
        <h2 className="section-title">Completed Projects</h2>
        <p className="section-sub">
          Successfully delivered projects with measurable impact
        </p>

        <div className="project-grid">

          <div className="project-card completed-card">
            <div className="card-top">
              <h3>Mobile Banking Application</h3>
              <span className="badge completed">Completed</span>
            </div>

            <p className="client">Regional Credit Union</p>
            <p className="desc">
              Secure mobile banking app with biometric authentication.
            </p>

            <p className="date">
              <i className="bi bi-calendar"></i> Sep 2023 → Feb 2024
            </p>
          </div>

          <div className="project-card completed-card">
            <div className="card-top">
              <h3>IoT Fleet Management</h3>
              <span className="badge completed">Completed</span>
            </div>

            <p className="client">Logistics Partners Ltd</p>
            <p className="desc">
              Real-time fleet tracking and route optimization system.
            </p>

            <p className="date">
              <i className="bi bi-calendar"></i> Jun 2023 → Dec 2023
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
export default  Pipeline;