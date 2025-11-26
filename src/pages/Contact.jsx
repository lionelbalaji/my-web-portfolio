import React from "react";
import DynamicForm from "../components/DynamicForm";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full px-6 md:px-6 py-10">
      {/* HEADING */}
      <h3 className="text-accent-blue font-semibold text-center md:text-4xl text-xl tracking-wide font-orbitron animate-slideInRight mb-10">
        CONTACT
      </h3>

      {/* MAIN FLEX AREA */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10">
        {/* FORM SECTION */}
        <div className="w-full md:w-3/4">
          <DynamicForm />
        </div>

        {/* ICONS + RESUME */}
        <div className="flex flex-col items-center gap-6 md:gap-8 mt-4 animate-slideInLeft">
          {/* SOCIAL ICONS BLOCK */}
          <div className="flex flex-row md:flex-col items-center gap-8">
            {[
              { icon: <FaWhatsapp />, link: "https://wa.me/9080176227" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/balaji-b-4674bb1a0/",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/lionelbalaji?tab=repositories",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:balaji2405jeeva@gmail.com",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="
                  relative 
                  text-accent-blue 
                  text-4xl 
                  transition
                  glow-icon
                  animate-slideInLeft
                "
              >
                {/* Neon border */}
                <span
                  className="
                    absolute inset-0 
                    rounded-full 
                    border-2 
                    border-accent-blue 
                    animate-pulse 
                    opacity-40
                  "
                ></span>

                {/* Icon */}
                <span className="relative z-10 animate-slideInLeft">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>

          {/* RESUME BUTTON — SEPARATE BLOCK ON MOBILE */}
          <div className="w-full flex justify-center md:justify-start animate-slideInBottom">
            <a
              href="/resume.pdf"
              download
              className="
                px-6 py-2 
                rounded-lg 
                text-textc-primary 
                border 
                font-orbitron
                bg-gradient-to-r from-accent-blue to-accent-blueDark
                shadow-buttonshadow
                hover:opacity-90 
                transition 
                text-sm
                w-auto
              "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* GLOW EFFECT */}
      <style>{`
        .glow-icon {
          transition: 0.3s ease;
        }
        .glow-icon:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 12px rgba(95, 203, 226, 0.9));
          color: #5FCBE2;
        }
      `}</style>
    </div>
  );
};

export default Contact;
