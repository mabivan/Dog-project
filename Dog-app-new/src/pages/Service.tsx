import React from 'react';
import './Service.css';
import care from '../assets/images/care.jpeg';
import Training from '../assets/images/Train.jpeg';
import Transporting from '../assets/images/Transport.jpeg';
import {
  FaDog,
  FaCrown,
  FaTruck,
  FaHeadset,
  FaHeartbeat,
  FaShieldAlt,
  FaHome,
  FaPaw,
  FaUserTie,
  FaClipboardCheck
} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Service: React.FC = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome To Trinity Dogs Professional Services</h1>
            <p>Trust Trinity Dogs and get your prefered services Here. </p>
            <div className="Service-hero-buttons">
              <Link to="/breeds" >
              <button className="Service-primary-btn">View Available Dogs</button>
              </Link>
              <Link to="/Appointments">
              <button className="Service-secondary-btn">Book Consultation</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-proposition">
        <div className="container">
          <div className="value-cards">
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h3>Verified Pedigrees</h3>
              <p>All dogs come with complete lineage documentation and genetic testing</p>
            </div>
            <div className="value-card">
              <FaHome className="value-icon" />
              <h3>Transition Program</h3>
              <p>90-day support plan for seamless adaptation to new homes</p>
            </div>
            <div className="value-card">
              <FaPaw className="value-icon" />
              <h3>Temperament Testing</h3>
              <p>Professional assessment for ideal placement matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services">
        <div className="container">
          <h2 className="section-title">Our Professional Services <FaDog /></h2>
          
          <div className="service-grid">
            <div className="servicePage-card">
              <div className="servicePage-img">
                <img src={care} alt="Premium Listings" />
              </div>
              <div className="servicePage-content">
                <h3>Premium Dog Acquisition <FaCrown /></h3>
                <p>Exclusive access to professionally trained adult dogs with verified working lines and show pedigrees.</p>
                <ul>
                  <li>Detailed temperament profiles</li>
                  <li>Health and genetic guarantees</li>
                  <li>Professional handler evaluations</li>
                </ul>
                <Link to="/premium">
                <button className="servicePage-btn">Learn More</button>
                </Link>
              </div>
            </div>

            <div className="servicePage-card reverse">
              <div className="servicePage-img">
                <img src={Training} alt="Training Services" />
              </div>
              <div className="servicePage-content">
                <h3>Advanced Training Programs <FaUserTie /></h3>
                <p>Specialized training for protection, service, therapy, and competitive disciplines.</p>
                <ul>
                  <li>Customized training plans</li>
                  <li>Certified professional trainers</li>
                  <li>Ongoing skill maintenance</li>
                </ul>
                <Link to="/contact" >
                <button className="servicePage-btn">Learn More</button>
                </Link>
              </div>
            </div>

            <div className="servicePage-card">
              <div className="servicePage-img">
                <img src={Transporting} alt="Transport Services" />
              </div>
              <div className="servicePage-content">
                <h3>Global Transport <FaTruck /></h3>
                <p>White-glove transportation service with climate-controlled vehicles and professional handlers.</p>
                <ul>
                  <li>Door-to-door delivery</li>
                  <li>24/7 tracking updates</li>
                  <li>Veterinary-accompanied options</li>
                </ul>
                <Link to="/contact" >
                <button className="service-btnPage">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Wellness */}
      <section className="health-section">
        <div className="container">
          <h2 className="section-title">Health & Wellness Programs <FaHeartbeat /></h2>
          <div className="health-grid">
            <div className="health-card">
              <div className="health-icon">
                <FaClipboardCheck />
              </div>
              <h3>Preventive Care Plans</h3>
              <p>Comprehensive wellness packages including vaccinations, parasite control, and nutrition counseling.</p>
            </div>
            <div className="health-card">
              <div className="health-icon">
                <FaHeartbeat />
              </div>
              <h3>Performance Health</h3>
              <p>Specialized care for working dogs including sports medicine and rehabilitation.</p>
            </div>
            <div className="health-card">
              <div className="health-icon">
                <FaHeadset />
              </div>
              <h3>Emergency Support</h3>
              <p>24/7 access to veterinary professionals for urgent health concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="container">
          <div className="consultation-content">
            <h2>Professional Consultation Services</h2>
            <p>Our certified canine specialists provide tailored solutions for:</p>
            <div className="consultation-list">
              <div className="consultation-item">
                <FaUserTie className="consult-icon" />
                <div>
                  <h4>Breed Selection</h4>
                  <p>Matching dogs to professional requirements and home environments</p>
                </div>
              </div>
              <div className="consultation-item">
                <FaClipboardCheck className="consult-icon" />
                <div>
                  <h4>Handler Training</h4>
                  <p>Professional development from our handlers and trainers</p>
                </div>
              </div>
              <div className="consultation-item">
                <FaShieldAlt className="consult-icon" />
                <div>
                  <h4>Security Assessments</h4>
                  <p>Evaluation for protection and detection work suitability</p>
                </div>
              </div>
            </div>
            <Link to="/Appointments" >
            <button className="Consult-primary-btn">Schedule Consultation</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The protection dog we acquired through Trinity has exceeded all expectations in both capability and temperament."</p>
                <div className="client-info">
                  <h4>Senabulya J.</h4>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Trinity's team helped us find the perfect therapy dog for our family. Their expertise made all the difference."</p>
                <div className="client-info">
                  <h4>Daphine L.</h4>
                  <span>Human Resource</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The ongoing training support has been invaluable for maintaining our detection dog's skills."</p>
                <div className="client-info">
                  <h4>Timoty W.W</h4>
                  <span>Criminal lawyer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Find Your Professional Canine Partner?</h2>
          <p>Contact us today to discuss your specific requirements</p>
          <div className="cta-buttons">
            <Link to="/breeds" >
            <button className="primary-btn">View Available Dogs</button>
            </Link>
            <Link to="/help">
            <button className="secondary-btn">Speak to an Expert</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
