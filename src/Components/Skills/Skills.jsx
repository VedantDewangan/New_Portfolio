import React, { useState, useRef } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Skills.css";
import CircularSkill from "./CircularSkills";
import { SkillCard } from "./SkillCard";
import {Link} from "react-router-dom"

export const Skills = () => {
  const skills = [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "Tailwind CSS", percent: 80 },
    { name: "React JS", percent: 85 },
    { name: "Node JS", percent: 75 },
    { name: "Express JS", percent: 75 },
    { name: "MongoDB", percent: 70 },
    { name: "WebSockets", percent: 65 },
    { name: "RESTful API", percent: 80 },
    { name: "Firebase", percent: 70 },
    { name: "MySQL", percent: 60 },
    { name: "JWT (Authentication)", percent: 85 },
  ];

  const cf = [
    {
      name:"Object Oriented Programming",
      value:"oop"
    },
    {
      name:"Database Management Systems",
      value:"dbms"
    },
    {
      name:"Operating Systems",
      value:"os"
    },
    {
      name:"Computer Networks",
      value:"cn"
    }
  ];

  const [showMore, setShowMore] = useState(false);
  const additionalSkillsRef = useRef(null);

  const handleViewMore = () => {
    setShowMore((prev) => !prev);

    if (!showMore && additionalSkillsRef.current) {
      additionalSkillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      id="Skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.p
        className="skill-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Skills
      </motion.p>
      <motion.div className="skill-circle-con-con">
        {skills.slice(0, 4).map((obj) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            key={obj.name}
            className="skill-circle-con"
          >
            <CircularSkill skillName={obj.name} percentage={obj.percent} />
          </motion.div>
        ))}
      </motion.div>
      {showMore && (
        <motion.div ref={additionalSkillsRef} className="skill-circle-con-con">
          {skills.slice(4).map((obj) => (
            <motion.div
            className="skill-circle-con"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              key={obj.name}
            >
              <CircularSkill skillName={obj.name} percentage={obj.percent} />
            </motion.div>
          ))}
        </motion.div>
      )}
      <button onClick={handleViewMore} className="view-more-btn">
        {showMore ? "View Less" : "View More"}
      </button>
      <p>Computer Fundamentals</p>
      <div className="skill-card-con">
        {cf.map((obj) => (
          <SkillCard key={obj.name} name={obj.name} value={obj.value} />
        ))}
      </div>
      <Link className="dsa-link" to={'/dsa'} style={{display:"none"}}>
      Data Structures and Algorithms
      </Link>
    </motion.div>
  );
};
