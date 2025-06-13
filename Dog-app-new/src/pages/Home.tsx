
import './Home.css';
import Trials from '../assets/images/Trial.jpg'; // Adjust path as needed
import aboutImage from "../assets/images/About.jpg";
import teamImage from '../assets/images/Our team.jpeg';
import CtaImage from '../assets/images/cta image.jpeg'; // Adjust path as needed
import Ctaimages from '../assets/images/cta image(2).jpeg';
import CtaImagess from '../assets/images/cta image(3).jpeg';
import CtaImagesss from '../assets/images/cta image(4).jpeg';
import popularImage from '../assets/images/P.L.retrieval.jpeg';
import popularImages from '../assets/images/P.G.retrieval.jpeg';
import popularImagess from '../assets/images/P.Bull.jpeg';
import popularImagesss from '../assets/images/P.Shephard.jpeg';
// Adjust path as needed
// Adjust path as needed
import { Link } from "react-router-dom";
import { FaDog, FaCrown, FaTruck, FaHeadset, FaMapMarkerAlt, FaBookOpen } from 'react-icons/fa';



const Home = () => {
  return (
    <div className="Home-page">
      {/* 🐾 Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${Trials})` }}
      >
        <div className="hero-content">
          <h1 className="hero-headline">Welcome to Trinity Dogs</h1>
          <p className="hero-subheadline">
            Your trusted destination for healthy, loyal, and loving Dogs.
            <p className="p2">We have all sorts of Dogs</p>
          </p>

          <div className="hero-buttons">
            <Link to="/breeds">
              <button className="hero-btn primary-btn">Browse Dogs</button> </Link>

            <Link to="/contact-us">
              <button className="hero-btn secondary-btn">Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
      { /*Porpular breeds section*/}
      <section className="popular-breeds-section">
        <h2 className="popular-breeds-title">Popular Breeds</h2>
        <div className="popular-breeds-container">

          <div className="breed-card">
            <Link to="/orders">
              <img src={popularImage} alt="Breed 1" className="breed-image" />
            </Link>
            <h3 className="breed-name">Labrador Retriever</h3>

          </div>

          <div className="breed-card">
            <Link to="/orders">
              <img src={popularImagesss} alt="Breed 2" className="breed-image" />
            </Link>
            <h3 className="breed-name">German Shepherd</h3>
          </div>

          <div className="breed-card">
            <Link to="/orders">
              <img src={popularImages} alt="Breed 3" className="breed-image" />
            </Link>
            <h3 className="breed-name">Golden Retriever</h3>
          </div>


          <div className="breed-card">
            <Link to="/orders">
              <img src={popularImagess} alt="Breed 4" className="breed-image" />
            </Link>
            <h3 className="breed-name">Bulldog</h3>
          </div>

        </div>
      </section>

      {/* 🐾 About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Trinity Dogs</h2>
          <p className="about-text">
            Trinity Dogs is committed to raising healthy, happy, and well-socialized Dogs.
            we match families with loving, loyal companions.

            At Trinity Dogs, we are passionate about raising healthy, well-tempered, and family-ready Dogs.
            <p className='About-p2'>Our dogs are more than pets — they’re raised with the highest ethical standards.
              From carefully selected bloodlines to daily socialization and early training We work closely with certified veterinarians to ensure all our Dogs are vaccinated.
            </p>
          </p>
          <Link to="/about" className="about-btn">Learn More</Link>
        </div>
        <div className="about-image-container">
          <img src={aboutImage} alt="About Trinity Dogs" className="about-image" />
        </div>
      </section>


      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">

          {/* Core Services */}
          <div className="service-card">
            <FaDog className="service-icon" />
            <h3 className="service-name">Core Services</h3>
            <p className="service-description">
              Healthy puppies, regular vet checks, and ethical dog breeding.
            </p>
            <Link to="#" className="service-btn">Explore</Link>
          </div>

          {/* Premium Services */}
          <div className="service-card">
            <FaCrown className="service-icon" />
            <h3 className="service-name">Premium Services</h3>
            <p className="service-description">
              Access exclusive breeds,training & priority support.
            </p>
            <Link to="/premium" className="service-btn">View Plans</Link>
          </div>

          {/* Transportation */}
          <div className="service-card">
            <FaTruck className="service-icon" />
            <h3 className="service-name">Transportation</h3>
            <p className="service-description">
              Reliable pet delivery anywhere in the country, safely & timely.
            </p>
            <Link to="/orders" className="service-btn">Arrange Now</Link>
          </div>

          {/* Support & Consultation */}
          <div className="service-card">
            <FaHeadset className="service-icon" />
            <h3 className="service-name">Support & Consultation</h3>
            <p className="service-description">
              Talk to experts for training, nutrition, or dog care advice.
            </p>
            <Link to="/support" className="service-btn">Get Help</Link>
          </div>

          {/* Visitation */}
          <div className="service-card">
            <FaMapMarkerAlt className="service-icon" />
            <h3 className="service-name">Visitation</h3>
            <p className="service-description">
              Come visit your puppy in person before making your decision.
            </p>
            <Link to="/Appointments" className="service-btn">Book Visit</Link>
          </div>

          {/* Free Lessons */}
          <div className="service-card">
            <FaBookOpen className="service-icon" />
            <h3 className="service-name">Training</h3>
            <p className="service-description">
              Basic dog care, feeding, health & socializing lessons included.
            </p>
            <Link to="/help" className="service-btn"> Learn</Link>
          </div>

          {/*our team section*/}
          <section className="team-section">
            <div className="team-container">
              <div className="team-image-container">
                <img src={teamImage} alt="Our Team" className="team-image" />
              </div>
              <div className="team-content">
                <h2 className="team-title">Meet Our Team</h2>
                <p className="team-text">
                  At Trinity Dogs, our dedicated team is the heart of everything we do.
                  From experienced breeders and certified trainers to veterinary partners
                  and support staff, every member plays a crucial role in raising healthy,
                  happy puppies. We work together with one goal: to help each puppy grow into
                  a loyal, well-adjusted companion for your family.
                </p>
                <Link to="/help" className="team-btn">Meet the Team</Link>
              </div>
            </div>
          </section>

        </div>
      </section>
      {/*call to action section*/}
      <section className="cta-dogs-section">
        <div className="cta-dogs-container">
          <div className="cta-dogs-content">
            <h2>
              <span className="highlight-letter">F</span>ind Your Perfect Dog
            </h2>
            <p>
              Discover well-raised, health-certified Dogs ready to join your family. Trusted by loving homes nationwide.
            </p>
            <Link to="/orders" className="cta-dogs-button">Reserve Yours Now</Link>
          </div>
          <div className="cta-dogs-image-container">

            <img src={CtaImage} alt="Trinity Dogs" className="cta-dogs-image" />
            <img src={Ctaimages} alt="Trinity Dogs" className="cta-dogs-image" />
            <img src={CtaImagess} alt="Trinity Dogs" className="cta-dogs-image" />
            <img src={CtaImagesss} alt="Trinity Dogs" className="cta-dogs-image" />
          </div>
        </div>
      </section>

    </div>

  );
};

export default Home;