import { NavLink } from "react-router-dom";
import '../css/services.css'

const Services = () => {
  return (
    <div className="services-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-c">
          <h1>Our Services</h1>
          <p>
            Comprehensive technology solutions designed to accelerate your <br />
            digital transformation and drive business success.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="svc">
        <div className="wrap">
          <div className="head">
            <span className="tag">What We Offer</span>
            <h2>Enterprise Solutions</h2>
            <p>
              Explore our comprehensive range of technology services tailored for
              modern businesses.
            </p>
          </div>

          <div className="grid">
            <a href="#cloud" className="card">
              <div className="ico">
                <i className="bi bi-cloud"></i>
              </div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and migration services.</p>
            </a>

            <a href="#infra" className="card">
              <div className="ico">
                <i className="bi bi-hdd-network"></i>
              </div>
              <h3>IT Infrastructure</h3>
              <p>Enterprise-grade infrastructure management and support.</p>
            </a>

            <a href="#security" className="card">
              <div className="ico">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3>Cybersecurity</h3>
              <p>Comprehensive security solutions to protect your assets.</p>
            </a>

            <a href="#software" className="card">
              <div className="ico">
                <i className="bi bi-code-slash"></i>
              </div>
              <h3>Software Development</h3>
              <p>Custom software solutions tailored to your business.</p>
            </a>

            <a href="#data" className="card">
              <div className="ico">
                <i className="bi bi-database"></i>
              </div>
              <h3>Data Analytics</h3>
              <p>Turn your data into actionable business insights.</p>
            </a>

            <a href="#digital" className="card">
              <div className="ico">
                <i className="bi bi-graph-up"></i>
              </div>
              <h3>Digital Transformation</h3>
              <p>End-to-end digital transformation strategies.</p>
            </a>

            <a href="#mobile" className="card">
              <div className="ico">
                <i className="bi bi-phone"></i>
              </div>
              <h3>Mobile Solutions</h3>
              <p>Native and cross-platform mobile applications.</p>
            </a>

            <a href="#support" className="card">
              <div className="ico">
                <i className="bi bi-headset"></i>
              </div>
              <h3>IT Support</h3>
              <p>24/7 technical support and managed services.</p>
            </a>
          </div>
        </div>
      </section>

      {/* MODALS */}

      {/* CLOUD */}
      <div id="cloud" className="modal">
        <div className="modal-box">
          <a href="#" className="close">
            &times;
          </a>
          <div className="m-head">
            <div className="ico big">
              <i className="bi bi-cloud"></i>
            </div>
            <h3>Cloud Solutions</h3>
          </div>
          <p className="m-text">
            Secure, scalable, and cost-effective cloud services to modernize your
            infrastructure.
          </p>
          <ul className="features">
            <li>Cloud Migration</li>
            <li>AWS / Azure / GCP</li>
            <li>Hybrid Cloud</li>
            <li>Cloud Security</li>
          </ul>
          <a href="contact.html" className="btn">
            Get a Quote
          </a>
        </div>
      </div>

      {/* IT INFRA */}
      <div id="infra" className="modal">
        <div className="modal-box">
          <a href="#" className="close">
            &times;
          </a>
          <div className="m-head">
            <div className="ico big">
              <i className="bi bi-hdd-network"></i>
            </div>
            <h3>IT Infrastructure</h3>
          </div>
          <p className="m-text">
            Reliable IT infrastructure services ensuring performance,
            scalability, and uptime.
          </p>
          <ul className="features">
            <li>Network Management</li>
            <li>Server Setup</li>
            <li>Virtualization</li>
            <li>Disaster Recovery</li>
          </ul>
          <a href="contact.html" className="btn">
            Get a Quote
          </a>
        </div>
      </div>

      {/* SECURITY */}
      <div id="security" className="modal">
        <div className="modal-box">
          <a href="#" className="close">
            &times;
          </a>
          <div className="m-head">
            <div className="ico big">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3>Cybersecurity</h3>
          </div>
          <p className="m-text">
            Advanced security solutions to protect systems, networks, and data.
          </p>
          <ul className="features">
            <li>Threat Detection</li>
            <li>Firewall Management</li>
            <li>Vulnerability Assessment</li>
            <li>Compliance Security</li>
          </ul>
          <a href="contact.html" className="btn">
            Get a Quote
          </a>
        </div>
      </div>

      {/* ADVANTAGE */}
      <section className="advantage">
        <div className="adv-wrap">
          <span className="adv-tag">Why Choose Us</span>

          <h2 className="adv-title">
            The Akhil’s Cloud Technology Platform LLP Advantage
          </h2>

          <p className="adv-sub">
            Empowering businesses with scalable cloud solutions, secure
            infrastructure, and reliable technology partnerships.
          </p>

          <div className="adv-grid">
            <div className="adv-card">
              <div className="adv-num">1</div>
              <h3>Cloud-First Expertise</h3>
              <p>
                Deep expertise in cloud architecture, migration, and optimization
                across modern platforms.
              </p>
            </div>

            <div className="adv-card">
              <div className="adv-num">2</div>
              <h3>Proven Delivery Model</h3>
              <p>
                Structured processes and best practices ensuring consistent,
                high-quality project delivery.
              </p>
            </div>

            <div className="adv-card">
              <div className="adv-num">3</div>
              <h3>24/7 Technical Support</h3>
              <p>
                Always-on monitoring and expert support to keep your systems
                secure and running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
