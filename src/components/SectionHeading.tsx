import { Box, Typography } from "@mui/material";
import React from "react";
import SectionLabel from "./SectionLabel";

interface SectionHeadingProps {
  label: string;
  title: string;
  mb?: number;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  mb = 5,
}) => (
  <Box sx={{ mb }}>
    <SectionLabel>{label}</SectionLabel>
    <Typography variant="h2">{title}</Typography>
  </Box>
);

export default SectionHeading;
