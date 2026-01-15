import { useEffect, useState } from "react";
import "../css/pipeline.css";
import { getProjects } from "../services/pipelineApi.js";

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

      {p.status === "active" && (
        <div className="progress-box">
          <div className="progress-text">
            <span>Progress</span>
            <span>{p.progress}%</span>
          </div>
          <div className="progress-bar">
            <span style={{ "--progress": `${p.progress}%` }}></span>
          </div>
        </div>
      )}

      <p className="date">
        <i className="bi bi-calendar"></i>
        {p.start_date} → {p.end_date}
      </p>
    </div>
  );

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
        <div className="project-grid">
          {active.map(renderCard)}
        </div>
      </section>

      {/* UPCOMING */}
      <section className="pipeline-section upcoming-section">
        <h2 className="section-title">Upcoming Projects</h2>
        <div className="project-grid">
          {upcoming.map(renderCard)}
        </div>
      </section>

      {/* COMPLETED */}
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