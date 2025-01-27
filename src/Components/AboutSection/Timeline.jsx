import React from "react";
import { easeOut, motion } from "framer-motion";
import "./Timeline.css";

export const Timeline = () => {
  const timelineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="timeline">
      <motion.div
        className="timeline-item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={timelineVariants}
      >
        <h4>2022 - Present</h4>
        <p>B.Tech in Information Technology, NIT Raipur</p>
        <p>Current focus: Next.js and Data Structures & Algorithms</p>
      </motion.div>

      <motion.div
        className="timeline-item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={timelineVariants}
      >
        <h4>2021 - 2022</h4>
        <p>Completed Senior Secondary Education (12th grade)</p>
        <p>Score: 92.8%</p>
      </motion.div>

      <motion.div
        className="timeline-item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={timelineVariants}
      >
        <h4>2019 - 2020</h4>
        <p>Completed Secondary Education (10th grade)</p>
        <p>Score: 88.6%</p>
      </motion.div>
    </div>
  );
};
