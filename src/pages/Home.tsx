import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ACCENT, monoFont } from "../theme/theme";

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

const Home: React.FC = () => {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#262626" : "#E5E5E5";

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 720,
          mx: "auto",
          px: { xs: 3, sm: 4 },
          py: { xs: 6, md: 10 },
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Typography
            variant="caption"
            component="p"
            sx={{
              fontFamily: monoFont,
              color: ACCENT,
              mb: 2,
              display: "block",
            }}
          >
            Software Engineer II at JPMorgan Chase
          </Typography>

          <Typography
            variant="h1"
            sx={{
              mb: 2,
              color: "text.primary",
            }}
          >
            Bhumika Agarwal
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 4,
              maxWidth: 520,
            }}
          >
            Backend systems, workflow orchestration, and BFSI modernization.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0,
              borderTop: `1px solid ${borderColor}`,
              borderLeft: `1px solid ${borderColor}`,
              width: "fit-content",
            }}
          >
            {LINKS.map((link) => (
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
                  py: 1,
                  fontFamily: monoFont,
                  fontSize: "0.8125rem",
                  color: "text.secondary",
                  textDecoration: "none",
                  borderRight: `1px solid ${borderColor}`,
                  borderBottom: `1px solid ${borderColor}`,
                  display: "block",
                  transition: "color 0.15s ease, border-color 0.15s ease",
                  "&:hover": {
                    color: ACCENT,
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
      </Box>
    </Box>
  );
};

export default Home;
