import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { ACCENT, monoFont } from "../theme/theme";

const LINKS = [
  { label: "GitHub", href: "https://github.com/bhumika-aga" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bhumika-aga" },
  { label: "Email", href: "mailto:bhumika.aga@gmail.com" },
];

const Footer: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const borderColor = isDark ? "#1E1E1E" : "#EBEBEB";

  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid ${borderColor}`,
      }}
    >
      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          px: { xs: 3, sm: 4 },
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: monoFont,
            fontSize: "0.6875rem",
            color: "text.secondary",
            letterSpacing: "0.02em",
          }}
        >
          © {new Date().getFullYear()} Bhumika Agarwal
        </Typography>

        <Box sx={{ display: "flex", gap: 2.5 }}>
          {LINKS.map((link) => (
            <Box
              key={link.label}
              component="a"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              sx={{
                fontFamily: monoFont,
                fontSize: "0.6875rem",
                letterSpacing: "0.02em",
                color: "text.secondary",
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": { color: ACCENT },
                "&:focus-visible": {
                  outline: `2px solid ${ACCENT}`,
                  outlineOffset: 2,
                  borderRadius: "2px",
                },
              }}
            >
              {link.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
