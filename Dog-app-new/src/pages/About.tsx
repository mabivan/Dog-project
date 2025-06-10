import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-wrapper">
      <section className="intro-card">
        <div className="intro-text">
          <h1>Uncover Our Story</h1>
          <p>
            At Trinity Dogs, our passion is connecting people with the perfect four-legged companion.
            We believe every dog deserves a loving home, and every family deserves the right match.
          </p>
        </div>

        <div className="intro-image-wrapper">
          <img src="/a-milit0.png" />
          <div className="gradient-overlay" />
        </div>
      </section>


      <h2 className="sub-heading">Why Choose Trinity Dogs?</h2>
      <section className="card-row">
        <div className="info-card">
          <h3>🐶 Trusted Breeders</h3>
          <p>All our breeders and shelters go through a thorough verification process to ensure ethical practices.</p>
        </div>
        <div className="info-card">
          <h3>💉 Health Guaranteed</h3>
          <p>All dogs come with verified vaccination records and wellness checks from licensed veterinarians.</p>
        </div>
        <div className="info-card">
          <h3>📦 Easy Delivery</h3>
          <p>Nationwide delivery available — with safety, care, and comfort as our top priorities.</p>
        </div>
        <div className="info-card">
          <h3>💬 Live Support</h3>
          <p>Our team is available 24/7 to answer questions and guide you to your perfect pup match.</p>
        </div>
      </section>

      <section className="card-grid">
        <div className="mission-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To create a safe, ethical, and joyful marketplace that brings together responsible breeders,
            shelters, and families to ensure lifelong dog companionship.
          </p>
        </div>
        <div className="vision-card">
          <h3>👁️ Our Vision</h3>
          <p>
            To become the most trusted dog-selling platform globally, promoting welfare, transparency,
            and happiness for both pets and owners.
          </p>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-content">
          <h3>Have Questions?</h3>
          <p>We're here to help! Reach out to us anytime or start browsing available Dogs.</p>
          <button className="cta-button">Get Started</button>
        </div>

        <div className="cta-image-wrapper">
          <img src="/military-dog.png" alt="Contact Dog" />
        </div>
      </section>


    </div>
  );
};

export default About;
