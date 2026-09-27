import { Box, BoxProps } from "@mui/material";
import React from "react";
import { accentGlow } from "../theme/theme";

interface CardProps extends BoxProps {
  // Lift and glow on hover. Only for cards that are, or carry, a link.
  interactive?: boolean;
}

const Card: React.FC<CardProps> = ({ interactive = false, sx, ...props }) => (
  <Box
    {...props}
    sx={[
      (theme) => ({
        borderRadius: "16px",
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: "background.paper",
        ...(interactive && {
          transition:
            "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            borderColor: accentGlow(0.5),
            boxShadow: `0 12px 40px ${accentGlow(theme.palette.mode === "dark" ? 0.16 : 0.14)}`,
          },
        }),
      }),
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  />
);

export default Card;
