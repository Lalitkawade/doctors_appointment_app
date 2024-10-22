import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SidebarSection.css'; // Your custom CSS file


const SidebarSection = () => {
  const location = useLocation();
  
  return (
    <div className='col-sm-3'>
    <div className="sidebar1">
      <ul className="list-unstyled">
        <li className={location.pathname === '/admin-dashboard' ? 'active' : ''}>
          <Link to="/admin-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link
            to="#!"
            className="d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            data-bs-target="#specializationDropdown"
            aria-expanded="false"
            aria-controls="specializationDropdown"
          >
            Specialization
            <span className="caret">▼</span>
          </Link>
          <ul className="collapse" id="specializationDropdown">
            <li className={location.pathname === '/view-specialization' ? 'active' : ''}>
              <Link to="/view-specialization">View Specialization</Link>
            </li>
            <li className={location.pathname === '/add-specialization' ? 'active' : ''}>
              <Link to="/add-specialization">Add Specialization</Link>
            </li>
          </ul>
        </li>
        <li className={location.pathname === '/doctor-list' ? 'active' : ''}>
          <Link to="/doctor-list">Doctor's List</Link>
        </li>
        <li className={location.pathname === '/search-doctor' ? 'active' : ''}>
          <Link to="/search-doctor">Search Doctor</Link>
        </li>
        {/* <li className={location.pathname === '/doctor-reg-report' ? 'active' : ''}>
          <Link to="/doctor-reg-report">Doctor Reg Report</Link>
        </li> */}
        <li className={location.pathname === '/update-website' ? 'active' : ''}>
          <Link to="/update-website">Update Website</Link>
        </li>
        <li className={location.pathname === '/appointment-report' ? 'active' : ''}>
          <Link to="/appointment-report">Doctor's Appointment Report</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default SidebarSection;
