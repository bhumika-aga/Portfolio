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
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 1,
            color: "primary.main",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            fontSize: { xs: "0.8rem", md: "0.9rem" },
          }}
        >
          Let's Connect
        </Typography>
        <Typography
          variant="h1"
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
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            maxWidth: 560,
            mx: "auto",
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          Always open to discussing new opportunities in software engineering,
          fintech, and innovative projects. Let's collaborate and build
          something amazing together!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1.8fr 1fr" },
          gap: { xs: 4, md: 5 },
        }}
      >
        {/* Contact Form */}
        <Box>
          <Card
            sx={{
              p: { xs: 3, md: 4 },
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
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Send Me a Message
            </Typography>
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
                <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{
                      px: { xs: 3, md: 4 },
                      py: { xs: 1, md: 1.2 },
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      fontWeight: 600,
                      borderRadius: 25,
                      boxShadow: "0 4px 12px rgba(0, 122, 255, 0.3)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(0, 122, 255, 0.4)",
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

        {/* Contact Info Sidebar */}
        <Box>
          {/* Contact Information */}
          <Box sx={{ mb: { xs: 4, md: 5 } }}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                fontWeight: 600,
                color: "text.primary",
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
                      ? "rgba(28, 28, 30, 0.6)"
                      : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: (theme) =>
                    `1px solid ${
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.05)"
                    }`,
                  borderRadius: 2,
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "&:hover": {
                    transform: "translateY(-2px) translateX(4px)",
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(28, 28, 30, 0.8)"
                        : "rgba(255, 255, 255, 0.95)",
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 8px 25px rgba(0,0,0,0.2)"
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
              }}
            >
              Follow Me
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
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
                    width: { xs: 42, md: 48 },
                    height: { xs: 42, md: 48 },
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0, 122, 255, 0.3)",
                    "&:hover": {
                      bgcolor: "primary.dark",
                      transform: "translateY(-3px)",
                      boxShadow: "0 6px 20px rgba(0, 122, 255, 0.4)",
                    },
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "text.secondary",
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                lineHeight: 1.5,
              }}
            >
              Connect with me on social media for the latest updates on my
              projects and professional journey.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
