import React from 'react';
import './css/Resume.css';
import resumePDF from '../assets/resume.pdf'; // Adjust the path if needed

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-title animate-fade-up">📄 My Resume</h2>
      <p className="resume-description animate-fade-up">
        Choose an option below to access my resume:
      </p>
      <div className="resume-buttons animate-fade-up">
        <a
          href={resumePDF}
          download="Ayush_Resume.pdf"
          className="resume-btn download-btn"
        >
          🚀 Download Resume
        </a>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn view-btn"
        >
          👁️ View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
