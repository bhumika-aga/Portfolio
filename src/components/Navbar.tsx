import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeMode } from "../theme/ThemeContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const { mode, toggleColorMode } = useThemeMode();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: mode === 'dark' 
          ? "rgba(17, 17, 17, 0.95)" 
          : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: mode === 'dark'
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: mode === 'dark'
          ? "0 1px 3px rgba(255,255,255,0.1)"
          : "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "text.primary",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1.25rem",
          }}
        >
          Bhumika Agarwal
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: "text.primary",
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: location.pathname === item.path ? 600 : 400,
                backgroundColor:
                  location.pathname === item.path
                    ? mode === 'dark'
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.05)"
                    : "transparent",
                "&:hover": {
                  backgroundColor: mode === 'dark'
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
          <IconButton
            sx={{ 
              ml: 1,
              color: 'text.primary',
              backgroundColor: mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'rgba(0, 0, 0, 0.05)',
              '&:hover': {
                backgroundColor: mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.15)'
                  : 'rgba(0, 0, 0, 0.08)',
              }
            }}
            onClick={toggleColorMode}
          >
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
