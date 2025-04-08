import React, { useEffect, useState } from 'react';
import './css/Hero.css';
import heroImage from '../assets/ayush.jpg'; 

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "I'm a passionate full-stack developer crafting clean and functional web applications.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText.charAt(i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="bubbles"></div>
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="row align-items-center w-100">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <div className="image-wrapper">
              <img src={heroImage} alt="Hero" className="img-fluid hero-img" />
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="hero-heading">
              Hi, I'm <span className="highlight">Ayush Srivastava</span>
            </h1>
            <p className="hero-subtext">{displayText}</p>
            <div className="hero-buttons mt-4">
              <a href="#skills" className="btn hero-btn me-3">Skills</a>
              <a href="#contact" className="btn hero-btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
