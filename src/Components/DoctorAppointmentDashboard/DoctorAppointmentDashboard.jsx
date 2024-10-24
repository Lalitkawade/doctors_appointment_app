import React, { useEffect, useState } from 'react';
import './DoctorAppointmentDashboard.css';

const DoctorAppointmentDashboard = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  // Load appointments from localStorage when the component mounts
  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const pastBookings = JSON.parse(localStorage.getItem('pastBookings')) || [];
    setUpcomingAppointments(bookings);
    setPastAppointments(pastBookings);
  }, []);

  // Handle marking an appointment as done
  const handleMarkAsDone = (index) => {
    // Get the selected appointment
    const completedAppointment = upcomingAppointments[index];

    // Move it to the past appointments
    const updatedPastAppointments = [...pastAppointments, completedAppointment];
    setPastAppointments(updatedPastAppointments);
    localStorage.setItem('pastBookings', JSON.stringify(updatedPastAppointments));

    // Remove it from upcoming appointments
    const updatedUpcomingAppointments = upcomingAppointments.filter((_, i) => i !== index);
    setUpcomingAppointments(updatedUpcomingAppointments);
    localStorage.setItem('bookings', JSON.stringify(updatedUpcomingAppointments));
  };

  return (
    <div className="app-container">
      <main className="app-main">
        <h2>Doctor Appointment</h2>
        <div className="appointments">
          {/* Upcoming Appointments Section */}
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
                    <th>Action</th>
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
                      <td>
                        <button
                          className="done-button"
                          onClick={() => handleMarkAsDone(index)}
                        >
                          Done
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No upcoming appointments.</p>
            )}
          </div>

          {/* Past Appointments Section */}
          <div className="appointments-section">
            <h3>Past Appointments</h3>
            {pastAppointments.length > 0 ? (
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
                  {pastAppointments.map((appointment, index) => (
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
              <p>No past appointments.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorAppointmentDashboard;
