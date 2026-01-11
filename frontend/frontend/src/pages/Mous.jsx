import { useEffect } from "react";
import { runMouScript } from "../js/mousScript";
import "../css/mous.css";
import { NavLink } from "react-router-dom";


function Mous() {

  useEffect(() => {
    runMouScript();   // SCRIPT RUN IKKADA
  }, []);

  return (
    
    <div className="mous-page">
      {/* ================= HERO ================= */}
      <section className="hero">
        <span className="hero-badge">
          <span className="badge-icon">
            <i className="bi bi-people-fill"></i>
          </span>
          Strategic Alliances
        </span>

        <h1>Memorandums of Understanding</h1>
        <p>
          Our strategic partnerships and collaborations that drive innovation and
          deliver exceptional value to our clients.
        </p>

        <div className="hero-stats">
          <div>
            <strong>6</strong>
            <span>Active Partnerships</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>Countries</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>Years of Collaboration</span>
          </div>
        </div>
      </section>

      <section className="partnerships">

        {/* SEARCH + FILTER */}
        <div className="top-bar">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              id="searchInput"
              placeholder="Search partnerships..."
            />
          </div>

          <div className="filters">
            <button className="filter-btn active" data-filter="all">All</button>
            <button className="filter-btn" data-filter="cloud">Cloud</button>
            <button className="filter-btn" data-filter="education">Education</button>
            <button className="filter-btn" data-filter="security">Security</button>
            <button className="filter-btn" data-filter="innovation">Innovation</button>
          </div>

          <p className="result-count" id="resultCount">
            Showing 0 of 0 partnerships
          </p>

          <hr className="tophr" />
        </div>

        {/* CARDS */}
        <div className="cards" id="cards"></div>
      </section>

      {/* MODAL */}
      <div className="modal-overlay" id="mouModal">
        <div className="modal">
        <button
        className="close-btn"
        onClick={() => window.closeModal()}
        >
        &times;
        </button>

          <div className="modal-header">
            <div className="modal-icon">
              <i id="modalIcon" className="bi"></i>
            </div>
            <span className="modal-tag" id="modalTag"></span>
          </div>

          <h2 id="modalTitle"></h2>

          <p className="modal-date">
            <i className="bi bi-calendar"></i>
            Partnership since <span id="modalDate"></span>
          </p>

          <hr />

          <h4>About This Partnership</h4>
          <p id="modalDesc"></p>

          <h4>Key Highlights</h4>
          <ul id="modalList"></ul>

          <hr />

          <div className="modal-actions">

            {/* VIEW PDF */}
            <NavLink id="viewPdf" target="_blank" rel="noreferrer" className="btn blue">
              <i className="bi bi-eye"></i> View PDF
            </NavLink>


            {/* VIEW MORE */}
            <NavLink to="/contact" className="btn blue">
              <i className="bi bi-arrow-right"></i> View More
            </NavLink>

          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="partnership-cta">
        <div className="cta-icon">
          <i className="bi bi-people-fill"></i>
        </div>

        <h2>Interested in Partnership?</h2>

        <p>
          We're always looking for strategic partners who share our vision for
          innovation and excellence. Let's explore how we can create value together.
        </p>

        <div className="cta-buttons">
          <a href="/contact" className="cta-btn primary">
            Contact Us <i className="bi bi-arrow-right"></i>
          </a>

          <a href="/about" className="cta-btn secondary">
            Learn About Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Mous;
