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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "Projects", "Skills", "About", "Contact"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#0C0E12" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ position: "relative" }}>
          {/* ---------- MOBILE MENU ICON (LEFT) ---------- */}
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

            {/* Mobile Dropdown Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                fontFamily: "Orbitron, sans-serif",
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "#0C0E12",
                  color: "#3F9BAF",
                  fontFamily: "Orbitron, sans-serif",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ---------- LOGO (CENTER ON MOBILE / LEFT ON DESKTOP) ---------- */}
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
              sx={{
                width: 100,
                height: 60,
                bgcolor: "transparent",
                borderRadius: 0,
                boxShadow: "none",
              }}
            />
          </Box>

          {/* ---------- DESKTOP MENU (RIGHT SIDE) ---------- */}
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
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Orbitron, sans-serif",
                  ":hover": "#3F9BAF",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
