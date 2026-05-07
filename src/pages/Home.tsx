import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import {
  ACCENT,
  EASE_OUT_EXPO,
  glassBg,
  glassBorder,
  monoFont,
} from "../theme/theme";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/bhumika-aga",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bhumika-aga",
    external: true,
  },
  { label: "Email", href: "mailto:bhumika.aga@gmail.com", external: false },
  {
    label: "Resume",
    href: "/Bhumika_Agarwal_Resume.pdf",
    external: false,
    download: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
    },
  },
};

const Home: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow layers */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `radial-gradient(ellipse 75% 45% at 50% -10%, rgba(52,211,153,0.13) 0%, transparent 65%),
               radial-gradient(ellipse 50% 35% at 15% 80%, rgba(52,211,153,0.05) 0%, transparent 60%)`
            : `radial-gradient(ellipse 75% 45% at 50% -10%, rgba(52,211,153,0.14) 0%, transparent 65%),
               radial-gradient(ellipse 50% 35% at 15% 80%, rgba(52,211,153,0.07) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          px: { xs: 3, sm: 4 },
          py: { xs: 8, md: 14 },
          width: "100%",
          position: "relative",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pre-label */}
          <motion.div variants={itemVariants}>
            <Typography
              component="p"
              sx={{
                fontFamily: monoFont,
                fontSize: "0.75rem",
                color: ACCENT,
                mb: 3,
                display: "block",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Software Engineer II · JPMorgan Chase
            </Typography>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                color: "text.primary",
              }}
            >
              Bhumika
              <br />
              Agarwal
            </Typography>
          </motion.div>

          {/* Positioning */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: { xs: 5, md: 7 },
                maxWidth: 440,
                lineHeight: 1.6,
              }}
            >
              Backend systems, workflow orchestration,
              <br />
              and BFSI modernization.
            </Typography>
          </motion.div>

          {/* Link strip */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0,
                width: "fit-content",
                borderRadius: "10px",
                overflow: "hidden",
                ...glassBg(isDark ? "dark" : "light"),
                border: `1px solid ${glassBorder(isDark ? "dark" : "light")}`,
              }}
            >
              {LINKS.map((link, i) => (
                <Box
                  key={link.label}
                  component="a"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  download={
                    link.download ? "Bhumika_Agarwal_Resume.pdf" : undefined
                  }
                  sx={{
                    px: 2.5,
                    py: 1.125,
                    fontFamily: monoFont,
                    fontSize: "0.75rem",
                    letterSpacing: "0.01em",
                    color: "text.secondary",
                    textDecoration: "none",
                    borderRight:
                      i < LINKS.length - 1
                        ? `1px solid ${glassBorder(isDark ? "dark" : "light")}`
                        : "none",
                    display: "block",
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    "&:hover": {
                      color: ACCENT,
                      backgroundColor: isDark
                        ? "rgba(52,211,153,0.06)"
                        : "rgba(52,211,153,0.05)",
                    },
                    "&:focus-visible": {
                      outline: `2px solid ${ACCENT}`,
                      outlineOffset: -2,
                    },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
