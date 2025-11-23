import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function SkillCard({ icon }) {
  return (
    <Card
      sx={{
        width: "70px",
        height: "70px",
        background: "#0C0E12",
        border: "1px solid #3F9BAF",
        borderRadius: "12px",
        boxShadow: "0 0 10px #3F9BAF55, 0 0 20px #3F9BAF33",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 0,
      }}
    >
      <CardContent
        sx={{
          paddingTop: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon icon={icon} size="3x" color="#3F9BAF" beat />
      </CardContent>
    </Card>
  );
}
