import "../css/Home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="trusted">
            <span></span>
            Trusted since 4+ Years
          </div>
          <h1>
            Building Future-Ready
            <br />
            Digital Solutions
          </h1>

          <p>
            Empowering enterprises with cutting-edge cloud infrastructure,
            innovative IT solutions, brand transformative digital strategies
            that drive growth and efficiency.
          </p>
          <div className="btns">
            <NavLink className="btn-primary" to="/services">
              Our Services
              <span className="arrow">➜</span>
            </NavLink>
            <NavLink to="/career" className="btn-outline">
              Explore Carreers
            </NavLink>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <h2>500+</h2>
            <p> Clients Served</p>
          </div>
          <div className="stat">
            <h2>15+</h2>
            <p> Years Experience</p>
          </div>
          <div className="stat">
            <h2>98%</h2>
            <p> Client Satisfaction</p>
          </div>
          <div className="stat">
            <h2>50+</h2>
            <p> Tech Experts</p>
          </div>
        </div>
        <div className="scroll-down">
          <span>⌄</span>
        </div>
      </div>
      <section className="herotwo">
        <div className="offer-wrap">
          <div className="offer-pill">What We Offer</div>
          <h1 className="offer-title">Enterprise-Grade Solutions</h1>
          <p className="offer-sub">
            Discover our comprehensive range of IT services and solutions <br />
            designed to accelerate your digital journey.
          </p>
        </div>
        <div className="twobox">
          <div className="twobox1">
            <NavLink to="/services">
              <div className="icon-box">
                <i className="bi bi-pc-display-horizontal"></i>
              </div>
              <h3>IT Services</h3>
              <p>Comprehensive IT infrastructure management and support.</p>
            </NavLink>
          </div>
          <div className="twobox2">
            <NavLink to="/services">
              <div className="icon-box">
                <i className="bi bi-cloud"></i>
              </div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud architecture and migration services.</p>
            </NavLink>
          </div>
          <div className="twobox3">
            <NavLink to="/services">
              <div className="icon-box">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h3>Digital Transformation</h3>
              <p>End-to-end strategies to modernize businesses.</p>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-left">
          <div className="about-card">
            <div className="logo-circle">CITS</div>
            <h2>
              {" "}
              Akhils's Cloud Technology <br />
              platform LLP
            </h2>
            <p>Innovating Since 2021</p>
          </div>
        </div>
        <div className="about-right">
          <span className="pill">About Us</span>
          <h1>
            Your Trusted
            <br />
            Technology Partner
          </h1>
          <p className="desc">
            Akhil Cloud Platform Solutions LLP is a leading IT services company
            specializing in cloud computing, digital transformation, and
            enterprise software solutions. With over 15 years of experience,
            we've helped hundreds of organizations modernize their technology
            infrastructure and achieve their digital goals.
          </p>
          <ul className="points">
            <li>
              <i className="bi bi-check-circle-fill"></i>15+ years of industry
              expertise
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>ISO certified processes
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>24/7 dedicated support
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>Agile delivery
              methodology
            </li>
          </ul>
          <NavLink className="about-btn" to="/about">
            Learn More About Us <span>➜</span>
          </NavLink>
        </div>
      </section>
      <section className="cta">
        <h1>Ready to Transform Your Business?</h1>
        <p>
          Let's discuss how our expertise can help you achieve your technology
          goals and drive innovation in your organization.
        </p>
        <div className="cta-btns">
          <NavLink className="btn-pri" to="/contact">
            Get in Touch <span>➜</span>
          </NavLink>
          <NavLink className="btn-out" to="/services">
            Explore Services
          </NavLink>
        </div>
      </section>
    </div>
  );
}
export default Home;
