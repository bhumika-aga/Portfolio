/**
 * Project data configuration for the portfolio website.
 * This centralized file makes it easy to add, update, or remove projects.
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  apiUrl?: string;
}

/**
 * Featured projects displayed in the portfolio.
 * Projects are ordered by importance/recency - featured projects first.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "HealthSync - Hospital Management System",
    description:
      "Production-ready hospital management system with secure patient management, treatment planning, and insurance claim processing. Features JWT authentication, role-based access control, and comprehensive dashboards.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: [
      "Java 17",
      "Spring Boot",
      "React 19",
      "TypeScript",
      "MySQL",
      "Material-UI",
      "JWT",
      "JUnit 5",
    ],
    liveUrl: "https://healthsync-portal.onrender.com",
    githubUrl: "https://github.com/bhumika-aga/Hospital-Management-System",
  },
  {
    id: 2,
    title: "ReelCritic - Movie Review Platform",
    description:
      "Full-stack IMDb-style movie review platform with optimized backend and responsive UI. Features TMDb API integration, YouTube trailers, JWT authentication with role-based access, and comprehensive review system.",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: [
      "Java 17",
      "Spring Boot",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Material-UI",
      "JUnit 5",
    ],
    liveUrl: "https://reelcriticapp.onrender.com/",
    githubUrl: "https://github.com/bhumika-aga/MovieReviewApp",
  },
  {
    id: 3,
    title: "MediFlow - Mail-Order Pharmacy",
    description:
      "Next-generation mail-order pharmacy platform with microservices architecture. Features HIPAA compliance, prescription management, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: [
      "Spring Boot",
      "React 18+",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Microservices",
    ],
    liveUrl: "https://member-portal-xyt4.onrender.com",
    apiUrl: "https://member-portal-xyt4.onrender.com/swagger-ui.html",
    githubUrl: "https://github.com/bhumika-aga/Mail-Order-Pharmacy",
  },
  {
    id: 4,
    title: "RegulatoryApproval - Workflow System",
    description:
      "Modern regulatory workflow system built with Camunda for business process management. Features automated approval workflows, document tracking, and compliance monitoring for regulatory submissions.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: [
      "Java",
      "Spring Boot",
      "Camunda BPM",
      "PostgreSQL",
      "REST APIs",
      "Docker",
    ],
    liveUrl: "https://regulatoryapprovalsystem.onrender.com/camunda",
    githubUrl: "https://github.com/bhumika-aga/RegulatoryApprovalSystem",
  },
  {
    id: 5,
    title: "IRCTC Clone - Railway Booking",
    description:
      "Full-stack railway ticket booking application inspired by IRCTC. Features train search, seat availability checking, booking management, and user authentication with a modern responsive interface.",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "TypeScript",
      "React",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Material-UI",
    ],
    githubUrl: "https://github.com/bhumika-aga/IRCTC-Clone-App",
  },
  {
    id: 6,
    title: "ExamPortal - Online Examination System",
    description:
      "Online exam portal system for conducting secure digital examinations. Features question management, timer functionality, and automated grading with comprehensive reporting capabilities.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    technologies: [
      "TypeScript",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "JWT",
      "Material-UI",
    ],
    liveUrl: "https://examportal-demo.onrender.com",
    githubUrl: "https://github.com/bhumika-aga/Examportal-Application",
  },
  {
    id: 7,
    title: "Dynamic PDF Generator",
    description:
      "Java-based utility tool for dynamic PDF creation and generation. Supports template-based document generation with customizable layouts and data binding capabilities for various business needs.",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80",
    technologies: [
      "Java",
      "PDF Libraries",
      "Template Engine",
      "Maven",
      "JUnit",
      "Spring Boot",
    ],
    githubUrl: "https://github.com/bhumika-aga/DynamicPDFGenerator",
  },
  {
    id: 8,
    title: "Weather Info by Pincode",
    description:
      "Java utility application to fetch comprehensive weather details by postal code. Integrates with weather APIs to provide real-time weather information, forecasts, and location-based meteorological data.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=600&q=80",
    technologies: [
      "Java",
      "REST APIs",
      "Weather API",
      "JSON Processing",
      "HTTP Client",
      "Maven",
    ],
    githubUrl: "https://github.com/bhumika-aga/WeatherInfoForPincode",
  },
];

/**
 * Get featured projects only
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * Get projects with live demos
 */
export const getProjectsWithDemo = (): Project[] => {
  return projects.filter((project) => project.liveUrl);
};

/**
 * Get total project count
 */
export const getProjectCount = (): number => {
  return projects.length;
};
