import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ACCENT, accentGlow } from "../theme/theme";
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
  const isDark = theme.palette.mode === "dark";

  return (
    <AppBar position="fixed" elevation={0}>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: theme.palette.divider,
        }}
      />
      <Box
        sx={{
          maxWidth: 1120,
          mx: "auto",
          width: "100%",
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, md: 64 },
            justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <Typography
            component={Link}
            to="/"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              fontSize: "1rem",
              transition: "color 0.2s ease",
              "&:hover": { color: ACCENT },
            }}
          >
            Bhumika Agarwal
          </Typography>

          {/* Nav + CTA + Toggle */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, md: 1 },
            }}
          >
            <Box
              component="nav"
              aria-label="Site navigation"
              sx={{ display: "flex", gap: { xs: 0, md: 0.5 } }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Box
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      px: { xs: 1.25, md: 1.5 },
                      py: 0.75,
                      fontSize: { xs: "0.8125rem", md: "0.875rem" },
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? ACCENT : "text.secondary",
                      textDecoration: "none",
                      borderRadius: "6px",
                      position: "relative",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: ACCENT,
                      },
                      "&:focus-visible": {
                        outline: `2px solid ${ACCENT}`,
                        outlineOffset: 2,
                      },
                      ...(isActive && {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -1,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 18,
                          height: "2px",
                          borderRadius: "1px",
                          backgroundColor: ACCENT,
                        },
                      }),
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Box>

            {/* Blue CTA — matches the design's "Hire Me" pill */}
            <Box
              component={Link}
              to="/contact"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                alignItems: "center",
                ml: 1,
                px: 2,
                py: 0.875,
                borderRadius: "8px",
                backgroundColor: ACCENT,
                color: "#FFFFFF",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                textDecoration: "none",
                boxShadow: `0 4px 14px ${accentGlow(0.3)}`,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: `0 6px 20px ${accentGlow(0.4)}`,
                },
                "&:focus-visible": {
                  outline: `2px solid ${ACCENT}`,
                  outlineOffset: 2,
                },
              }}
            >
              Get in touch
            </Box>

            <IconButton
              onClick={toggleColorMode}
              size="small"
              aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
              sx={{
                color: "text.secondary",
                width: 34,
                height: 34,
                ml: 0.5,
                "&:hover": {
                  color: ACCENT,
                  backgroundColor: isDark ? accentGlow(0.08) : accentGlow(0.06),
                },
                transition: "color 0.2s ease",
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
