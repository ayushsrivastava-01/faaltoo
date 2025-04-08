import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <strong>Ayush Srivastava</strong>, a passionate Full-Stack Developer who thrives on building clean, efficient, and visually engaging websites and applications. I love blending creativity with functionality to deliver modern web experiences.
            </p>
            <p>
              With a strong foundation in HTML, CSS, JavaScript, React, Node.js, and Express, I enjoy tackling new challenges and continuously learning the latest tech to stay ahead in this fast-paced field.
            </p>
            <p>
              When I'm not coding, you'll find me exploring design inspiration, contributing to open-source projects, or leveling up my skills through new tech stacks and frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
