import {
  ArrowUpward,
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Fab,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = {
    quickLinks: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Projects", path: "/projects" },
      { label: "Contact", path: "/contact" },
    ],
    contactInfo: [
      {
        icon: <Email />,
        label: "Email",
        value: "bhumika.aga@gmail.com",
        href: "mailto:bhumika.aga@gmail.com",
      },
      {
        icon: <Phone />,
        label: "Phone",
        value: "+91 9315351119",
        href: "tel:+919315351119",
      },
      {
        icon: <LocationOn />,
        label: "Location",
        value: "Mumbai, Maharashtra",
        href: "#",
      },
    ],
    socialLinks: [
      {
        icon: <LinkedIn />,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bhumika-aga",
        color: "#0A66C2",
      },
      {
        icon: <GitHub />,
        name: "GitHub",
        url: "https://github.com/bhumika-aga",
        color: theme.palette.mode === "dark" ? "#fff" : "#333",
      },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        mt: "auto",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, rgba(28, 28, 30, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(242, 242, 247, 0.98) 100%)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderTop: `1px solid ${theme.palette.divider}`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(90, 200, 250, 0.05) 0%, transparent 50%)"
              : "radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(90, 200, 250, 0.02) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ py: { xs: 4, md: 5 } }}>
          {/* Main Footer Content */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            {/* About Me Section */}
            <Box sx={{ gridColumn: { xs: "1", md: "1 / 3" } }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 700,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #ffffff 0%, #5AC8FA 100%)"
                      : "linear-gradient(135deg, #1D1D1F 0%, #007AFF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Bhumika Agarwal
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: "text.secondary",
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  lineHeight: 1.6,
                }}
              >
                Software Engineer II at JPMorgan Chase & Co. Passionate about
                building scalable applications and secure financial systems that
                impact millions of users worldwide.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  fontStyle: "italic",
                }}
              >
                "Creating exceptional digital experiences with modern
                technologies."
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {footerSections.quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      position: "relative",
                      display: "inline-block",
                      width: "fit-content",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateX(4px)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0",
                        height: "2px",
                        bottom: "-2px",
                        left: "0",
                        background: "primary.main",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                      ...(location.pathname === link.path && {
                        color: "primary.main",
                        fontWeight: 600,
                      }),
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Get In Touch */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Get In Touch
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {footerSections.contactInfo.map((contact, index) => (
                  <Link
                    key={index}
                    href={contact.href}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "text.secondary",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mr: 1.5,
                        color: "primary.main",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "1.1rem",
                      }}
                    >
                      {contact.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "0.8rem", md: "0.85rem" },
                          fontWeight: 500,
                        }}
                      >
                        {contact.value}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Follow Me */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Follow Me
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
                {footerSections.socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 44,
                      height: 44,
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.03)",
                      color: "text.secondary",
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                      transition:
                        "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      "&:hover": {
                        backgroundColor: social.color + "15",
                        color: social.color,
                        borderColor: social.color + "40",
                        transform: "translateY(-4px)",
                        boxShadow: `0 8px 25px ${social.color}20`,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  lineHeight: 1.5,
                }}
              >
                Let's connect and build something amazing together!
              </Typography>
            </Box>
          </Box>

          {/* Divider */}
          <Divider
            sx={{
              my: { xs: 3, md: 4 },
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(0, 0, 0, 0.08)",
            }}
          />

          {/* Bottom Footer */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              © 2025 Bhumika Agarwal. Built with ❤️ using React & TypeScript.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Fab
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            bgcolor: "primary.main",
            color: "white",
            width: 56,
            height: 56,
            boxShadow: "0 8px 25px rgba(0, 122, 255, 0.3)",
            "&:hover": {
              bgcolor: "primary.dark",
              transform: "translateY(-3px)",
              boxShadow: "0 12px 35px rgba(0, 122, 255, 0.4)",
            },
            transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            zIndex: 1000,
          }}
        >
          <ArrowUpward />
        </Fab>
      )}
    </Box>
  );
};

export default Footer;
