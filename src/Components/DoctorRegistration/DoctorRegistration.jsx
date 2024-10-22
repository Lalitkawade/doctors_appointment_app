import React, { useState } from 'react';
import './DoctorRegistration.css'; // Optional: Create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: null,
    specialization: '',
    timings: '',
    phoneNo: '',
    gender: '',
    medicalCertificate: null,
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate(); // Initialize navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   if (formData.password !== formData.confirmPassword) {
  //     alert('Passwords do not match!');
  //     return;
  //   }
    
  //   // You can add validation or API call here to submit formData
  //   console.log(formData);
    
  //   alert('Doctor registered successfully!');
    
  //   // Navigate to login after successful registration
  //   navigate('/login');  // Use correct route path
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Save the registered doctor data to localStorage
    const registeredDoctor = {
      email: formData.email,
      password: formData.password,
    };
    
    localStorage.setItem('registeredDoctor', JSON.stringify(registeredDoctor));
    
    alert('Doctor registered successfully!');
    
    // Navigate to login after successful registration
    navigate('/login');  // Use correct route path
  };
  

  return (
    <div className="doctor-registration-container">
      <img src='./Nurse.jpg' alt='Doctor' style={{ height: "500px" }} />
      <div className="doctor-registration">
        <h1>Register Doctor</h1>
        <form onSubmit={handleSubmit} className="registration-form">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email ID:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Upload Image:
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </label>
          <label>
            Specialization:
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Timings:
            <input
              type="text"
              name="timings"
              value={formData.timings}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Upload Medical Certificate:
            <input
              type="file"
              name="medicalCertificate"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistration;
