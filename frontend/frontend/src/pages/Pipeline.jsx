import { useEffect, useState } from "react";
import "../css/pipeline.css";
import { getProjects } from "../services/pipelineApi.js";
import HillGraph from "../components/HillGraph.jsx";

function Pipeline() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(console.error);
  }, []);

  const active = projects.filter(p => p.status === "active");
  const upcoming = projects.filter(p => p.status === "upcoming");
  const completed = projects.filter(p => p.status === "completed");

  const renderCard = (p) => (
    <div key={p.id} className={`project-card ${p.status}-card`}>
      <div className="card-top">
        <h3>{p.title}</h3>
        <span className={`badge ${p.status}`}>
          {p.status.toUpperCase()}
        </span>
      </div>

      <p className="client">{p.client}</p>
      <p className="desc">{p.description}</p>

      {/* ✅ HILL GRAPH FOR ACTIVE PROJECTS */}
      {p.status === "active" && (
        <HillGraph progress={p.progress} />
      )}

      <p className="date">
        <i className="bi bi-calendar"></i>
        {p.start_date} → {p.end_date}
      </p>
    </div>
  );

  return (
    <div className="pipeline-page">

      <section className="pipeline-header">
        <h1>Project Pipeline</h1>
        <p>
          Track our ongoing initiatives and upcoming projects delivering innovative
          <br /> solutions across industries.
        </p>
      </section>

      <section className="pipeline-section active-section">
        <h2 className="section-title">Active Projects</h2>
        <div className="project-grid">
          {active.map(renderCard)}
        </div>
      </section>

      <section className="pipeline-section upcoming-section">
        <h2 className="section-title">Upcoming Projects</h2>
        <div className="project-grid">
          {upcoming.map(renderCard)}
        </div>
      </section>

      <section className="pipeline-section completed-section">
        <h2 className="section-title">Completed Projects</h2>
        <div className="project-grid">
          {completed.map(renderCard)}
        </div>
      </section>

    </div>
  );
}

export default Pipeline;
