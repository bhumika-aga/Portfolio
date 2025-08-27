import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const theme = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const floatingElements = [
    { x: 20, y: 20, size: 6, delay: 0 },
    { x: 80, y: 15, size: 8, delay: 1 },
    { x: 15, y: 60, size: 4, delay: 2 },
    { x: 85, y: 70, size: 7, delay: 0.5 },
    { x: 60, y: 25, size: 3, delay: 1.5 },
    { x: 25, y: 85, size: 10, delay: 2.5 },
  ];

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(ellipse at center, rgba(0, 122, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 70%)"
              : "radial-gradient(ellipse at center, rgba(90, 200, 250, 0.08) 0%, rgba(255, 255, 255, 0.95) 70%)",
        }}
      >
        {/* Animated Background Elements */}
        {floatingElements.map((element, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
              opacity: 0.6,
              transform: `translate(${
                (mousePosition.x - window.innerWidth / 2) * 0.01 * (index + 1)
              }px, ${
                (mousePosition.y - window.innerHeight / 2) * 0.01 * (index + 1)
              }px) translateY(${scrollY * 0.1 * (index + 1)}px)`,
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              animation: `float-${index} ${
                4 + element.delay
              }s ease-in-out infinite`,
              "@keyframes float-0": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-20px)" },
              },
              "@keyframes float-1": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-15px)" },
              },
              "@keyframes float-2": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-25px)" },
              },
              "@keyframes float-3": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-18px)" },
              },
              "@keyframes float-4": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-12px)" },
              },
              "@keyframes float-5": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-22px)" },
              },
            }}
          />
        ))}

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              textAlign: "center",
              py: { xs: 6, md: 8 },
              transform: `translateY(${scrollY * -0.3}px)`, // Parallax effect
            }}
          >
            {/* Subtitle */}
            <Typography
              variant="subtitle1"
              sx={{
                mb: { xs: 1.5, md: 2 },
                color: "primary.main",
                fontWeight: 500,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                fontSize: { xs: "0.8rem", md: "0.9rem" },
                opacity: 0,
                animation: "slideUp 1s ease-out 0.2s forwards",
                "@keyframes slideUp": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(20px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              Software Engineer II
            </Typography>

            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                mb: { xs: 2, md: 3 },
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #ffffff 0%, #5AC8FA 50%, #007AFF 100%)"
                    : "linear-gradient(135deg, #1D1D1F 0%, #007AFF 50%, #5AC8FA 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                opacity: 0,
                animation:
                  "slideUp 1s ease-out 0.4s forwards, textShimmer 3s ease-in-out 1s infinite",
                "@keyframes textShimmer": {
                  "0%": { backgroundPosition: "0% center" },
                  "100%": { backgroundPosition: "200% center" },
                },
              }}
            >
              Bhumika Agarwal
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 4, md: 6 },
                maxWidth: 680,
                mx: "auto",
                color: "text.secondary",
                opacity: 0,
                animation: "slideUp 1s ease-out 0.6s forwards",
              }}
            >
              Creating exceptional digital experiences with modern technologies.
              Specialized in building scalable applications and secure financial
              systems that serve millions of users worldwide.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 3 },
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                opacity: 0,
                animation: "slideUp 1s ease-out 0.8s forwards",
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/projects"
                endIcon={<ArrowForward />}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 500,
                  borderRadius: 50,
                  minWidth: 160,
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transition: "left 0.6s",
                  },
                  "&:hover::before": {
                    left: "100%",
                  },
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(0, 122, 255, 0.3)",
                  },
                }}
              >
                View My Work
              </Button>

              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/about"
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 500,
                  borderRadius: 50,
                  minWidth: 160,
                  borderWidth: 1.5,
                  "&:hover": {
                    borderWidth: 1.5,
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(0, 122, 255, 0.15)",
                  },
                }}
              >
                About Me
              </Button>
            </Box>
          </Box>
        </Container>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0,
            animation:
              "fadeIn 1s ease-out 1.5s forwards, bounce 2s ease-in-out 2s infinite",
            "@keyframes fadeIn": {
              "0%": {
                opacity: 0,
                transform: "translateX(-50%) translateY(20px)",
              },
              "100%": {
                opacity: 0.6,
                transform: "translateX(-50%) translateY(0)",
              },
            },
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
              "50%": { transform: "translateX(-50%) translateY(-10px)" },
            },
          }}
        >
          <Box
            sx={{
              width: 2,
              height: 40,
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, transparent)`,
              borderRadius: 1,
              mx: "auto",
              mb: 1,
            }}
          />
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontSize: "0.75rem" }}
          >
            Scroll
          </Typography>
        </Box>
      </Box>

      {/* Quick Stats Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background:
            theme.palette.mode === "dark"
              ? "rgba(28, 28, 30, 0.5)"
              : "rgba(242, 242, 247, 0.5)",
          backdropFilter: "blur(20px)",
          borderTop: `0.5px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 4, md: 6 },
              textAlign: "center",
            }}
          >
            {[
              {
                number: "3+",
                label: "Years Experience",
                desc: "In fintech & banking",
              },
              {
                number: "25+",
                label: "APIs Built",
                desc: "Production-ready systems",
              },
              {
                number: "30%",
                label: "Performance Boost",
                desc: "System optimization",
              },
            ].map((stat, index) => (
              <Box
                key={index}
                sx={{
                  opacity: 0,
                  animation: `slideUp 0.8s ease-out ${
                    0.2 + index * 0.1
                  }s forwards`,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ mb: 0.5, color: "text.primary" }}
                >
                  {stat.label}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {stat.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
