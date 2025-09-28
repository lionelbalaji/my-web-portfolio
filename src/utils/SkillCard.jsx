import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export default function SkillCard() {
  const skills = [
    {
      name: "HTML",
      icon: faHtml5,
      color: "#da563e",
      animation: "beatFade",
      dropshadow: "drop-shadow-html",
    },
    {
      name: "CSS",
      icon: faCss3Alt,
      color: "#74C0FC",
      animation: "beatFade",
      dropshadow: "drop-shadow-css",
    },
    {
      name: "JAVASCRIPT",
      icon: faJs,
      color: "#FFD43B",
      animation: "beatFade",
      dropshadow: "drop-shadow-js",
    },
    {
      name: "REACT",
      icon: faReact,
      color: "#74C0FC",
      animation: "spin",
      dropshadow: "drop-shadow-react",
    },
    {
      name: "NODE.JS",
      icon: faNodeJs,
      color: "#205c00",
      animation: "spin",
      dropshadow: "drop-shadow-node",
    },
    {
      name: "FIREBASE",
      icon: faFire,
      color: "#FFD43B",
      animation: "spin",
      dropshadow: "drop-shadow-firebase",
    },
  ];

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 900,
        margin: "auto",
        borderRadius: "20px",
        padding: "1rem",
        background: "rgba(0, 0, 0, 0.3)", // transparent glass
        backdropFilter: "blur(15px)",
        position: "relative",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Animated glowing border */}
      <div className="animated-border"></div>

      <CardContent sx={{ position: "relative", zIndex: 10 }}>
        <h1 className="heading-primary flex justify-center p-4 italic text-3xl md:text-4xl tracking-widest">
          ⚡ MY SKILLS ⚡
        </h1>

        <Typography
          gutterBottom
          component="div"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr", // 2 per row on mobile
              sm: "1fr 1fr 1fr", // 3 per row on tablet+
            },
            gap: 4,
            textAlign: "center",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                style={{
                  color: skill.color,
                  fontSize: "5rem",
                  filter: `drop-shadow(0 0 15px ${skill.color}) drop-shadow(0 0 35px ${skill.color})`,
                }}
                {...{ [skill.animation]: true }}
              />
              <h1
                className="text-lg font-semibold"
                style={{
                  textShadow: `0 0 8px ${skill.color}, 0 0 18px ${skill.color}`,
                }}
              >
                {skill.name}
              </h1>
            </div>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
