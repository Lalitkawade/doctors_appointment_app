import React from 'react';
import './UpdateWebsitePage.css';
import SidebarSection from '../Sidebar/SidebarSection';

const UpdateWebsitePage = () => {
  return (
    <div className="main-container">
        <SidebarSection/>
      {/* Sidebar */}
     
      {/* Main Content */}
      <div className="main-content">
        <div className="updated-header">
          <h1>Update Business Hours and Contact Details</h1>
        </div>
        {/* Form */}
        <form className="update-form">
          <div className="form-group">
            <label>Opening Time:</label>
            <input type="time" />
          </div>
          <div className="form-group">
            <label>Closing Time:</label>
            <input type="time" />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" placeholder="Address" />
          </div>
          <button type="submit" className="update-button">Update Details</button>
        </form>
       
      </div>
    </div>
  );
};
export default UpdateWebsitePage;