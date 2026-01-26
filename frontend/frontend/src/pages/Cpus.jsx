import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/cpus.css";

const cpuData = [
  {
    name: "NovaCPU X1",
    status: "In Production",
    badgeColor: "green",
    desc: "High-performance processor for enterprise computing.",
    specs: ["8 Cores", "16 Threads", "4.5 GHz", "12MB Cache"],
    tech: [
      { label: "Architecture", value: "Nova ARM v3" },
      { label: "Process", value: "5nm FinFET" },
      { label: "TDP", value: "65W" },
      { label: "Memory", value: "DDR5-5600" }
    ]
  },
  {
    name: "NovaCPU M2",
    status: "Development",
    badgeColor: "blue",
    desc: "Mobile-optimized processor with high efficiency.",
    specs: ["6 Cores", "12 Threads", "3.8 GHz", "8MB Cache"],
    tech: [
      { label: "Architecture", value: "Nova ARM v2" },
      { label: "Process", value: "6nm" },
      { label: "TDP", value: "28W" },
      { label: "Memory", value: "LPDDR5" }
    ]
  },
  {
    name: "NovaCPU S3",
    status: "Testing",
    badgeColor: "yellow",
    desc: "Server-grade processor for data centers.",
    specs: ["16 Cores", "32 Threads", "4.2 GHz", "32MB Cache"],
    tech: [
      { label: "Architecture", value: "Nova Server v1" },
      { label: "Process", value: "4nm" },
      { label: "TDP", value: "125W" },
      { label: "Memory", value: "DDR5 ECC" }
    ]
  },
  {
    name: "NovaCPU E4",
    status: "Planning",
    badgeColor: "purple",
    desc: "Entry-level processor for everyday computing.",
    specs: ["4 Cores", "8 Threads", "3.2 GHz", "6MB Cache"],
    tech: [
      { label: "Architecture", value: "Nova Lite" },
      { label: "Process", value: "7nm" },
      { label: "TDP", value: "35W" },
      { label: "Memory", value: "DDR4" }
    ]
  },
  {
    name: "NovaCPU X2",
    status: "In Production",
    badgeColor: "green",
    desc: "Next-gen enterprise processor.",
    specs: ["12 Cores", "24 Threads", "4.8 GHz", "24MB Cache"],
    tech: [
      { label: "Architecture", value: "Nova ARM v4" },
      { label: "Process", value: "3nm" },
      { label: "TDP", value: "95W" },
      { label: "Memory", value: "DDR5-6400" }
    ]
  },
  {
    name: "NovaCPU M3",
    status: "Development",
    badgeColor: "blue",
    desc: "Ultra-efficient mobile processor.",
    specs: ["8 Cores", "8 Threads", "3.6 GHz", "10MB Cache"],
    tech: [
      { label: "Architecture", value: "Nova ARM v3-Lite" },
      { label: "Process", value: "5nm" },
      { label: "TDP", value: "20W" },
      { label: "Memory", value: "LPDDR5X" }
    ]
  }
];

const Cpus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* HERO */}
      <section className="sos-hero">
        <span className="sos-hero-badge">
          <span className="sos-badge-icon">
            <i className="bi bi-cpu"></i>
          </span>
          <span className="sos-spancir">Strategic Alliances</span>
        </span>

        <h1>
          <span className="sos-white-text">Next-Gen</span>{" "}
          <span className="sos-blue-text">Processors</span>
        </h1>

        <p>
          Our strategic partnerships and collaborations that drive innovation and deliver exceptional value.
        </p>

        <div className="sos-btns">
          <NavLink to="/services" className="sos-btn-primary">
            Our Services <span className="sos-arrow">➜</span>
          </NavLink>
          <NavLink to="/career" className="sos-btn-outline">
            Explore Careers
          </NavLink>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sos-features">
        <div className="sos-feature-box">
          <div className="sos-icon-box"><i className="bi bi-lightning-charge"></i></div>
          <h3>High Performance</h3>
          <p>Industry-leading processing power</p>
        </div>
        <div className="sos-feature-box">
          <div className="sos-icon-box"><i className="bi bi-shield-check"></i></div>
          <h3>Enhanced Security</h3>
          <p>Built-in hardware protection</p>
        </div>
        <div className="sos-feature-box">
          <div className="sos-icon-box"><i className="bi bi-clock"></i></div>
          <h3>Power Efficient</h3>
          <p>Optimized energy usage</p>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="sos-pipeline">
        <h1>Our CPU Pipeline</h1>
        <p className="sos-subtitle">Explore our current lineup of processors</p>

        <div className="sos-card-grid">
          {cpuData.map((cpu, index) => (
            <div key={index} className={`sos-cpu-card ${activeIndex === index ? "active" : ""}`}>
              <span className={`sos-badge ${cpu.badgeColor}`}>{cpu.status}</span>
              <div className="sos-icon"><i className="bi bi-cpu"></i></div>
              <h2>{cpu.name}</h2>
              <p className="sos-desc">{cpu.desc}</p>
              <div className="sos-specs">
                {cpu.specs.map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <button className="sos-learn-btn" onClick={() => toggleCard(index)}>
                Learn More <i className="bi bi-chevron-down"></i>
              </button>

              {activeIndex === index && (
                <div className="sos-details">
                  <hr />
                  <h3>Technical Specifications</h3>
                  <div className="sos-tech-grid">
                    {cpu.tech.map((t, i) => (
                      <div key={i}><small>{t.label}</small><strong>{t.value}</strong></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sos-cta-section">
        <h2>Interested in Our CPUs?</h2>
        <p>Contact our team to learn more about partnership opportunities.</p>
        <NavLink to="/contact" className="sos-cta-btn">Contact Sales <span>→</span></NavLink>
      </section>
    </>
  );
};

export default Cpus;
