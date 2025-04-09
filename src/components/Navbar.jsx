import React, { useEffect, useState } from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar sticky-top ${scrolled ? 'sticky-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Ayush's Portfolio</Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center flex-column flex-lg-row text-center text-lg-start">
            {/* {['Home', 'About', 'Skills', 'Projects', 'Contact', 'Certificates', 'Resume'].map((item) => ( */}
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/skills">Skills</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/projects">Projects</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/contact">Contact</Link>
              </li>
          
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/certificate">Certificates</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/resume">Resume</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
