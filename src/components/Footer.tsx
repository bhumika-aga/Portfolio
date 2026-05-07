import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import { ACCENT, monoFont } from "../theme/theme";

const LINKS = [
  { label: "GitHub", href: "https://github.com/bhumika-aga" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bhumika-aga" },
  { label: "Email", href: "mailto:bhumika.aga@gmail.com" },
];

const Footer: React.FC = () => {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#262626" : "#E5E5E5";

  return (
    <Box component="footer">
      <Divider />
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
            fontSize: "0.75rem",
            color: "text.secondary",
          }}
        >
          © {new Date().getFullYear()} Bhumika Agarwal
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 0,
            borderLeft: `1px solid ${borderColor}`,
          }}
        >
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
                px: 2,
                py: 0.5,
                fontFamily: monoFont,
                fontSize: "0.75rem",
                color: "text.secondary",
                textDecoration: "none",
                borderRight: `1px solid ${borderColor}`,
                transition: "color 0.15s ease",
                "&:hover": { color: ACCENT },
                "&:focus-visible": {
                  outline: `2px solid ${ACCENT}`,
                  outlineOffset: -1,
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
