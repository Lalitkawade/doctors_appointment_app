import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

const Header = () => {
   
    return (
        <header className="header">
            {/* Top Red Bar */}
            <div className="header-top">
                <div className="schedule-item">
                    <span className="day">Mon-Fri</span>
                    <span className="time">12:50 p.m.-12:50 p.m.</span>
                </div>
                <div className="schedule-item">
                    <span className="day">Sat-Sun</span>
                    <span className="time">12:50 p.m.-12:50 p.m.</span>
                </div>
            </div>
            {/* Navigation Bar */}
            <nav className="header-nav">
                <p><LocalHospitalOutlinedIcon style={{ color: "green" }} />Sehat</p>
                <Link to="/">Home</Link>
                <Link to="/admin-registration">Admin Registration</Link>
                <Link to="/patient-registration">Patient Registration</Link>
                <Link to="/doctor-registration">Doctor Registration</Link>
                <Link to="/login">Login</Link>
                <Link to="/admin-dashboard">Admin Dashboard</Link>
                <Link to="/book-appointment" className="book-appointment-link">
                    Book Appointment
                </Link>
                    <AccountCircleIcon sx={{ color: 'rgb(61, 150, 239)' }} />
            </nav>
        </header>
    );
};

export default Header;
