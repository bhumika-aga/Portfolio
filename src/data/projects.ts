/**
 * Project data configuration for the portfolio website.
 * This centralized file makes it easy to add, update, or remove projects.
 *
 * These projects match the pinned repositories on GitHub profile.
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
 *
 * Synced with GitHub pinned repos:
 * 1. RegulatoryApprovalSystem
 * 2. Mail-Order-Pharmacy
 * 3. Hospital-Management-System
 * 4. MovieReviewApp
 * 5. Examportal-Application
 * 6. Camunda-POC
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "RegulatoryApproval - Workflow System",
    description:
      "Enterprise-grade BPMN workflow system for regulatory approvals using Spring Boot 3, Camunda 7, and JWT authentication. Features automated approval workflows, document tracking, and compliance monitoring. Deployed on Render.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Camunda 7",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    liveUrl:
      "https://regulatory-approval-system.onrender.com/camunda/app/cockpit/",
    githubUrl: "https://github.com/bhumika-aga/RegulatoryApprovalSystem",
  },
  {
    id: 2,
    title: "MediFlow - Mail-Order Pharmacy",
    description:
      "Comprehensive, production-ready mail-order pharmacy platform built with modern microservices architecture. Combines Spring Boot backend services with React 18+ TypeScript frontend for healthcare prescription management.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: [
      "Java",
      "Spring Boot",
      "React 18+",
      "TypeScript",
      "Docker",
      "Microservices",
    ],
    liveUrl: "https://member-portal-xyt4.onrender.com",
    apiUrl: "https://member-portal-xyt4.onrender.com/swagger-ui.html",
    githubUrl: "https://github.com/bhumika-aga/Mail-Order-Pharmacy",
  },
  {
    id: 3,
    title: "HealthSync - Hospital Management System",
    description:
      "Modern Hospital Management System built with Spring Boot & React. Features patient management, treatment planning, insurance claims processing, JWT authentication, and comprehensive healthcare workflows. Deployed on Render with PostgreSQL.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: [
      "Java 17",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "JWT",
    ],
    liveUrl: "https://healthsync-portal.onrender.com",
    githubUrl: "https://github.com/bhumika-aga/Hospital-Management-System",
  },
  {
    id: 4,
    title: "ReelCritic - Movie Review Platform",
    description:
      "Sophisticated, production-ready full-stack movie review platform combining IMDb's design philosophy with modern web technologies. Built for movie enthusiasts with TMDb API integration and responsive design.",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
    featured: true,
    technologies: [
      "Java 17",
      "Spring Boot",
      "React",
      "TypeScript",
      "MongoDB",
      "TMDb API",
    ],
    liveUrl: "https://reelcriticapp.onrender.com/",
    githubUrl: "https://github.com/bhumika-aga/MovieReviewApp",
  },
  {
    id: 5,
    title: "ExamPortal - Online Examination System",
    description:
      "Online exam portal system for conducting secure digital examinations. Features question management, timer functionality, automated grading, and comprehensive reporting capabilities.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    technologies: ["Spring Boot", "MySQL", "JWT", "React", "TypeScript"],
    featured: true,
    liveUrl: "https://examportal-app.onrender.com",
    githubUrl: "https://github.com/bhumika-aga/Examportal-Application",
  },
  {
    id: 6,
    title: "Camunda POC - Workflow Automation",
    description:
      "Proof of concept demonstrating Camunda BPMN workflow engine integration with Spring Boot. Showcases business process automation, task management, and workflow orchestration patterns.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: ["Java", "Spring Boot", "Camunda BPM", "BPMN", "REST API"],
    featured: true,
    githubUrl: "https://github.com/bhumika-aga/Camunda-POC",
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
