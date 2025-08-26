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
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          I'm always interested in new opportunities in software engineering and
          fintech. Whether you have a project idea, want to collaborate, or just
          want to connect, feel free to reach out!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
          gap: 6,
        }}
      >
        <Box>
          <Card sx={{ p: 4 }}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Send Me a Message
            </Typography>
            {showSuccess && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your message! I'll get back to you soon.
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                }}
              >
                <Box>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
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
                  />
                </Box>
                <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>

        <Box>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
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
                  p: 2,
                  mb: 2,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    mr: 2,
                    color: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {info.icon}
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {info.title}
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {info.value}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>

          <Box>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Follow Me
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "white",
                    width: 48,
                    height: 48,
                    "&:hover": {
                      bgcolor: "secondary.dark",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
