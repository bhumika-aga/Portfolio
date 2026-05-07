import { Download, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ACCENT, monoFont } from "../theme/theme";

const CONTACT_ITEMS = [
  {
    icon: Email,
    label: "bhumika.aga@gmail.com",
    href: "mailto:bhumika.aga@gmail.com",
    external: false,
  },
  {
    icon: LinkedIn,
    label: "linkedin.com/in/bhumika-aga",
    href: "https://linkedin.com/in/bhumika-aga",
    external: true,
  },
  {
    icon: GitHub,
    label: "github.com/bhumika-aga",
    href: "https://github.com/bhumika-aga",
    external: true,
  },
  {
    icon: Download,
    label: "Download resume",
    href: "/Bhumika_Agarwal_Resume.pdf",
    external: false,
    download: "Bhumika_Agarwal_Resume.pdf",
  },
];

const Contact: React.FC = () => {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#262626" : "#E5E5E5";

  return (
    <Box
      sx={{
        maxWidth: 720,
        mx: "auto",
        px: { xs: 3, sm: 4 },
        py: { xs: 6, md: 8 },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Typography variant="h2" sx={{ mb: 2, color: "text.primary" }}>
          Contact
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 5 }}>
          Open to interesting problems in backend systems, distributed
          architecture, and BFSI.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${borderColor}`,
            borderRadius: "4px",
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
                  gap: 2,
                  px: 3,
                  py: 2,
                  borderBottom:
                    i < CONTACT_ITEMS.length - 1
                      ? `1px solid ${borderColor}`
                      : "none",
                  textDecoration: "none",
                  color: "text.secondary",
                  transition: "color 0.15s ease, background-color 0.15s ease",
                  "&:hover": {
                    color: ACCENT,
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "rgba(52, 211, 153, 0.04)"
                        : "rgba(52, 211, 153, 0.03)",
                  },
                  "&:focus-visible": {
                    outline: `2px solid ${ACCENT}`,
                    outlineOffset: -2,
                  },
                }}
              >
                <Icon
                  sx={{ fontSize: 18, color: "text.secondary", flexShrink: 0 }}
                />
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.8125rem",
                    color: "inherit",
                  }}
                >
                  {item.label}
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
