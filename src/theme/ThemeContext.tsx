import { PaletteMode } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContextDef";

// Same key is read by the inline script in index.html before React loads.
const STORAGE_KEY = "themeMode";
const DARK_QUERY = "(prefers-color-scheme: dark)";

// Storage can throw (blocked cookies, some private modes) — treat as unset.
const readSaved = (): PaletteMode | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "dark" || saved === "light" ? saved : null;
  } catch {
    return null;
  }
};

const systemMode = (): PaletteMode =>
  window.matchMedia(DARK_QUERY).matches ? "dark" : "light";

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>(
    () => readSaved() ?? systemMode()
  );

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  // Follow OS changes until the visitor picks a mode explicitly.
  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const onChange = (e: MediaQueryListEvent) => {
      if (!readSaved()) setMode(e.matches ? "dark" : "light");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggleColorMode = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Non-persistent toggle is fine.
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
