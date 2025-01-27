import React from "react";
import "./Home.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import HomeSection from "../../Components/HomeSection/HomeSection";
import { AboutSection } from "../../Components/AboutSection/AboutSection";
import { Skills } from "../../Components/Skills/Skills";
import { ProjectSection } from "../../Components/ProjectSection/ProjectSection";
import { Experience } from "../../Components/Experience/Experience";
import { ContactSection } from "../../Components/ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";
import Background from "../../Components/Background/Background";
import { AIBot } from "../../Components/AIBot/AIBot";

export const Home = () => {
  return (
    <div className="home-container">
      <Background />
      <div className="content">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <Skills />
        <ProjectSection />
        <Experience />
        <ContactSection />
        <Footer />
      </div>
      <div className="ai-bot">
      <AIBot />
      </div>
    </div>
  );
};
