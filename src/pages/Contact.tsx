import { Download, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import SectionLabel from "../components/SectionLabel";
import { RESUME_URL, SITE } from "../data/site";
import { ACCENT, accentGlow, EASE_OUT_EXPO, monoFont } from "../theme/theme";

const CONTACT_ITEMS = [
  {
    icon: Email,
    label: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
    meta: "Email",
  },
  {
    icon: LinkedIn,
    label: SITE.linkedin.replace("https://", ""),
    href: SITE.linkedin,
    external: true,
    meta: "LinkedIn",
  },
  {
    icon: GitHub,
    label: SITE.github.replace("https://", ""),
    href: SITE.github,
    external: true,
    meta: "GitHub",
  },
  {
    icon: Download,
    label: SITE.resumeFile,
    href: RESUME_URL,
    external: false,
    download: SITE.resumeFile,
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
            backgroundColor: "background.paper",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: "16px",
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
                      ? `1px solid ${theme.palette.divider}`
                      : "none",
                  textDecoration: "none",
                  color: "text.secondary",
                  transition: "color 0.2s ease, background-color 0.2s ease",
                  "&:hover": {
                    color: ACCENT,
                    backgroundColor: accentGlow(isDark ? 0.05 : 0.035),
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
                    color: "text.secondary",
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
