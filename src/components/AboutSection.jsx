import Avatar from "@mui/material/Avatar";
import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-bg-main px-6 py-16 flex flex-col items-center gap-12">
      {/* TOP CENTER HEADING */}
      <h3
        className="
          text-accent-blue 
          font-orbitron
          font-bold
          text-3xl sm:text-4xl md:text-5xl 
          tracking-wide 
          text-center
          animate-slideInTop
        "
      >
        About Me
      </h3>

      {/* IMAGE + CONTENT */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
        {/* LEFT IMAGE */}
        <div className="animate-slideInLeft">
          <Avatar
            alt="Profile Image"
            src="/myimage4.webp"
            variant="circular"
            sx={{
              height: 260,
              width: 260,
              borderRadius: "50%",
              bgcolor: "transparent",
              boxShadow: "0 0 35px rgba(95, 203, 226, 0.45)",
            }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-xl flex flex-col gap-6 animate-slideInRight text-center md:text-left">
          {/* MAIN TEXT */}
          <p className="text-textc-secondary leading-relaxed text-lg">
            I'm Balaji, a passionate Frontend Developer with a knack for
            crafting immersive digital experiences. I blend technical expertise
            in React and Next.js with a keen eye for UI/UX design. My goal is to
            build responsive, high-performance applications that solve
            real-world problems and delight users.
          </p>

          {/* STATS */}
          <div className="flex items-center justify-center md:justify-start gap-8 mt-2 flex-wrap">
            <div className="flex flex-col items-center text-accent-blue">
              <span className="text-3xl font-bold font-orbitron">1+</span>
              <p className="text-textc-secondary text-sm">Years Experience</p>
            </div>

            <div className="flex flex-col items-center text-accent-blue">
              <span className="text-3xl font-bold font-orbitron">3+</span>
              <p className="text-textc-secondary text-sm">Projects Completed</p>
            </div>

            {/* <div className="flex flex-col items-center text-accent-blue">
              <span className="text-3xl font-bold font-orbitron">20+</span>
              <p className="text-textc-secondary text-sm">Happy Clients</p>
            </div> */}
          </div>

          {/* QUOTE */}
          {/* <h3 className="text-accent-blue text-xl font-orbitron mt-6 italic text-center md:text-left">
            “Code is Poetry.” – Balaji
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
