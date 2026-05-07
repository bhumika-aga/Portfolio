import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContextDef";

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("themeMode");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleColorMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
