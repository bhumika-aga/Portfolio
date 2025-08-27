import {
  BusinessCenter,
  Code,
  Download,
  School,
  TrendingUp,
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
      year: "2024-Present",
      title: "Software Engineer II",
      company: "JPMorgan Chase & Co.",
      description:
        "Currently developing secure financial systems and trading applications serving millions of users worldwide at one of the world's leading investment banks.",
      icon: <BusinessCenter />,
      color: "#007AFF",
      achievements: [
        "Building secure REST endpoints with advanced authentication",
        "Developing React.js and TypeScript UI components for financial platforms",
        "Implementing robust testing strategies with comprehensive coverage",
        "Contributing to critical financial systems infrastructure",
      ],
      skills: [
        "Spring Boot",
        "React.js",
        "TypeScript",
        "Financial Systems",
        "Security",
        "Trading Systems",
      ],
    },
    {
      id: "cognizant",
      year: "July 2022-2024",
      title: "Junior Software Engineer",
      company: "Cognizant Technology Solutions",
      description:
        "Developed enterprise-grade fintech and healthcare solutions with focus on backend optimization and security.",
      icon: <BusinessCenter />,
      color: "#007AFF",
      achievements: [
        "Built 25+ Spring Boot REST APIs improving response times by 30%",
        "Implemented JWT authentication and Role-Based Access Control",
        "Achieved 90% unit test coverage using JUnit and Mockito",
        "Led API integration with React frontends in Agile teams",
      ],
      skills: ["Spring Boot", "Java", "ReactJS", "REST APIs", "JUnit", "MySQL"],
    },
    {
      id: "cognizant-trainee",
      year: "Jan-June 2022",
      title: "Software Engineer Trainee",
      company: "Cognizant Technology Solutions",
      description:
        "Developed comprehensive pharmaceutical system using microservices architecture during training program.",
      icon: <BusinessCenter />,
      color: "#007AFF",
      achievements: [
        "Built mail-order pharmacy platform with 5 Spring Boot microservices",
        "Implemented JWT authentication with real-time validation",
        "Designed 25+ REST APIs for authentication and inventory management",
        "Achieved 99.9% uptime with Docker deployment on Render",
      ],
      skills: [
        "Spring Boot",
        "React 18",
        "TypeScript",
        "Docker",
        "Microservices",
      ],
    },
    {
      id: "foxmula",
      year: "May-July 2021",
      title: "Software Developer Intern",
      company: "Foxmula- The Smart Way",
      description:
        "Backend Java development internship focusing on building robust server-side applications and API development.",
      icon: <Code />,
      color: "#5AC8FA",
      achievements: [
        "Developed backend Java applications with focus on performance",
        "Worked on API development and database integration",
        "Gained hands-on experience in enterprise Java development",
        "Collaborated with senior developers on production systems",
      ],
      skills: [
        "Java",
        "Backend Development",
        "API Development",
        "Database Integration",
      ],
    },
    {
      id: "ibm",
      year: "Jan-May 2021",
      title: "UI/UX Design Intern",
      company: "IBM",
      description:
        "UI/UX design internship focusing on user interface design, user experience research, and design thinking methodologies.",
      icon: <TrendingUp />,
      color: "#5AC8FA",
      achievements: [
        "Designed user interfaces for enterprise applications",
        "Conducted user experience research and usability testing",
        "Applied design thinking principles to solve complex problems",
        "Created wireframes and prototypes for web applications",
      ],
      skills: [
        "UI/UX Design",
        "Design Thinking",
        "Prototyping",
        "User Research",
      ],
    },
  ];

  // Education separate from work experience
  const education: TimelineEvent[] = [
    {
      id: "education",
      year: "June 2018-July 2022",
      title: "B.Tech Computer Science",
      company: "University of Petroleum and Energy Studies",
      description:
        "Bachelor of Technology in Computer Science Engineering with focus on software development and system design. Graduated in July 2022.",
      icon: <School />,
      color: "#5AC8FA",
      achievements: [
        "Strong foundation in computer science fundamentals",
        "Specialized in software engineering and algorithms",
        "Built multiple full-stack web applications during coursework",
        "Active participant in coding competitions and tech events",
      ],
    },
  ];

  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        { name: "Java & Spring Boot", level: 95, color: "#007AFF" },
        { name: "REST APIs & Microservices", level: 92, color: "#5AC8FA" },
        { name: "MySQL & Database Design", level: 88, color: "#00C896" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "ReactJS & TypeScript", level: 90, color: "#007AFF" },
        { name: "JavaScript & Modern ES6+", level: 88, color: "#5AC8FA" },
        { name: "UI/UX Design & Prototyping", level: 85, color: "#00C896" },
      ],
    },
    {
      category: "Security & DevOps",
      skills: [
        { name: "JWT Authentication & Security", level: 90, color: "#007AFF" },
        { name: "Docker & Containerization", level: 85, color: "#5AC8FA" },
        { name: "Financial Systems & Compliance", level: 88, color: "#00C896" },
      ],
    },
  ];

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(ellipse at top, rgba(0, 122, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 50%)"
              : "radial-gradient(ellipse at top, rgba(90, 200, 250, 0.08) 0%, rgba(255, 255, 255, 0.95) 50%)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                color: "primary.main",
                fontWeight: 500,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              My Journey
            </Typography>
            <Typography variant="h1" sx={{ mb: 3 }}>
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 680,
                mx: "auto",
                color: "text.secondary",
              }}
            >
              A passionate software engineer with 3+ years of experience
              building scalable applications and secure financial systems that
              impact millions of users.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Resume Download & Experience Section */}
      <Box
        ref={timelineRef}
        sx={{
          py: { xs: 4, md: 6 },
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          {/* Resume Download Section */}
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Button
              variant="contained"
              size="medium"
              startIcon={<Download />}
              href="/Bhumika_Agarwal_Resume.pdf"
              download="Bhumika_Agarwal_Resume.pdf"
              sx={{
                px: 3,
                py: 1,
                fontSize: "0.875rem",
                fontWeight: 500,
                borderRadius: 25,
                boxShadow: "0 2px 8px rgba(0, 122, 255, 0.3)",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(0, 122, 255, 0.4)",
                },
              }}
            >
              Download Resume
            </Button>
          </Box>

          {/* Work Experience Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{ mb: 1, fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              Work Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 500,
                mx: "auto",
                fontSize: "0.9rem",
              }}
            >
              Professional journey from internships to Software Engineer II at
              JPMorgan Chase & Co.
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
                  mb: 4,
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
                  <CardContent sx={{ p: 3 }}>
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
          py: { xs: 8, md: 12 },
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
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Education
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
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
          py: { xs: 6, md: 8 },
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
              mb: { xs: 4, md: 6 },
              position: "relative",
            }}
          >
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
              Technical Arsenal
            </Typography>
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
              Skills & Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 560,
                mx: "auto",
                fontSize: { xs: "0.9rem", md: "1rem" },
                lineHeight: 1.6,
              }}
            >
              Mastery forged through 3+ years of building enterprise-grade
              systems and financial applications.
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
              gap: { xs: 2, md: 3 },
              mb: { xs: 4, md: 6 },
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
                      transform: "scale(1.1) rotate(180deg)",
                    },
                    "& .skill-progress": {
                      "& .MuiLinearProgress-bar": {
                        animation: "pulse 1.5s ease-in-out infinite",
                        "@keyframes pulse": {
                          "0%": { opacity: 1 },
                          "50%": { opacity: 0.7 },
                          "100%": { opacity: 1 },
                        },
                      },
                    },
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 }, height: "100%" }}>
                  {/* Category Header with animated orb */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      className="skill-orb"
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: `conic-gradient(from 0deg, ${
                          category.skills[0]?.color || "#007AFF"
                        }, ${category.skills[1]?.color || "#5AC8FA"}, ${
                          category.skills[0]?.color || "#007AFF"
                        })`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        transition:
                          "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 2,
                          borderRadius: "50%",
                          background:
                            theme.palette.mode === "dark"
                              ? "#1C1C1E"
                              : "#FFFFFF",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 6,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${
                            category.skills[0]?.color || "#007AFF"
                          }60, ${category.skills[1]?.color || "#5AC8FA"}60)`,
                          zIndex: 1,
                        },
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        fontSize: { xs: "0.95rem", md: "1.1rem" },
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {category.category}
                    </Typography>
                  </Box>

                  {/* Interactive Skills List */}
                  {category.skills.map((skill, skillIndex) => (
                    <Box
                      key={skillIndex}
                      className="skill-progress"
                      sx={{
                        mb: skillIndex === category.skills.length - 1 ? 0 : 2.5,
                        opacity: 0,
                        animation: `slideInUp 0.6s ease-out ${
                          categoryIndex * 0.1 + skillIndex * 0.05
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
                      }}
                    >
                      {/* Skill Header */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                            color: "text.primary",
                          }}
                        >
                          {skill.name}
                        </Typography>

                        {/* Animated percentage badge */}
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.3,
                            borderRadius: 25,
                            background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}08)`,
                            border: `1px solid ${skill.color}25`,
                            color: skill.color,
                            fontSize: { xs: "0.7rem", md: "0.75rem" },
                            fontWeight: 600,
                            backdropFilter: "blur(10px)",
                            minWidth: 40,
                            textAlign: "center",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {skill.level}%
                        </Box>
                      </Box>

                      {/* Custom Animated Progress Bar */}
                      <Box
                        sx={{
                          position: "relative",
                          height: 6,
                          borderRadius: 25,
                          background:
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(0,0,0,0.06)",
                          overflow: "hidden",
                        }}
                      >
                        {/* Progress Fill */}
                        <Box
                          sx={{
                            position: "relative",
                            left: 0,
                            top: 0,
                            height: "100%",
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC, ${skill.color}80)`,
                            borderRadius: 25,
                            transition:
                              "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            animation: `fillProgress-${categoryIndex}-${skillIndex} 2s ease-out ${
                              categoryIndex * 0.2 + skillIndex * 0.1
                            }s`,
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              right: -20,
                              width: 20,
                              height: "100%",
                              background: `linear-gradient(90deg, ${skill.color}00, ${skill.color}40)`,
                              animation: "shimmer 2s ease-in-out infinite",
                              "@keyframes shimmer": {
                                "0%": { transform: "translateX(-20px)" },
                                "100%": { transform: "translateX(20px)" },
                              },
                            },
                            [`@keyframes fillProgress-${categoryIndex}-${skillIndex}`]:
                              {
                                "0%": { width: "0%" },
                                "100%": { width: `${skill.level}%` },
                              },
                          }}
                        />

                        {/* Skill level indicator dots */}
                        {[...Array(5)].map((_, dotIndex) => (
                          <Box
                            key={dotIndex}
                            sx={{
                              position: "absolute",
                              left: `${(dotIndex + 1) * 20}%`,
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                              width: 3,
                              height: 3,
                              borderRadius: "50%",
                              background:
                                skill.level >= (dotIndex + 1) * 20
                                  ? skill.color
                                  : theme.palette.mode === "dark"
                                  ? "rgba(255,255,255,0.2)"
                                  : "rgba(0,0,0,0.15)",
                              transition: "all 0.3s ease",
                              animation:
                                skill.level >= (dotIndex + 1) * 20
                                  ? `dotGlow 1.5s ease-in-out ${
                                      dotIndex * 0.1
                                    }s infinite alternate`
                                  : "none",
                              "@keyframes dotGlow": {
                                "0%": {
                                  opacity: 0.6,
                                  transform: "translate(-50%, -50%) scale(1)",
                                },
                                "100%": {
                                  opacity: 1,
                                  transform: "translate(-50%, -50%) scale(1.3)",
                                },
                              },
                            }}
                          />
                        ))}
                      </Box>
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
