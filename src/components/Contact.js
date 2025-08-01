import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <div className="social-links">
            <p>Or reach out on social media:</p>
            <ul>
              <li><a href="https://github.com/JadDavidIsReal" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:tieryder88@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
