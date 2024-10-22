import React, { useState, useEffect } from 'react';
import SidebarSection from '../Sidebar/SidebarSection'; // Use the common Sidebar
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from localStorage when the component loads
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-dashboard row">
        <SidebarSection /> {/* Use the common Sidebar */}
        <div className="col-sm-9">
          <div className="content">
            <h1>Welcome, Admin</h1>
            <div className="stats">
              <div className="stat-box">
                <h3>Total Doctors Registered</h3>
                <p>15</p>
              </div>
              <div className="stat-box">
                <h3>Total Specializations</h3>
                <p>8</p>
              </div>
            </div>
            <div className="pending-approvals">
              <h4>Pending Approval</h4>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Doctors Awaiting Approval
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">No pending doctors found</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Booking data table */}
            <div className="booking-data">
              <h2>Booked Slots</h2>
              {bookings.length > 0 ? (
                <table>
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
                <p>No bookings available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
