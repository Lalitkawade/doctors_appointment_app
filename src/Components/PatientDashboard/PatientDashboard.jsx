import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientDashboard.css';
const PatientDashboard = () => {
  const [patientName, setPatientName] = useState('');
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve patient data from localStorage
    const patientData = JSON.parse(localStorage.getItem('patientData'));
    if (patientData && patientData.firstName) {
      setPatientName(patientData.firstName);
    }
    // Fetch bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
    
    // Remove the event listener that clears localStorage on unload
  }, []);
  const handleBookAppointment = () => {
    navigate('/book-appointment');
  };
  return (
    <div className="dashboard-container">
      <h1>Welcome, {patientName}!</h1>
      <p>This is your dashboard.</p>
      <button className="appointment-button" onClick={handleBookAppointment}>
        Book Appointment
      </button>
      {/* Table to display the bookings */}
      <h2>Your Appointments</h2>
      {bookings.length > 0 ? (
        <table className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Consultation Type</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.consultationType}</td>
                <td>{booking.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments booked yet.</p>
      )}
    </div>
  );
};
export default PatientDashboard;