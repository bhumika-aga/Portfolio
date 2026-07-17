import { createTheme, PaletteMode } from "@mui/material/styles";

// Vibrant blue accent — matches the "MinimalDev" design system.
export const ACCENT = "#0070F3";
export const ACCENT_RGB = "0, 112, 243";
export const monoFont = '"JetBrains Mono", ui-monospace, Menlo, monospace';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// Accent-tinted glow, tuned per mode for hover shadows and ambient light.
export const accentGlow = (alpha: number) => `rgba(${ACCENT_RGB}, ${alpha})`;

export const glassBg = (mode: PaletteMode) => ({
  background:
    mode === "dark" ? "rgba(255,255,255,0.028)" : "rgba(255,255,255,0.7)",
  backdropFilter: "blur(12px) saturate(160%)",
  WebkitBackdropFilter: "blur(12px) saturate(160%)",
});

export const glassBorder = (mode: PaletteMode) =>
  mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: ACCENT,
      },
      background: {
        default: mode === "dark" ? "#0A0A0A" : "#FBF9F8",
        paper: mode === "dark" ? "#111111" : "#FFFFFF",
      },
      text: {
        primary: mode === "dark" ? "#E8E8E8" : "#1B1C1C",
        secondary: mode === "dark" ? "#8B8B8B" : "#414754",
      },
      divider: mode === "dark" ? "#232323" : "#E4E2E2",
    },
    typography: {
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: {
        fontSize: "4rem",
        fontWeight: 700,
        lineHeight: 1.04,
        letterSpacing: "-0.04em",
        "@media (max-width:900px)": { fontSize: "3rem" },
        "@media (max-width:600px)": { fontSize: "2.25rem" },
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
        "@media (max-width:600px)": { fontSize: "1.75rem" },
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: "-0.02em",
      },
      h4: {
        fontSize: "1.125rem",
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.65,
        letterSpacing: "-0.003em",
      },
      body2: {
        fontSize: "0.9375rem",
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
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: "smooth",
            backgroundImage:
              mode === "dark"
                ? `radial-gradient(ellipse 110% 55% at 0% 0%, ${accentGlow(0.09)} 0%, transparent 55%),
                   radial-gradient(ellipse 80% 50% at 100% 100%, ${accentGlow(0.05)} 0%, transparent 55%)`
                : `radial-gradient(ellipse 110% 55% at 0% 0%, ${accentGlow(0.06)} 0%, transparent 55%),
                   radial-gradient(ellipse 80% 50% at 100% 100%, ${accentGlow(0.04)} 0%, transparent 55%)`,
            backgroundAttachment: "fixed",
          },
          "a:focus-visible, button:focus-visible": {
            outline: `2px solid ${ACCENT}`,
            outlineOffset: "2px",
            borderRadius: "4px",
          },
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "*::-webkit-scrollbar-thumb": {
            background: mode === "dark" ? "#262626" : "#D4D4D4",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: mode === "dark" ? "#333333" : "#BDBDBD",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor:
              mode === "dark"
                ? "rgba(10, 10, 10, 0.72)"
                : "rgba(251, 249, 248, 0.8)",
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
            fontWeight: 500,
            backgroundColor:
              mode === "dark" ? accentGlow(0.1) : accentGlow(0.07),
            border: "none",
            color: mode === "dark" ? "#7BB5FF" : "#0058C3",
            height: 24,
            letterSpacing: "0.01em",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: mode === "dark" ? "#1E1E1E" : "#E4E2E2",
          },
        },
      },
    },
  });
