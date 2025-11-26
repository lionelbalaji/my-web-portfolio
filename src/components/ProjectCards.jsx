import React from "react";
import Cards from "../utils/Cards";

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      projectname: "Incense Stick",
      description: "Its a static website which uses React for frontend",
      logo: "/incense.png",
      animate: "slideInBottom",
      image: "/evenzo.png",
    },
    {
      id: 2,
      projectname: "Evenzo",
      description: "Its a static website which uses React for frontend",
      logo: "/incense.png",
      animate: "slideInRight",
      image: "/evenzo.png",
    },
    {
      id: 3,
      projectname: "Bala Foodi",
      description: "Its a static website which uses React for frontend",
      logo: "/balafoodi.png",
      animate: "slideInLeft",
      image: "/evenzo.png",
    },
  ];
  return (
    <div className="w-full">
      <h3
        className="
    text-accent-blue 
    font-semibold 
    text-2xl 
    sm:text-3xl 
    md:text-4xl 
    tracking-wide 
    font-orbitron
    animate-slideInRight         
    text-center     
    mb-4 md:mb-6      
  "
      >
        Projects
      </h3>

      <div
        className="
        w-full 
        grid 
        grid-cols-1           
        sm:grid-cols-2         
        lg:grid-cols-3         
        gap-4                
        place-items-center     
        py-6                  
      "
      >
        {projects.map((item) => (
          <div>
            <Cards
              projectname={item.projectname}
              description={item.description}
              animate={item.animate}
              screenshot={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
