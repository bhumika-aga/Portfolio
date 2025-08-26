import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";

const About: React.FC = () => {
  const skills = [
    { name: "Java & Spring Boot", level: 95 },
    { name: "React & TypeScript", level: 90 },
    { name: "MySQL & MongoDB", level: 85 },
    { name: "REST APIs & Microservices", level: 90 },
    { name: "AWS Cloud Platform", level: 75 },
    { name: "JUnit Testing", level: 85 },
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
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            maxWidth: 700,
            mx: "auto",
            mb: 6,
          }}
        >
          I'm a passionate Software Engineer with 3+ years of experience at JP
          Morgan Chase & Co. and Cognizant, specializing in full-stack
          development with Java, Spring Boot, and React. I love building
          scalable applications and optimizing system performance.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
        }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                bgcolor: "primary.main",
                fontSize: "3rem",
              }}
            >
              BA
            </Avatar>
          </Box>
          <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
            My Journey
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            I started my journey as a Software Engineer Trainee at Cognizant,
            where I developed a comprehensive pharmaceutical benefit management
            system. I then progressed to Junior Software Engineer, working on
            core banking modules and REST APIs. Currently, I'm a Software
            Engineer II at JP Morgan Chase & Co., focusing on trading systems
            and API security.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            I specialize in developing robust backend systems with Spring Boot
            and creating dynamic frontends with React and TypeScript. My
            experience includes implementing JWT authentication, optimizing
            database queries, and ensuring high test coverage. I'm passionate
            about financial technology and building systems that handle critical
            operations.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h3" sx={{ mb: 4 }}>
            Skills & Technologies
          </Typography>
          <Box sx={{ mb: 4 }}>
            {skills.map((skill, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body1" fontWeight={500}>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: "rgba(0, 0, 0, 0.1)",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 4,
                      bgcolor: "secondary.main",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
          mt: 6,
        }}
      >
        <Card sx={{ textAlign: "center", p: 3 }}>
          <CardContent>
            <Typography variant="h2" color="secondary.main" sx={{ mb: 1 }}>
              25+
            </Typography>
            <Typography variant="h5">REST APIs Built</Typography>
          </CardContent>
        </Card>
        <Card sx={{ textAlign: "center", p: 3 }}>
          <CardContent>
            <Typography variant="h2" color="secondary.main" sx={{ mb: 1 }}>
              3+
            </Typography>
            <Typography variant="h5">Years Experience</Typography>
          </CardContent>
        </Card>
        <Card sx={{ textAlign: "center", p: 3 }}>
          <CardContent>
            <Typography variant="h2" color="secondary.main" sx={{ mb: 1 }}>
              85%+
            </Typography>
            <Typography variant="h5">Test Coverage</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
