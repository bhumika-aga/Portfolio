import { ArrowForward, ArrowOutward } from "@mui/icons-material";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_ICONS } from "../components/projectIcons";
import { projects } from "../data/projects";
import { ACCENT, accentGlow, EASE_OUT_EXPO, monoFont } from "../theme/theme";

const CORE_STACK = [
  { label: "Backend Architecture", value: "Java · Spring Boot · Camunda 7" },
  {
    label: "Data & Persistence",
    value: "PostgreSQL · MySQL · Hibernate / JPA",
  },
  { label: "Cloud & DevOps", value: "AWS · Terraform · Docker" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

const CONTAINER = {
  maxWidth: 1120,
  mx: "auto",
  px: { xs: 3, sm: 4, md: 6 },
};

const Home: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const cardBorder = theme.palette.divider;
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "auto", md: "72vh" },
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background: isDark
              ? `radial-gradient(ellipse 70% 45% at 20% -10%, ${accentGlow(0.16)} 0%, transparent 62%)`
              : `radial-gradient(ellipse 70% 45% at 20% -10%, ${accentGlow(0.1)} 0%, transparent 62%)`,
            pointerEvents: "none",
          }}
        />

        <Box sx={{ ...CONTAINER, width: "100%", position: "relative" }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 3,
                  px: 1.75,
                  py: 0.75,
                  borderRadius: "999px",
                  border: `1px solid ${cardBorder}`,
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.6)",
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: ACCENT,
                    boxShadow: `0 0 0 3px ${accentGlow(0.2)}`,
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "text.secondary",
                    letterSpacing: "0.02em",
                  }}
                >
                  Software Engineer II · JPMorgan Chase
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h1" sx={{ maxWidth: 820, mb: 3 }}>
                Building the{" "}
                <Box component="span" sx={{ color: ACCENT }}>
                  backbone
                </Box>{" "}
                of financial systems.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                sx={{
                  color: "text.secondary",
                  fontWeight: 400,
                  maxWidth: 620,
                  mb: 5,
                  lineHeight: 1.5,
                }}
              >
                I design and architect scalable backend systems — workflow
                orchestration, distributed services, and BFSI modernization.
                Minimalist in approach, robust in execution.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Box
                  component={Link}
                  to="/projects"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 3,
                    py: 1.5,
                    borderRadius: "10px",
                    backgroundColor: ACCENT,
                    color: "#FFFFFF",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: `0 4px 14px ${accentGlow(0.3)}`,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      boxShadow: `0 6px 20px ${accentGlow(0.42)}`,
                    },
                  }}
                >
                  View Projects
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Box>

                <Box
                  component="a"
                  href="/Bhumika_Agarwal_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    px: 3,
                    py: 1.5,
                    borderRadius: "10px",
                    border: `1px solid ${cardBorder}`,
                    color: "text.primary",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                    "&:hover": { borderColor: ACCENT, color: ACCENT },
                  }}
                >
                  Read Résumé
                </Box>
              </Box>
            </motion.div>
          </motion.div>
        </Box>
      </Box>

      {/* ── Featured Work ── */}
      <Box sx={{ ...CONTAINER, py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 5,
            pb: 2,
            borderBottom: `1px solid ${accentGlow(isDark ? 0.24 : 0.2)}`,
          }}
        >
          <Typography variant="h2">Featured Work</Typography>
          <Box
            component={Link}
            to="/projects"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              alignItems: "center",
              gap: 0.5,
              fontFamily: monoFont,
              fontSize: "0.8125rem",
              color: "text.secondary",
              textDecoration: "none",
              transition: "color 0.2s ease",
              "&:hover": { color: ACCENT },
            }}
          >
            All projects
            <ArrowForward sx={{ fontSize: 15 }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            gap: 3,
          }}
        >
          {featured.map((project, i) => {
            const Icon = PROJECT_ICONS[project.icon];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE_OUT_EXPO,
                  delay: i * 0.08,
                }}
                style={{ height: "100%" }}
              >
                <Box
                  component={Link}
                  to="/projects"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "16px",
                    border: `1px solid ${cardBorder}`,
                    backgroundColor: "background.paper",
                    overflow: "hidden",
                    textDecoration: "none",
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: accentGlow(0.5),
                      boxShadow: `0 12px 40px ${accentGlow(isDark ? 0.16 : 0.14)}`,
                    },
                  }}
                >
                  {/* Accent panel with icon */}
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 150, md: 190 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(135deg, ${accentGlow(isDark ? 0.14 : 0.1)} 0%, ${accentGlow(0.03)} 100%)`,
                      borderBottom: `1px solid ${cardBorder}`,
                    }}
                  >
                    <Icon sx={{ fontSize: 52, color: ACCENT, opacity: 0.9 }} />
                    <ArrowOutward
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontSize: 20,
                        color: ACCENT,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      flex: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                      {project.tech.slice(0, 3).map((t) => (
                        <Chip key={t} label={t} size="small" />
                      ))}
                    </Box>
                    <Typography variant="h3" sx={{ color: "text.primary" }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {project.tagline}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Box>

      {/* ── Core Stack ── */}
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: isDark
            ? "rgba(255,255,255,0.015)"
            : "rgba(0,0,0,0.012)",
        }}
      >
        <Box
          sx={{
            ...CONTAINER,
            py: { xs: 6, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Typography variant="h2" sx={{ alignSelf: "start" }}>
            Core Stack
          </Typography>

          <Box>
            {CORE_STACK.map((row) => (
              <Box
                key={row.label}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                  py: 3,
                  borderBottom: `1px solid ${accentGlow(isDark ? 0.18 : 0.16)}`,
                  transition: "color 0.25s ease",
                  cursor: "default",
                  "&:hover .stack-label, &:hover .stack-value": {
                    color: ACCENT,
                  },
                }}
              >
                <Typography
                  className="stack-label"
                  variant="h4"
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    transition: "color 0.25s ease",
                  }}
                >
                  {row.label}
                </Typography>
                <Typography
                  className="stack-value"
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.8125rem",
                    color: "text.secondary",
                    transition: "color 0.25s ease",
                  }}
                >
                  {row.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
