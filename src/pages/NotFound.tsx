import { ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import { ROUTES } from "../routes";
import { ACCENT, monoFont } from "../theme/theme";

const NotFound: React.FC = () => (
  <Container sx={{ maxWidth: 720, py: { xs: 7, md: 10 } }}>
    <SectionLabel>404</SectionLabel>
    <Typography variant="h2" sx={{ mb: 2 }}>
      This page doesn&apos;t exist.
    </Typography>
    <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
      The link may be outdated, or the address was mistyped.
    </Typography>
    <Box
      component={Link}
      to={ROUTES.home}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        fontFamily: monoFont,
        fontSize: "0.8125rem",
        color: ACCENT,
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      Back to home
      <ArrowForward sx={{ fontSize: 15 }} />
    </Box>
  </Container>
);

export default NotFound;
