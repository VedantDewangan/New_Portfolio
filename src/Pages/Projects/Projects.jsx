import React from "react";
import { motion } from "framer-motion"; 
import { FaShoppingCart,FaStickyNote,FaComments,FaGlobe } from "react-icons/fa";
import img1 from "../../assets/Chatify.png";
import img2 from "../../assets/ShopZa.png";
import img3 from "../../assets/Notewit.png";
import img4 from "../../assets/Portfolio.png"

export const Projects = () => {
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
            Projects
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
  <FaGlobe className="experience-icon" />
  <h3 className="experience-role">Portfolio</h3>
  <p className="experience-duration">Updated January 2025</p>
  <ul className="experience-tasks">
    <li>
      Designed and developed a professional portfolio using modern web
      technologies.
    </li>
    <li>
      Showcased skills, projects, and work experience with smooth animations,
      transitions, and a responsive design.
    </li>
    <li>
      Integrated a toggle for light and dark modes, optimized for accessibility
      and user experience.
    </li>
    <li>
      <a
        href="https://github.com/VedantDewangan/New_Portfolio.git"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        GitHub Repository
      </a>
    </li>
  </ul>
  <img src={img4} alt="" />
</motion.div>


        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="experience-card"
>
  <FaComments className="experience-icon" />
  <h3 className="experience-role">Chatify</h3>
  <p className="experience-duration">September 2024</p>
  <ul className="experience-tasks">
    <li>
      Built a chat application featuring an AI chatbot for interactive
      communication.
    </li>
    <li>
      Integrated functionalities for sending friend requests, accepting
      requests, and searching users.
    </li>
    <li>
      Enabled group chat features, including sending messages, sharing images,
      emojis, and voice-to-text conversion.
    </li>
    <li>
      Added options for updating profile photos and seamless management of group
      chats.
    </li>
    <li>
      <a
        href="https://github.com/VedantDewangan/Chatify"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        GitHub Repository
      </a>
    </li>
  </ul>
  <img src={img1} alt="" />
</motion.div>


        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="experience-card"
>
  <FaShoppingCart className="experience-icon" />
  <h3 className="experience-role">ShopZa - E-commerce Website</h3>
  <p className="experience-duration">June 2024</p>
  <ul className="experience-tasks">
    <li>
      Built a feature-rich e-commerce website using Chakra UI for a responsive
      and attractive design.
    </li>
    <li>
      Integrated user authentication with login, signup, and wishlist
      functionalities.
    </li>
    <li>
      Implemented a secure payment gateway and order management system.
    </li>
    <li>
      <a
        href="https://github.com/VedantDewangan/ShopZa"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        GitHub Repository
      </a>
    </li>
  </ul>
  <img src={img2} alt="" />
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="experience-card"
>
  <FaStickyNote className="experience-icon" />
  <h3 className="experience-role">NoteWit</h3>
  <p className="experience-duration">May 2024</p>
  <ul className="experience-tasks">
    <li>
      Developed a MERN stack application for managing notes and tasks with CRUD
      operations.
    </li>
    <li>
      Implemented user authentication for login and signup to ensure secure access.
    </li>
    <li>
      Designed the platform to help users store and manage tasks efficiently
      and track completion within deadlines.
    </li>
    <li>
      <a
        href="https://github.com/VedantDewangan/NoteWit"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        GitHub Repository
      </a>
    </li>
  </ul>
  <img src={img3} alt="" />
</motion.div>


        </div>

        </motion.section>
        </>
    )
}