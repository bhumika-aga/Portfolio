import { ArrowForward, Brush, Code, Speed } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const features = [
    {
      icon: <Code fontSize="large" />,
      title: "Backend Development",
      description:
        "Building robust APIs with Java, Spring Boot, and secure authentication systems",
    },
    {
      icon: <Brush fontSize="large" />,
      title: "Frontend Development",
      description:
        "Creating dynamic user interfaces with React, TypeScript, and Material-UI",
    },
    {
      icon: <Speed fontSize="large" />,
      title: "System Optimization",
      description:
        "Improving API performance by 30%+ through query optimization and caching",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              py: 6,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: 600,
                background: "linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bhumika Agarwal
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontSize: { xs: "1rem", md: "1.125rem" },
                fontWeight: 300,
                opacity: 0.9,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Software Engineer II at JP Morgan Chase & Co. | Full-Stack
              Developer specializing in Java, Spring Boot, React, and secure
              financial systems
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/projects"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: "white",
                  color: "#000000",
                  px: 3,
                  py: 1,
                  fontSize: "0.9rem",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 3,
                  py: 1,
                  fontSize: "0.9rem",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          What I Do
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 6,
            fontSize: "1rem",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Leveraging 3+ years of experience in fintech and banking to build
          scalable, secure applications that handle critical business operations
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      mb: 3,
                      color: "secondary.main",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">{feature.description}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Let's Build Something Great Together
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: "1rem" }}>
              Ready to collaborate on your next software project or discuss
              opportunities in fintech?
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowForward />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
              }}
            >
              Start a Conversation
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
