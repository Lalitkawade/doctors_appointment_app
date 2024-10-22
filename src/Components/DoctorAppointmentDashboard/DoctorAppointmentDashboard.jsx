import React, { useEffect, useState } from 'react';
import "./DoctorAppointmentDashboard.css"
const DoctorAppointmentDashboard = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  // Load appointments from localStorage when the component mounts
  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setUpcomingAppointments(bookings);
    console.log(bookings)
  }, []);
  
  return (
    <div className="app-container">
      <main className="app-main">
        <h2>Doctor Appointment</h2>
        <div className="appointments">
          <div className="appointments-section">
            <h3>Upcoming Appointments</h3>
            {upcomingAppointments.length > 0 ? (
              <table className="appointments-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Consultation Type</th>
                  </tr>
                </thead>
                
                <tbody>
                  {upcomingAppointments.map((appointment, index) => (
                    <tr key={index}>
                      <td>{appointment.name}</td>
                      <td>{appointment.email}</td>
                      <td>{appointment.phone}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.consultationType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No upcoming appointments.</p>
            )}
            
          </div>
          <div className="appointments-section">
            <h3>Past Appointments</h3>
            {/* You can handle past appointments similarly */}
            <p>No past appointments.</p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default DoctorAppointmentDashboard;