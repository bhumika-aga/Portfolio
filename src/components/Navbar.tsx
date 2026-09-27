import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { SITE } from "../data/site";
import { ROUTES } from "../routes";
import { ACCENT, accentGlow } from "../theme/theme";
import { useThemeMode } from "../theme/useThemeMode";
import Container from "./Container";

const NAV_ITEMS = [
  { label: "Home", path: ROUTES.home },
  { label: "About", path: ROUTES.about },
  { label: "Projects", path: ROUTES.projects },
  { label: "Notes", path: ROUTES.notes },
  { label: "Contact", path: ROUTES.contact },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  // GitHub Pages redirects /about → /about/, so ignore trailing slashes.
  const pathname = location.pathname.replace(/\/+$/, "") || "/";
  const { mode, toggleColorMode } = useThemeMode();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

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
      <Container>
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
            to={ROUTES.home}
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              fontSize: "1rem",
              whiteSpace: "nowrap",
              transition: "color 0.2s ease",
              "&:hover": { color: ACCENT },
            }}
          >
            {SITE.name}
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
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: { sm: 0, md: 0.5 },
              }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
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

            {/* CTA pill. Only from md up, since Contact is already in the nav. */}
            <Box
              component={Link}
              to={ROUTES.contact}
              sx={{
                display: { xs: "none", md: "inline-flex" },
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

            {/* Phones: the inline links don't fit beside the name, so collapse them. */}
            <IconButton
              onClick={(e) => setMenuAnchor(e.currentTarget)}
              size="small"
              aria-label="Open navigation menu"
              aria-controls={menuAnchor ? "nav-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(menuAnchor)}
              sx={{
                display: { xs: "inline-flex", sm: "none" },
                color: "text.secondary",
                width: 34,
                height: 34,
              }}
            >
              <MenuIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={() => setMenuAnchor(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              slotProps={{ paper: { sx: { minWidth: 180, mt: 1 } } }}
            >
              {NAV_ITEMS.map((item) => (
                <MenuItem
                  key={item.path}
                  component={Link}
                  to={item.path}
                  selected={pathname === item.path}
                  onClick={() => setMenuAnchor(null)}
                  sx={{ fontSize: "0.9375rem" }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
