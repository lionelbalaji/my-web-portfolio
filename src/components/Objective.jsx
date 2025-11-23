import Avatar from "@mui/material/Avatar";
import React from "react";

const Objective = () => {
  return (
    <div className="bg-bg-main  px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-20">
      {/* IMAGE SIDE */}
      <div className="flex justify-center md:justify-start animate-slideInLeft">
        <Avatar
          alt="Profile Image"
          src="/myimage3.png"
          variant="square"
          sx={{
            height: 280,
            width: 280,
            borderRadius: 0,
            bgcolor: "transparent",
          }}
        />
      </div>

      {/* TEXT SIDE */}
      <div className="max-w-lg flex flex-col gap-4 text-center md:text-left text-textc-primary animate-slideInBottom">
        <h3 className="text-accent-blue font-semibold md:text-4xl text-xl tracking-wide font-orbitron animate-slideInRight">
          Creative Developer & Designer
        </h3>

        <h1 className="text-text-primary font-bold text-3xl md:text-4xl italic">
          Innovate. Create. Inspire.
        </h1>

        <p className="text-text-secondary text-pretty leading-relaxed">
          Seeking to leverage modern Frontend expertise (React/Next.js) and
          UI/UX principles to deliver high-performance, responsive applications.
          I use my backend fundamentals to optimize API interactions and build
          cohesive, end-to-end user experiences.
        </p>

        <div className="flex gap-4 justify-center md:justify-start mt-4 animate-slideInTop">
          <button className="border-2 border-accent-blue rounded-lg px-5 py-2  text-text-primary hover:bg-accent-blue/20 transition text-sm hover:text-accent-blueDark font-orbitron">
            View Projects
          </button>

          <button className="border-2 border-accent-blueDark rounded-lg px-5 py-2 text-text-primary hover:bg-accent-blue/20 transition text-sm hover:text-accent-blueDark font-orbitron">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Objective;
