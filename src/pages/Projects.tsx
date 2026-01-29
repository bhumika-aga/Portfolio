import { Api, GitHub, Launch } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Project } from "../data/projects";
import { pinnedProjects } from "../services/githubService";

/**
 * Bento grid layout configuration for project cards.
 * Creates an asymmetric, visually interesting layout.
 */
const getBentoLayout = (index: number) => {
  // For 8 projects, use a 4-row layout
  const layouts = [
    // Row 1: Large left + Small right
    {
      gridColumn: { xs: "1", md: "1 / 8" },
      gridRow: { xs: "auto", md: "1 / 3" },
    },
    {
      gridColumn: { xs: "1", md: "8 / 13" },
      gridRow: { xs: "auto", md: "1 / 2" },
    },
    {
      gridColumn: { xs: "1", md: "8 / 13" },
      gridRow: { xs: "auto", md: "2 / 3" },
    },
    // Row 2: Three medium cards
    {
      gridColumn: { xs: "1", md: "1 / 5" },
      gridRow: { xs: "auto", md: "3 / 4" },
    },
    {
      gridColumn: { xs: "1", md: "5 / 9" },
      gridRow: { xs: "auto", md: "3 / 4" },
    },
    {
      gridColumn: { xs: "1", md: "9 / 13" },
      gridRow: { xs: "auto", md: "3 / 4" },
    },
    // Row 3: Two wider cards
    {
      gridColumn: { xs: "1", md: "1 / 7" },
      gridRow: { xs: "auto", md: "4 / 5" },
    },
    {
      gridColumn: { xs: "1", md: "7 / 13" },
      gridRow: { xs: "auto", md: "4 / 5" },
    },
  ];
  return layouts[index] || layouts[3];
};

/**
 * Project card component for individual project display.
 */
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isLargeCard = index === 0;
  const maxTechChips = 4;

  return (
    <Card
      sx={{
        ...getBentoLayout(index),
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(28, 28, 30, 0.9)"
            : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px) saturate(180%)",
        border: (theme) =>
          `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.05)"
          }`,
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        display: "flex",
        flexDirection: "column",
        opacity: 0,
        animation: `slideInUp 0.6s ease-out ${index * 0.1}s forwards`,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 16px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0, 122, 255, 0.2)"
              : "0 16px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 122, 255, 0.15)",
        },
        "@keyframes slideInUp": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {project.featured && (
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            px: 1.5,
            py: 0.5,
            borderRadius: 12,
            background: "rgba(0, 122, 255, 0.9)",
            backdropFilter: "blur(10px)",
            color: "white",
            fontSize: "0.65rem",
            fontWeight: 600,
            zIndex: 2,
          }}
        >
          Featured
        </Box>
      )}
      <CardMedia
        component="img"
        height={isLargeCard ? "200" : "160"}
        image={project.image}
        alt={project.title}
        sx={{
          objectFit: "cover",
          filter: "brightness(0.9) saturate(1.1)",
          transition: "all 0.3s ease",
        }}
      />
      <CardContent
        sx={{
          p: { xs: 2.5, md: 3 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 1.5,
            fontWeight: 600,
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "text.primary",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            color: "text.secondary",
            fontSize: { xs: "0.85rem", md: "0.9rem" },
            lineHeight: 1.5,
            flex: "1 1 auto",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: isLargeCard ? 4 : 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.5,
            mb: 2.5,
            minHeight: "32px",
          }}
        >
          {project.technologies
            .slice(0, maxTechChips)
            .map((tech, techIndex) => (
              <Chip
                key={techIndex}
                label={tech}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  height: 24,
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    transform: "translateY(-1px)",
                  },
                }}
              />
            ))}
          {project.technologies.length > maxTechChips && (
            <Chip
              label={`+${project.technologies.length - maxTechChips}`}
              size="small"
              sx={{
                fontSize: "0.7rem",
                height: 24,
                bgcolor: "transparent",
                border: (theme) => `1px dashed ${theme.palette.text.secondary}`,
                color: "text.secondary",
              }}
            />
          )}
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
          {project.liveUrl ? (
            <>
              <Button
                size="small"
                variant="contained"
                startIcon={<Launch />}
                component="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  flex: 1,
                  fontSize: "0.75rem",
                  py: 0.8,
                  borderRadius: 20,
                  fontWeight: 600,
                }}
              >
                Live Demo
              </Button>
              {project.githubUrl && (
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<GitHub />}
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    flex: 1,
                    fontSize: "0.75rem",
                    py: 0.8,
                    borderRadius: 20,
                    fontWeight: 500,
                  }}
                >
                  GitHub
                </Button>
              )}
            </>
          ) : (
            project.githubUrl && (
              <Button
                size="small"
                variant="contained"
                startIcon={<GitHub />}
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "100%",
                  fontSize: "0.75rem",
                  py: 0.8,
                  borderRadius: 20,
                  fontWeight: 600,
                }}
              >
                View on GitHub
              </Button>
            )
          )}
          {project.apiUrl && (
            <Button
              size="small"
              variant="text"
              startIcon={<Api />}
              component="a"
              href={project.apiUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "0.7rem",
                px: 1,
                py: 0.8,
                minWidth: "auto",
                color: "primary.main",
              }}
            >
              API
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

/**
 * Projects page component displaying portfolio projects in a bento grid layout.
 * Shows only pinned/featured projects from GitHub.
 */
const Projects: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 1,
            color: "primary.main",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            fontSize: { xs: "0.8rem", md: "0.9rem" },
          }}
        >
          Portfolio Showcase
        </Typography>
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            background: (theme) =>
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, #ffffff 0%, #5AC8FA 50%, #007AFF 100%)"
                : "linear-gradient(135deg, #1D1D1F 0%, #007AFF 50%, #5AC8FA 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            maxWidth: 580,
            mx: "auto",
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          Production-ready applications showcasing full-stack development
          expertise, from enterprise hospital systems to utility tools.
        </Typography>
      </Box>

      {/* Projects Bento Grid */}
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
            gridTemplateRows: {
              xs: "auto",
              md: "repeat(3, minmax(280px, auto))",
            },
            gap: { xs: 2.5, md: 3 },
            mb: 3,
          }}
        >
          {pinnedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Box>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mt: { xs: 3, md: 4 } }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "text.primary",
            fontWeight: 600,
          }}
        >
          Interested in exploring more?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: "0.9rem", md: "1rem" },
            color: "text.secondary",
            maxWidth: 480,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Check out my GitHub for additional projects, open-source
          contributions, and code samples from my development journey.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<GitHub />}
          href="https://github.com/bhumika-aga"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            px: { xs: 3, md: 4 },
            py: { xs: 1.2, md: 1.5 },
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontWeight: 600,
            borderRadius: 25,
            boxShadow: "0 4px 12px rgba(0, 122, 255, 0.3)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(0, 122, 255, 0.4)",
            },
          }}
        >
          Explore GitHub Profile
        </Button>
      </Box>
    </Container>
  );
};

export default Projects;
