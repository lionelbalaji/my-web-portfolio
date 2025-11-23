import React from "react";
import SkillCard from "../utils/SkillCard";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { FirebaseIcon } from "../utils/FireabaseIcon";

const CardsSkill = () => {
  const icons = [
    { id: 1, icon: faHtml5 },
    { id: 2, icon: faCss3Alt },
    { id: 3, icon: faJs },
    { id: 4, icon: faReact },
    { id: 5, icon: faNodeJs },
  ];

  return (
    <div className="w-full">
      <h3
        class="
    text-accent-blue 
    font-semibold 
    text-2xl 
    sm:text-3xl 
    md:text-4xl 
    tracking-wide 
    animate-slideInRight
    text-center      
    mb-4 md:mb-6   
    font-orbitron   
  "
      >
        SKILLS
      </h3>

      <div
        className=" w-full 
        grid 
        grid-cols-2           
        sm:grid-cols-2         
        lg:grid-cols-3         
        gap-4               
        place-items-center     
        py-2   "
      >
        {icons.map((item) => (
          <SkillCard key={item.id} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default CardsSkill;
