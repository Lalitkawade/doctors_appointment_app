import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './PatientLoginForm.css';
const PatientLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  // Load the saved username and password if "Remember Me" was checked
  useEffect(() => {
    const savedUsername = localStorage.getItem('rememberedUsername');
    const savedPassword = localStorage.getItem('rememberedPassword');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';
    if (savedRememberMe) {
      setUsername(savedUsername || '');
      setPassword(savedPassword || '');
      setRememberMe(true);
    }
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    // Fetch the patient data stored in localStorage
    const patientData = JSON.parse(localStorage.getItem('patientData'));
    // Check if patient data exists and matches the entered credentials
    if (patientData && patientData.email === username && patientData.password === password) {
      // Redirect to the patient dashboard with patient details
      navigate('/patient-dashboard', { state: { patient: patientData } });
    } else {
      alert('Invalid login credentials');
    }
  };
  return (
    <div className="login-page">
      <h1>Patient Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};
export default PatientLoginForm;