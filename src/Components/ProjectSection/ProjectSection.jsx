import React from "react";
import "./ProjectSection.css";
import img1 from "../../assets/Chatify.png";
import img2 from "../../assets/ShopZa.png";
import img3 from "../../assets/Notewit.png";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link, useNavigate } from "react-router-dom";

export const ProjectSection = () => {
  const imageVariable = [img1, img2, img3];
  const navigate = useNavigate();
  const projects = [
    {
      name: "Chatify",
      github_link: "https://github.com/VedantDewangan/Chatify.git",
      live_demo: "https://chatify-ozp5.onrender.com/",
      description:
        "A real-time chat application built with Next.js and WebSocket for seamless communication. Users can send and receive messages instantly, making it ideal for private or group conversations.",
    },
    {
      name: "ShopZa",
      github_link: "https://github.com/VedantDewangan/ShopZa.git",
      live_demo: "https://shopza.netlify.app/",
      description:
        "An e-commerce platform featuring user authentication, product listings, and a secure payment gateway. Built to provide a smooth shopping experience with responsive design and fast loading times.",
    },
    {
      name: "NoteWit",
      github_link: "https://github.com/VedantDewangan/NoteWit.git",
      live_demo: "https://notewit.netlify.app/",
      description:
        "A lightweight and intuitive note-taking application for quickly capturing and organizing thoughts. Users can create, edit, and delete notes, with data saved locally for convenience.",
    },
  ];

  return (
    <>
      <motion.div
        id="Projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          My Latest Projects
        </motion.p>
        <div className="all_projects">
          {projects.map((project, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                key={i}
              >
                <img src={imageVariable[i]} alt="project image" />
                <p>{project.name}</p>
                <Link target="blank" to={project.github_link}>
                  Github Link
                </Link>
                <Link target="blank" to={project.live_demo}>
                  Live Demo
                </Link>
              </motion.div>
            );
          })}
        </div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          onClick={()=>{
            navigate("/projects")
          }}
        >
          See More
        </motion.button>
      </motion.div>
    </>
  );
};
