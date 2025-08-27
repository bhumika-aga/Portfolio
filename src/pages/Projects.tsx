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
        "Production-ready hospital management system with secure patient management, treatment planning, and insurance claim processing. Features JWT authentication, role-based access control, and comprehensive dashboards.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
      featured: true,
      technologies: [
        "Java 17",
        "Spring Boot",
        "React 19",
        "TypeScript",
        "MySQL",
        "Material-UI",
        "JWT",
        "JUnit 5",
      ],
      liveUrl: "https://healthsync-portal.onrender.com",
      githubUrl: "https://github.com/bhumika-aga/Hospital-Management-System",
    },
    {
      id: 2,
      title: "ReelCritic - Movie Review Platform",
      description:
        "Full-stack IMDb-style movie review platform with optimized backend and responsive UI. Features TMDb API integration, YouTube trailers, JWT authentication with role-based access, and comprehensive review system.",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      featured: true,
      technologies: [
        "Java 17",
        "Spring Boot",
        "React 19",
        "TypeScript",
        "MongoDB",
        "Material-UI",
        "JUnit 5",
      ],
      liveUrl: "https://reelcriticapp.onrender.com/",
      githubUrl: "https://github.com/bhumika-aga/MovieReviewApp",
    },
    {
      id: 3,
      title: "MediFlow - Mail-Order Pharmacy",
      description:
        "Next-generation mail-order pharmacy platform with microservices architecture. Features HIPAA compliance, prescription management, and responsive design.",
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
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
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
            maxWidth: 640,
            mx: "auto",
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          Production-ready applications showcasing full-stack development
          expertise, from enterprise hospital systems to financial trading
          platforms.
        </Typography>
      </Box>

      {/* Dynamic Bento Grid */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(12, 1fr)",
            },
            gridTemplateRows: {
              xs: "repeat(6, 280px)",
              md: "repeat(3, 220px)",
            },
            gap: { xs: 2, md: 2.5 },
            mb: 4,
          }}
        >
          {/* Hero Project - Large Asymmetric Card */}
          {projects.slice(0, 1).map((project, index) => (
            <Card
              key={project.id}
              sx={{
                gridColumn: { xs: "1", md: "1 / 8" },
                gridRow: { xs: "1", md: "1 / 3" },
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                border: "none",
                opacity: 0,
                animation: `slideInUp 0.8s ease-out ${index * 0.1}s forwards`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(90, 200, 250, 0.05))",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)"
                      : "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)",
                  "&::before": {
                    opacity: 1,
                  },
                  "& .project-badge": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(0, 122, 255, 0.3)",
                  },
                },
                "@keyframes slideInUp": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(60px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {/* Featured Badge */}
              <Box
                className="project-badge"
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  px: 2,
                  py: 0.5,
                  borderRadius: 25,
                  background: "rgba(0, 122, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  color: "white",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  zIndex: 2,
                  transition: "all 0.3s ease",
                }}
              >
                🌟 Featured
              </Box>

              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      fontSize: { xs: "1.4rem", md: "1.8rem" },
                      lineHeight: 1.2,
                      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      opacity: 0.95,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      lineHeight: 1.5,
                      textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                    }}
                  >
                    {project.description.substring(0, 200)}...
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}
                  >
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.15)",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.25)",
                          fontSize: "0.75rem",
                          height: 26,
                          backdropFilter: "blur(10px)",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.25)",
                            transform: "translateY(-1px)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    component="a"
                    href={project.liveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      px: 3,
                      py: 1,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      borderRadius: 25,
                      background: "rgba(255,255,255,0.9)",
                      color: "#1D1D1F",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 4px 12px rgba(255,255,255,0.2)",
                      "&:hover": {
                        background: "rgba(255,255,255,1)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(255,255,255,0.3)",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<GitHub />}
                    component="a"
                    href={project.githubUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      px: 3,
                      py: 1,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      borderRadius: 25,
                      borderColor: "rgba(255,255,255,0.4)",
                      color: "white",
                      backdropFilter: "blur(20px)",
                      "&:hover": {
                        borderColor: "rgba(255,255,255,0.8)",
                        bgcolor: "rgba(255,255,255,0.1)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Source
                  </Button>
                  {project.apiUrl && (
                    <Button
                      variant="text"
                      startIcon={<Api />}
                      component="a"
                      href={project.apiUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.75rem",
                        px: 1,
                        py: 1,
                        minWidth: "auto",
                        borderRadius: 20,
                        "&:hover": {
                          color: "white",
                          bgcolor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      API
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}

          {/* Top Right Project */}
          {projects.slice(1, 2).map((project, index) => (
            <Card
              key={project.id}
              sx={{
                gridColumn: { xs: "1", md: "8 / 13" },
                gridRow: { xs: "2", md: "1" },
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
                opacity: 0,
                animation: `slideInUp 0.8s ease-out ${
                  0.2 + index * 0.1
                }s forwards`,
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 16px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0, 122, 255, 0.2)"
                      : "0 16px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 122, 255, 0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: "cover",
                  filter: "brightness(0.9) saturate(1.1)",
                  transition: "all 0.3s ease",
                }}
              />
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
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
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {project.description.substring(0, 120)}...
                </Typography>
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2.5 }}
                >
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: 22,
                        bgcolor: "primary.main",
                        color: "white",
                        "&:hover": {
                          bgcolor: "primary.dark",
                          transform: "translateY(-1px)",
                        },
                      }}
                    />
                  ))}
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
                      py: 0.8,
                      borderRadius: 20,
                      fontWeight: 600,
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
                      py: 0.8,
                      borderRadius: 20,
                      fontWeight: 500,
                    }}
                  >
                    Code
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}

          {/* Middle Right Project */}
          {projects.slice(2, 3).map((project, index) => (
            <Card
              key={project.id}
              sx={{
                gridColumn: { xs: "1", md: "8 / 13" },
                gridRow: { xs: "3", md: "2" },
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                background: `linear-gradient(135deg, rgba(90, 200, 250, 0.8), rgba(0, 122, 255, 0.9)), url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                color: "white",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                opacity: 0,
                animation: `slideInUp 0.8s ease-out ${
                  0.3 + index * 0.1
                }s forwards`,
                "&:hover": {
                  transform: "translateY(-6px) rotate(-1deg)",
                  boxShadow: "0 16px 40px rgba(0, 122, 255, 0.3)",
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3 }, height: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1.5,
                    fontWeight: 600,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    opacity: 0.95,
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {project.description.substring(0, 100)}...
                </Typography>
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2.5 }}
                >
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.15)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.25)",
                        fontSize: "0.7rem",
                        height: 22,
                        backdropFilter: "blur(10px)",
                      }}
                    />
                  ))}
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
                      borderColor: "rgba(255,255,255,0.4)",
                      color: "white",
                      fontSize: "0.75rem",
                      px: 2,
                      py: 0.8,
                      borderRadius: 20,
                      "&:hover": {
                        borderColor: "white",
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    Demo
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
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.7rem",
                        px: 1,
                        py: 0.8,
                        minWidth: "auto",
                      }}
                    >
                      API
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}

          {/* Bottom Row Projects */}
          {projects.slice(3, 6).map((project, index) => (
            <Card
              key={project.id}
              sx={{
                gridColumn: {
                  xs: "1",
                  md: index === 0 ? "1 / 5" : index === 1 ? "5 / 9" : "9 / 13",
                },
                gridRow: { xs: `${4 + index}`, md: "3" },
                borderRadius: 3,
                overflow: "hidden",
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(28, 28, 30, 0.8)"
                    : "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                border: (theme) =>
                  `1px solid ${
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.05)"
                  }`,
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                opacity: 0,
                animation: `slideInUp 0.8s ease-out ${
                  0.4 + index * 0.1
                }s forwards`,
                "&:hover": {
                  transform: `translateY(-4px) ${
                    index % 2 === 0 ? "rotate(1deg)" : "rotate(-1deg)"
                  }`,
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 12px 32px rgba(0,0,0,0.2)"
                      : "0 12px 32px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="100"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: "cover",
                  filter: "brightness(0.85) saturate(1.2)",
                }}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "text.primary",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    color: "text.secondary",
                    fontSize: "0.8rem",
                    lineHeight: 1.4,
                  }}
                >
                  {project.description.substring(0, 80)}...
                </Typography>
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}
                >
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: "0.65rem",
                        height: 20,
                        color: "primary.main",
                        borderColor: "primary.main",
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", gap: 0.5 }}>
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
                      fontSize: "0.7rem",
                      py: 0.5,
                      borderRadius: 15,
                      fontWeight: 600,
                      minWidth: 0,
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
                      fontSize: "0.7rem",
                      py: 0.5,
                      borderRadius: 15,
                      minWidth: 0,
                    }}
                  >
                    Code
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mt: { xs: 4, md: 6 } }}>
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
