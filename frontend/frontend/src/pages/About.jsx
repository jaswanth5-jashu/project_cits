
import "../css/About.css";

function About() {
  return (
    <div className="about-page">
      <section className="hero">
        <div className="hero-c">
          <h1>Akhil Cloud Tecnologies Plarfrom LLP</h1>
          <p>
            Building tomorrow's technology solutions today. Learn about our{" "}
            <br />
            journey, mission, and the values that drive us forward.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="st-l">
          <span className="tag">Our Story</span>

          <h2>
            Pioneering Digital
            <br />
            Excellence Since 2009
          </h2>

          <p>
            Akhil Cloud Tecnologies Plarfrom LLP Solutions was founded with a simple yet ambitious vision:
            to help businesses harness the power of technology to achieve
            extraordinary growth and efficiency.
          </p>

          <p>
            Over the past 15 years, we have evolved from a small IT consulting
            firm to a global technology partner trusted by Fortune 500 companies
            and innovative startups alike.
          </p>

          <p>
            Our team of 50+ certified experts brings together decades of
            combined experience in cloud computing, digital transformation, and
            enterprise software development.
          </p>
        </div>

        <div className="st-r">
          <div className="box b1">
            <h3>15+</h3>
            <span>Years Experience</span>
          </div>

          <div className="box">
            <h3>500+</h3>
            <span>Clients Served</span>
          </div>

          <div className="box">
            <h3>50+</h3>
            <span>Tech Experts</span>
          </div>

          <div className="box b2">
            <h3>10+</h3>
            <span>Countries</span>
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="vm">
        <div className="vm-row">
          <div className="card">
            <div className="icon i1">
              <i className="bi bi-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted technology partner for enterprises
              worldwide, helping them succeed in the digital era through
              innovation and excellence.
            </p>
          </div>

          <div className="card">
            <div className="icon i2">
              <i className="bi bi-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver impactful technology solutions that drive growth,
              operational excellence, and long-term value for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="cv">
        <div className="cv-head">
          <span className="tag">Core Values</span>
          <h2>What Drives Us</h2>
          <p>
            Our core values shape every decision we make and every solution we
            deliver.
          </p>
        </div>

        <div className="cv-row">
          <div className="cv-card">
            <div className="cv-icon">
              <i className="bi bi-award"></i>
            </div>
            <h4>Excellence</h4>
            <p>
              We strive for excellence in everything we do, delivering solutions
              that exceed expectations.
            </p>
          </div>

          <div className="cv-card">
            <div className="cv-icon">
              <i className="bi bi-people"></i>
            </div>
            <h4>Collaboration</h4>
            <p>
              We believe in the power of teamwork and partnership to achieve
              extraordinary results.
            </p>
          </div>

          <div className="cv-card">
            <div className="cv-icon">
              <i className="bi bi-heart"></i>
            </div>
            <h4>Integrity</h4>
            <p>
              We conduct our business with honesty, transparency, and ethical
              practices.
            </p>
          </div>

          <div className="cv-card">
            <div className="cv-icon">
              <i className="bi bi-globe"></i>
            </div>
            <h4>Innovation</h4>
            <p>
              We continuously explore new technologies and methodologies to stay
              ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="tl">
        <div className="tl-head">
          <span className="tag">Our Journey</span>
          <h2>Milestones</h2>
          <p>
            Key moments that have shaped our growth and success over the years.
          </p>
        </div>

        <div className="tl-wrap">
          <div className="tl-item left">
            <div className="card">
              <span className="yr">2009</span>
              <h4>Company Founded</h4>
              <p>Started with a vision to transform IT services.</p>
            </div>
          </div>

          <div className="tl-item right">
            <div className="card">
              <span className="yr">2012</span>
              <h4>First Major Client</h4>
              <p>Secured partnership with Fortune 500 company.</p>
            </div>
          </div>

          <div className="tl-item left">
            <div className="card">
              <span className="yr">2015</span>
              <h4>Cloud Expansion</h4>
              <p>Launched cloud services division.</p>
            </div>
          </div>

          <div className="tl-item right">
            <div className="card">
              <span className="yr">2018</span>
              <h4>Global Reach</h4>
              <p>Expanded operations to 10+ countries.</p>
            </div>
          </div>

          <div className="tl-item left">
            <div className="card">
              <span className="yr">2021</span>
              <h4>500+ Clients</h4>
              <p>Milestone of serving 500+ enterprises.</p>
            </div>
          </div>

          <div className="tl-item right">
            <div className="card">
              <span className="yr">2024</span>
              <h4>AI Integration</h4>
              <p>Pioneering AI-driven enterprise solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
