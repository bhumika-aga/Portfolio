import { GitHub, Launch, Api } from "@mui/icons-material";
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
  featured?: boolean;
  apiUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "HealthSync - Hospital Management System",
      description:
        "Modern hospital management system with patient management, treatment planning, and insurance claims processing. Features multi-language support, comprehensive dashboards, and JWT authentication with role-based access control.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
      featured: true,
      technologies: [
        "Spring Boot 3.4.8",
        "React 19.1.1",
        "TypeScript",
        "PostgreSQL",
        "Material-UI",
        "JWT",
      ],
      liveUrl: "https://healthsync-portal.onrender.com",
      githubUrl: "https://github.com/bhumika-aga/Hospital-Management-System",
    },
    {
      id: 2,
      title: "ReelCritic - Movie Review Platform",
      description:
        "A sophisticated movie review platform with IMDb-inspired design. Features movie browsing, reviews & ratings, YouTube trailer integration, and admin management system with secure JWT authentication.",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      featured: true,
      technologies: [
        "React 19.1.1",
        "TypeScript",
        "Material-UI",
        "Spring Boot",
        "MongoDB",
        "YouTube API",
      ],
      liveUrl: "https://reelcriticapp.onrender.com/",
      githubUrl: "https://github.com/bhumika-aga/MovieReviewApp",
    },
    {
      id: 3,
      title: "MediFlow - Mail-Order Pharmacy",
      description:
        "A next-generation mail-order pharmacy platform built with microservices architecture. Features HIPAA compliance, prescription management, JWT authentication, and responsive design with light/dark mode support.",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
      featured: true,
      technologies: [
        "Spring Boot",
        "React 18+",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Microservices",
      ],
      liveUrl: "https://member-portal-xyt4.onrender.com",
      apiUrl: "https://member-portal-xyt4.onrender.com/swagger-ui.html",
      githubUrl: "https://github.com/bhumika-aga/Mail-Order-Pharmacy",
    },
    {
      id: 4,
      title: "ExamPortal - Online Examination System",
      description:
        "Online exam portal system for conducting secure digital examinations. Features question management, timer functionality, and automated grading with comprehensive reporting capabilities.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
      technologies: [
        "TypeScript",
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "JWT",
        "Material-UI",
      ],
      liveUrl: "https://examportal-demo.onrender.com",
      githubUrl: "https://github.com/bhumika-aga/Examportal-Application",
    },
    {
      id: 5,
      title: "Dynamic PDF Generator",
      description:
        "Java-based utility tool for dynamic PDF creation and generation. Supports template-based document generation with customizable layouts and data binding capabilities for various business needs.",
      image:
        "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80",
      technologies: [
        "Java",
        "PDF Libraries",
        "Template Engine",
        "Maven",
        "JUnit",
        "Spring Boot",
      ],
      liveUrl: "https://pdf-generator-demo.onrender.com",
      githubUrl: "https://github.com/bhumika-aga/DynamicPDFGenerator",
    },
    {
      id: 6,
      title: "Weather Info by Pincode",
      description:
        "Java utility application to fetch comprehensive weather details by postal code. Integrates with weather APIs to provide real-time weather information, forecasts, and location-based meteorological data.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&q=80",
      technologies: [
        "Java",
        "REST APIs",
        "Weather API",
        "JSON Processing",
        "HTTP Client",
        "Maven",
      ],
      liveUrl: "https://weather-pincode-api.onrender.com",
      githubUrl: "https://github.com/bhumika-aga/WeatherInfoForPincode",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          A collection of projects that showcase my skills in full-stack
          development, from hospital management systems to trading platforms and
          movie review applications.
        </Typography>
      </Box>

      {/* Featured Projects - Bento Grid */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 3, 
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            fontWeight: 600,
            color: 'text.primary'
          }}
        >
          Featured Projects
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gridTemplateRows: { xs: "auto", md: "350px 300px" },
            gap: 2,
            mb: 4,
          }}
        >
          {/* Large featured project */}
          <Card
            sx={{
              gridColumn: { xs: "1", md: "1" },
              gridRow: { xs: "1", md: "1" },
              borderRadius: 3,
              overflow: "hidden",
              background: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${projects[0].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              position: "relative",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              border: 'none',
              boxShadow: (theme) => theme.palette.mode === 'dark' 
                ? '0 4px 20px rgba(255,255,255,0.1)'
                : '0 4px 20px rgba(0,0,0,0.1)',
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: (theme) => theme.palette.mode === 'dark'
                  ? '0 8px 40px rgba(255,255,255,0.15)'
                  : '0 8px 40px rgba(0,0,0,0.15)',
              },
            }}
          >
            <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600, fontSize: { xs: "1.25rem", md: "1.4rem" } }}>
                  {projects[0].title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, fontSize: "0.9rem", lineHeight: 1.5 }}>
                  {projects[0].description.substring(0, 180)}...
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                  {projects[0].technologies.slice(0, 4).map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.2)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.3)",
                        fontSize: "0.7rem",
                        height: 24,
                      }}
                    />
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<Launch />}
                  component="a"
                  href={projects[0].liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    fontSize: "0.75rem",
                    px: 2,
                    py: 0.5,
                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Demo
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<GitHub />}
                  component="a"
                  href={projects[0].githubUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    fontSize: "0.75rem",
                    px: 2,
                    py: 0.5,
                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Code
                </Button>
                {projects[0].apiUrl && (
                  <Button
                    size="small"
                    variant="text"
                    startIcon={<Api />}
                    component="a"
                    href={projects[0].apiUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: "white",
                      fontSize: "0.7rem",
                      px: 1,
                      py: 0.5,
                      minWidth: 'auto'
                    }}
                  >
                    API
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>

          {/* Second featured project */}
          <Card
            sx={{
              gridColumn: { xs: "1", md: "2" },
              gridRow: { xs: "2", md: "1" },
              borderRadius: 3,
              overflow: "hidden",
              background: `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${projects[1].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              border: 'none',
              boxShadow: (theme) => theme.palette.mode === 'dark'
                ? '0 2px 12px rgba(255,255,255,0.08)'
                : '0 2px 12px rgba(0,0,0,0.08)',
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: (theme) => theme.palette.mode === 'dark'
                  ? '0 6px 24px rgba(255,255,255,0.12)'
                  : '0 6px 24px rgba(0,0,0,0.12)',
              },
            }}
          >
            <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600, fontSize: { xs: "1.25rem", md: "1.4rem" } }}>
                  {projects[1].title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, fontSize: "0.9rem", lineHeight: 1.5 }}>
                  {projects[1].description.substring(0, 150)}...
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                  {projects[1].technologies.slice(0, 4).map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.2)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.3)",
                        fontSize: "0.7rem",
                        height: 24,
                      }}
                    />
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<Launch />}
                  component="a"
                  href={projects[1].liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    fontSize: "0.75rem",
                    px: 2,
                    py: 0.5,
                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Demo
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<GitHub />}
                  component="a"
                  href={projects[1].githubUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    fontSize: "0.75rem",
                    px: 2,
                    py: 0.5,
                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Code
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Bottom row spanning both columns */}
          {projects.slice(2, 3).map((project) => (
            <Card
              key={project.id}
              sx={{
                gridColumn: { xs: "1", md: "1 / 3" },
                gridRow: { xs: "3", md: "2" },
                borderRadius: 3,
                overflow: "hidden",
                background: `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                border: 'none',
                boxShadow: (theme) => theme.palette.mode === 'dark'
                  ? '0 2px 12px rgba(255,255,255,0.08)'
                  : '0 2px 12px rgba(0,0,0,0.08)',
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: (theme) => theme.palette.mode === 'dark'
                    ? '0 6px 24px rgba(255,255,255,0.12)'
                    : '0 6px 24px rgba(0,0,0,0.12)',
                },
              }}
            >
              <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600, fontSize: "1.25rem" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, fontSize: "0.875rem", lineHeight: 1.5 }}>
                    {project.description.substring(0, 200)}...
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.2)",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.3)",
                          fontSize: "0.7rem",
                          height: 24,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<Launch />}
                    component="a"
                    href={project.liveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: "white",
                      color: "white",
                      fontSize: "0.75rem",
                      px: 2,
                      py: 0.5,
                      "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Demo
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<GitHub />}
                    component="a"
                    href={project.githubUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: "white",
                      color: "white",
                      fontSize: "0.75rem",
                      px: 2,
                      py: 0.5,
                      "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Code
                  </Button>
                  {project.apiUrl && (
                    <Button
                      size="small"
                      variant="text"
                      startIcon={<Api />}
                      component="a"
                      href={project.apiUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: "white",
                        fontSize: "0.7rem",
                        px: 1,
                        py: 0.5,
                        minWidth: 'auto'
                      }}
                    >
                      API
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Other Projects - Clean Grid */}
      <Box>
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 3, 
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            fontWeight: 600,
            color: 'text.primary'
          }}
        >
          Other Projects
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {projects.slice(3).map((project) => (
            <Card
              key={project.id}
              sx={{
                borderRadius: 3,
                border: 'none',
                boxShadow: (theme) => theme.palette.mode === 'dark'
                  ? '0 1px 8px rgba(255,255,255,0.06)'
                  : '0 1px 8px rgba(0,0,0,0.06)',
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: (theme) => theme.palette.mode === 'dark'
                    ? '0 4px 20px rgba(255,255,255,0.1)'
                    : '0 4px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ p: 2.5 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, fontSize: "1.1rem" }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "text.secondary", fontSize: "0.875rem", lineHeight: 1.5 }}
                >
                  {project.description.substring(0, 120)}...
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: "0.7rem",
                          height: 22,
                          bgcolor: (theme) => theme.palette.mode === 'dark' 
                            ? 'rgba(255,255,255,0.05)'
                            : 'rgba(0,0,0,0.03)',
                          borderColor: (theme) => theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.1)'
                            : 'rgba(0,0,0,0.1)',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<Launch />}
                    component="a"
                    href={project.liveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      flex: 1, 
                      fontSize: "0.75rem",
                      py: 0.7,
                      boxShadow: 'none',
                      '&:hover': {
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    Demo
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<GitHub />}
                    component="a"
                    href={project.githubUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      flex: 1, 
                      fontSize: "0.75rem",
                      py: 0.7
                    }}
                  >
                    Code
                  </Button>
                  {project.apiUrl && (
                    <Button
                      size="small"
                      variant="text"
                      startIcon={<Api />}
                      component="a"
                      href={project.apiUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        fontSize: "0.7rem",
                        px: 1,
                        py: 0.7,
                        minWidth: 'auto'
                      }}
                    >
                      API
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: "0.9rem" }}>
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
