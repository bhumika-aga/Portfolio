import { PaletteMode } from "@mui/material/styles";
import { createContext } from "react";

interface ThemeContextType {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
