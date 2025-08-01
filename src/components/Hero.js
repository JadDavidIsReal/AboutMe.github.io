import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>John Angelo P. David</h1>
          <p>Remote Web & Tech Specialist</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#" className="btn btn-secondary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
