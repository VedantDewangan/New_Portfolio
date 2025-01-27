import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HomeSection.css";
import profile_photo from "../../assets/profile_photo.jpg";
import { useNavigate } from "react-router";
import resume from "../../assets/Resume.pdf"

const HomeSection = () => {
  const [text, setText] = useState("");
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const roleChangeDelay = 1500;

    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText(text + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (charIndex === roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
        setText("");
      }, roleChangeDelay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, text, roles]);

  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeIn" } },
  };

  return (
    <motion.div
      id="Home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.img
        className="profile_photo"
        src={profile_photo}
        alt="profile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="Home-text">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Hello, I'm Vedant Dewangan
        </motion.h1>
        <motion.h3>{text}</motion.h3>
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Passionate about crafting seamless, dynamic, and user-friendly web
          experiences. With expertise in both frontend and backend technologies,
          I bring ideas to life with scalable and efficient solutions.
        </motion.h5>
        <div className="Home-but">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}

            onClick={()=>{
              navigate("#ContactMe")
            }}
          >
            <a href="#ContactMe">Connect With Me</a>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <a href={resume} download>Resume</a>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeSection;
