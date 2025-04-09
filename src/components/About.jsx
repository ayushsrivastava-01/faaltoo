import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./css/About.css";

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Programs must be written for people to read.",
  "Simplicity is the soul of efficiency.",
  "First, solve the problem. Then, write the code.",
  "Clean code always looks like it was written by someone who cares.",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="container" variants={itemVariants}>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-wrapper">
          <motion.div
            className="profile-card jumping-card"
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <h3>Ayush Srivastava</h3>
            <p className="title">Full-Stack Developer</p>
            <p className="quote">"{quotes[quoteIndex]}"</p>

            <div className="mini-values-container">
              {["🚀 Growth", "💡 Innovation", "🤝 Teamwork", "🌐 Vision"].map(
                (value, index) => (
                  <motion.div
                    className="mini-value-card"
                    key={index}
                    variants={itemVariants}
                  >
                    <h5>{value.split(" ")[0]}</h5>
                    <p>{value.split(" ")[1]}</p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            className="about-text jumping-card"
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <p>
              Hello! I'm <strong>Ayush Srivastava</strong>, a passionate
              Full-Stack Developer who thrives on building clean, efficient, and
              visually engaging websites and applications.
            </p>
            <p>
              I enjoy blending creativity with functionality to deliver modern
              web experiences. I'm always exploring the latest tech to stay
              ahead in this fast-paced field.
            </p>
            <p>
              When I'm not coding, you'll find me exploring design inspiration,
              contributing to open-source projects, or leveling up my skills.
            </p>
            <p>
              I believe great code is like great design — intuitive, efficient,
              and user-focused. Every project I work on is an opportunity to
              turn ideas into impactful digital solutions. I'm driven by
              curiosity, creativity, and a commitment to continuous improvement.
            </p>
            <p>
              I value collaboration, adaptability, and lifelong learning as the
              foundation of both personal and professional growth.
            </p>
          </motion.div>
        </div>

        <motion.div className="core-mission-section" variants={itemVariants}>
          <h3 className="mission-title">My Mission & Core Values</h3>
          <div className="mission-cards">
            {[
              {
                emoji: "🌟",
                title: "Mission",
                text: "To craft impactful and accessible digital experiences that empower users and elevate businesses.",
              },
              {
                emoji: "🔍",
                title: "Focus",
                text: "Writing clean, scalable code and always staying updated with modern technologies and best practices.",
              },
              {
                emoji: "💬",
                title: "Core Values",
                text: "Creativity, Integrity, Empathy, and a strong sense of Responsibility in every line of code I write.",
              },
            ].map((card, i) => (
              <motion.div key={i} className="mission-card" variants={itemVariants}>
                <h4>{card.emoji} {card.title}</h4>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="what-i-do-section" variants={itemVariants}>
          <h3 className="what-title">What I Do ?</h3>
          <div className="what-cards">
            {[
              {
                emoji: "🖥️",
                title: "Frontend Development",
                text: "Building responsive and dynamic UIs with HTML, CSS, JavaScript, React & Tailwind.",
              },
              {
                emoji: "🧠",
                title: "Backend Development",
                text: "Creating robust APIs using Node.js, Express, and integrating with MySQL & MongoDB.",
              },
              {
                emoji: "🎨",
                title: "UI/UX Design",
                text: "Designing clean and intuitive user experiences with Figma & Adobe tools.",
              },
              {
                emoji: "⚙️",
                title: "Deployment & Optimization",
                text: "Deploying web apps on platforms like Vercel & Heroku, with focus on performance.",
              },
            ].map((service, i) => (
              <motion.div key={i} className="what-card" variants={itemVariants}>
                <h4>{service.emoji} {service.title}</h4>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
