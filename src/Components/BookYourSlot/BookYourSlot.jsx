import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookYourSlot.css'; 
const BookYourSlot = () => {
  const { state } = useLocation();
  const [consultationType, setConsultationType] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookingDetails = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      date: state.date,
      time: state.time,
      consultationType,
      message: state.message
    };
    // Save the booking details to localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = [...existingBookings, bookingDetails];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    alert('Slot booked successfully!');
    
    // Navigate to the patient dashboard after booking
    navigate('/patient-dashboard');
  };
  return (
    <div className="slot-container">
      <h2>Book Appointment for {state.name}</h2>
      <form onSubmit={handleSubmit} className="slot-form">
        <label>Consultation Type:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="consultationType"
              value="Online"
              checked={consultationType === 'Online'}
              onChange={(e) => setConsultationType(e.target.value)}
              required
            />
            Online
          </label>
          <label>
            <input
              type="radio"
              name="consultationType"
              value="Offline"
              checked={consultationType === 'Offline'}
              onChange={(e) => setConsultationType(e.target.value)}
              required
            />
            Offline
          </label>
        </div>
        <label>Name:</label>
        <input type="text" value={state.name} readOnly />
        <label>Email:</label>
        <input type="email" value={state.email} readOnly />
        <label>Phone Number:</label>
        <input type="tel" value={state.phone} readOnly />
        <label>Date:</label>
        <input type="date" value={state.date} readOnly />
        <label>Time:</label>
        <input type="time" value={state.time} readOnly />
        <label>Message:</label>
        <textarea value={state.message} readOnly></textarea>
        <button type="submit">Book Your Slot</button>
      </form>
    </div>
  );
};
export default BookYourSlot;