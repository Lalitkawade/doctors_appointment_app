import React from 'react';
import './Footer.css'; // Update to Footer.css instead of Footer.scss
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
  return (
    <footer>
      <div className="footer-social-icons">
        <p>Connect with us on social networks:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><GoogleIcon/></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>

        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>OUR HOSPITAL</h4>
          <p>Committed to providing quality healthcare services to our community. Your health is our priority.</p>
        </div>
        <div className="footer-column">
          <h4>SERVICES</h4>
          <ul>
            <li><a href="/">Emergency Care</a></li>
            <li><a href="/">Pediatrics</a></li>
            <li><a href="/">Surgery</a></li>
            <li><a href="/">Diagnostics</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><a href="/">Appointments</a></li>
            <li><a href="/">Patient Portal</a></li>
            <li><a href="/">Health Resources</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>Dummy Address</p>
          <p><a href="mailto:nirmitee.io@gmail.com">nirmitee.io@gmail.com</a></p>
          <p>9937386803</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{marginBottom:"0"}}>&copy; 2023 Our Hospital: ourhospital.com</p>
      </div>
    </footer>
  );
};

export default Footer;
