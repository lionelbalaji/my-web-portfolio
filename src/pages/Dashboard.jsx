import React from "react";
import Stars from "../animation/Stars";
import Button from "../Button";
import Navbar from "../components/Navbar";
import SkillCard from "../utils/SkillCard";
import LightningEffect from "../animation/LightningEffect";
import Projects from "../components/Projects";

const Dashboard = () => {
  return (
    <div className="relative bg-main-bg text-main-text min-h-screen flex flex-col  overflow-hidden">
      {/* Stars in the background */}
      <div className="absolute inset-0 z-0">
        <Stars />
        {/* <LightningEffect /> */}
      </div>

      {/* Foreground content */}
      <div className="">
        <Navbar />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading-primary ">Welcome to My Portfolio</h1>
        <p className="text-main-muted mt-2">
          Full Stack Developer | React | Node | Firebase | MySQL
        </p>
      </div>
      <div className="flex justify-center">
        <SkillCard />
      </div>
      <div className="flex justify-center">
        <Projects />
      </div>
    </div>
  );
};

export default Dashboard;
