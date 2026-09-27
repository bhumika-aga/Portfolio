import { ArrowOutward, GitHub } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { notes } from "../data/notes";
import { ACCENT, accentGlow, monoFont } from "../theme/theme";

const Notes: React.FC = () => (
  <Container sx={{ py: { xs: 6, md: 10 } }}>
    <Typography
      variant="h1"
      sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 2 }}
    >
      Engineering Notes
    </Typography>
    <Typography
      variant="h4"
      sx={{
        fontWeight: 400,
        color: "text.secondary",
        maxWidth: 600,
        mb: { xs: 5, md: 8 },
        lineHeight: 1.5,
      }}
    >
      Reference material I write while studying backend engineering, Java and
      algorithms. Each set is a standalone site on GitHub Pages.
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
        gap: 3,
      }}
    >
      {notes.map((set, i) => (
        <Reveal key={set.id} delay={(i % 2) * 70}>
          <Card
            interactive
            sx={{
              position: "relative",
              height: "100%",
              p: { xs: 2.5, md: 3.5 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: monoFont,
                fontSize: "0.6875rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: ACCENT,
                mb: 1.5,
              }}
            >
              {set.meta}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 2,
                mb: 1.5,
              }}
            >
              {/* The title link covers the whole card via ::after. */}
              <Typography
                variant="h3"
                component="a"
                href={set.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "16px",
                  },
                  "&:focus-visible": { outline: "none" },
                  "&:focus-visible::after": {
                    outline: `2px solid ${ACCENT}`,
                    outlineOffset: 2,
                  },
                }}
              >
                {set.title}
              </Typography>
              <ArrowOutward
                aria-hidden
                sx={{ fontSize: 20, color: ACCENT, flexShrink: 0, mt: 0.5 }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 2.5 }}
            >
              {set.description}
            </Typography>

            <Box
              sx={{
                mt: "auto",
                pt: 2,
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {set.topics.map((topic) => (
                  <Chip key={topic} label={topic} size="small" />
                ))}
              </Box>
              {/* Sits above the card-wide link so it stays clickable. */}
              <Box
                component="a"
                href={set.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${set.title} source on GitHub`}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  flexShrink: 0,
                  display: "flex",
                  p: 0.75,
                  borderRadius: "50%",
                  color: "text.secondary",
                  transition: "color 0.2s ease, background-color 0.2s ease",
                  "&:hover": {
                    color: ACCENT,
                    backgroundColor: accentGlow(0.1),
                  },
                }}
              >
                <GitHub sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Card>
        </Reveal>
      ))}
    </Box>
  </Container>
);

export default Notes;
