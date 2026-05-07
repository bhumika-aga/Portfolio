import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ACCENT } from "../theme/theme";
import { useThemeMode } from "../theme/useThemeMode";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const { mode, toggleColorMode } = useThemeMode();
  const theme = useTheme();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const borderColor = theme.palette.mode === "dark" ? "#262626" : "#E5E5E5";

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        borderBottom: scrolled
          ? `1px solid ${borderColor}`
          : "1px solid transparent",
        transition: "border-color 0.2s ease",
      }}
    >
      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          width: "100%",
          px: { xs: 3, sm: 4 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 48, md: 56 },
            justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <Typography
            component={Link}
            to="/"
            variant="subtitle1"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              transition: "color 0.15s ease",
              "&:hover": { color: ACCENT },
            }}
          >
            Bhumika Agarwal
          </Typography>

          {/* Nav + Toggle */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
            }}
          >
            <Box
              component="nav"
              aria-label="Site navigation"
              sx={{ display: "flex", gap: { xs: 0.5, md: 1 } }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Box
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      px: { xs: 1, md: 1.5 },
                      py: 0.5,
                      fontSize: { xs: "0.75rem", md: "0.8125rem" },
                      fontWeight: 500,
                      color: isActive ? "text.primary" : "text.secondary",
                      textDecoration: "none",
                      borderRadius: "4px",
                      transition: "color 0.15s ease",
                      "&:hover": { color: isActive ? "text.primary" : ACCENT },
                      "&:focus-visible": {
                        outline: `2px solid ${ACCENT}`,
                        outlineOffset: 2,
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Box>

            <IconButton
              onClick={toggleColorMode}
              size="small"
              aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
              sx={{
                color: "text.secondary",
                width: 32,
                height: 32,
                "&:hover": { color: ACCENT },
                transition: "color 0.15s ease",
              }}
            >
              {mode === "dark" ? (
                <Brightness7 sx={{ fontSize: 16 }} />
              ) : (
                <Brightness4 sx={{ fontSize: 16 }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
