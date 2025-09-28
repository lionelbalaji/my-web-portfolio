import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LightningEffect = () => {
  const audioRef = useRef(null);
  const [strikeKey, setStrikeKey] = useState(0);
  const [boltProps, setBoltProps] = useState({
    x: "50%",
    y: "20%",
    scale: 1,
    rotate: 0,
  });

  // Function to randomize lightning position & size
  const randomizeBolt = () => {
    const x = Math.random() * 80 + 10; // between 10%–90% of screen
    const y = Math.random() * 40 + 10; // between 10%–50% of screen
    const scale = Math.random() * 0.8 + 0.6; // size 0.6–1.4
    const rotate = Math.random() * 60 - 30; // rotate -30° to +30°

    setBoltProps({ x: `${x}%`, y: `${y}%`, scale, rotate });
    setStrikeKey((prev) => prev + 1); // reset animation
  };

  useEffect(() => {
    const playThunder = () => {
      if (audioRef.current) {
        // Sound comes after lightning
        setTimeout(() => {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }, Math.random() * 800 + 200);
      }
    };

    const strikeInterval = setInterval(() => {
      randomizeBolt();
      playThunder();
    }, Math.random() * 6000 + 4000); // every 4–10s

    return () => clearInterval(strikeInterval);
  }, []);

  return (
    <>
      {/* Flash overlay */}
      <motion.div
        key={`flash-${strikeKey}`}
        className="absolute inset-0 bg-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 0.7, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ mixBlendMode: "overlay", zIndex: 40 }}
      />

      {/* Lightning bolt (random position) */}
      <motion.svg
        key={`bolt-${strikeKey}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="yellow"
        className="absolute w-16 h-16"
        style={{
          left: boltProps.x,
          top: boltProps.y,
          transform: "translate(-50%, -50%)",
          zIndex: 50,
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: boltProps.rotate }}
        animate={{
          opacity: [0, 1, 0],
          scale: [
            boltProps.scale,
            boltProps.scale * 1.2,
            boltProps.scale * 0.8,
          ],
          rotate: [boltProps.rotate, boltProps.rotate + 10],
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </motion.svg>

      {/* Thunder sound */}
      <audio ref={audioRef} src="/thunder.mp3" preload="auto"></audio>
    </>
  );
};

export default LightningEffect;
