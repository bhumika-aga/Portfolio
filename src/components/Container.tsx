import { Box, BoxProps } from "@mui/material";
import React from "react";

// Page-width wrapper shared by every page, the navbar and the footer.
const Container: React.FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    {...props}
    sx={[
      {
        maxWidth: 1120,
        width: "100%",
        mx: "auto",
        px: { xs: 3, sm: 4, md: 6 },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  />
);

export default Container;
