import React from 'react';
import './css/Footer.css';
import { FaInstagram, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          {/* Left - Name & Profession */}
          <div className="footer-left">
            <h2 className="footer-heading-underline">Ayush Srivastava</h2>
            <p>Full-Stack Developer</p>
            <p>Programmer</p>
          </div>

          {/* Center - Quick Links in boxes */}
          <div className="footer-center">
            <h4 className="footer-heading-underline">Quick Links</h4><br />
            <div className="quick-links-boxes">
              <a href="#home" className="quick-box">Home</a>
              <a href="#about" className="quick-box">About</a>
              <a href="#skills" className="quick-box">Skills</a>
              <a href="#projects" className="quick-box">Projects</a>
              {/* <a href="#certificates" className="quick-box">Certificates</a> */}
              <a href="#contact" className="quick-box">Contact</a>
            </div>
          </div>

          {/* Right - Social Icons and Email */}
          <div className="footer-right">
            <h4 className="footer-heading-underline">Connect</h4>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://telegram.me" target="_blank" rel="noreferrer"><FaTelegram /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
            <p className="footer-email">Email: <a href="#">ayushsrivastava1854@gmail.com</a></p>
          </div>
        </div>

        {/* <div className="footer-line-animation"></div> */}

        <p className="copyright">
          © {new Date().getFullYear()} Ayush Srivastava. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
