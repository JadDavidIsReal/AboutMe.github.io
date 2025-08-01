import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="placeholder-image"></div>
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a 3rd-year BSIT student who specializes in web development, dashboards, and remote tech support. I'm passionate about helping small teams build websites, automate workflows, and visualize data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
