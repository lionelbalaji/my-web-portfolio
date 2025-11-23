import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function Cards({ projectname, description, animate, logo }) {
  return (
    <Card
      data-aos={animate}
      sx={{
        width: { xs: "90%", sm: 340, md: 380 }, // responsive width
        height: { xs: 180, sm: 180, md: 190 }, // reduced height
        borderRight: "4px solid #3F9BAF", // right theme border
        borderBottom: "4px solid #3F9BAF",
        backgroundColor: "#0C0E12",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
        borderRadius: "12px",
      }}
    >
      <CardContent sx={{ padding: "0px", color: "#FFFFFF" }}>
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 object-contain mb-2 bg-accent-blueDark animate-slideInTop"
        />

        <h1 className="text-text-primary font-semibold text-lg  animate-slideInLeft text-accent-blue font-orbitron">
          {projectname}
        </h1>

        <p className="text-text-secondary text-sm mt-1 animate-slideInRight">
          {description}
        </p>
      </CardContent>

      <CardActions sx={{ padding: "0px", marginTop: "8px" }}>
        <button className=" font-orbitron border-2 border-accent-blue rounded-lg px-3 py-1 bg-accent-blue text-text-primary hover:bg-accent-blue/20 transition text-sm hover:text-accent-blueDark">
          Live Demo
        </button>

        <button className="font-orbitron border-2 border-accent-blue rounded-lg px-3 py-1 text-accent-blueDark hover:bg-accent-blue/20 transition text-sm">
          Github
        </button>
      </CardActions>
    </Card>
  );
}
