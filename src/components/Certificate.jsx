import React from 'react';
import './css/Certificate.css';
import { motion } from 'framer-motion';

import C1 from '../assets/C1.png';
import C3 from '../assets/C3.png';
import C2 from '../assets/C2.png';
import C5 from '../assets/C5.png';
import C4 from '../assets/C4.png';
import C6 from '../assets/C6.png';
import C7 from '../assets/C7.png';

import P1 from '/certificates/C1.pdf';
import P2 from '/certificates/C2.pdf';
import P3 from '/certificates/C3.pdf';
import P4 from '/certificates/C4.pdf';
import P5 from '/certificates/C5.pdf';
import P6 from '/certificates/C6.pdf';
import P7 from '/certificates/C7.pdf';

const certificates = [
  { title: "Web Development Internship", image: C1, pdf: P1 },
  { title: "Web Development using Java", image: C3, pdf: P3 },
  { title: "File handling in Python", image: C2, pdf: P2 },
  { title: "Career in Tech", image: C5, pdf: P4 },
  { title: "Data Science & Machine Learning", image: C4, pdf: P5 },
  { title: "Technical Workshop", image: C6, pdf: P6 },
  { title: "Naukri Campus Contest", image: C7, pdf: P7 },
];

const Certificate = () => {
  return (
    <section className="certificates-section">
      <motion.h2
        className="section-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        My Certificates
      </motion.h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            className="certificate-card"
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: index * 0.2
            }}
            viewport={{ once: true }}
          >
            <img src={cert.image} alt={cert.title} />
            <h4>{cert.title}</h4>
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
              download={false}
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
