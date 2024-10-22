import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLoginForm.css'; // Import the same CSS file for styling

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Load saved credentials from localStorage when the component mounts
  useEffect(() => {
    const savedUsername = localStorage.getItem('adminUsername');
    const savedPassword = localStorage.getItem('adminPassword');
    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in Admin with:', { username, password, rememberMe });
    
    if (rememberMe) {
      localStorage.setItem('adminUsername', username);
      localStorage.setItem('adminPassword', password);
    } else {
      localStorage.removeItem('adminUsername');
      localStorage.removeItem('adminPassword');
    }
    
    navigate('/admin-dashboard');
  };

  return (
    <div className="login-wrapper">
      <div className="login-content" >
        <img src='./OIP.jpg' alt='' className="doctor-login" style={{height:"380px"}}/>
        <div className="login-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <Link to="/login">Login as Doctor</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
