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

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 8, md: 14 },
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          maxWidth: 1120,
          mx: "auto",
          px: { xs: 3, sm: 4, md: 6 },
          py: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "-0.03em",
            color: "text.primary",
          }}
        >
          Bhumika Agarwal
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
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
                fontSize: "0.75rem",
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

        <Typography
          sx={{
            fontFamily: monoFont,
            fontSize: "0.6875rem",
            color: "text.secondary",
            letterSpacing: "0.02em",
            width: { xs: "100%", md: "auto" },
            textAlign: { xs: "left", md: "right" },
          }}
        >
          © {new Date().getFullYear()} · Built with precision.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
