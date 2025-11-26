import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function Cards({
  projectname,
  description,
  animate,
  screenshot,
}) {
  return (
    <Card
      data-aos={animate}
      sx={{
        width: { xs: "90%", sm: 340, md: 380 },
        height: { xs: "auto", sm: "auto", md: "auto" },
        borderRight: "4px solid #3F9BAF",
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
      {/* IMAGE SECTION */}
      <div className="w-full h-40 md:h-48 overflow-hidden rounded-lg mb-3">
        <img
          src={screenshot}
          alt="project screenshot"
          className="w-full h-full object-cover animate-slideInTop"
        />
      </div>

      <CardContent sx={{ padding: "0px", color: "#FFFFFF" }}>
        <h1 className="text-text-primary font-semibold text-lg animate-slideInLeft text-accent-blue font-orbitron">
          {projectname}
        </h1>

        <p className="text-text-secondary text-sm mt-1 animate-slideInRight line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardActions sx={{ padding: "0px", marginTop: "10px" }}>
        <button className="font-orbitron border-2 border-accent-blue rounded-lg px-3 py-1 bg-accent-blue text-text-primary hover:bg-accent-blue/20 transition text-sm hover:text-accent-blueDark">
          Live Demo
        </button>

        <button className="font-orbitron border-2 border-accent-blue rounded-lg px-3 py-1 text-accent-blueDark hover:bg-accent-blue/20 transition text-sm">
          Github
        </button>
      </CardActions>
    </Card>
  );
}
