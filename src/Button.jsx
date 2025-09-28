import React from "react";
import { motion } from "framer-motion";

const NavButton = () => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.02, 1],
        boxShadow: [
          "0 0 4px rgba(236, 72, 153, 0.4)",
          "0 0 8px rgba(147, 51, 234, 0.6)",
          "0 0 4px rgba(236, 72, 153, 0.4)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden px-5 py-1.5 rounded-lg bg-buttonbg text-sm text-white font-medium"
    >
      <span className="relative z-10">Hire Me</span>

      {/* Shimmer effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
      />
    </motion.button>
  );
};

export default NavButton;
