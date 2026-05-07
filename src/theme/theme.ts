import { createTheme, PaletteMode } from "@mui/material/styles";

export const ACCENT = "#34D399";
export const monoFont = '"JetBrains Mono", ui-monospace, Menlo, monospace';

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: ACCENT,
      },
      background: {
        default: mode === "dark" ? "#0A0A0A" : "#FAFAFA",
        paper: mode === "dark" ? "#111111" : "#FFFFFF",
      },
      text: {
        primary: mode === "dark" ? "#E5E5E5" : "#171717",
        secondary: "#737373",
      },
      divider: mode === "dark" ? "#262626" : "#E5E5E5",
    },
    typography: {
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
        "@media (max-width:600px)": { fontSize: "1.625rem" },
      },
      h2: {
        fontSize: "1.375rem",
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: "-0.015em",
      },
      h3: {
        fontSize: "1.125rem",
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: "-0.01em",
      },
      h4: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      body1: {
        fontSize: "0.9375rem",
        lineHeight: 1.65,
        letterSpacing: "-0.003em",
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
        letterSpacing: "-0.003em",
      },
      subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "-0.003em",
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: 1.5,
        color: "#737373",
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: "smooth",
          },
          "a:focus-visible, button:focus-visible": {
            outline: `2px solid ${ACCENT}`,
            outlineOffset: "2px",
            borderRadius: "2px",
          },
          "*::-webkit-scrollbar": {
            width: "4px",
          },
          "*::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "*::-webkit-scrollbar-thumb": {
            background: mode === "dark" ? "#262626" : "#E5E5E5",
            borderRadius: "2px",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#0A0A0A" : "#FAFAFA",
            boxShadow: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#111111" : "#FFFFFF",
            backgroundImage: "none",
            border: `1px solid ${mode === "dark" ? "#262626" : "#E5E5E5"}`,
            boxShadow: "none",
            borderRadius: 4,
            "&:hover": {
              borderColor: ACCENT,
            },
            transition: "border-color 0.15s ease",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
            fontSize: "0.875rem",
            borderRadius: 4,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
          contained: {
            backgroundColor: mode === "dark" ? "#1A1A1A" : "#171717",
            color: mode === "dark" ? "#E5E5E5" : "#FAFAFA",
            border: `1px solid ${mode === "dark" ? "#262626" : "#262626"}`,
            "&:hover": {
              backgroundColor: mode === "dark" ? "#242424" : "#2A2A2A",
              boxShadow: "none",
              borderColor: ACCENT,
            },
          },
          outlined: {
            borderColor: mode === "dark" ? "#262626" : "#E5E5E5",
            color: mode === "dark" ? "#E5E5E5" : "#171717",
            "&:hover": {
              borderColor: ACCENT,
              backgroundColor: "transparent",
              color: ACCENT,
            },
          },
          text: {
            color: "#737373",
            "&:hover": {
              backgroundColor: "transparent",
              color: ACCENT,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontFamily: monoFont,
            fontSize: "0.75rem",
            fontWeight: 400,
            backgroundColor: "transparent",
            border: `1px solid ${mode === "dark" ? "#262626" : "#E5E5E5"}`,
            color: "#737373",
            height: 24,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#737373",
            textDecorationColor: "transparent",
            transition: "color 0.15s ease",
            "&:hover": {
              color: ACCENT,
              textDecorationColor: ACCENT,
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: mode === "dark" ? "#262626" : "#E5E5E5",
          },
        },
      },
    },
  });
