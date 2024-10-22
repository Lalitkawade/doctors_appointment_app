import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import CSS

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAdmin = location.pathname === '/admin-login';

  // const handleLogin = (e) => {
  //   e.preventDefault();
    
  //   // Basic login validation (you can add proper validation here)
  //   if (email === 'doctor@example.com' && password === 'password') {
  //     console.log(`Logging in Doctor with:`, { email, password, rememberMe });
      
  //     // Redirect to Doctor Appointment Dashboard after successful login
  //     navigate('/doctor-appointment-dashboard');
  //   } else {
  //     alert('Invalid login credentials! Please try again.');
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Retrieve registered doctor details from localStorage
    const registeredDoctor = JSON.parse(localStorage.getItem('registeredDoctor'));
  
    if (registeredDoctor) {
      if (email === registeredDoctor.email && password === registeredDoctor.password) {
        console.log('Login successful!');
        
        // Redirect to Doctor Appointment Dashboard after successful login
        navigate('/doctor-appointment-dashboard');
      } else {
        alert('Invalid login credentials! Please try again.');
      }
    } else {
      alert('No registered doctor found.');
    }
  };
  
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <img src='./OIP.jpg' alt='' className="doctor-login" style={{height:"380px"}} />
        <div className="login-container">
          <h2>{isAdmin ? "Admin Login" : "Doctor's Login"}</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember Me</label>
            </div>
            <button type="submit" className="login-btn">Login</button>
            <div className="login-footer">
              <Link to="/forgot-password">Forgot Password?</Link>
              {!isAdmin && <Link to="/admin-login">Login as Admin</Link>}
              {isAdmin && <Link to="/login">Login as Doctor</Link>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
