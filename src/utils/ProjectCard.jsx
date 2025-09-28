import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({
  title,
  description,
  status,
  borderColor,
  icons,
  demoLink,
}) => {
  return (
    <motion.div
      className="relative p-6 rounded-2xl w-72 md:w-80 backdrop-blur-sm"
      style={{
        background: "rgba(0,0,0,0.3)",
        border: `2px solid ${borderColor}`,
        boxShadow: `0 0 20px ${borderColor}, inset 0 0 10px ${borderColor}`,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {/* Title */}
      <h2
        className="text-2xl font-bold mb-2 text-center"
        style={{
          color: borderColor,
          textShadow: `0 0 10px ${borderColor}, 0 0 20px ${borderColor}`,
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 text-center">{description}</p>

      {/* Status */}
      <div
        className="text-center font-bold py-1 px-3 rounded-full text-sm w-fit mx-auto mb-4"
        style={{
          color: borderColor,
          border: `1px solid ${borderColor}`,
          boxShadow: `0 0 12px ${borderColor}`,
        }}
      >
        {status}
      </div>

      {/* Tech Icons */}
      <div className="flex justify-center gap-4 mb-4">
        {icons.map((icon, i) => (
          <FontAwesomeIcon
            key={i}
            icon={icon}
            style={{ color: borderColor, fontSize: "1.8rem" }}
          />
        ))}
      </div>

      {/* Demo Link */}
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-2 px-4 py-2 rounded-md text-white font-semibold"
          style={{
            background: borderColor,
            boxShadow: `0 0 12px ${borderColor}`,
          }}
        >
          Live Demo
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
