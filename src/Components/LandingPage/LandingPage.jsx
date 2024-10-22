import React from "react";
import './LandingPage.css';
const LandingPage = () => {
    return(
        <div>
        <section className="about-us">
        <h2>Committed to Your Health and Well-Being</h2>
        <p>
          At MAIMS, our dedicated team of healthcare professionals is here to provide comprehensive and compassionate care
          for you and your family. We utilize the latest medical technologies to ensure your needs are met effectively.
        </p>
        <button>Learn More</button>
      </section>
      <section className="services">
        <h2>Comprehensive Care for Your Health Needs</h2>
        <div className="services-grid">
          <div className="service">
            <h3>General Medicine</h3>
            <p>Providing comprehensive healthcare services for all ages, focusing on diagnosis and treatment.</p>
          </div>
          <div className="service">
            <h3>Pediatrics</h3>
            <p>Specialized care for infants, children, and adolescents, ensuring healthy development.</p>
          </div>
          <div className="service">
            <h3>Surgery</h3>
            <p>Expert surgical care for a wide range of conditions, performed by skilled surgeons.</p>
          </div>
          <div className="service">
            <h3>Emergency Care</h3>
            <p>Immediate medical attention for urgent health cases, available 24/7.</p>
          </div>
        </div>
      </section>
      <section className="statistics">
        <div className="stat">256+ Satisfied Clients</div>
        <div className="stat">820+ Projects Complete</div>
        <div className="stat">950+ Happy Customers</div>
        <div className="stat">650+ Support Team</div>
      </section>
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Query</button>
        </form>
      </section>
        </div>
    )
}
export default LandingPage;