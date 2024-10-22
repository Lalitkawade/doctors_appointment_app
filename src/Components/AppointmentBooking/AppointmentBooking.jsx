import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentBooking.css'; // Ensure this CSS file exists for styling

const AppointmentBooking = () => {
  const [bookingData, setBookingData] = useState({
    doctor: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to Book Your Slot page and pass the booking data via state
    navigate('/book-your-slot', { state: bookingData });
  };

  return (
    <div className="appointment-container">
   <form onSubmit={handleSubmit} className="appointment-form">
  <h2>Book Appointment</h2>
  
  {/* Doctor Selection */}
  <div className="form-group">
    <label>Doctor:</label>
    <select 
      name="doctor" 
      value={bookingData.doctor} 
      onChange={handleChange} 
      required
    >
      <option value="">Choose Doctor</option>
      <option value="Dr. John Doe">Dr. John Doe</option>
      <option value="Dr. Jane Smith">Dr. Jane Smith</option>
      <option value="Dr. Emily Williams">Dr. Emily Williams</option>
    </select>
  </div>
  
  {/* Name and Time Row */}
  <div className="form-row">
    <div className="form-column">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={bookingData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
      </div>
    </div>
    <div className="form-column">
      <div className="form-group">
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={bookingData.time}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  </div>

  {/* Left Side Container for Email, Phone, Date */}
  <div className="left-side">
    {/* Email Row */}
    <div className="form-group">
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={bookingData.email}
        onChange={handleChange}
        required
        placeholder="Enter your email"
      />
    </div>

    {/* Phone Row */}
    <div className="form-group">
      <label>Phone Number:</label>
      <input
        type="tel"
        name="phone"
        value={bookingData.phone}
        onChange={handleChange}
        required
        placeholder="Enter your phone number"
      />
    </div>

    {/* Date Row */}
    <div className="form-group">
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={bookingData.date}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  {/* Message Container */}
  <div className="message-group">
    <div className="form-group">
      <label>Message:</label>
      <textarea
        name="message"
        value={bookingData.message}
        onChange={handleChange}
        placeholder="Enter any specific message or note for the doctor"
      ></textarea>
    </div>
  </div>
  
  {/* Submit Button */}
  <button type="submit">Book Appointment</button>
</form>




    </div>
  );
};

export default AppointmentBooking;
