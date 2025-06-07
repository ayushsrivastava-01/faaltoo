import React, { useEffect, useState } from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation (optional)
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar sticky-top ${scrolled ? 'sticky-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavClick}>Ayush's Portfolio</Link>

        <button
          className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger icon lines */}
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center flex-column flex-lg-row text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/" onClick={handleNavClick}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about" onClick={handleNavClick}>About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/skills" onClick={handleNavClick}>Skills</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/projects" onClick={handleNavClick}>Projects</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact" onClick={handleNavClick}>Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/certificate" onClick={handleNavClick}>Certificates</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/resume" onClick={handleNavClick}>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
