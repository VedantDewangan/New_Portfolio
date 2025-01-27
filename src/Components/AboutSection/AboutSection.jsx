import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";
import about_img from "../../assets/about-me-pic-1.jpg";
import { Timeline } from "./Timeline";

export const AboutSection = () => {
  return (
    <motion.div
      id="AboutMe"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.p
        className="about-me-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About Me
      </motion.p>

      <div className="aboutme">
        <motion.img
          src={about_img}
          alt="Profile"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p>
            Hi, I'm Vedant Dewangan, currently pursuing my B.Tech in Information
            Technology at the National Institute of Technology Raipur, where I’m
            in my 6th semester with a CPI of 8.18/10. I love programming,
            especially in C++, JavaScript, and Python, and I started coding back
            in 11th grade. Outside of coding, I enjoy traveling, listening to
            music, and exploring design on Figma.
          </p>
        </motion.div>
      </div>
      <Timeline />
    </motion.div>
  );
};
