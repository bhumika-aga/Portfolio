import { ArrowOutward, GitHub, Launch } from "@mui/icons-material";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { PROJECT_ICONS } from "../components/projectIcons";
import { Project, projects } from "../data/projects";
import { ACCENT, accentGlow, EASE_OUT_EXPO, monoFont } from "../theme/theme";

const CONTAINER = {
  maxWidth: 1120,
  mx: "auto",
  px: { xs: 3, sm: 4, md: 6 },
};

const cardHover = (isDark: boolean) => ({
  transition:
    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: accentGlow(0.5),
    boxShadow: `0 12px 40px ${accentGlow(isDark ? 0.16 : 0.14)}`,
  },
});

const LinkRow: React.FC<{ project: Project }> = ({ project }) => (
  <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
    <Box
      component="a"
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      aria-label={`${project.title} on GitHub`}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        fontFamily: monoFont,
        fontSize: "0.6875rem",
        color: "text.secondary",
        textDecoration: "none",
        transition: "color 0.2s ease",
        "&:hover": { color: ACCENT },
      }}
    >
      <GitHub sx={{ fontSize: 13 }} />
      Code
    </Box>
    {project.liveUrl && (
      <Box
        component="a"
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        aria-label={`${project.title} live demo`}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
          fontFamily: monoFont,
          fontSize: "0.6875rem",
          color: "text.secondary",
          textDecoration: "none",
          transition: "color 0.2s ease",
          "&:hover": { color: ACCENT },
        }}
      >
        <Launch sx={{ fontSize: 13 }} />
        Live demo
      </Box>
    )}
  </Box>
);

const Projects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const cardBorder = theme.palette.divider;

  const [featured, ...rest] = projects;

  return (
    <Box sx={{ ...CONTAINER, py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 2 }}
        >
          Systems &amp; Architecture
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            color: "text.secondary",
            maxWidth: 560,
            mb: { xs: 5, md: 8 },
            lineHeight: 1.5,
          }}
        >
          A curated selection of backend systems, workflow engines, and
          full-stack platforms built for reliability at scale.
        </Typography>
      </motion.div>

      {/* Bento grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
          gap: 3,
        }}
      >
        {/* Featured card with terminal */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          sx={{ gridColumn: { xs: "1 / -1", md: "span 8" } }}
        >
          <Box
            sx={{
              height: "100%",
              borderRadius: "16px",
              border: `1px solid ${cardBorder}`,
              backgroundColor: "background.paper",
              p: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              ...cardHover(isDark),
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              <Box>
                <Typography variant="h3" sx={{ mb: 1, color: "text.primary" }}>
                  {featured.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", maxWidth: 460 }}
                >
                  {featured.description.split(". ")[0]}.
                </Typography>
              </Box>
              <Box
                component="a"
                href={featured.liveUrl ?? featured.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${featured.title}`}
                sx={{
                  flexShrink: 0,
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: `1px solid ${cardBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: ACCENT,
                  transition: "background-color 0.2s ease",
                  "&:hover": { backgroundColor: accentGlow(0.12) },
                }}
              >
                <ArrowOutward sx={{ fontSize: 20 }} />
              </Box>
            </Box>

            {/* Terminal visual */}
            <Box
              sx={{
                mt: 3,
                flex: 1,
                minHeight: 200,
                borderRadius: "12px",
                border: `1px solid ${accentGlow(0.2)}`,
                background: `linear-gradient(135deg, ${accentGlow(isDark ? 0.1 : 0.07)} 0%, ${accentGlow(0.02)} 100%)`,
                p: { xs: 2.5, md: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                {[0, 1, 2].map((d) => (
                  <Box
                    key={d}
                    sx={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      backgroundColor: accentGlow(0.45),
                    }}
                  />
                ))}
              </Box>

              <Box
                sx={{
                  fontFamily: monoFont,
                  fontSize: { xs: "0.75rem", md: "0.8125rem" },
                  lineHeight: 1.9,
                  color: ACCENT,
                  pl: 2,
                  borderLeft: `2px solid ${accentGlow(0.3)}`,
                  mb: "auto",
                }}
              >
                {featured.terminalLines?.map((line) => (
                  <Box key={line}>{line}</Box>
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mt: 3,
                }}
              >
                {featured.tech.map((t) => (
                  <Box
                    key={t}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      backgroundColor: "background.paper",
                      border: `1px solid ${cardBorder}`,
                      fontFamily: monoFont,
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      color: ACCENT,
                    }}
                  >
                    {t}
                  </Box>
                ))}
              </Box>
            </Box>

            <LinkRow project={featured} />
          </Box>
        </Box>

        {/* Remaining cards — first sits beside the featured (span 4), rest wrap below */}
        {rest.map((project, i) => {
          const Icon = PROJECT_ICONS[project.icon];
          return (
            <Box
              key={project.id}
              component={motion.div}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: EASE_OUT_EXPO,
                delay: 0.05 + i * 0.06,
              }}
              sx={{ gridColumn: { xs: "1 / -1", md: "span 4" } }}
            >
              <Box
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  border: `1px solid ${cardBorder}`,
                  backgroundColor: "background.paper",
                  p: { xs: 2.5, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  ...cardHover(isDark),
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Icon sx={{ fontSize: 30, color: "text.primary" }} />
                  <Box
                    component="a"
                    href={project.liveUrl ?? project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: ACCENT,
                      transition: "background-color 0.2s ease",
                      "&:hover": { backgroundColor: accentGlow(0.12) },
                    }}
                  >
                    <ArrowOutward sx={{ fontSize: 18 }} />
                  </Box>
                </Box>

                <Typography variant="h4" sx={{ mb: 1, color: "text.primary" }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2.5, lineHeight: 1.6 }}
                >
                  {project.tagline}
                </Typography>

                <Box
                  sx={{
                    mt: "auto",
                    pt: 2,
                    borderTop: `1px solid ${cardBorder}`,
                  }}
                >
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {project.tech.slice(0, 4).map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Box>
                  <LinkRow project={project} />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
