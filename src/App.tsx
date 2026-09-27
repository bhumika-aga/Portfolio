import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import { ROUTES } from "./routes";
import { getTheme } from "./theme/theme";
import { ThemeModeProvider } from "./theme/ThemeContext";
import { useThemeMode } from "./theme/useThemeMode";

const AppContent: React.FC = () => {
  const { mode } = useThemeMode();
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Navbar />
          <Box
            component="main"
            sx={{
              flex: 1,
              pt: { xs: "56px", md: "64px" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Routes>
              <Route path={ROUTES.home} element={<Home />} />
              <Route path={ROUTES.about} element={<About />} />
              <Route path={ROUTES.projects} element={<Projects />} />
              <Route path={ROUTES.notes} element={<Notes />} />
              <Route path={ROUTES.contact} element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const App: React.FC = () => (
  <ThemeModeProvider>
    <AppContent />
  </ThemeModeProvider>
);

export default App;
