import React from "react";
import "../css/contact.css";


function Contact() {
  return (
    <div className="cont-page">
      {/* HERO SECTION */}
      <section className="hero-contact">
        <div className="hero-con">
          <h1>Contact Us</h1>
          <p>
            Have a question or want to work together? We'd love to hear from you.
            <br /> Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <p className="section-subtitle">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="contact-grid">
            {/* LEFT : CONTACT INFO */}
            <div className="contact-info">
              <div className="info-card">
                <i className="bi bi-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>contact@horizonsolutions.com</p>
                </div>
              </div>

              <div className="info-card">
                <i className="bi bi-telephone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-card">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="info-card">
                <i className="bi bi-clock"></i>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon – Fri : 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* RIGHT : CONTACT FORM */}
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>

                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>

                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5"></textarea>
                </div>

                <button type="submit" className="btn">
                  <i className="bi bi-send"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* HEADQUARTERS */}
      <div className="info-card headquarters">
        <i className="bi bi-building"></i>
        <div>
          <h4>Headquarters</h4>
          <p>
            Horizon Solutions Pvt Ltd,
            <br />
            Hitech City, Hyderabad,
            <br />
            Telangana – 500081
          </p>

          <a
            href="https://www.google.com/maps?q=Hitech+City+Hyderabad"
            target="_blank"
            rel="noreferrer"
            className="direction-btn"
          >
            <i className="bi bi-geo"></i> Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
