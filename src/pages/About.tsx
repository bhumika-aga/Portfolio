import { AutoAwesome, Bolt, ViewInAr } from "@mui/icons-material";
import { Box, Chip, Divider, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import SectionLabel from "../components/SectionLabel";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import { ACCENT, accentGlow, EASE_OUT_EXPO, monoFont } from "../theme/theme";

const CONTAINER = {
  maxWidth: 1120,
  mx: "auto",
  px: { xs: 3, sm: 4, md: 6 },
};

const PROSE = { maxWidth: 720 };

const PHILOSOPHY = [
  {
    icon: Bolt,
    title: "Modernize with intent",
    body: "Replatforming legacy systems isn't rewriting for its own sake. I preserve the business rules that matter, cut the accidental complexity, and de-risk every migration into reusable, testable components.",
  },
  {
    icon: ViewInAr,
    title: "Reliability over cleverness",
    body: "The best backend is felt, not seen. I care about clean service boundaries, observable systems, and deployments that don't wake anyone up at 3 AM — code that survives a Monday morning.",
  },
  {
    icon: AutoAwesome,
    title: "Leverage AI, keep judgment",
    body: "AI agents accelerate analysis and translation of legacy logic. I build reusable context and prompt conventions around them — but engineering judgment is what ships to production.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: EASE_OUT_EXPO },
};

const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const cardBorder = theme.palette.divider;

  const cardSx = {
    borderRadius: "16px",
    border: `1px solid ${cardBorder}`,
    backgroundColor: "background.paper",
    transition:
      "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
    "&:hover": {
      borderColor: accentGlow(0.5),
      transform: "translateY(-3px)",
      boxShadow: `0 12px 40px ${accentGlow(isDark ? 0.16 : 0.14)}`,
    },
  };

  return (
    <Box sx={{ ...CONTAINER, py: { xs: 6, md: 10 } }}>
      {/* Intro */}
      <motion.div {...fadeUp}>
        <SectionLabel>About</SectionLabel>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Architecting quietly reliable systems.
        </Typography>

        <Box
          sx={{ ...PROSE, display: "flex", flexDirection: "column", gap: 2.5 }}
        >
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            I&apos;m a Software Engineer II at JPMorgan Chase with 4 years of
            experience designing scalable backend systems — Java, Spring Boot,
            Microservices, Camunda 7 (BPMN), PostgreSQL, and AWS. I focus on
            modernizing legacy platforms into resilient, maintainable
            microservice architectures.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Day-to-day I own the Overcharge Dispute capability — Java services
            on Camunda 7 that resolve 10,000+ dispute cases a month — modernize
            legacy Pega workflows into reusable BPMN components, and provision
            AWS infrastructure through Terraform. Outside of work I build
            distributed systems and full-stack platforms end to end.
          </Typography>
        </Box>
      </motion.div>

      <Divider sx={{ my: { xs: 6, md: 9 } }} />

      {/* Philosophy */}
      <motion.div {...fadeUp}>
        <SectionLabel>Approach</SectionLabel>
        <Typography variant="h2" sx={{ mb: 5 }}>
          The philosophy
        </Typography>
      </motion.div>

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
            <Box
              key={item.title}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: EASE_OUT_EXPO,
                delay: i * 0.07,
              }}
            >
              <Box sx={{ ...cardSx, height: "100%", p: { xs: 2.5, md: 3 } }}>
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
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.65 }}
                >
                  {item.body}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Divider sx={{ my: { xs: 6, md: 9 } }} />

      {/* Experience */}
      <motion.div {...fadeUp}>
        <SectionLabel>Experience</SectionLabel>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Work history
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {experience.map((job, i) => (
          <Box
            key={job.id}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease: EASE_OUT_EXPO,
              delay: i * 0.06,
            }}
          >
            <Box sx={{ ...cardSx, p: { xs: 2.5, md: 4 } }}>
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
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    flexShrink: 0,
                    mt: 0.5,
                    letterSpacing: "0.02em",
                  }}
                >
                  {job.period}
                </Typography>
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
                {job.bullets.map((bullet, bi) => (
                  <Box
                    key={bi}
                    component="li"
                    sx={{
                      mb: bi < job.bullets.length - 1 ? 1.25 : 0,
                      "&::marker": { color: accentGlow(0.6) },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.65 }}
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
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: { xs: 6, md: 9 } }} />

      {/* Technical Arsenal */}
      <motion.div {...fadeUp}>
        <SectionLabel>Skills</SectionLabel>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Technical arsenal
        </Typography>
      </motion.div>

      <Box
        sx={{
          borderRadius: "16px",
          border: `1px solid ${cardBorder}`,
          backgroundColor: "background.paper",
          overflow: "hidden",
        }}
      >
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
                minWidth: { sm: 220 },
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
      </Box>

      <Divider sx={{ my: { xs: 6, md: 9 } }} />

      {/* Education */}
      <motion.div {...fadeUp}>
        <SectionLabel>Education</SectionLabel>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Academics
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {education.map((edu) => (
          <Box key={edu.id} sx={{ ...cardSx, p: { xs: 2.5, md: 4 } }}>
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
              <Typography
                sx={{
                  fontFamily: monoFont,
                  fontSize: "0.75rem",
                  color: "text.secondary",
                  flexShrink: 0,
                  mt: 0.5,
                  letterSpacing: "0.02em",
                }}
              >
                {edu.period}
              </Typography>
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
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.65 }}
              >
                <Box
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 600 }}
                >
                  Relevant coursework —{" "}
                </Box>
                {edu.coursework}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
