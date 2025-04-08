import React, { useEffect, useState } from 'react';
import './css/Navbar.css';

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
        <a className="navbar-brand" href="#home">Ayush's Portfolio</a>
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
                <a className="nav-link custom-link" href={`#${item.toLowerCase()}`}>kfjkagdfh</a>
              </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
