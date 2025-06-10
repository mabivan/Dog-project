import { useState } from 'react';
import './orders.css';
import dogImages from '../assets/images/dogDelievery.jpg'; // Adjust the path as needed


const OrdersPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    street: '',
    city: '',
    country: '',
    zip: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.street) newErrors.street = 'Street is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.zip) newErrors.zip = 'Zip code is required';
    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!formData.expiryMonth) newErrors.expiryMonth = 'Month is required';
    if (!formData.expiryYear) newErrors.expiryYear = 'Year is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          street: '',
          city: '',
          country: '',
          zip: '',
          cardNumber: '',
          expiryMonth: '',
          expiryYear: '',
          cvv: '',
          agreeToTerms: false
        });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-container">
      <h1 className="page-title">Make your Dog Specifications & Orders</h1>
      
      <div className="order-layout">
       {/* Left Column - Product Info */}
<div className="product-column">
  <div className="product-card">
    <div className="product-image">
      <img src={dogImages} alt="Dog" />
    </div>
    <div className="product-details">
      <h2>Stunning Trinity Dog</h2>
      <p className="product-description">
        Adorable 8-week old Bull Dog from Trinity breeders. Vaccinated, microchipped, and ready for a loving home.
      </p>

      <div className="product-features">
        <h3>Features:</h3>
        <ul>
          <li>Age: 8 weeks</li>
          <li>Vaccinations up to date</li>
          <li>Health guarantee</li>
          <li>Pedigree papers included</li>
        </ul>
      </div>

      <div className="price-section">
        <span className="price">$1,200</span>
        <span className="shipping">Free Shipping</span>
      </div>

      {/* ✅ Shipping Info Section */}
      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <p>We ship worldwide with trusted carriers. Your dog will be delivered in a safe and comfortable environment.</p>
        <p>Estimated delivery time: 1–2 weeks after order confirmation.</p>
      </div>
        {/* ✅ Shipping Means Section */}
      <div className="shippingMeans">
        <h3>Transport Means</h3>
        <p>We use the best carriers to ensure your dog arrives safely and comfortably.</p>
        <ul>
          <li>Air transport for long distances</li>
          <li>Ground transport for local deliveries</li>
          <li>Water transport for water surrounded countries</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="benefits-section">
    <h3>Why Choose Us?</h3>
    <div className="benefits-grid">
      <div className="benefit-item">
        <div className="benefit-icon">✓</div>
        <div className="benefit-text">Health checked</div>
      </div>
      <div className="benefit-item">
        <div className="benefit-icon">✓</div>
        <div className="benefit-text">30-day support</div>
      </div>
      <div className="benefit-item">
        <div className="benefit-icon">✓</div>
        <div className="benefit-text">Pure breed</div>
      </div>
      <div className="benefit-item">
        <div className="benefit-icon">✓</div>
        <div className="benefit-text">Vaccinated</div>
      </div>
        
    </div>
  </div>
</div>


        {/* Right Column - Form */}
        <div className="form-column">
          <form onSubmit={handleSubmit} className="order-form">
            <section className="form-section">
              <h2>1. Your Information</h2>
              <div className="form-group">
                <div className="input-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error-input' : ''}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="input-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error-input' : ''}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error-input' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="input-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2>2. Shipping Address</h2>
              <div className="form-group">
                <div className="input-group full-width">
                  <label>Street Address *</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className={errors.street ? 'error-input' : ''}
                  />
                  {errors.street && <span className="error-message">{errors.street}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city ? 'error-input' : ''}
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
                <div className="input-group">
                  <label>Country *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={errors.country ? 'error-input' : ''}
                  />
                  {errors.country && <span className="error-message">{errors.country}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <label>ZIP Code *</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className={errors.zip ? 'error-input' : ''}
                  />
                  {errors.zip && <span className="error-message">{errors.zip}</span>}
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2>3. Payment Details</h2>
              <div className="form-group">
                <div className="input-group full-width">
                  <label>Card Number *</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className={errors.cardNumber ? 'error-input' : ''}
                  />
                  {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <label>Expiry Month *</label>
                  <input
                    type="text"
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleChange}
                    placeholder="MM"
                    className={errors.expiryMonth ? 'error-input' : ''}
                  />
                  {errors.expiryMonth && <span className="error-message">{errors.expiryMonth}</span>}
                </div>
                <div className="input-group">
                  <label>Expiry Year *</label>
                  <input
                    type="text"
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleChange}
                    placeholder="YYYY"
                    className={errors.expiryYear ? 'error-input' : ''}
                  />
                  {errors.expiryYear && <span className="error-message">{errors.expiryYear}</span>}
                </div>
                <div className="input-group">
                  <label>CVV *</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className={errors.cvv ? 'error-input' : ''}
                  />
                  {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                </div>
              </div>
            </section>

            <div className="terms-section">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <span>I agree to the <a href="#terms">Terms and Conditions</a> *</span>
              </label>
              {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Processing...
                </>
              ) : (
                'Complete Purchase'
              )}
            </button>

            {isSuccess && (
              <div className="success-message-box">
                <div className="success-icon">✓</div>
                <h3>Order Successful!</h3>
                <p>Trinity Dogs will prepare Your Angelic Dog  for shipping in a weeks Times. We'll send confirmation to. {formData.email}.</p>
                <p>A representative will contact you within 24 hours to arrange delivery.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;