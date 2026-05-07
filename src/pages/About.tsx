import { Box, Chip, Divider, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import { ACCENT, monoFont } from "../theme/theme";

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const About: React.FC = () => {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#262626" : "#E5E5E5";

  return (
    <Box
      sx={{
        maxWidth: 720,
        mx: "auto",
        px: { xs: 3, sm: 4 },
        py: { xs: 6, md: 8 },
      }}
    >
      {/* About */}
      <motion.div {...fadeIn}>
        <Typography variant="h2" sx={{ mb: 4, color: "text.primary" }}>
          About
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

      <Divider sx={{ my: { xs: 5, md: 6 } }} />

      {/* Experience */}
      <motion.div {...fadeIn} transition={{ duration: 0.4, delay: 0.05 }}>
        <Typography variant="h2" sx={{ mb: 4, color: "text.primary" }}>
          Experience
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {experience.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Box
              sx={{
                border: `1px solid ${borderColor}`,
                borderRadius: "4px",
                p: { xs: 2.5, md: 3 },
                transition: "border-color 0.15s ease",
                "&:hover": { borderColor: ACCENT },
              }}
            >
              {/* Header */}
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
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    flexShrink: 0,
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
                  mb: 2,
                }}
              >
                {job.company} · {job.location}
              </Typography>

              {/* Bullets */}
              <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 2.5 }}>
                {job.bullets.map((bullet, bi) => (
                  <Box
                    key={bi}
                    component="li"
                    sx={{
                      mb: bi < job.bullets.length - 1 ? 1 : 0,
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

              {/* Stack */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {job.stack.map((tech) => (
                  <Chip key={tech} label={tech} size="small" />
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Divider sx={{ my: { xs: 5, md: 6 } }} />

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: "text.primary" }}>
          Skills
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {skills.map((row, i) => (
            <Box
              key={row.category}
              sx={{
                display: "flex",
                borderTop: i === 0 ? `1px solid ${borderColor}` : "none",
                borderBottom: `1px solid ${borderColor}`,
                borderLeft: `1px solid ${borderColor}`,
                borderRight: `1px solid ${borderColor}`,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  minWidth: { sm: 160 },
                  borderRight: { sm: `1px solid ${borderColor}` },
                  borderBottom: { xs: `1px solid ${borderColor}`, sm: "none" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.category}
                </Typography>
              </Box>
              <Box sx={{ px: 2, py: 1.5, flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: monoFont,
                    fontSize: "0.8125rem",
                    color: "text.primary",
                    lineHeight: 1.6,
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
