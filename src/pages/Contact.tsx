import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
  Send,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: "Email",
      value: "bhumika.aga@gmail.com",
      link: "mailto:bhumika.aga@gmail.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+91 9315351119",
      link: "tel:+919315351119",
    },
    {
      icon: <LocationOn />,
      title: "Location",
      value: "Mumbai, Maharashtra",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bhumika-aga",
    },
    {
      icon: <GitHub />,
      name: "GitHub",
      url: "https://github.com/bhumika-aga",
    },
  ];

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Section - Centered Get In Touch */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: 8, md: 10 },
          pb: { xs: 8, md: 12 },
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "radial-gradient(ellipse at center, rgba(0, 122, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 70%)"
              : "radial-gradient(ellipse at center, rgba(90, 200, 250, 0.08) 0%, rgba(255, 255, 255, 0.95) 70%)",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                color: "primary.main",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mb: 4,
                fontSize: { xs: "2.2rem", md: "3rem" },
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #ffffff 0%, #5AC8FA 50%, #007AFF 100%)"
                    : "linear-gradient(135deg, #1D1D1F 0%, #007AFF 50%, #5AC8FA 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.2rem" },
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
                lineHeight: 1.7,
                mb: { xs: 6, md: 8 },
              }}
            >
              Always open to discussing new opportunities in software
              engineering, fintech, and innovative projects. Let's collaborate
              and build something amazing together!
            </Typography>
          </Box>

          {/* Contact Information and Social Links - Centered */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: { xs: 3, md: 4 },
              mb: { xs: 6, md: 8 },
            }}
          >
            {/* Contact Information */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 600,
                  color: "text.primary",
                  textAlign: "center",
                }}
              >
                Contact Information
              </Typography>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  component="a"
                  href={info.link}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: { xs: 2, md: 2.5 },
                    mb: 2,
                    textDecoration: "none",
                    color: "inherit",
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(28, 28, 30, 0.8)"
                        : "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(20px)",
                    border: (theme) =>
                      `1px solid ${
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.08)"
                          : "rgba(0, 0, 0, 0.05)"
                      }`,
                    borderRadius: 3,
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    "&:hover": {
                      transform: "translateY(-2px) translateX(4px)",
                      background: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(28, 28, 30, 0.95)"
                          : "rgba(255, 255, 255, 0.98)",
                      boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                          ? "0 8px 25px rgba(0,0,0,0.3)"
                          : "0 8px 25px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      p: 1,
                      borderRadius: "50%",
                      background: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(0, 122, 255, 0.1)"
                          : "rgba(0, 122, 255, 0.08)",
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.8rem", md: "0.85rem" } }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "text.primary",
                      }}
                    >
                      {info.value}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>

            {/* Social Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 600,
                  color: "text.primary",
                  textAlign: "center",
                }}
              >
                Follow Me
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                  mb: 3,
                }}
              >
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0, 122, 255, 0.3)",
                      "&:hover": {
                        bgcolor: "primary.dark",
                        transform: "translateY(-3px)",
                        boxShadow: "0 6px 20px rgba(0, 122, 255, 0.4)",
                      },
                      transition:
                        "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  lineHeight: 1.6,
                  textAlign: "center",
                  maxWidth: 300,
                  mx: "auto",
                }}
              >
                Connect with me on social media for the latest updates on my
                projects and professional journey.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Form Section - Appears on Scroll */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(20px)",
          borderTop: (theme) => `0.5px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "linear-gradient(135deg, #ffffff 0%, #5AC8FA 50%, #007AFF 100%)"
                    : "linear-gradient(135deg, #1D1D1F 0%, #007AFF 50%, #5AC8FA 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Send Me a Message
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 560,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              Have a project in mind or want to discuss opportunities? Drop me a
              message and I'll get back to you soon!
            </Typography>
          </Box>

          {/* Contact Form */}
          <Box>
            <Card
              sx={{
                p: { xs: 4, md: 5 },
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "rgba(28, 28, 30, 0.8)"
                    : "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px) saturate(180%)",
                border: (theme) =>
                  `1px solid ${
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.05)"
                  }`,
                borderRadius: 3,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              {showSuccess && (
                <Alert
                  severity="success"
                  sx={{
                    mb: 3,
                    borderRadius: 2,
                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                  }}
                >
                  Thank you for your message! I'll get back to you soon.
                </Alert>
              )}
              <Box component="form" onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: { xs: 2.5, md: 3 },
                  }}
                >
                  <Box>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      size="medium"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          "& fieldset": {
                            borderColor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.12)"
                                : "rgba(0, 0, 0, 0.12)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      size="medium"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          "& fieldset": {
                            borderColor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.12)"
                                : "rgba(0, 0, 0, 0.12)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      size="medium"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          "& fieldset": {
                            borderColor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.12)"
                                : "rgba(0, 0, 0, 0.12)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          "& fieldset": {
                            borderColor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.12)"
                                : "rgba(0, 0, 0, 0.12)",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      gridColumn: { xs: "1", sm: "1 / -1" },
                      textAlign: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<Send />}
                      sx={{
                        px: { xs: 4, md: 6 },
                        py: { xs: 1.2, md: 1.5 },
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                        borderRadius: 50,
                        boxShadow: "0 6px 20px rgba(0, 122, 255, 0.3)",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 10px 30px rgba(0, 122, 255, 0.4)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
