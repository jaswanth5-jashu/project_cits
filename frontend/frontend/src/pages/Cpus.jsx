import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"; 
import "../css/cpus.css";

const Cpus = () => {
  // useRef for data collection
  const fullNameRef = useRef();
  const emailRef = useRef();
  const cpuModelRef = useRef();
  const quantityRef = useRef();
  const ramRef = useRef();
  const storageRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      cpuModel: cpuModelRef.current.value,
      quantity: quantityRef.current.value,
      ram: ramRef.current.value,
      storage: storageRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/inquiry", formData);
      if (response.status === 200) {
        alert("Success! Your requirements sent to admin.");
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send inquiry.");
    }
  };

  return (
    <>
      {/* HERO - Same as original */}
      <section className="sos-hero">
        <span className="sos-hero-badge">
          <span className="sos-badge-icon"><i className="bi bi-cpu"></i></span>
          <span className="sos-spancir">Strategic Alliances</span>
        </span>
        <h1><span className="sos-white-text">Next-Gen</span> <span className="sos-blue-text">Processors</span></h1>
        <p>Our strategic partnerships and collaborations that drive innovation and deliver exceptional value.</p>
        <div className="sos-btns">
          <NavLink to="/services" className="sos-btn-primary">Our Services <span className="sos-arrow">➜</span></NavLink>
          <NavLink to="/career" className="sos-btn-outline">Explore Careers</NavLink>
        </div>
      </section>

      {/* FEATURES - Same as original */}
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

      {/* PIPELINE - Now contains the Form in Middle */}
      <section className="sos-pipeline">
        <div className="sos-form-wrapper">
          <h1>Our CPU Pipeline</h1>
          <p className="sos-subtitle">Submit your custom requirements below.</p>

          <form onSubmit={handleSubmit} className="sos-custom-form">
            <div className="sos-form-grid">
              <div className="sos-input-group">
                <label>Full Name</label>
                <input type="text" ref={fullNameRef} placeholder="Enter your name" required />
              </div>
              <div className="sos-input-group">
                <label>Admin Email</label>
                <input type="email" ref={emailRef} placeholder="admin@company.com" required />
              </div>
              <div className="sos-input-group">
                <label>CPU Model</label>
                <input type="text" ref={cpuModelRef} placeholder="e.g. Nova ARM v4" required />
              </div>
              <div className="sos-input-group">
                <label>Quantity</label>
                <input type="number" ref={quantityRef} placeholder="Units" min="1" required />
              </div>
              <div className="sos-input-group">
                <label>RAM</label>
                <input type="text" ref={ramRef} placeholder="e.g. 32GB DDR5" required />
              </div>
              <div className="sos-input-group">
                <label>Storage</label>
                <input type="text" ref={storageRef} placeholder="e.g. 1TB NVMe" required />
              </div>
              <div className="sos-input-group sos-full-width">
                <label>Use Case Details</label>
                <textarea ref={messageRef} rows="4" placeholder="Describe your workload..."></textarea>
              </div>
            </div>
            <button type="submit" className="sos-btn-primary sos-submit-btn">
              Submit Configuration ➜
            </button>
          </form>
        </div>
      </section>

      {/* CTA - Same as original */}
      <section className="sos-cta-section">
        <h2>Interested in Our CPUs?</h2>
        <p>Contact our team to learn more about partnership opportunities.</p>
        <NavLink to="/contact" className="sos-cta-btn">Contact Sales <span>→</span></NavLink>
      </section>
    </>
  );
};

export default Cpus;