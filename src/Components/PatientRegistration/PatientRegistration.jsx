import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './PatientRegistration.css';


const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setErrorMessage('Passwords do not match.');
    return;
  }

  try {
    const response = await fetch('https://admin/patient-registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Patient registered successfully!');
      navigate('/patient-login');
    } else {
      alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Error registering patient:', error);
    alert('An error occurred during registration.');
  }
};

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 style={{color:"#d9534f"}}>Patient Registration</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
         
        />
        <label>Email (Username):</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
         
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
         
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
         
        />
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default PatientRegistration;