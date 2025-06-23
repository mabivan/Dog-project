import React, { useState } from 'react';
import './Appointments.css';

interface DogDetails {
  name: string;
  breed: string;
  age: string;
  weight: string;
}

interface AppointmentPreferences {
  date: string;
  time: string;
  service: string;
}

const Appointments: React.FC = () => {
  const [dogDetails, setDogDetails] = useState<DogDetails>({
    name: '',
    breed: '',
    age: '',
    weight: ''
  });

  const [preferences, setPreferences] = useState<AppointmentPreferences>({
    date: '',
    time: '',
    service: 'grooming'
  });

  const [questions, setQuestions] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleDogDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDogDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePreferencesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPreferences(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setPreferences(prev => ({ ...prev, date }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const dayOfWeek = new Date(today.getFullYear(), today.getMonth(), i).getDay();
      
      // Skip weekends (optional)
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;
      
      days.push(
        <div 
          key={i}
          className={`calendar-day ${selectedDate === dateStr ? 'selected' : ''}`}
          onClick={() => handleDateSelect(dateStr)}
        >
          {i}
        </div>
      );
    }
    
    return days;
  };

  if (isSubmitted) {
    return (
      <div className="confirmation-container">
        <h2>APPOINTMENT ACCEPTED</h2>
        <p className='h2p'>Your appointment has been successfully scheduled !!!</p>
        <div className="confirmation-details">
          <h3>Details:</h3>
          <p><strong>Dog Name:</strong> {dogDetails.name}</p>
          <p><strong>Service:</strong> {preferences.service}</p>
          <p><strong>Date:</strong> {preferences.date}</p>
          <p><strong>Time:</strong> {preferences.time}</p>
        </div>
        <button className="back-button" onClick={() => setIsSubmitted(false)}>Book Another Appointment</button>
      </div>
    );
  }

  return (
    <div className="appointments-container">
      <header className="appointments-header">
        <h1>TRINITY DOGS</h1>
        <h2>AWAITS FOR YOUR APPOINTMENT</h2>
        <p className="subtitle">"The Early Bird Catches The worm"</p>
      </header>

      <form onSubmit={handleSubmit} className="appointment-form">
        <section className="dog-details-section">
          <h3>Dog Details</h3>
          <div className="form-group">
            <label htmlFor="name">Dog's Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={dogDetails.name}
              onChange={handleDogDetailsChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="breed">Breed</label>
              <input
                type="text"
                id="breed"
                name="breed"
                value={dogDetails.breed}
                onChange={handleDogDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                name="age"
                value={dogDetails.age}
                onChange={handleDogDetailsChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={dogDetails.weight}
              onChange={handleDogDetailsChange}
              required
            />
          </div>
        </section>

        <section className="preferences-section">
          <h3>Appointment Preferences</h3>
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              value={preferences.service}
              onChange={handlePreferencesChange}
              required
            >
              <option value="grooming">Grooming</option>
              <option value="vet-check">Vet Check</option>
              <option value="training">Training</option>
              <option value="boarding">Boarding</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={preferences.time}
                onChange={handlePreferencesChange}
                required
              />
            </div>
          </div>
        </section>

        <section className="calendar-section">
          <h3>Select a Date</h3>
          <div className="calendar-container">
            <div className="calendar-header">
              {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
            </div>
            <div className="calendar-grid">
              {generateCalendarDays()}
            </div>
          </div>
        </section>

        <section className="questions-section">
          <h3>Any Special Requests or Questions?</h3>
          <textarea
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            placeholder="Type your questions or requests here..."
          />
        </section>

        <section className="confirmation-section">
          <h3>Review Your Appointment</h3>
          <p className="P2"><strong>Dog's Name:</strong> {dogDetails.name}</p>
          <p className="P2"><strong>Service:</strong> {preferences.service}</p>
          <p className="P2"><strong>Date:</strong> {preferences.date || 'Not selected'}</p>
          <p className="P2"><strong>Time:</strong> {preferences.time || 'Not selected'}</p>
          <p className="P2"><strong>Special Requests:</strong> {questions || 'None'}</p>
        </section>


        <section className="terms-section">
          <label>
            <input
              type="checkbox"
              required
            />
            I agree to the terms and conditions
          </label>
        </section>

        <section className="cta-section">
          <button type="submit" className="submit-button">
            Book Appointment
          </button>
        </section>
      </form>
    </div>
  );
};

export default Appointments;