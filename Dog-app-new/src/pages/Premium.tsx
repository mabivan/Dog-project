import React, { useState, useEffect } from 'react';
import './Premium.css';
import { FaCrown, FaCheck, FaStar, FaShieldAlt, FaHeadset, FaRocket, FaLock } from 'react-icons/fa';
import { MdPayment, MdDevices } from 'react-icons/md';
import futureImage from '../assets/images/future.jpeg'; // Placeholder for hero image
import { Link } from 'react-router-dom';

// Simulated API types
type Plan = {
  id: string;
  name: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  mostPopular: boolean;
};

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
};

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

// Simulated API calls
const fetchPlans = async (): Promise<Plan[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: 'basic',
      name: 'Basic',
      price: 9.99,
      billingCycle: 'monthly',
      features: [
         'Access to basic features',
        'Standard support',
        'Monthly visitations',
        'Basic health support'
      ],
      mostPopular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 19.99,
      billingCycle: 'monthly',
      features: [
       'All basic features',
        'Priority support',
        'Advanced Health Monitoring',
        'Advanced analytics',
        'Weekly Vistation'
      ],
      mostPopular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 49.99,
      billingCycle: 'monthly',
      features: [
      'All professional features',
        '24/7 dedicated support',
        'Effective Health Monitoring',
        'Proffessional Training',
        'Advanced analytics',
        'Personal account managing'
      ],
      mostPopular: false
    }
  ];
};

const fetchYearlyPlans = async (): Promise<Plan[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: 'basic-yearly',
      name: 'Basic',
      price: 99.99,
      billingCycle: 'yearly',
      features: [
        'Access to basic features',
        'Standard support',
        'Monthly visitations',
        'Basic health support'
      ],
      mostPopular: false
    },
    {
      id: 'pro-yearly',
      name: 'Professional',
      price: 199.99,
      billingCycle: 'yearly',
      features: [
        'All basic features',
        'Priority support',
        'Advanced Health Monitoring',
        'Advanced analytics',
        'Weekly Vistation'
      ],
      mostPopular: true
    },
    {
      id: 'enterprise-yearly',
      name: 'Enterprise',
      price: 499.99,
      billingCycle: 'yearly',
      features: [
        'All professional features',
        '24/7 dedicated support',
        'Effective Health Monitoring',
        'Proffessional Training',
        'Advanced analytics',
        'Personal account managing'
      ],
      mostPopular: false
    }
  ];
};

const fetchFeatures = async (): Promise<Feature[]> => {
  return [
    {
      id: 'security',
      title: 'Enhanced Security',
      description: 'Bank-grade encryption to keep your data safe and secure at all times.',
      icon: <FaShieldAlt className="feature-icon" />
    },
    {
      id: 'support',
      title: 'Priority Support',
      description: 'Get your issues resolved faster with our dedicated support team.',
      icon: <FaHeadset className="feature-icon" />
    },
    {
      id: 'performance',
      title: 'Premium Performance',
      description: 'Experience faster load times and smoother operations with our premium infrastructure.',
      icon: <FaRocket className="feature-icon" />
    },
    {
      id: 'privacy',
      title: 'Enhanced Privacy',
      description: 'Advanced privacy controls to manage who sees your content and data.',
      icon: <FaLock className="feature-icon" />
    },
    {
      id: 'payment',
      title: 'Flexible Payments',
      description: 'Multiple payment options with secure processing and easy cancellation.',
      icon: <MdPayment className="feature-icon" />
    },
    {
      id: 'devices',
      title: 'Multi-Device Access',
      description: 'Use our service across all your devices with seamless synchronization.',
      icon: <MdDevices className="feature-icon" />
    }
  ];
};

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  return [
    {
      id: '1',
      name: 'Hannah Buyinza',
      role: 'Marketing Director',
      content: 'Since upgrading to Premium, our dog health has increased by 40%. The advanced features are game-changers.',
      rating: 5
    },
    {
      id: '2',
      name: 'Oken Calvin',
      role: 'TechStart',
      content: 'The priority support alone is worth the upgrade. Response times are incredible and the team is super knowledgeable.',
      rating: 5
    },
    {
      id: '3',
      name: 'Isaac Mugabi',
      role: 'Freelance Designer',
      content: 'I was hesitant at first, but the premium features have helped me land bigger clients and manage my workflow better.',
      rating: 4
    }
  ];
};

const fetchFAQs = async (): Promise<FAQ[]> => {
  return [
    {
      id: '1',
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle.'
    },
    {
      id: '2',
      question: 'Is there a free trial?',
      answer: 'We offer a 14-day free trial for all our premium plans. No credit card required to start the trial.'
    },
    {
      id: '3',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and in some regions, bank transfers. All payments are processed securely.'
    },
    {
      id: '4',
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel anytime from your account settings. There are no cancellation fees, and you\'ll retain access until the end of your billing period.'
    },
    {
      id: '5',
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer special pricing for registered non-profit organizations. Please contact our sales team for more information.'
    },
    {
      id: '6',
      question: 'Is my data safe when I cancel?',
      answer: 'Your data is preserved for 90 days after cancellation. You can download it anytime during this period.'
    }
  ];
};

