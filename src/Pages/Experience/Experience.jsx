import React from "react";
import { motion } from "framer-motion"; 
import { FaBriefcase, FaTrophy,FaCertificate } from "react-icons/fa";
import "./Experience.css"
import prodigy_certificate from "../../assets/prodigy_certificate.jpeg"
import lor from "../../assets/lor.jpeg"
import reg from "../../assets/Hacktober_reg.webp"
import hack1 from "../../assets/Hacktober_01.webp"
import hack2 from "../../assets/Hacktober_02.webp"
import hack3 from "../../assets/Hacktober_03.webp"
import hack4 from "../../assets/Hacktober_04.webp"
import udmey from "../../assets/Udmey.jpg"

export const Experience = ()=>{
    return(
        <>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          id="Experience"
          className="experience-section"
        > 
        <span className="back" onClick={()=>{
          window.history.back()
          }}>
              Go Back
        </span>
        <header>
          <span className="heading">
            Experiences
          </span>
        </header>

        <div className="experience-container">

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="experience-card"
>
  <FaCertificate className="experience-icon" />
  <h3 className="experience-role">Certified Web Developer</h3>
  <p className="experience-company">The Complete 2024 Web Development Bootcamp</p>
  <p className="experience-duration">Completed on: November 27, 2024</p>
  <ul className="experience-tasks">
    <li>
      Successfully completed a comprehensive web development course taught by Dr. Angela Yu, Lead Instructor at Udemy.
    </li>
    <li>
      Acquired in-depth knowledge of front-end and back-end development, including HTML, CSS, JavaScript, Node.js, React, MongoDB, and more.
    </li>
    <li>
      Completed all modules and exercises, validating hands-on learning through project-based assignments.
    </li>
    <li>
      Gained proficiency in building full-stack applications and deploying web solutions.
    </li>
  </ul>
  <img src={udmey} alt="" />
</motion.div>


        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="experience-card"
>
  <FaTrophy className="experience-icon" />
  <h3 className="experience-role">Hacktoberfest 2024 Winner</h3>
  <p className="experience-company">Open Source Contribution</p>
  <p className="experience-duration">October 2024</p>
  <ul className="experience-tasks">
    <li>
      Successfully contributed to open-source projects by creating and merging
      4+ pull requests during Hacktoberfest 2024.
    </li>
    <li>
      Collaborated with diverse global developers, enhancing teamwork and code
      quality.
    </li>
    <li>
      Gained hands-on experience in open-source development and version control
      using Git and GitHub.
    </li>
    <li>
      Awarded the Hacktoberfest 2024 completion badge for active contribution
      and dedication to open-source.
    </li>
  </ul>
  <a href="https://www.holopin.io/@vedantdewangan#">Click Here</a>
  <div className="badges">
    <img src={reg} alt="" />
    <img src={hack1} alt="" />
    <img src={hack2} alt="" />
    <img src={hack3} alt="" />
    <img src={hack4} alt="" />
  </div>
</motion.div>


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
          <img src={prodigy_certificate} alt="Internship comletion certificate" />
          <img src={lor} alt="letter of recommendation" />
        </motion.div>

        </div>

        </motion.section>
        </>
    )
}