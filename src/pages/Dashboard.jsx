import React from "react";
import Navbar from "../components/Navbar";
import Objective from "../components/Objective";
import Cards from "../utils/Cards";
import ProjectCards from "../components/ProjectCards";
import SkillCard from "../utils/SkillCard";
import CardsSkill from "../components/CardsSkill";
import Contact from "./Contact";

const Dashboard = () => {
  return (
    <div className="bg-bg-main">
      <Navbar />
      <Objective />
      <div className="w-full flex justify-center my-10">
        <div className="w-4/5 h-[2px] bg-accent-blueDark"></div>
      </div>
      <ProjectCards />
      <div className="w-full flex justify-center my-10">
        <div className="w-4/5 h-[2px] bg-accent-blueDark"></div>
      </div>
      <CardsSkill />
      <div className="w-full flex justify-center my-10">
        <div className="w-4/5 h-[2px] bg-accent-blueDark"></div>
      </div>
      <Contact />
    </div>
  );
};

export default Dashboard;
