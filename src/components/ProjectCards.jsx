import React from "react";
import Cards from "../utils/Cards";

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      projectname: "Asian Freight Solutions",
      description:
        "Built a React-based logistics website with fully responsive layouts and clean component architecture. Implemented user-friendly navigation and mobile-optimized UI sections to improve engagement. Ensured fast load times and consistent design across devices for a seamless user experience.",
      logo: "/afs.webp",
      animate: "slideInBottom",
      image: "/afs.webp",
      link: "https://static-logistics-project.web.app/",
    },
    {
      id: 2,
      projectname: "Evenzo",
      description:
        "Developed a fully responsive company website using React, styled with MUI and Tailwind CSS for a modern and consistent UI. Built reusable components to ensure clean structure and easy scalability. Optimized layouts for all devices, delivering fast performance and a smooth user experience.",
      logo: "/incense.png",
      animate: "slideInRight",
      image: "/evenzo.webp",
      link: "https://evenzo.co.in/",
    },
    {
      id: 3,
      projectname: "Bala Foodi",
      description:
        "Created a high-fidelity food delivery app prototype showcasing UI/UX design skills, with intuitive navigation and clean visual layout. Designed all screens to simulate a full user flow — from browsing restaurants and menus to checkout — enabling a realistic app experience. Focused on clarity, user-friendly interface, and responsiveness to communicate the core concept effectively.",
      logo: "/balafoodi.png",
      animate: "slideInLeft",
      image: "/balafoodi.webp",
      link: "https://lionelbalaji.github.io/food-delivery-app-design/",
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
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
