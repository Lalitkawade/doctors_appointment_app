import React, { useState } from 'react';
import './DoctorRegistration.css'; 
import { useNavigate } from 'react-router-dom';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    specialization: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Send the form data to the API
    try {
      const response = await fetch('https://admin/doctor-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data
      });

      if (response.ok) {
        alert('Doctor registered successfully!');
        navigate('/login');  // Navigate to login after success
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering doctor:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className="doctor-registration-container">
      <div className="doctor-registration">
        <h2>Doctor Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          {/* Form fields */}
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </label>
          <label>
            Email ID:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </label>
          {/* Add other fields similarly */}
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </label>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
          </label>
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistration;
