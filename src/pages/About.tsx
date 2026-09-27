import { AutoAwesome, Bolt, ViewInAr } from "@mui/icons-material";
import { Box, Chip, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import { ACCENT, accentGlow, monoFont } from "../theme/theme";

const PHILOSOPHY = [
  {
    icon: Bolt,
    title: "Modernize with intent",
    body: "Replatforming a legacy system is not a rewrite for its own sake. I keep the business rules that matter, remove the accidental complexity, and turn each migration into reusable, testable components.",
  },
  {
    icon: ViewInAr,
    title: "Reliability over cleverness",
    body: "A good backend is felt, not seen. I care about clean service boundaries, observable systems, and releases that nobody has to watch at 3 AM.",
  },
  {
    icon: AutoAwesome,
    title: "Use AI, keep judgment",
    body: "AI agents speed up the analysis and translation of legacy logic. I build shared context and prompt conventions around them, but engineering judgment decides what ships.",
  },
];

const SECTION_GAP = { my: { xs: 6, md: 9 } };

const metaSx = {
  fontFamily: monoFont,
  fontSize: "0.75rem",
  color: "text.secondary",
  flexShrink: 0,
  mt: 0.5,
  letterSpacing: "0.02em",
};

const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const cardBorder = theme.palette.divider;

  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      {/* Intro */}
      <SectionLabel>About</SectionLabel>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Architecting quietly reliable systems.
      </Typography>

      <Box
        sx={{
          maxWidth: 720,
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          I&apos;m a software engineer with 4 years of experience designing
          scalable backend systems in Java, Spring Boot, microservices, Camunda
          7 (BPMN), Kafka, PostgreSQL and AWS. Most of my work has been
          modernizing legacy banking platforms into resilient, maintainable
          services.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          At JPMorgan Chase I owned the Overcharge Dispute capability, a set of
          Spring Boot and Camunda 7 services processing more than 10,000 dispute
          cases a month. I led the Kafka intake pipeline for the platform, moved
          legacy Pega workflows onto reusable BPMN components, and provisioned
          AWS infrastructure with Terraform. I also build the React and
          TypeScript interfaces that sit on top of these systems.
        </Typography>
      </Box>

      <Divider sx={SECTION_GAP} />

      {/* Philosophy */}
      <Reveal>
        <SectionHeading label="Approach" title="The philosophy" />
      </Reveal>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {PHILOSOPHY.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 70}>
              <Card sx={{ height: "100%", p: { xs: 2.5, md: 3 } }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    backgroundColor: accentGlow(isDark ? 0.12 : 0.09),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Icon sx={{ fontSize: 20, color: ACCENT }} />
                </Box>
                <Typography variant="h4" sx={{ mb: 1.25 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.body}
                </Typography>
              </Card>
            </Reveal>
          );
        })}
      </Box>

      <Divider sx={SECTION_GAP} />

      {/* Experience */}
      <Reveal>
        <SectionHeading label="Experience" title="Work history" />
      </Reveal>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {experience.map((job) => (
          <Reveal key={job.id}>
            <Card sx={{ p: { xs: 2.5, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 0.5,
                }}
              >
                <Typography variant="h3">{job.role}</Typography>
                <Typography sx={metaSx}>{job.period}</Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: monoFont,
                  fontSize: "0.8125rem",
                  color: ACCENT,
                  mb: 2.5,
                }}
              >
                {job.company} · {job.location}
              </Typography>

              <Box
                component="ul"
                sx={{ pl: 2.5, m: 0, mb: 3, listStyleType: "disc" }}
              >
                {job.bullets.map((bullet) => (
                  <Box
                    key={bullet}
                    component="li"
                    sx={{
                      "&:not(:last-of-type)": { mb: 1.25 },
                      "&::marker": { color: accentGlow(0.6) },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {bullet}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {job.stack.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </Box>
            </Card>
          </Reveal>
        ))}
      </Box>

      <Divider sx={SECTION_GAP} />

      {/* Technical Arsenal */}
      <Reveal>
        <SectionHeading label="Skills" title="Technical arsenal" />
      </Reveal>

      <Reveal>
        <Card sx={{ overflow: "hidden" }}>
          {skills.map((row, i) => (
            <Box
              key={row.category}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                borderBottom:
                  i < skills.length - 1 ? `1px solid ${cardBorder}` : "none",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: accentGlow(isDark ? 0.05 : 0.035),
                  "& .skill-label": { color: ACCENT },
                },
              }}
            >
              <Box
                sx={{
                  px: { xs: 2.5, md: 3.5 },
                  py: 2.25,
                  width: { sm: 240 },
                  flexShrink: 0,
                  borderRight: { sm: `1px solid ${cardBorder}` },
                  borderBottom: {
                    xs: `1px solid ${cardBorder}`,
                    sm: "none",
                  },
                }}
              >
                <Typography
                  className="skill-label"
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "text.secondary",
                    transition: "color 0.2s ease",
                  }}
                >
                  {row.category}
                </Typography>
              </Box>
              <Box sx={{ px: { xs: 2.5, md: 3.5 }, py: 2.25, flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.8125rem",
                    color: "text.primary",
                    lineHeight: 1.7,
                  }}
                >
                  {row.items}
                </Typography>
              </Box>
            </Box>
          ))}
        </Card>
      </Reveal>

      <Divider sx={SECTION_GAP} />

      {/* Education */}
      <Reveal>
        <SectionHeading label="Education" title="Academics" />
      </Reveal>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {education.map((edu) => (
          <Reveal key={edu.id}>
            <Card sx={{ p: { xs: 2.5, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 0.5,
                }}
              >
                <Typography variant="h3">{edu.degree}</Typography>
                <Typography sx={metaSx}>{edu.period}</Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: monoFont,
                  fontSize: "0.8125rem",
                  color: ACCENT,
                  mb: edu.coursework ? 2 : 0,
                }}
              >
                {edu.institution} · {edu.location}
              </Typography>

              {edu.coursework && (
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 600 }}
                  >
                    Relevant coursework:{" "}
                  </Box>
                  {edu.coursework}
                </Typography>
              )}
            </Card>
          </Reveal>
        ))}
      </Box>
    </Container>
  );
};

export default About;
