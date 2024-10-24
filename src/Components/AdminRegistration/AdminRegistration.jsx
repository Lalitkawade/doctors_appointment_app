import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminRegistration.css';
const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validateForm = () => {
    const errors = {};
    // First name validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    // Last name validation
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Enter a valid email';
    }
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    // Confirm Password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch('https://admin/admin-registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert('Admin registered successfully!');
          navigate('/admin-login');
        } else {
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error registering admin:', error);
        alert('An error occurred during registration.');
      }
    }
  };
  
  
  return (
    <div className="registration-container">
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && (
            <span className="error">{formErrors.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {formErrors.lastName && (
            <span className="error">{formErrors.lastName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && (
            <span className="error">{formErrors.confirmPassword}</span>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default AdminRegistration;