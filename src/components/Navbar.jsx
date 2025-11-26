import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { id: 1, name: "Home", path: "home" },
  { id: 2, name: "Projects", path: "projects" },
  { id: 3, name: "Skills", path: "skillcard" },
  { id: 4, name: "About", path: "aboutsection" },
  { id: 5, name: "Contact", path: "contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState("home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    setActivePage(path);
    const section = document.getElementById(path);
    section?.scrollIntoView({ behavior: "smooth" });
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ background: "#0C0E12" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ position: "relative" }}>
          {/* MOBILE MENU BUTTON */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              left: 0,
            }}
          >
            <IconButton
              size="large"
              aria-label="open menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* MOBILE DROPDOWN MENU */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ display: { xs: "block", md: "none" } }}
              PaperProps={{
                sx: {
                  backgroundColor: "#0C0E12",
                  color: "#3F9BAF",
                  fontFamily: "Orbitron, sans-serif",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleNavigate(page.path)}
                  sx={{
                    color: activePage === page.path ? "#3F9BAF" : "white",
                    fontWeight: activePage === page.path ? "bold" : "normal",
                    textShadow:
                      activePage === page.path ? "0px 0px 8px #3F9BAF" : "none",
                    fontFamily: "Orbitron, sans-serif",
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO CENTER IN MOBILE */}
          <Box
            sx={{
              mx: { xs: "auto", md: 0 },
              position: { xs: "absolute", md: "static" },
              left: { xs: "50%", md: "auto" },
              transform: { xs: "translateX(-50%)", md: "none" },
            }}
          >
            <Avatar
              alt="Logo"
              src="/mylogo1.png"
              variant="square"
              sx={{ width: 100, height: 60, bgcolor: "transparent" }}
            />
          </Box>

          {/* DESKTOP MENU */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              ml: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Orbitron, sans-serif",
                  borderBottom:
                    activePage === page.path
                      ? "2px solid #3F9BAF"
                      : "2px solid transparent",
                  textShadow:
                    activePage === page.path ? "0px 0px 8px #3F9BAF" : "none",
                  transition: "0.3s",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
