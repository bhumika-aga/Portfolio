import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeMode } from "../theme/ThemeContext";

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    target: undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const { mode, toggleColorMode } = useThemeMode();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: trigger
            ? mode === "dark"
              ? "rgba(28, 28, 30, 0.85)"
              : "rgba(255, 255, 255, 0.85)"
            : "transparent",
          backdropFilter: trigger ? "saturate(180%) blur(20px)" : "none",
          borderBottom: trigger
            ? `0.5px solid ${
                mode === "dark"
                  ? "rgba(255, 255, 255, 0.13)"
                  : "rgba(0, 0, 0, 0.04)"
              }`
            : "none",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          zIndex: 1100,
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            width: "100%",
            px: { xs: 1, md: 1.5 },
            py: 0.25,
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 40, md: 48 },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo/Brand */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: "text.primary",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "none",
                },
              }}
            >
              Bhumika Agarwal
            </Typography>

            {/* Navigation Pills */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor:
                  mode === "dark"
                    ? "rgba(58, 58, 60, 0.8)"
                    : "rgba(242, 242, 247, 0.9)",
                backdropFilter: "saturate(180%) blur(20px)",
                borderRadius: 6,
                padding: "2px",
                gap: 1,
                border: `0.5px solid ${
                  mode === "dark"
                    ? "rgba(255, 255, 255, 0.13)"
                    : "rgba(0, 0, 0, 0.04)"
                }`,
                boxShadow:
                  mode === "dark"
                    ? "0 2px 8px rgba(0, 0, 0, 0.3)"
                    : "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      minWidth: 56,
                      height: 24,
                      borderRadius: 4,
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: isActive
                        ? mode === "dark"
                          ? "#ffffff"
                          : "#1D1D1F"
                        : "text.secondary",
                      backgroundColor: isActive
                        ? mode === "dark"
                          ? "#007AFF"
                          : "#ffffff"
                        : "transparent",
                      boxShadow: isActive
                        ? mode === "dark"
                          ? "0 1px 3px rgba(0, 122, 255, 0.4)"
                          : "0 1px 3px rgba(0, 0, 0, 0.12)"
                        : "none",
                      transition:
                        "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      textTransform: "none",
                      letterSpacing: "-0.003em",
                      "&:hover": {
                        backgroundColor: isActive
                          ? mode === "dark"
                            ? "#007AFF"
                            : "#ffffff"
                          : mode === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.04)",
                        color: isActive
                          ? mode === "dark"
                            ? "#ffffff"
                            : "#1D1D1F"
                          : "text.primary",
                        transform: "translateY(-0.5px)",
                      },
                      "&:active": {
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleColorMode}
              sx={{
                width: 32,
                height: 32,
                backgroundColor:
                  mode === "dark"
                    ? "rgba(58, 58, 60, 0.6)"
                    : "rgba(242, 242, 247, 0.8)",
                backdropFilter: "blur(20px)",
                border: `0.5px solid ${
                  mode === "dark"
                    ? "rgba(255, 255, 255, 0.13)"
                    : "rgba(0, 0, 0, 0.04)"
                }`,
                color: "text.primary",
                transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "&:hover": {
                  backgroundColor:
                    mode === "dark"
                      ? "rgba(90, 200, 250, 0.2)"
                      : "rgba(0, 122, 255, 0.1)",
                  color: "primary.main",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              {mode === "dark" ? (
                <Brightness7 sx={{ fontSize: 16 }} />
              ) : (
                <Brightness4 sx={{ fontSize: 16 }} />
              )}
            </IconButton>

            {/* Mobile Menu (simplified for now) */}
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 0.5 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    size="small"
                    sx={{
                      minWidth: "auto",
                      width: 24,
                      height: 24,
                      borderRadius: 5,
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: isActive ? "primary.main" : "text.secondary",
                      backgroundColor: isActive
                        ? "primary.main"
                        : mode === "dark"
                          ? "rgba(58, 58, 60, 0.6)"
                          : "rgba(242, 242, 247, 0.8)",
                      backdropFilter: "blur(20px)",
                      transition:
                        "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      "&:hover": {
                        transform: "translateY(-0.5px)",
                      },
                    }}
                  >
                    {item.label[0]} {/* First letter only on mobile */}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
