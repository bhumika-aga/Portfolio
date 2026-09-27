import { ArrowOutward, GitHub, Launch } from "@mui/icons-material";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import { PROJECT_ICONS } from "../components/projectIcons";
import Reveal from "../components/Reveal";
import { orderedProjects, Project } from "../data/projects";
import { ACCENT, accentGlow, monoFont } from "../theme/theme";

const linkSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  fontFamily: monoFont,
  fontSize: "0.6875rem",
  color: "text.secondary",
  textDecoration: "none",
  transition: "color 0.2s ease",
  "&:hover": { color: ACCENT },
};

const LinkRow: React.FC<{ project: Project }> = ({ project }) => (
  <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
    <Box
      component="a"
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} on GitHub`}
      sx={linkSx}
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
        aria-label={`${project.title} live demo`}
        sx={linkSx}
      >
        <Launch sx={{ fontSize: 13 }} />
        Live demo
      </Box>
    )}
  </Box>
);

const Highlights: React.FC<{ items: string[] }> = ({ items }) => (
  <Box component="ul" sx={{ pl: 2.25, m: 0, listStyleType: "disc" }}>
    {items.map((item) => (
      <Box
        key={item}
        component="li"
        sx={{
          "&:not(:last-of-type)": { mb: 0.75 },
          "&::marker": { color: accentGlow(0.6) },
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "0.875rem" }}
        >
          {item}
        </Typography>
      </Box>
    ))}
  </Box>
);

const OpenButton: React.FC<{ project: Project; size: number }> = ({
  project,
  size,
}) => (
  <Box
    component="a"
    href={project.liveUrl ?? project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Open ${project.title}`}
    sx={(theme) => ({
      flexShrink: 0,
      width: size,
      height: size,
      borderRadius: "50%",
      border: `1px solid ${theme.palette.divider}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: ACCENT,
      transition: "background-color 0.2s ease",
      "&:hover": { backgroundColor: accentGlow(0.12) },
    })}
  >
    <ArrowOutward sx={{ fontSize: size / 2 }} />
  </Box>
);

const Projects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const cardBorder = theme.palette.divider;

  const [lead, ...rest] = orderedProjects;

  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
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
        A selection of backend systems, workflow engines, and full stack
        platforms built for reliability.
      </Typography>

      {/* Bento grid: the lead project spans 8 columns, the rest span 4. */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
          gap: 3,
        }}
      >
        <Reveal
          id={lead.id}
          sx={{ gridColumn: { xs: "1 / -1", md: "span 8" } }}
        >
          <Card
            interactive
            sx={{
              height: "100%",
              p: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 2,
                mb: 2,
              }}
            >
              <Box>
                <Typography variant="h3" sx={{ mb: 1, color: "text.primary" }}>
                  {lead.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", maxWidth: 520 }}
                >
                  {lead.tagline}
                </Typography>
              </Box>
              <OpenButton project={lead} size={42} />
            </Box>

            <Highlights items={lead.highlights} />

            {/* Terminal visual */}
            <Box
              sx={{
                mt: 3,
                flex: 1,
                minHeight: 180,
                borderRadius: "12px",
                border: `1px solid ${accentGlow(0.2)}`,
                background: `linear-gradient(135deg, ${accentGlow(isDark ? 0.1 : 0.07)} 0%, ${accentGlow(0.02)} 100%)`,
                p: { xs: 2.5, md: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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

              {lead.terminalLines && (
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
                  {lead.terminalLines.map((line) => (
                    <Box key={line}>{line}</Box>
                  ))}
                </Box>
              )}

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}>
                {lead.tech.map((t) => (
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

            <LinkRow project={lead} />
          </Card>
        </Reveal>

        {rest.map((project, i) => {
          const Icon = PROJECT_ICONS[project.icon];
          return (
            <Reveal
              key={project.id}
              id={project.id}
              delay={50 + i * 60}
              sx={{ gridColumn: { xs: "1 / -1", md: "span 4" } }}
            >
              <Card
                interactive
                sx={{
                  height: "100%",
                  p: { xs: 2.5, md: 3 },
                  display: "flex",
                  flexDirection: "column",
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
                  <OpenButton project={project} size={32} />
                </Box>

                <Typography variant="h4" sx={{ mb: 1, color: "text.primary" }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {project.tagline}
                </Typography>

                <Box sx={{ mb: 2.5 }}>
                  <Highlights items={project.highlights} />
                </Box>

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
              </Card>
            </Reveal>
          );
        })}
      </Box>
    </Container>
  );
};

export default Projects;
