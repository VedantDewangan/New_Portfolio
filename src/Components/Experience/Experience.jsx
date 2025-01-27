import React from "react";
import "./Experience.css";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router";

export const Experience = () => {

  const navigate = useNavigate();
  
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
      id="Experience-com"
      className="experience-section"
    >
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Experience
      </motion.h2>
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="experience-card"
        >
          <FaBriefcase className="experience-icon" />
          <h3 className="experience-role">Web Developer Intern</h3>
          <p className="experience-company">Prodigy Infotech</p>
          <p className="experience-duration">June 2024 - July 2024 (1 month)</p>
          <ul className="experience-tasks">
            <li>
              Developed interactive navigation menus and web applications using
              HTML, CSS, JavaScript, and Tailwind CSS.
            </li>
            <li>
              Built projects including a stopwatch and tic-tac-toe game as part
              of task assignments.
            </li>
            <li>
              Gained experience with React and worked on a portfolio project
              showcasing my skills and projects.
            </li>
            <li>
              Received a letter of recommendation and a completion certificate
              for excellent performance.
            </li>
          </ul>
        </motion.div>
        <motion.button
        className="navigate-but"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          onClick={()=>{
            navigate("/experience")
          }}
        >
          See More
        </motion.button>
      </div>
    </motion.section>
  );
};
