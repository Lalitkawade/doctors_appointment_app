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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic password matching validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    // Prepare the data to store in localStorage
    const { firstName, lastName, email, password, rememberMe } = formData;
    const userData = {
      firstName,
      lastName,
      email,
      password, // Store the password for validation
      rememberMe,
    };
    try {
      // Storing data in localStorage as a JSON string
      localStorage.setItem('patientData', JSON.stringify(userData));
      console.log('User data saved to localStorage:', userData);
      alert('Patient registered successfully!');
      // Redirect to login page after registration
      navigate('/patient-login');
      // Clear form after successful registration
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
      });
      setErrorMessage('');
    } catch (err) {
      console.error('Failed to save data in localStorage:', err);
    }
  };
  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Patient Registration</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Enter your first name"
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Enter your last name"
        />
        <label>Email (Username):</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirm your password"
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