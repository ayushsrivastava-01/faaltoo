import React from "react";
import "./css/Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaJava, FaPython, FaDatabase, FaBootstrap, FaBoxOpen, FaCode, FaLaptopCode
} from "react-icons/fa";
import {
  SiMongodb, SiPhp, SiMysql, SiExpress, SiTailwindcss, SiOracle, SiSpring,
  SiCplusplus, SiC, SiIntellijidea, SiEclipseide
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 style={{ color: "#e34c26" }} /> },
        { name: "CSS3", icon: <FaCss3Alt style={{ color: "#264de4" }} /> },
        { name: "JavaScript", icon: <FaJs style={{ color: "#f0db4f" }} /> },
        { name: "React", icon: <FaReact style={{ color: "#61dafb" }} /> },
        { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952b3" }} /> },
        { name: "Tailwind", icon: <SiTailwindcss style={{ color: "#38bdf8" }} /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs style={{ color: "#68a063" }} /> },
        { name: "Express", icon: <SiExpress style={{ color: "#ffffff" }} /> },
        { name: "Spring", icon: <SiSpring style={{ color: "#6db33f" }} /> },
        { name: "PHP", icon: <SiPhp style={{ color: "#777bb4" }} /> },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava style={{ color: "#f89820" }} /> },
        { name: "C", icon: <SiC style={{ color: "#00599c" }} /> },
        { name: "C++", icon: <SiCplusplus style={{ color: "#004482" }} /> },
        { name: "Python", icon: <FaPython style={{ color: "#3776ab" }} /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql style={{ color: "#00758f" }} /> },
        { name: "SQLite", icon: <FaDatabase style={{ color: "#003b57" }} /> },
        { name: "Oracle", icon: <SiOracle style={{ color: "#f80000" }} /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt style={{ color: "#f34f29" }} /> },
        { name: "GitHub", icon: <FaGithub style={{ color: "#ffffff" }} /> },
        { name: "Photoshop", icon: <FaBoxOpen style={{ color: "#31a8ff" }} /> },
        { name: "Canvas", icon: <FaCode style={{ color: "#fff" }} /> },
        { name: "VS Code", icon: <FaLaptopCode style={{ color: "#007acc" }} /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea style={{ color: "#000000" }} /> },
        { name: "Eclipse", icon: <SiEclipseide style={{ color: "#2c2255" }} /> },
        { name: "NetBeans", icon: <FaLaptopCode style={{ color: "#1b6ac6" }} /> },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React", icon: <FaReact style={{ color: "#61dafb" }} /> },
        { name: "Express", icon: <SiExpress style={{ color: "#ffffff" }} /> },
        { name: "Tailwind", icon: <SiTailwindcss style={{ color: "#38bdf8" }} /> },
        { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952b3" }} /> },
      ],
    },
  ];

  return (
    <div className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="highlight">Skills</span>
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, i) => (
          <motion.div
            className="skill-card"
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <span className="icon">{skill.icon}</span>
                  <span className="name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
