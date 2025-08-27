import { BusinessCenter, Code, School, TrendingUp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

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
  const [activeEvent, setActiveEvent] = useState<string>("jp-morgan");
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - elementTop) / (elementHeight + windowHeight)
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineEvents: TimelineEvent[] = [
    {
      id: "education",
      year: "2021",
      title: "Computer Science Graduate",
      company: "University Education",
      description:
        "Graduated with strong foundation in software engineering, algorithms, and system design.",
      icon: <School />,
      color: "#5AC8FA",
      achievements: [
        "Strong academic foundation in CS fundamentals",
        "Projects in web development and databases",
        "Team leadership in academic projects",
      ],
    },
    {
      id: "cognizant",
      year: "2021-2023",
      title: "Junior Software Engineer",
      company: "Cognizant Technology Solutions",
      description:
        "Built fintech and healthcare solutions, focusing on backend APIs and system optimization.",
      icon: <Code />,
      color: "#007AFF",
      achievements: [
        "Developed Spring Boot REST APIs for banking modules",
        "Improved API response times by 30% through optimization",
        "Implemented JWT authentication and RBAC",
        "Worked with MySQL databases and query optimization",
      ],
      skills: ["Spring Boot", "Java", "MySQL", "REST APIs", "JWT"],
    },
    {
      id: "jp-morgan",
      year: "2023-Present",
      title: "Software Engineer II",
      company: "JP Morgan Chase & Co.",
      description:
        "Leading development of secure trading systems and financial applications serving millions of users.",
      icon: <BusinessCenter />,
      color: "#00C896",
      achievements: [
        "Built secure REST endpoints with access token validation",
        "Increased API security and compliance by 35%",
        "Developed role-based entitlements system",
        "Leading critical trading platform components",
      ],
      skills: [
        "Spring Boot",
        "React",
        "TypeScript",
        "Security",
        "Trading Systems",
      ],
    },
  ];

  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        { name: "Java & Spring Boot", level: 95, color: "#007AFF" },
        { name: "REST APIs & Microservices", level: 90, color: "#5AC8FA" },
        { name: "Database Design", level: 85, color: "#00C896" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React & TypeScript", level: 90, color: "#007AFF" },
        { name: "Material-UI & Design", level: 85, color: "#5AC8FA" },
        { name: "Responsive Development", level: 88, color: "#00C896" },
      ],
    },
    {
      category: "Engineering Excellence",
      skills: [
        { name: "System Architecture", level: 82, color: "#007AFF" },
        { name: "Security & Compliance", level: 88, color: "#5AC8FA" },
        { name: "Performance Optimization", level: 85, color: "#00C896" },
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

      {/* Interactive Timeline */}
      <Box
        ref={timelineRef}
        sx={{
          py: { xs: 8, md: 12 },
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          {/* Timeline Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Career Timeline
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
            >
              From computer science graduate to leading software engineer at JP
              Morgan Chase & Co.
            </Typography>
          </Box>

          {/* Progress Bar */}
          <Box sx={{ mb: 6, display: { xs: "none", md: "block" } }}>
            <LinearProgress
              variant="determinate"
              value={scrollProgress * 100}
              sx={{
                height: 4,
                borderRadius: 2,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
                "& .MuiLinearProgress-bar": {
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: 2,
                },
              }}
            />
          </Box>

          {/* Timeline Events */}
          <Box sx={{ position: "relative" }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 24, md: "50%" },
                transform: { xs: "none", md: "translateX(-50%)" },
                width: 2,
                height: "100%",
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
                display: { xs: "block", md: "block" },
              }}
            />

            {timelineEvents.map((event, index) => (
              <Box
                key={event.id}
                sx={{
                  position: "relative",
                  mb: { xs: 6, md: 8 },
                  display: "flex",
                  flexDirection: {
                    xs: "row",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    "& .timeline-card": {
                      transform: "translateY(-4px)",
                      boxShadow:
                        theme.palette.mode === "dark"
                          ? "0 12px 40px rgba(0,122,255,0.3)"
                          : "0 12px 40px rgba(0,122,255,0.15)",
                    },
                  },
                }}
                onClick={() => setActiveEvent(event.id)}
              >
                {/* Timeline Node */}
                <Box
                  sx={{
                    position: { xs: "absolute", md: "absolute" },
                    left: { xs: 16, md: "50%" },
                    transform: { xs: "none", md: "translateX(-50%)" },
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${event.color}, ${event.color}CC)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    border: `4px solid ${theme.palette.background.default}`,
                    boxShadow:
                      activeEvent === event.id
                        ? `0 0 0 4px ${event.color}40`
                        : "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    zIndex: 2,
                  }}
                >
                  {event.icon}
                </Box>

                {/* Timeline Card */}
                <Card
                  className="timeline-card"
                  sx={{
                    mr: { xs: 0, md: index % 2 === 0 ? 8 : 0 },
                    ml: { xs: 10, md: index % 2 === 0 ? 0 : 8 },
                    maxWidth: { xs: "none", md: 480 },
                    width: "100%",
                    opacity: activeEvent === event.id ? 1 : 0.7,
                    transform:
                      activeEvent === event.id ? "scale(1.02)" : "scale(1)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Chip
                        label={event.year}
                        sx={{
                          backgroundColor: `${event.color}20`,
                          color: event.color,
                          fontWeight: 600,
                          mr: 2,
                        }}
                      />
                      <Box sx={{ flexGrow: 1 }} />
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        {event.company}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{ mb: 2, color: "text.primary" }}
                    >
                      {event.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: "text.secondary" }}
                    >
                      {event.description}
                    </Typography>

                    {/* Achievements */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1.5,
                          fontSize: "1rem",
                          color: "text.primary",
                        }}
                      >
                        Key Achievements
                      </Typography>
                      {event.achievements.map((achievement, i) => (
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
                              color: event.color,
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

                    {/* Skills */}
                    {event.skills && (
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1.5,
                            fontSize: "1rem",
                            color: "text.primary",
                          }}
                        >
                          Technologies
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {event.skills.map((skill, i) => (
                            <Chip
                              key={i}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor:
                                  theme.palette.mode === "dark"
                                    ? "rgba(142, 142, 147, 0.16)"
                                    : "rgba(0, 122, 255, 0.1)",
                                color:
                                  theme.palette.mode === "dark"
                                    ? "#5AC8FA"
                                    : "#007AFF",
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Skills Bento Grid */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background:
            theme.palette.mode === "dark"
              ? "rgba(28, 28, 30, 0.5)"
              : "rgba(242, 242, 247, 0.5)",
          backdropFilter: "blur(20px)",
          borderTop: `0.5px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Skills & Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
            >
              A comprehensive skill set built through years of hands-on
              experience in building production-grade applications.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                sx={{
                  gridColumn: {
                    xs: "1",
                    lg: categoryIndex === 0 ? "1 / 3" : "auto",
                  },
                  height: "fit-content",
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{ mb: 3, color: "text.primary" }}
                  >
                    {category.category}
                  </Typography>

                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            color: skill.color,
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor:
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.05)",
                          "& .MuiLinearProgress-bar": {
                            borderRadius: 4,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                          },
                        }}
                      />
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
