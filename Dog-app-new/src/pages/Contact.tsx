import React, { useState } from 'react';
import './Contact.css';
import dogs from '../assets/images/Cta image(2).jpeg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    orderNumber: '',
    dogName: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    if (!formData.topic) newErrors.topic = 'Select a topic';
    if (!formData.message.trim()) newErrors.message = 'Required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    setSuccessMessage('');
    
    // Simulate async API submission
    await new Promise((res) => setTimeout(res, 1500));
    
    setSubmitted(false);
    setSuccessMessage('✅ Message successfully submitted!');

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      topic: '',
      orderNumber: '',
      dogName: '',
      message: '',
    });

    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
        <div className="contact-container">
           <div className="contact-intro-card">
  <div className="dog-card-text">
    <h3>Welcome to our Contact Center</h3>
    <p>
      Our team is here to help you
      find the perfect furry friend and make the process smooth and joyful!
    </p>
  </div>
  <img
    src={dogs}
    alt="Friendly dog"
    className="dog-card-img"
  />
</div>

{/* Contact Information Section */}
      <div className="contact-left">
  <h2>Have a question?</h2>
  <p>Most of Trinity Dog's customers have different crucial questions depending on their needs. We're happy to provide answers tailored to your specific situation.</p>
  <p>We're here to help! Fill out the form or contact us by phone or email for assistance with adoption, health, or support.</p>
  
  <div className="contact-info">
    <p className="phours">
      <span className="info-icon">🕒</span> Business hours: Mon–Fri, 9AM–5PM
    </p>
    <p>
      <span className="info-icon">✉️</span> Email: <a href="mailto:Trinity@dogsite.com">Trinity@dogsite.com</a>
    </p>
    <p>
      <span className="info-icon">📞</span> Phone: <a href="tel:+256-7467-35979">+256-7467-35979</a>
    </p>
  </div>
{/* Contact Information Section End */}
   <div className="iconsMedia-p">Follow Us</div>
    <div className="icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <span className="icon facebook"><FaFacebookF /></span>
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <span className="icon twitter"><FaTwitter /></span>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <span className="icon instagram"><FaInstagram /></span>
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <span className="icon linkedin"><FaLinkedinIn /></span>
  </a>
</div>

</div>

{/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className="input-group">
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="input-group">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <input
          name="phone"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
        />

        <div className="input-group">
          <select name="topic" value={formData.topic} onChange={handleChange}>
            <option value="">Select your Topic</option>
            <option value="adoption">Dog Adoption</option>
            <option value="health">Health Inquiry</option>
            <option value="payment">Payment/Refund</option>
            <option value="other">Other</option>
          </select>
          {errors.topic && <span className="error">{errors.topic}</span>}
        </div>

        <input
          name="orderNumber"
          placeholder="Order Number (optional)"
          value={formData.orderNumber}
          onChange={handleChange}
        />

        <input
          name="dogName"
          placeholder="Dog's Name (optional)"
          value={formData.dogName}
          onChange={handleChange}
        />

        <div className="input-group">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" disabled={submitted}>
          {submitted ? 'Submitting...' : 'SUBMIT'}
        </button>

        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default Contact;
