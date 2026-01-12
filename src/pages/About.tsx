import {
  BusinessCenter,
  CloudDone,
  Code,
  DataObject,
  Download,
  IntegrationInstructions,
  School,
  Security,
  Storage,
  TrendingUp,
  Web,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useRef } from "react";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactElement;
  color: string;
  achievements: string[];
  skills?: string[];
}

const About: React.FC = () => {
  const theme = useTheme();
  const timelineRef = useRef<HTMLDivElement>(null);

  // Work Experience in descending order (latest first)
  const workExperience: TimelineEvent[] = [
    {
      id: "jpmorgan",
      year: "Oct 2024 - Present",
      title: "Software Engineer II",
      company: "JP Morgan Chase & Co.",
      description:
        "Building full-stack enhancements for internal trading tools, developing UI components and extending backend services to improve trader efficiency at one of the world's leading investment banks.",
      icon: <BusinessCenter />,
      color: "#007AFF",
      achievements: [
        "Built full-stack enhancements for internal trading tools, developing UI components in React.js and Angular and extending backend services in Java + Spring Boot, improving trader efficiency by 30%.",
        "Implemented secure token-based authorization and RBAC, leading to a 35% improvement in access control compliance.",
        "Improved backend reliability through expanded JUnit test coverage, reaching 70%+.",
        "Reduced FARM breaks by 40% through database optimizations and microservices resiliency",
        "Set up complete infrastructure: GitHub repos, AWS ECS clusters, DNS, Route 53, and IaC",
        "Learning and experimenting with Camunda for workflow-driven service orchestration",
      ],
      skills: [
        "Java 17",
        "Spring Boot",
        "React.js",
        "Angular",
        "AWS ECS",
        "Camunda",
      ],
    },
    {
      id: "cognizant",
      year: "Jul 2022 - Jul 2024",
      title: "Junior Software Engineer",
      company: "Cognizant",
      description:
        "Developed backend modules in Spring Boot and contributed to React-based UI integration for banking workflows with focus on performance optimization and security.",
      icon: <BusinessCenter />,
      color: "#007AFF",
      achievements: [
        "Developed backend modules in Spring Boot and contributed to React-based UI integration for banking workflows.",
        "Designed REST APIs and optimized application performance, reducing response times by 30%",
        "Implemented JWT/OAuth2 authentication and multi-layer authorization",
        "Led test automation efforts, achieving 90%+ test coverage",
        "Collaborated across Agile teams for full-stack development and sprint delivery",
      ],
      skills: [
        "Spring Boot",
        "Java",
        "React",
        "REST APIs",
        "JWT/OAuth2",
        "Agile",
      ],
    },
    {
      id: "cognizant-trainee",
      year: "Jan 2022 - Jun 2022",
      title: "Software Engineer Trainee",
      company: "Cognizant",
      description:
        "Built a full-stack pharmaceutical benefits system using React + TypeScript and Spring Boot microservices during intensive training program.",
      icon: <BusinessCenter />,
      color: "#007AFF",
      achievements: [
        "Built a full-stack pharmaceutical benefits system using React + TypeScript and Spring Boot microservices.",
        "Implemented JWT authentication with real-time checks, reducing failed registrations by 60%",
        "Developed and integrated 25+ REST APIs for the platform",
        "Containerized and deployed using Docker Compose with 99.9% uptime",
        "Documented system design and deployment workflows in 75+ pages",
      ],
      skills: [
        "Spring Boot",
        "React",
        "TypeScript",
        "Docker Compose",
        "Microservices",
      ],
    },
  ];

  // Education separate from work experience
  const education: TimelineEvent[] = [
    {
      id: "education",
      year: "Jun 2018 - Jun 2022",
      title: "B.Tech in Computer Science Engineering",
      company: "University of Petroleum and Energy Studies, Dehradun",
      description:
        "Bachelor of Technology in Computer Science Engineering with focus on full-stack architecture, authentication/authorization, distributed systems, and software development.",
      icon: <School />,
      color: "#5AC8FA",
      achievements: [],
    },
  ];

  const skillCategories = [
    {
      category: "Backend Development",
      icon: <Code />,
      skills: [
        { name: "Java 17 & Spring Boot", icon: <Code />, color: "#007AFF" },
        {
          name: "REST APIs & Microservices",
          icon: <IntegrationInstructions />,
          color: "#5AC8FA",
        },
        {
          name: "MySQL & MongoDB",
          icon: <Storage />,
          color: "#00C896",
        },
        {
          name: "Hibernate & JPA",
          icon: <Storage />,
          color: "#00C896",
        },
      ],
    },
    {
      category: "Frontend Development",
      icon: <Web />,
      skills: [
        { name: "React.js & Angular", icon: <Web />, color: "#007AFF" },
        {
          name: "TypeScript & JavaScript",
          icon: <DataObject />,
          color: "#5AC8FA",
        },
        {
          name: "Material-UI & HTML/CSS",
          icon: <TrendingUp />,
          color: "#00C896",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <Security />,
      skills: [
        {
          name: "AWS ECS & Route 53",
          icon: <CloudDone />,
          color: "#007AFF",
        },
        {
          name: "Docker & CI/CD",
          icon: <Security />,
          color: "#5AC8FA",
        },
        {
          name: "Infrastructure-as-Code & Workflow Automation",
          icon: <BusinessCenter />,
          color: "#00C896",
        },
      ],
    },
  ];

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Section - Centered About Me with Resume Download */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: 8, md: 10 },
          pb: { xs: 8, md: 12 },
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(ellipse at center, rgba(0, 122, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 70%)"
              : "radial-gradient(ellipse at center, rgba(90, 200, 250, 0.08) 0%, rgba(255, 255, 255, 0.95) 70%)",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                color: "primary.main",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              My Journey
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mb: 4,
                fontSize: { xs: "2.2rem", md: "3rem" },
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #ffffff 0%, #5AC8FA 50%, #007AFF 100%)"
                    : "linear-gradient(135deg, #1D1D1F 0%, #007AFF 50%, #5AC8FA 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
                fontSize: { xs: "1.1rem", md: "1.2rem" },
                lineHeight: 1.7,
                mb: { xs: 6, md: 8 },
              }}
            >
              Full-stack developer with hands-on experience building scalable
              backend services, interactive front-end ap- plications, and
              cloud-based deployments. Skilled in Java, Spring Boot, React,
              Angular, REST API design, and AWS. Experienced in setting up
              infrastructure end-to-end, implementing secure authentication, and
              op- timizing systems for performance and reliability. Currently
              learning workflow automation with Camunda7.
            </Typography>

            {/* Resume Download Button - Bigger and Centered */}
            <Button
              variant="contained"
              size="large"
              startIcon={<Download />}
              href="/Bhumika_Agarwal_Resume.pdf"
              download="Bhumika_Agarwal_Resume.pdf"
              sx={{
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 600,
                borderRadius: 50,
                boxShadow: "0 6px 20px rgba(0, 122, 255, 0.3)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 30px rgba(0, 122, 255, 0.4)",
                },
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Work Experience Section - Appears on Scroll */}
      <Box
        ref={timelineRef}
        sx={{
          py: { xs: 6, md: 8 },
          position: "relative",
          background:
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(20px)",
          borderTop: `0.5px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          {/* Work Experience Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #ffffff 0%, #5AC8FA 50%, #007AFF 100%)"
                    : "linear-gradient(135deg, #1D1D1F 0%, #007AFF 50%, #5AC8FA 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 580,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              Professional journey from trainee to Software Engineer II at JP
              Morgan Chase & Co., building enterprise systems and trading
              platforms.
            </Typography>
          </Box>

          {/* Modern Glass Timeline */}
          <Box sx={{ maxWidth: 900, mx: "auto", position: "relative" }}>
            {/* Animated Background Line */}
            <Box
              sx={{
                position: "absolute",
                left: 24,
                top: 0,
                bottom: 0,
                width: 2,
                background: `linear-gradient(180deg, 
                  transparent 0%, 
                  ${theme.palette.primary.main}40 10%, 
                  ${theme.palette.primary.main}80 50%, 
                  ${theme.palette.secondary.main}80 80%, 
                  transparent 100%)`,
                borderRadius: 1,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "30%",
                  background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: 1,
                  animation: "slideDown 3s ease-in-out infinite",
                  "@keyframes slideDown": {
                    "0%": { height: "0%", opacity: 0.5 },
                    "50%": { height: "100%", opacity: 1 },
                    "100%": { height: "0%", opacity: 0.5, top: "70%" },
                  },
                },
              }}
            />

            {workExperience.map((event, index) => (
              <Box
                key={event.id}
                sx={{
                  position: "relative",
                  mb: 3,
                  opacity: 0,
                  animation: `slideInUp 0.6s ease-out ${
                    index * 0.15
                  }s forwards`,
                  "@keyframes slideInUp": {
                    "0%": {
                      opacity: 0,
                      transform: "translateY(30px) translateX(-20px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateY(0) translateX(0)",
                    },
                  },
                }}
              >
                {/* Floating Timeline Node */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 12,
                    top: 20,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${event.color}, ${event.color}CC)`,
                    border: `3px solid ${theme.palette.background.default}`,
                    boxShadow: `0 0 0 4px ${event.color}20, 0 4px 12px rgba(0,0,0,0.15)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "0.7rem",
                    zIndex: 2,
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    "&:hover": {
                      transform: "scale(1.2)",
                      boxShadow: `0 0 0 6px ${event.color}30, 0 8px 20px rgba(0,0,0,0.2)`,
                    },
                  }}
                >
                  {event.icon}
                </Box>

                {/* Glass Morphism Card */}
                <Card
                  sx={{
                    ml: 6,
                    background:
                      theme.palette.mode === "dark"
                        ? "rgba(28, 28, 30, 0.7)"
                        : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: `1px solid ${
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.05)"
                    }`,
                    borderRadius: 3,
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${event.color}60, transparent)`,
                    },
                    "&:hover": {
                      transform: "translateY(-4px) translateX(8px)",
                      background:
                        theme.palette.mode === "dark"
                          ? "rgba(28, 28, 30, 0.9)"
                          : "rgba(255, 255, 255, 0.95)",
                      boxShadow: `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${event.color}20`,
                      "&::before": {
                        height: 2,
                        background: `linear-gradient(90deg, ${event.color}40, ${event.color}, ${event.color}40)`,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    {/* Header with Year Badge */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "text.primary",
                            mb: 0.5,
                            background: `linear-gradient(135deg, ${theme.palette.text.primary}, ${event.color})`,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {event.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: event.color,
                            fontWeight: 600,
                            fontSize: "0.9rem",
                          }}
                        >
                          {event.company}
                        </Typography>
                      </Box>

                      <Chip
                        label={event.year}
                        sx={{
                          background: `linear-gradient(135deg, ${event.color}20, ${event.color}10)`,
                          color: event.color,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          border: `1px solid ${event.color}30`,
                          backdropFilter: "blur(10px)",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 2,
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {event.description}
                    </Typography>

                    {/* Highlight Achievement */}
                    {event.achievements[0] && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 2,
                          p: 1.5,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${event.color}08, ${event.color}04)`,
                          border: `1px solid ${event.color}15`,
                        }}
                      >
                        <TrendingUp
                          sx={{
                            fontSize: 16,
                            color: event.color,
                            mr: 1,
                            mt: 0.1,
                            opacity: 0.8,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            lineHeight: 1.5,
                          }}
                        >
                          {event.achievements[0]}
                        </Typography>
                      </Box>
                    )}

                    {/* Modern Skills Tags */}
                    {event.skills && (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {event.skills.slice(0, 4).map((skill, i) => (
                          <Box
                            key={i}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 25,
                              background: `linear-gradient(135deg, ${event.color}15, ${event.color}08)`,
                              border: `1px solid ${event.color}25`,
                              color:
                                theme.palette.mode === "dark"
                                  ? "#ffffff"
                                  : event.color,
                              fontSize: "0.7rem",
                              fontWeight: 500,
                              backdropFilter: "blur(10px)",
                              transition: "all 0.2s ease",
                              cursor: "default",
                              "&:hover": {
                                background: `linear-gradient(135deg, ${event.color}25, ${event.color}15)`,
                                transform: "translateY(-1px)",
                              },
                            }}
                          >
                            {skill}
                          </Box>
                        ))}
                        {event.skills.length > 4 && (
                          <Box
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 25,
                              background: "transparent",
                              border: `1px dashed ${theme.palette.text.secondary}40`,
                              color: "text.secondary",
                              fontSize: "0.7rem",
                              fontWeight: 400,
                            }}
                          >
                            +{event.skills.length - 4} more
                          </Box>
                        )}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Education Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          background:
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(20px)",
          borderTop: `0.5px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          {/* Education Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 1,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
              }}
            >
              Education
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 480,
                mx: "auto",
                fontSize: { xs: "0.85rem", md: "0.9rem" },
                lineHeight: 1.5,
              }}
            >
              Academic foundation in Computer Science Engineering from
              University of Petroleum and Energy Studies.
            </Typography>
          </Box>

          {/* Education Timeline */}
          <Box sx={{ position: "relative" }}>
            {education.map((edu) => (
              <Box
                key={edu.id}
                sx={{
                  position: "relative",
                  mb: { xs: 6, md: 8 },
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Education Card */}
                <Card
                  sx={{
                    maxWidth: { xs: "none", md: 600 },
                    width: "100%",
                    transform: "scale(1)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow:
                        theme.palette.mode === "dark"
                          ? "0 12px 40px rgba(90,200,250,0.3)"
                          : "0 12px 40px rgba(90,200,250,0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${edu.color}, ${edu.color}CC)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "1.5rem",
                          mr: 2,
                        }}
                      >
                        {edu.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          {edu.year}
                        </Typography>
                        <Typography variant="h4" sx={{ color: "text.primary" }}>
                          {edu.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: edu.color, fontWeight: 500 }}
                        >
                          {edu.company}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: "text.secondary" }}
                    >
                      {edu.description}
                    </Typography>

                    {/* Achievements */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1.5,
                          fontSize: "1rem",
                          color: "text.primary",
                        }}
                      >
                        Academic Highlights
                      </Typography>
                      {edu.achievements.map((achievement, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            mb: 1,
                          }}
                        >
                          <TrendingUp
                            sx={{
                              fontSize: 16,
                              color: edu.color,
                              mr: 1,
                              mt: 0.5,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Interactive Skills Showcase */}
      <Box
        sx={{
          py: { xs: 3, md: 4 },
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(ellipse at center, rgba(0, 122, 255, 0.05) 0%, rgba(28, 28, 30, 0.8) 50%)"
              : "radial-gradient(ellipse at center, rgba(90, 200, 250, 0.03) 0%, rgba(242, 242, 247, 0.8) 50%)",
          backdropFilter: "blur(30px)",
          borderTop: `0.5px solid ${theme.palette.divider}`,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              theme.palette.mode === "dark"
                ? "radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(90, 200, 250, 0.05) 0%, transparent 50%)"
                : "radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(90, 200, 250, 0.02) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* Header with floating elements */}
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 2, md: 3 },
              position: "relative",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mb: 1,
                color: "primary.main",
                fontWeight: 500,
                letterSpacing: "0.3px",
                textTransform: "uppercase",
                fontSize: { xs: "0.7rem", md: "0.8rem" },
              }}
            >
              Technical Arsenal
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mb: 1.5,
                fontSize: { xs: "1.4rem", md: "1.6rem" },
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #ffffff 0%, #5AC8FA 50%, #007AFF 100%)"
                    : "linear-gradient(135deg, #1D1D1F 0%, #007AFF 50%, #5AC8FA 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills & Expertise
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                maxWidth: 480,
                mx: "auto",
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                lineHeight: 1.5,
              }}
            >
              Technologies and tools I use to build exceptional software.
            </Typography>
          </Box>

          {/* Interactive Skills Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: { xs: 1.5, md: 2 },
              mb: { xs: 2, md: 3 },
            }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                sx={{
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(28, 28, 30, 0.8)"
                      : "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  border: `1px solid ${
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.05)"
                  }`,
                  borderRadius: 4,
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  cursor: "pointer",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${
                      category.skills[0]?.color || "#007AFF"
                    }40, ${category.skills[0]?.color || "#007AFF"}, ${
                      category.skills[0]?.color || "#007AFF"
                    }40)`,
                    transform: "translateX(-100%)",
                    transition: "transform 0.6s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    background:
                      theme.palette.mode === "dark"
                        ? "rgba(28, 28, 30, 0.95)"
                        : "rgba(255, 255, 255, 0.98)",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? `0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px ${
                            category.skills[0]?.color || "#007AFF"
                          }20`
                        : `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${
                            category.skills[0]?.color || "#007AFF"
                          }15`,
                    "&::before": {
                      transform: "translateX(0)",
                    },
                    "& .skill-orb": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 2.5 }, height: "100%" }}>
                  {/* Category Header with icon */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      className="skill-orb"
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${
                          category.skills[0]?.color || "#007AFF"
                        }15, ${category.skills[0]?.color || "#007AFF"}08)`,
                        border: `2px solid ${
                          category.skills[0]?.color || "#007AFF"
                        }20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        color: category.skills[0]?.color || "#007AFF",
                        transition:
                          "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {category.category}
                    </Typography>
                  </Box>

                  {/* Simple Skills List with Icons */}
                  {category.skills.map((skill, skillIndex) => (
                    <Box
                      key={skillIndex}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: skillIndex === category.skills.length - 1 ? 0 : 1.5,
                        p: 1.5,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${skill.color}08, ${skill.color}04)`,
                        border: `1px solid ${skill.color}15`,
                        transition: "all 0.3s ease",
                        opacity: 0,
                        animation: `slideInUp 0.6s ease-out ${
                          categoryIndex * 0.1 + skillIndex * 0.1
                        }s forwards`,
                        "@keyframes slideInUp": {
                          "0%": {
                            opacity: 0,
                            transform: "translateY(15px)",
                          },
                          "100%": {
                            opacity: 1,
                            transform: "translateY(0)",
                          },
                        },
                        "&:hover": {
                          background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}08)`,
                          transform: "translateX(4px)",
                          border: `1px solid ${skill.color}25`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${skill.color}, ${skill.color}CC)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 1.5,
                          color: "white",
                          fontSize: "0.8rem",
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: "0.8rem", md: "0.85rem" },
                          color: "text.primary",
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
