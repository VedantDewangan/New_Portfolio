import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import v_logo from "../../assets/v_logo.png";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = [
      "Home",
      "AboutMe",
      "Skills",
      "Projects",
      "Experience",
      "ContactMe",
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    });

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, []);

  const [translateX, SetTranslateX] = useState(350);

  return (
    <>
      <div className="navbar">
        <div>
          <a href="#Home">
            <img src={logo} alt="vedant logo" />
          </a>
        </div>
        <ul>
          {[
            "Home",
            "AboutMe",
            "Skills",
            "Projects",
            "Experience",
            "ContactMe",
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
              >
                {section.replace(/([A-Z])/g, " $1").trim()}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-navbar">
        <a href="#Home">
          <img src={v_logo} alt="vedant logo" />
        </a>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "2.6em" }}
          onClick={() => {
            SetTranslateX((prev) => (prev === 0 ? 350 : 0));
          }}
        >
          menu
        </span>
      </div>
      <div
        className="main-side-menu"
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        <div className="close-but-side-navbar">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "2.6em" }}
            onClick={() => {
              SetTranslateX((prev) => (prev === 0 ? 350 : 0));
            }}
          >
            close
          </span>
        </div>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#AboutMe">About Me</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#ContactMe">Contact Me</a></li>
        </ul>
      </div>
    </>
  );
};
