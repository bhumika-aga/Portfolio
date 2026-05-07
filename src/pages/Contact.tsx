import { Download, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import SectionLabel from "../components/SectionLabel";
import {
  ACCENT,
  EASE_OUT_EXPO,
  glassBg,
  glassBorder,
  monoFont,
} from "../theme/theme";

const CONTACT_ITEMS = [
  {
    icon: Email,
    label: "bhumika.aga@gmail.com",
    href: "mailto:bhumika.aga@gmail.com",
    external: false,
    meta: "Email",
  },
  {
    icon: LinkedIn,
    label: "linkedin.com/in/bhumika-aga",
    href: "https://linkedin.com/in/bhumika-aga",
    external: true,
    meta: "LinkedIn",
  },
  {
    icon: GitHub,
    label: "github.com/bhumika-aga",
    href: "https://github.com/bhumika-aga",
    external: true,
    meta: "GitHub",
  },
  {
    icon: Download,
    label: "Bhumika_Agarwal_Resume.pdf",
    href: "/Bhumika_Agarwal_Resume.pdf",
    external: false,
    download: "Bhumika_Agarwal_Resume.pdf",
    meta: "Resume",
  },
];

const Contact: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        maxWidth: 720,
        mx: "auto",
        px: { xs: 3, sm: 4 },
        py: { xs: 7, md: 10 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        <SectionLabel>Get in touch</SectionLabel>
        <Typography variant="h2" sx={{ mb: 2, color: "text.primary" }}>
          Contact
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 6, maxWidth: 420 }}
        >
          Open to interesting problems in backend systems, distributed
          architecture, and BFSI.
        </Typography>

        <Box
          sx={{
            ...glassBg(isDark ? "dark" : "light"),
            border: `1px solid ${glassBorder(isDark ? "dark" : "light")}`,
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {CONTACT_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Box
                key={item.href}
                component="a"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                download={item.download}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 2, md: 2.25 },
                  borderBottom:
                    i < CONTACT_ITEMS.length - 1
                      ? `1px solid ${glassBorder(isDark ? "dark" : "light")}`
                      : "none",
                  textDecoration: "none",
                  color: "text.secondary",
                  transition: "color 0.2s ease, background-color 0.2s ease",
                  "&:hover": {
                    color: ACCENT,
                    backgroundColor: isDark
                      ? "rgba(52,211,153,0.035)"
                      : "rgba(52,211,153,0.03)",
                  },
                  "&:focus-visible": {
                    outline: `2px solid ${ACCENT}`,
                    outlineOffset: -2,
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Icon
                    sx={{ fontSize: 16, color: "inherit", flexShrink: 0 }}
                  />
                  <Typography
                    sx={{
                      fontFamily: monoFont,
                      fontSize: { xs: "0.75rem", sm: "0.8125rem" },
                      color: "inherit",
                      letterSpacing: "0.005em",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.6875rem",
                    color: isDark ? "#3A3A3A" : "#C8C8C8",
                    flexShrink: 0,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.meta}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
