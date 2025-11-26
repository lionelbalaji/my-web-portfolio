import React from "react";
import Navbar from "../components/Navbar";
import Objective from "../components/Objective";
import Cards from "../utils/Cards";
import ProjectCards from "../components/ProjectCards";
import SkillCard from "../utils/SkillCard";
import CardsSkill from "../components/CardsSkill";
import Contact from "./Contact";
import AboutSection from "../components/AboutSection";

const Dashboard = () => {
  return (
    <div className="bg-bg-main">
      <Navbar />
      <div id="home">
        <Objective />
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="w-4/5 h-[2px] bg-accent-blueDark"></div>
      </div>
      <div id="projects">
        <ProjectCards />
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="w-4/5 h-[2px] bg-accent-blueDark"></div>
      </div>
      <div id="skillcard">
        <CardsSkill />
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="w-4/5 h-[2px] bg-accent-blueDark"></div>
      </div>
      <div id="aboutsection">
        <AboutSection />
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="w-4/5 h-[2px] bg-accent-blueDark"></div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Dashboard;
