
import './Home.css';
import Trials from '../assets/images/Trial.jpg'; // Adjust path as needed
import aboutImage from "../assets/images/About.jpg";
import teamImage from '../assets/images/Our team.jpeg';
import CtaImage from '../assets/images/cta image.jpeg'; // Adjust path as needed
import Ctaimages from '../assets/images/cta image(2).jpeg';
import CtaImagess from '../assets/images/cta image(3).jpeg';
import CtaImagesss from '../assets/images/cta image(4).jpeg';
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
                        <Link to="/breeds" className="hero-btn primary-btn">Browse Dogs</Link>
                        <Link to="/contact-us" className="hero-btn secondary-btn">Contact Us</Link>
                    </div>

                </div>
            </section>

            {/* 🐾 About Section */}
        <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Trinity Dogs</h2>
        <p className="about-text">
          Trinity Dogs is committed to raising healthy, happy, and well-socialized puppies. 
          With years of ethical breeding experience, we match families with loving, loyal companions. 
    
          At Trinity Dogs, we are passionate about raising healthy, well-tempered, and family-ready puppies. 
         <p className='About-p2'>Our dogs are more than pets — they’re loyal companions, raised with love, care, and the highest ethical standards.
           From carefully selected bloodlines to daily socialization and early training We work closely with certified veterinarians to ensure all our puppies are vaccinated,
             health-checked, and ready to thrive in their forever homes.</p> 
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
            <Link to="/core-services" className="service-btn">Explore</Link>
          </div>

          {/* Premium Services */}
          <div className="service-card">
            <FaCrown className="service-icon" />
            <h3 className="service-name">Premium Services</h3>
            <p className="service-description">
              Access exclusive breeds,training & priority support.
            </p>
            <Link to="/premium-services" className="service-btn">View Plans</Link>
          </div>

          {/* Transportation */}
          <div className="service-card">
            <FaTruck className="service-icon" />
            <h3 className="service-name">Transportation</h3>
            <p className="service-description">
              Reliable pet delivery anywhere in the country, safely & timely.
            </p>
            <Link to="/transportation" className="service-btn">Arrange Now</Link>
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
            <Link to="/visitation" className="service-btn">Book Visit</Link>
          </div>

          {/* Free Lessons */}
          <div className="service-card">
            <FaBookOpen className="service-icon" />
            <h3 className="service-name">Free Lessons</h3>
            <p className="service-description">
              Basic dog care, feeding, health & socializing lessons included.
            </p>
            <Link to="/lessons" className="service-btn">Start Learning</Link>
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
          <Link to="/team" className="team-btn">Meet the Team</Link>
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
          <Link to="/contact" className="cta-dogs-button">Reserve Yours Now</Link>
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