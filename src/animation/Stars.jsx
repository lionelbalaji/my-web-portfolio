import React from "react";
import { motion } from "framer-motion";

const Stars = () => {
  const stars = Array.from({ length: 30 }); // number of stars

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ y: -10, x: Math.random() * window.innerWidth }}
          animate={{ y: window.innerHeight + 10 }}
          transition={{
            duration: Math.random() * 5 + 3, // 3–8s
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
