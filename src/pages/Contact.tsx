import emailjs from "@emailjs/browser";
import { Email, GitHub, LinkedIn, LocationOn, Send } from "@mui/icons-material";
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

/**
 * Email validation regex pattern.
 * Validates standard email format: local@domain.extension
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Form data interface for contact form state.
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Form errors interface for validation state.
 */
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/**
 * Initial form state.
 */
const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/**
 * Contact information data.
 */
const contactInfo = [
  {
    icon: <Email />,
    title: "Email",
    value: "bhumika.aga@gmail.com",
    link: "mailto:bhumika.aga@gmail.com",
  },
  {
    icon: <LocationOn />,
    title: "Location",
    value: "Mumbai, Maharashtra",
    link: "https://maps.google.com/?q=Mumbai,Maharashtra",
  },
];

/**
 * Social media links data.
 */
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

/**
 * Contact page component with form validation and contact information.
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Validates the form data and returns validation errors.
   */
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  /**
   * Handles input field changes and clears field-specific errors.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for the field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * Handles form submission with validation.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_qyshzkm",
        "template_iqmbcfh",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "pv-fupzZWRHcDulzh"
      );

      setShowSuccess(true);
      setFormData(initialFormData);
      setErrors({});

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError(
        "Failed to send message. Please try again later or contact me directly via email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Common text field styling.
   */
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      fontSize: { xs: "0.9rem", md: "1rem" },
      "& fieldset": {
        borderColor: (theme: { palette: { mode: string } }) =>
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
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Hero Section */}
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

          {/* Contact Information and Social Links */}
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
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
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
                    aria-label={social.name}
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

      {/* Contact Form Section */}
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
            {submitError && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  borderRadius: 2,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                }}
              >
                {submitError}
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit} noValidate>
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
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    required
                    variant="outlined"
                    size="medium"
                    sx={textFieldStyles}
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
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    required
                    variant="outlined"
                    size="medium"
                    sx={textFieldStyles}
                  />
                </Box>
                <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1" } }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={Boolean(errors.subject)}
                    helperText={errors.subject}
                    required
                    variant="outlined"
                    size="medium"
                    sx={textFieldStyles}
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
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    required
                    variant="outlined"
                    sx={textFieldStyles}
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
                    disabled={isSubmitting}
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
                      "&:disabled": {
                        opacity: 0.7,
                      },
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
