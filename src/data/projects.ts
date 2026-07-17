export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  // Icon key resolved to an MUI icon in the Projects bento grid.
  icon: "workflow" | "pharmacy" | "building" | "hospital" | "exam";
  // Terminal-style lines shown on the large featured card.
  terminalLines?: string[];
}

export const projects: Project[] = [
  {
    id: "regulatory-approval-system",
    title: "Regulatory Approval System",
    tagline: "BPMN-based regulatory approval engine on Camunda 7.",
    description:
      "Workflow orchestration platform using the External Task Worker pattern — five specialized workers handling risk scoring, compliance checks, escalation, notification, and completion. SLA enforcement between 8 and 48 hours with exponential-backoff retry on transient failures. JWT authentication with 6-role RBAC synchronized between Spring Security and Camunda Identity Service for auditable approval chains.",
    highlights: [
      "5-worker External Task engine with 8–48 hr SLA enforcement",
      "Exponential-backoff retries, orchestration, and failure recovery",
      "Spring Security + JWT with 6-role RBAC securing 25+ REST APIs",
    ],
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Camunda 7",
      "Spring Security",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/bhumika-aga/RegulatoryApprovalSystem",
    liveUrl:
      "https://regulatory-approval-system.onrender.com/camunda/app/cockpit",
    featured: true,
    icon: "workflow",
    terminalLines: [
      "> Starting Camunda workflow engine...",
      "> 5 external task workers registered [status: active]",
      "> SLA monitor armed · retry policy: exponential",
    ],
  },
  {
    id: "mediflow",
    title: "MediFlow",
    tagline: "Mail-order pharmacy on Spring Boot microservices.",
    description:
      "Mail-order pharmacy platform built on five independent Spring Boot microservices — auth, drugs, refill, subscription, and a Swagger/OpenAPI aggregator — each loosely coupled with a database-per-service design. Stateless JWT (HS512) authentication is validated independently by every service with no central runtime auth dependency, and all services are containerized with Docker Compose.",
    highlights: [
      "5 loosely-coupled services with database-per-service isolation",
      "Stateless JWT (HS512) validated independently by each service",
      "Swagger/OpenAPI aggregator and full Docker Compose orchestration",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/bhumika-aga/Mail-Order-Pharmacy",
    liveUrl: "https://member-portal-xyt4.onrender.com",
    featured: true,
    icon: "pharmacy",
  },
  {
    id: "urbannexus",
    title: "UrbanNexus",
    tagline: "Multi-portal residential operations ERP.",
    description:
      "Full-stack ERP for premium residential complexes with three role-isolated portals — Resident, Technician, and SuperAdmin. A transactional booking engine handles automated technician matching and amenity reservations with payment lifecycle orchestration. JPA @PrePersist hooks automate tax and audit-field calculation, and the platform deploys in dual-mode H2/MySQL for portable demos and production.",
    highlights: [
      "Three role-isolated portals with JWT authentication",
      "Transactional booking engine with automated technician matching",
      "25+ REST endpoints with audit trails and overdue-payment automation",
    ],
    tech: [
      "Java 17",
      "Spring Boot 3.5",
      "React 19",
      "TypeScript",
      "MySQL",
      "JWT",
    ],
    githubUrl: "https://github.com/bhumika-aga/UrbanNexus",
    liveUrl: "https://urbannexus.onrender.com",
    featured: true,
    icon: "building",
  },
  {
    id: "healthsync",
    title: "HealthSync",
    tagline: "Hospital management with insurance claims processing.",
    description:
      "Full-stack hospital management platform on Spring Boot and React with TypeScript. Handles patient records, treatment-planning workflows, and insurance claims processing with centralized exception handling. JWT-authenticated role-based access spans clinical and administrative users, backed by a PostgreSQL data layer.",
    highlights: [
      "Patient records and treatment-planning workflows",
      "Insurance claims processing pipeline",
      "Centralized exception handling with role-based access",
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/bhumika-aga/Hospital-Management-System",
    liveUrl: "https://healthsync-portal.onrender.com",
    icon: "hospital",
  },
  {
    id: "exam-portal",
    title: "Exam Portal",
    tagline: "Full-stack timed quiz platform with admin management.",
    description:
      "Full-stack exam portal built with Spring Boot and React + TypeScript. Features secure JWT authentication, timed quizzes with automated scoring, and a dynamic admin console for managing categories, questions, and quizzes on the fly.",
    highlights: [
      "Secure JWT authentication for students and admins",
      "Timed quizzes with automated scoring",
      "Dynamic admin management of categories and questions",
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "JWT"],
    githubUrl: "https://github.com/bhumika-aga/Examportal-Application",
    liveUrl: "https://examportal-app.onrender.com/",
    icon: "exam",
  },
];
