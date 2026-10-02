import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Map,
  GraduationCap,
  Plane,
  Cpu,
  MessageSquare,
} from "lucide-react";

import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            AI Support & Lead Assistant
          </span>

          <h1>
            Smart Support for
            <span> Students & Businesses</span>
          </h1>

          <p>
            Get quick answers, explore our services and
            submit your requirements through our intelligent
            support assistant.
          </p>

          <div className="hero-buttons">

            <Link
              to="/enquiry"
              className="primary-button"
            >
              Submit an Enquiry
              <ArrowRight size={18} />
            </Link>

            <a
              href="#services"
              className="secondary-button"
            >
              Explore Services
            </a>

          </div>

        </div>

        <div className="hero-card">

          <div className="hero-icon">
            <Bot size={42} />
          </div>

          <h3>Support Assistant</h3>

          <p>
            Ask about training, drone services,
            GIS, AI technology, careers and more.
          </p>

          <div className="status">
            <span></span>
            Assistant Online
          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        className="services-section"
        id="services"
      >

        <div className="section-heading">

          <span>WHAT WE OFFER</span>

          <h2>
            Solutions for Your Requirements
          </h2>

          <p>
            Choose a service or use our support assistant
            to find the right solution.
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <div className="service-icon">
              <GraduationCap />
            </div>

            <h3>Training</h3>

            <p>
              Training programs designed for students
              and professionals.
            </p>

            <Link to="/enquiry">
              Enquire Now <ArrowRight size={16} />
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <Plane />
            </div>

            <h3>Drone Services</h3>

            <p>
              Professional drone-based solutions
              for different business requirements.
            </p>

            <Link to="/enquiry">
              Enquire Now <ArrowRight size={16} />
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <Map />
            </div>

            <h3>GIS & Mapping</h3>

            <p>
              Mapping and geospatial solutions
              for projects and organizations.
            </p>

            <Link to="/enquiry">
              Enquire Now <ArrowRight size={16} />
            </Link>

          </div>


          <div className="service-card">

            <div className="service-icon">
              <Cpu />
            </div>

            <h3>AI & Technology</h3>

            <p>
              Technology-driven solutions for
              modern business requirements.
            </p>

            <Link to="/enquiry">
              Enquire Now <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="process-section">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Get Support in Three Simple Steps
          </h2>

        </div>


        <div className="process-grid">

          <div className="process-card">

            <div className="process-number">
              01
            </div>

            <MessageSquare size={28} />

            <h3>Ask</h3>

            <p>
              Open the support assistant and
              choose what you need help with.
            </p>

          </div>


          <div className="process-card">

            <div className="process-number">
              02
            </div>

            <Bot size={28} />

            <h3>Get Guidance</h3>

            <p>
              Receive predefined answers and
              guidance based on your requirement.
            </p>

          </div>


          <div className="process-card">

            <div className="process-number">
              03
            </div>

            <ArrowRight size={28} />

            <h3>Submit Enquiry</h3>

            <p>
              Submit your details and our team
              can follow up with you.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div>

          <h2>
            Have a specific requirement?
          </h2>

          <p>
            Tell us what you need and our team
            will get back to you.
          </p>

        </div>

        <Link
          to="/enquiry"
          className="cta-button"
        >
          Submit Your Enquiry
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
};

export default Home;