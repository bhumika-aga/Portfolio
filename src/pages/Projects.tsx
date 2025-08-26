import { GitHub, Launch } from "@mui/icons-material";
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

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Hospital Management System",
      description:
        "A production-ready Hospital Management System enabling secure patient management, treatment planning, and insurance claim processing for multi-specialty hospitals. Features JWT-based authentication and role-based access control.",
      image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=500&q=60",
      technologies: [
        "Java 17",
        "Spring Boot",
        "React",
        "MySQL",
        "JWT",
        "Material-UI",
      ],
      liveUrl: "https://healthsync-portal.onrender.com",
      githubUrl: "https://github.com/bhumika-aga",
    },
    {
      id: 2,
      title: "Movie Review Platform",
      description:
        "A full-stack IMDb-style movie review platform with optimized backend and responsive UI. Integrated TMDb API & YouTube trailers with JWT-based authentication and role-based access control.",
      image:
        "https://images.unsplash.com/photo-1489599510159-3fbb6d9b38e2?auto=format&fit=crop&w=500&q=60",
      technologies: [
        "Java 17",
        "Spring Boot",
        "React 19",
        "MongoDB",
        "TypeScript",
        "TMDb API",
      ],
      liveUrl: "https://reelcriticapp.onrender.com/",
      githubUrl: "https://github.com/bhumika-aga",
    },
    {
      id: 3,
      title: "Pharmaceutical Benefit Management System",
      description:
        "A comprehensive pharmaceutical benefit management system using microservices architecture with 5 Spring Boot back-end services and React 18 + TypeScript front-end, improving modularity and maintainability.",
      image:
        "https://images.unsplash.com/photo-1551601651-e7d14c8d5bb3?auto=format&fit=crop&w=500&q=60",
      technologies: [
        "Spring Boot",
        "React 18",
        "TypeScript",
        "Microservices",
        "Docker",
        "JWT",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/bhumika-aga",
    },
    {
      id: 4,
      title: "Trading System APIs",
      description:
        "Developed secure REST endpoints with Access Token validation and Role-based Entitlements for JP Morgan's trading platform, increasing API security and compliance by 35%. Built with Spring Boot and React.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=500&q=60",
      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "Angular",
        "JWT",
        "JUnit",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Core Banking APIs",
      description:
        "Developed Spring Boot REST APIs for core banking modules at Cognizant, improving response times by 30% through query optimization. Implemented JWT authentication and Role-Based Access Control.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=60",
      technologies: [
        "Spring Boot",
        "Spring Data JPA",
        "JWT",
        "JUnit",
        "Mockito",
        "MySQL",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles. Built with React, TypeScript, and Material-UI following Vercel and Apple design aesthetics.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=60",
      technologies: [
        "React",
        "TypeScript",
        "Material-UI",
        "React Router",
        "Emotion",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/bhumika-aga",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          A collection of projects that showcase my skills in full-stack
          development, from hospital management systems to trading platforms and
          movie review applications.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 4,
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 3, color: "text.secondary", lineHeight: 1.6 }}
              >
                {project.description}
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        bgcolor: "rgba(0, 112, 243, 0.1)",
                        color: "secondary.main",
                        borderColor: "secondary.main",
                      }}
                    />
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ flex: 1 }}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button
                    variant="outlined"
                    startIcon={<GitHub />}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ flex: 1 }}
                  >
                    Code
                  </Button>
                )}
                {project.liveUrl === "#" && project.githubUrl === "#" && (
                  <Button variant="outlined" disabled sx={{ flex: 1 }}>
                    Private Project
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Want to see more of my work?
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<GitHub />}
          href="https://github.com/bhumika-aga"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ px: 4 }}
        >
          View All on GitHub
        </Button>
      </Box>
    </Container>
  );
};

export default Projects;
