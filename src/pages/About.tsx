import { Box, Chip, Divider, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import SectionLabel from "../components/SectionLabel";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import {
  ACCENT,
  EASE_OUT_EXPO,
  glassBg,
  glassBorder,
  monoFont,
} from "../theme/theme";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: EASE_OUT_EXPO },
};

const About: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        maxWidth: 720,
        mx: "auto",
        px: { xs: 3, sm: 4 },
        py: { xs: 7, md: 10 },
      }}
    >
      {/* About */}
      <motion.div {...fadeUp}>
        <SectionLabel>About</SectionLabel>
        <Typography variant="h2" sx={{ mb: 4, color: "text.primary" }}>
          Background
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            I&apos;m a Software Engineer II at JPMorgan Chase, working on BFSI
            platforms — credit card disputes and bonds trading — where I focus
            on modernizing legacy systems into resilient, event-driven
            microservice architectures.
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Day-to-day, I work across Camunda 7 BPMN workflows and Java External
            Task Workers for the credit card dispute platform, SOAP-to-REST
            modernization with Kafka SaaS as the asynchronous backbone,
            infrastructure as code with Blue-Green deployment pipelines, and
            React-side feature work plus P1 incident response on the bonds
            trading platform.
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Outside of work, I build distributed systems and full-stack
            platforms. I care about clean service boundaries, observable
            systems, deployments that don&apos;t wake people up at 3 AM, and
            code that survives a Monday morning.
          </Typography>
        </Box>
      </motion.div>

      <Divider sx={{ my: { xs: 6, md: 8 } }} />

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        <SectionLabel>Experience</SectionLabel>
        <Typography variant="h2" sx={{ mb: 5, color: "text.primary" }}>
          Work history
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        {experience.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease: EASE_OUT_EXPO,
              delay: i * 0.06,
            }}
          >
            <Box
              sx={{
                ...glassBg(isDark ? "dark" : "light"),
                border: `1px solid ${glassBorder(isDark ? "dark" : "light")}`,
                borderRadius: "10px",
                p: { xs: 2.5, md: 3.5 },
                transition: "border-color 0.2s ease, background 0.2s ease",
                "&:hover": { borderColor: ACCENT },
              }}
            >
              {/* Header row */}
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
                <Typography variant="h3" sx={{ color: "text.primary" }}>
                  {job.role}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.6875rem",
                    color: "text.secondary",
                    flexShrink: 0,
                    mt: 0.25,
                    letterSpacing: "0.02em",
                  }}
                >
                  {job.period}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: monoFont,
                  fontSize: "0.75rem",
                  color: ACCENT,
                  mb: 2.5,
                  letterSpacing: "0.01em",
                }}
              >
                {job.company} · {job.location}
              </Typography>

              {/* Bullets */}
              <Box
                component="ul"
                sx={{ pl: 2.5, m: 0, mb: 3, listStyleType: "disc" }}
              >
                {job.bullets.map((bullet, bi) => (
                  <Box
                    key={bi}
                    component="li"
                    sx={{ mb: bi < job.bullets.length - 1 ? 1.25 : 0 }}
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

              {/* Stack chips */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {job.stack.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Divider sx={{ my: { xs: 6, md: 8 } }} />

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        <SectionLabel>Skills</SectionLabel>
        <Typography variant="h2" sx={{ mb: 5, color: "text.primary" }}>
          Technical stack
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {skills.map((row, i) => (
            <Box
              key={row.category}
              sx={{
                display: "flex",
                borderTop:
                  i === 0
                    ? `1px solid ${glassBorder(isDark ? "dark" : "light")}`
                    : "none",
                borderBottom: `1px solid ${glassBorder(isDark ? "dark" : "light")}`,
                borderLeft: `1px solid ${glassBorder(isDark ? "dark" : "light")}`,
                borderRight: `1px solid ${glassBorder(isDark ? "dark" : "light")}`,
                borderRadius:
                  i === 0
                    ? "8px 8px 0 0"
                    : i === skills.length - 1
                      ? "0 0 8px 8px"
                      : "0",
                overflow: "hidden",
                flexDirection: { xs: "column", sm: "row" },
                transition: "border-color 0.2s ease",
                ...glassBg(isDark ? "dark" : "light"),
                "&:hover": {
                  "& .skill-label": {
                    color: ACCENT,
                  },
                },
              }}
            >
              <Box
                sx={{
                  px: 2.5,
                  py: 1.75,
                  minWidth: { sm: 168 },
                  borderRight: {
                    sm: `1px solid ${glassBorder(isDark ? "dark" : "light")}`,
                  },
                  borderBottom: {
                    xs: `1px solid ${glassBorder(isDark ? "dark" : "light")}`,
                    sm: "none",
                  },
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.025)"
                    : "rgba(0,0,0,0.02)",
                }}
              >
                <Typography
                  className="skill-label"
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.6875rem",
                    color: "text.secondary",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.02em",
                    transition: "color 0.2s ease",
                  }}
                >
                  {row.category}
                </Typography>
              </Box>
              <Box sx={{ px: 2.5, py: 1.75, flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.8125rem",
                    color: "text.primary",
                    lineHeight: 1.65,
                    letterSpacing: "0.005em",
                  }}
                >
                  {row.items}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;
