import './service.css';
import Trials from '../assets/images/Trial.jpg'; // Adjust path as needed

const Service = () => {
  return (
    <div className="service-page">
      {/* 🐾 Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${Trials})` }}
      >
        <div className="hero-content">
          <h1 className="hero-headline">Premium Dog Breeding & Selling Services</h1>
          <p className="hero-subheadline">
            Healthy, well-trained puppies delivered with love & care.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary-btn">Browse Puppies</button>
            <button className="hero-btn secondary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
