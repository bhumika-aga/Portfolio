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
  const isDark = theme.palette.mode === "dark";
  const borderColor = isDark ? "#1E1E1E" : "#EBEBEB";

  return (
    <AppBar position="fixed" elevation={0}>
      {/* Bottom border */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: borderColor,
        }}
      />
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
              letterSpacing: "-0.02em",
              fontSize: "0.875rem",
              transition: "color 0.2s ease",
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
                      fontSize: { xs: "0.75rem", md: "0.8125rem" },
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "text.primary" : "text.secondary",
                      textDecoration: "none",
                      borderRadius: "6px",
                      position: "relative",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: isActive ? "text.primary" : ACCENT,
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
                          width: 16,
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

            <IconButton
              onClick={toggleColorMode}
              size="small"
              aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
              sx={{
                color: "text.secondary",
                width: 32,
                height: 32,
                ml: 0.5,
                "&:hover": { color: ACCENT, backgroundColor: "transparent" },
                transition: "color 0.2s ease",
              }}
            >
              {mode === "dark" ? (
                <Brightness7 sx={{ fontSize: 15 }} />
              ) : (
                <Brightness4 sx={{ fontSize: 15 }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
