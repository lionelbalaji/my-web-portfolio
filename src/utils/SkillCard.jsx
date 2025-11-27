import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function SkillCard({ icon, name }) {
  return (
    <Card
      sx={{
        width: "80px",
        height: "100px",
        background: "#0C0E12",
        border: "1px solid #3F9BAF",
        borderRadius: "12px",
        boxShadow: "0 0 10px #3F9BAF55, 0 0 20px #3F9BAF33",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 1,
      }}
    >
      <FontAwesomeIcon icon={icon} size="2x" color="#3F9BAF" beat />

      <Typography
        sx={{
          marginTop: "8px",
          fontSize: "0.8rem",
          fontWeight: "600",
          color: "#3F9BAF",
          textShadow: "0 0 6px #3F9BAF, 0 0 10px #3F9BAF66",
          fontFamily: "Orbitron, sans-serif",
        }}
      >
        {name}
      </Typography>
    </Card>
  );
}
