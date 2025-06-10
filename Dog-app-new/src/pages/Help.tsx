import React, { useState } from 'react';
import './help.css';

const HelpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="help-container">
      <div className="help-header">
        <h1>How can we help you?</h1>
        <p>
         At Trinity Dogs, we're committed to making your shopping experience seamless and enjoyable.<strong>Whether you have questions about products, need assistance with an order, or want to explore </strong>our services,  our team is here to help you every step of the way.
        </p>
      </div>

      <div className="help-content">
        <div className="contact-form">
          <h2>Contact Us</h2>
          {submitted && (
            <div className="success-message">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-section">
            <h2>OUR MAIN OFFICE</h2>
            <p>BomboRoad Kawempe ,Kampala/ Uganda, Plot 1001</p>
          </div>

          <div className="info-section">
            <h2>PHONE NUMBER</h2>
            <p>+256-746-735-979</p>
            <p>888-0123-4567 (Toll Free)</p>
          </div>

          <div className="info-section">
            <h2>Call Staff</h2>
            <p>+256-746-735-979</p>
          </div>

          <div className="info-section">
            <h2>EMAIL</h2>
            <p>Trinity@Dogs.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;