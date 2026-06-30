import { GitHub, KeyboardArrowDown, Launch } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import { projects } from "../data/projects";
import { ACCENT, EASE_OUT_EXPO, monoFont } from "../theme/theme";

const Projects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const borderColor = isDark ? "#1E1E1E" : "#E8E8E8";

  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
        <SectionLabel>Work</SectionLabel>
        <Typography variant="h2" sx={{ mb: 6, color: "text.primary" }}>
          Projects
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {projects.map((project, i) => {
          const isExpanded = expandedIds.has(project.id);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: EASE_OUT_EXPO,
                delay: i * 0.07,
              }}
            >
              <Box
                sx={{
                  border: `1px solid ${isExpanded ? ACCENT : borderColor}`,
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition:
                    "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    borderColor: ACCENT,
                    transform: "translateY(-2px)",
                    boxShadow: isDark
                      ? "0 10px 30px -12px rgba(52,211,153,0.22)"
                      : "0 10px 30px -14px rgba(52,211,153,0.28)",
                  },
                }}
              >
                {/* ── Always-visible header ── */}
                <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 0.75,
                      gap: 2,
                    }}
                  >
                    <Typography variant="h3" sx={{ color: "text.primary" }}>
                      {project.title}
                    </Typography>

                    {/* Icon links */}
                    <Box
                      sx={{ display: "flex", gap: 0, flexShrink: 0, mt: -0.5 }}
                    >
                      <IconButton
                        component="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        size="small"
                        sx={{
                          color: "text.secondary",
                          transition: "color 0.2s ease",
                          "&:hover": {
                            color: ACCENT,
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        <GitHub sx={{ fontSize: 16 }} />
                      </IconButton>

                      {project.liveUrl && (
                        <IconButton
                          component="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          size="small"
                          sx={{
                            color: "text.secondary",
                            transition: "color 0.2s ease",
                            "&:hover": {
                              color: ACCENT,
                              backgroundColor: "transparent",
                            },
                          }}
                        >
                          <Launch sx={{ fontSize: 16 }} />
                        </IconButton>
                      )}
                    </Box>
                  </Box>

                  {/* Tagline */}
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 2.5, lineHeight: 1.55 }}
                  >
                    {project.tagline}
                  </Typography>

                  {/* Tech chips */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {project.tech.map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Box>
                </Box>

                {/* ── Expandable detail section ── */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                      style={{ overflow: "hidden" }}
                    >
                      <Box
                        sx={{
                          px: { xs: 2.5, md: 3 },
                          pb: { xs: 2.5, md: 3 },
                          pt: 0,
                          borderTop: `1px solid ${borderColor}`,
                          mt: 0,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.7,
                            mt: 2.5,
                            mb: 2.5,
                          }}
                        >
                          {project.description}
                        </Typography>

                        <Box
                          component="ul"
                          sx={{
                            pl: 2.5,
                            m: 0,
                            listStyleType: "disc",
                          }}
                        >
                          {project.highlights.map((h, hi) => (
                            <Box
                              key={hi}
                              component="li"
                              sx={{
                                mb: hi < project.highlights.length - 1 ? 1 : 0,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "text.secondary",
                                  lineHeight: 1.65,
                                }}
                              >
                                {h}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        {/* Text links */}
                        <Box sx={{ display: "flex", gap: 3, mt: 2.5 }}>
                          <Box
                            component="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              fontFamily: monoFont,
                              fontSize: "0.6875rem",
                              letterSpacing: "0.02em",
                              color: "text.secondary",
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              gap: 0.75,
                              transition: "color 0.2s ease",
                              "&:hover": { color: ACCENT },
                            }}
                          >
                            <GitHub sx={{ fontSize: 13 }} />
                            GitHub
                          </Box>

                          {project.liveUrl && (
                            <Box
                              component="a"
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                fontFamily: monoFont,
                                fontSize: "0.6875rem",
                                letterSpacing: "0.02em",
                                color: "text.secondary",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: 0.75,
                                transition: "color 0.2s ease",
                                "&:hover": { color: ACCENT },
                              }}
                            >
                              <Launch sx={{ fontSize: 13 }} />
                              Live demo
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Toggle strip ── */}
                <Box
                  component="button"
                  onClick={() => toggle(project.id)}
                  aria-expanded={isExpanded}
                  aria-label={
                    isExpanded
                      ? `Collapse ${project.title} details`
                      : `Expand ${project.title} details`
                  }
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                    py: 1,
                    px: 3,
                    background: "none",
                    border: "none",
                    borderTop: `1px solid ${borderColor}`,
                    cursor: "pointer",
                    color: "text.secondary",
                    fontFamily: monoFont,
                    fontSize: "0.6875rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    "&:hover": {
                      color: ACCENT,
                      backgroundColor: isDark
                        ? "rgba(52,211,153,0.03)"
                        : "rgba(52,211,153,0.03)",
                    },
                    "&:focus-visible": {
                      outline: `2px solid ${ACCENT}`,
                      outlineOffset: -2,
                    },
                  }}
                >
                  {isExpanded ? "Hide details" : "Show details"}
                  <KeyboardArrowDown
                    sx={{
                      fontSize: 14,
                      transition: "transform 0.25s ease",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
