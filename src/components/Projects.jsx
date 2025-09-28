import React from "react";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../utils/ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "EVENZO",
      description: "Event Registration Site",
      status: "FINISHED",
      borderColor: "#00ff99",
      icons: [faReact, faNodeJs],
      demoLink: "https://evenzo-demo.com",
    },
    {
      title: "ASIAN FREIGHT",
      description: "Logistics Site",
      status: "FINISHED",
      borderColor: "#00ccff",
      icons: [faReact, faDatabase],
      demoLink: "https://asianfreight-demo.com",
    },
    {
      title: "VS AGENCY",
      description: "Collection Agency",
      status: "IN PROGRESS",
      borderColor: "#ff9900",
      icons: [faReact, faNodeJs],
    },
    {
      title: "BALA FOODIE",
      description: "Swiggy-like App",
      status: "IN PROGRESS",
      borderColor: "#aa00ff",
      icons: [faReact, faDatabase],
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Title */}
      <h1
        className="text-6xl font-extrabold tracking-wide mb-16 text-center"
        style={{
          color: "#C0C0C0",
          textShadow:
            "0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff, 0 0 80px #00f0ff",
          letterSpacing: "4px",
        }}
      >
        PROJECTS
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center w-full px-6">
        {projectData.map((proj, i) => (
          <div
            key={i}
            className="transform transition-transform hover:scale-105"
            style={{
              transform: i % 2 === 0 ? "rotateY(-10deg)" : "rotateY(10deg)", // tilt cards
              perspective: "1000px",
            }}
          >
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