const Premium: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState({
    plans: true,
    features: true,
    testimonials: true,
    faqs: true
  });
  const [error, setError] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setError(null);
        
        const [
          plansData,
          featuresData,
          testimonialsData,
          faqsData
        ] = await Promise.all([
          billingCycle === 'monthly' ? fetchPlans() : fetchYearlyPlans(),
          fetchFeatures(),
          fetchTestimonials(),
          fetchFAQs()
        ]);
        
        setPlans(plansData);
        setFeatures(featuresData);
        setTestimonials(testimonialsData);
        setFaqs(faqsData);
        
        setLoading({
          plans: false,
          features: false,
          testimonials: false,
          faqs: false
        });
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        setLoading({
          plans: false,
          features: false,
          testimonials: false,
          faqs: false
        });
        console.error(err);
      }
    };
    
    loadData();
  }, [billingCycle]);

  const handleBillingCycleChange = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    setLoading(prev => ({ ...prev, plans: true }));
    setSelectedPlan(null);
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleCheckout = () => {
    // Simulate checkout process
    if (selectedPlan) {
      alert(`Proceeding to checkout with ${selectedPlan} plan`);
      // In a real app, redirect to checkout page or show checkout modal
    }
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
    ));
  };

  if (error) {
    return (
      <div className="premium-container error-container">
        <div className="error-message">
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-container">
      {/* Hero Section */}
      <section className="hero-section-premium">
        <div className="hero-content-premium">
          <div className="badge">
            <FaCrown className="crown-icon" />
            <span>PREMIUM</span>
          </div>
          <h1>Unlock the Full Potential</h1>
          <p className="subtitle">
            Upgrade to Premium and get access to exclusive Dog services, priority support, 
            and enhanced capabilities to get a life Partner.
          </p>
          <div className="cta-buttons">
            <button 
              className="primary-button"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Choose Your Plan
            </button>
            <Link to="/contact">
            <button className="secondary-button">
              Learn More
            </button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* This would be an actual image in production */}
          <div className="image-placeholder">
            <img 
              src={futureImage}
              alt="Premium Features" 
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Premium Features</h2>
        <p className="section-subtitle">
          Everything you need to succeed, all in one place
        </p>
        
        {loading.features ? (
          <div className="loading-spinner"></div>
        ) : (
          <div className="features-grid">
            {features.map(feature => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2>Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that works best for you
        </p>
        
        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={billingCycle === 'yearly'}
              onChange={handleBillingCycleChange}
            />
            <span className="slider round"></span>
          </label>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>Yearly</span>
          <span className="discount-badge">Save 20%</span>
        </div>
        
        {loading.plans ? (
          <div className="loading-spinner"></div>
        ) : (
          <div className="plans-container">
            {plans.map(plan => (
              <div 
                key={plan.id} 
                className={`plan-card ${plan.mostPopular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => handlePlanSelect(plan.id)}
              >
                {plan.mostPopular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <h3>{plan.name}</h3>
                <div className="price">
                  ${plan.price}
                  <span className="billing-cycle">/{plan.billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`select-button ${selectedPlan === plan.id ? 'selected' : ''}`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        )}
        
        <div className="checkout-container">
          <button 
            className="checkout-button"
            disabled={!selectedPlan}
            onClick={handleCheckout}
          >
            Continue to Checkout
          </button>
          <p className="secure-checkout">
            <FaLock className="lock-icon" />
            Secure checkout powered by Stripe
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Premium Members Say</h2>
        <p className="section-subtitle">
          Join thousands of satisfied customers who upgraded to Premium
        </p>
        
        {loading.testimonials ? (
          <div className="loading-spinner"></div>
        ) : (
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="content">"{testimonial.content}"</p>
                <div className="author">
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about Premium
        </p>
        
        {loading.faqs ? (
          <div className="loading-spinner"></div>
        ) : (
          <div className="faq-accordion">
            {faqs.map(faq => (
              <div key={faq.id} className="faq-item">
                <input type="checkbox" id={`faq-${faq.id}`} className="faq-toggle" />
                <label htmlFor={`faq-${faq.id}`} className="faq-question">
                  {faq.question}
                </label>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Experience?</h2>
          <p>
            Join Premium today and start enjoying all the benefits. 
            Cancel anytime with just one click.
          </p>
          <button 
            className="primary-button"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Choose Your Plan
          </button>
        </div>
      </section>
    </div>
  );
};

export default Premium;
