import { createTheme, PaletteMode } from "@mui/material/styles";

export const ACCENT = "#34D399";
export const monoFont = '"JetBrains Mono", ui-monospace, Menlo, monospace';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const glassBg = (mode: PaletteMode) => ({
  background:
    mode === "dark" ? "rgba(255,255,255,0.028)" : "rgba(255,255,255,0.6)",
  backdropFilter: "blur(12px) saturate(160%)",
  WebkitBackdropFilter: "blur(12px) saturate(160%)",
});

export const glassBorder = (mode: PaletteMode) =>
  mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";

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
        fontSize: "3.25rem",
        fontWeight: 700,
        lineHeight: 1.0,
        letterSpacing: "-0.04em",
        "@media (max-width:900px)": { fontSize: "2.5rem" },
        "@media (max-width:600px)": { fontSize: "2rem" },
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontSize: "1.0625rem",
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      },
      h4: {
        fontSize: "0.9375rem",
        fontWeight: 600,
        lineHeight: 1.35,
      },
      body1: {
        fontSize: "0.9375rem",
        lineHeight: 1.7,
        letterSpacing: "-0.003em",
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.65,
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
      borderRadius: 8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: "smooth",
            backgroundImage:
              mode === "dark"
                ? `radial-gradient(ellipse 110% 55% at 0% 0%, rgba(52,211,153,0.07) 0%, transparent 55%),
                   radial-gradient(ellipse 80% 50% at 100% 100%, rgba(52,211,153,0.045) 0%, transparent 55%)`
                : `radial-gradient(ellipse 110% 55% at 0% 0%, rgba(52,211,153,0.08) 0%, transparent 55%),
                   radial-gradient(ellipse 80% 50% at 100% 100%, rgba(52,211,153,0.055) 0%, transparent 55%)`,
            backgroundAttachment: "fixed",
          },
          "a:focus-visible, button:focus-visible": {
            outline: `2px solid ${ACCENT}`,
            outlineOffset: "2px",
            borderRadius: "4px",
          },
          "*::-webkit-scrollbar": {
            width: "4px",
          },
          "*::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "*::-webkit-scrollbar-thumb": {
            background: mode === "dark" ? "#262626" : "#D4D4D4",
            borderRadius: "2px",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor:
              mode === "dark"
                ? "rgba(10, 10, 10, 0.72)"
                : "rgba(250, 250, 250, 0.72)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            boxShadow: "none",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            fontFamily: monoFont,
            fontSize: "0.6875rem",
            fontWeight: 400,
            backgroundColor: "transparent",
            border: `1px solid ${mode === "dark" ? "#262626" : "#E5E5E5"}`,
            color: "#737373",
            height: 22,
            letterSpacing: "0.01em",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: mode === "dark" ? "#1E1E1E" : "#EBEBEB",
          },
        },
      },
    },
  });
