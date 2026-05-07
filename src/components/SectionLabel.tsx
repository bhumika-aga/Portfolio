import { Typography } from "@mui/material";
import React from "react";
import { ACCENT, monoFont } from "../theme/theme";

interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => (
  <Typography
    component="p"
    sx={{
      fontFamily: monoFont,
      fontSize: "0.6875rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: ACCENT,
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
);

export default SectionLabel;
