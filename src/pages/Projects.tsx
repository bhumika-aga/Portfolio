import { GitHub, Launch } from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { projects } from "../data/projects";
import { ACCENT, monoFont } from "../theme/theme";

const Projects: React.FC = () => {
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
        <Typography variant="h2" sx={{ mb: 4, color: "text.primary" }}>
          Projects
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Box
              sx={{
                border: `1px solid ${borderColor}`,
                borderRadius: "4px",
                p: { xs: 2.5, md: 3 },
                transition: "border-color 0.15s ease",
                "&:hover": { borderColor: ACCENT },
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                  gap: 2,
                }}
              >
                <Typography variant="h3" sx={{ color: "text.primary" }}>
                  {project.title}
                </Typography>
                <Box sx={{ display: "flex", gap: 0.5, flexShrink: 0 }}>
                  {project.githubUrl && (
                    <IconButton
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      size="small"
                      sx={{
                        color: "text.secondary",
                        "&:hover": { color: ACCENT },
                        transition: "color 0.15s ease",
                      }}
                    >
                      <GitHub fontSize="small" />
                    </IconButton>
                  )}
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
                        "&:hover": { color: ACCENT },
                        transition: "color 0.15s ease",
                      }}
                    >
                      <Launch fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              </Box>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 2.5, lineHeight: 1.65 }}
              >
                {project.description}
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {/* Tech */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {project.tech.map((t) => (
                  <Chip key={t} label={t} size="small" />
                ))}
              </Box>

              {/* Links row */}
              {(project.githubUrl || project.liveUrl) && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 2.5,
                  }}
                >
                  {project.githubUrl && (
                    <Box
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontFamily: monoFont,
                        fontSize: "0.75rem",
                        color: "text.secondary",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color 0.15s ease",
                        "&:hover": { color: ACCENT },
                      }}
                    >
                      <GitHub sx={{ fontSize: 14 }} />
                      GitHub
                    </Box>
                  )}
                  {project.liveUrl && (
                    <Box
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontFamily: monoFont,
                        fontSize: "0.75rem",
                        color: "text.secondary",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        transition: "color 0.15s ease",
                        "&:hover": { color: ACCENT },
                      }}
                    >
                      <Launch sx={{ fontSize: 14 }} />
                      Live
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
