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
}

export const projects: Project[] = [
  {
    id: "regulatory-approval-system",
    title: "Regulatory Approval System",
    tagline: "BPMN-based regulatory approval engine on Camunda 7.",
    description:
      "Workflow orchestration platform using the External Task Worker pattern — five specialized workers handling risk scoring, compliance checks, escalation, notification, and completion. SLA enforcement between 8 and 48 hours with exponential-backoff retry on transient failures. JWT authentication with 6-role RBAC synchronized between Spring Security and Camunda Identity Service for auditable approval chains.",
    highlights: [
      "External Task Worker pattern with 5 specialized workers",
      "SLA enforcement (8h–48h) with exponential-backoff retry",
      "6-role RBAC across Spring Security + Camunda Identity Service",
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
  },
  {
    id: "urbannexus",
    title: "UrbanNexus",
    tagline: "Multi-portal residential operations platform.",
    description:
      "Full-stack ERP for residential complexes with three role-isolated portals — Resident, Technician, and SuperAdmin. Transactional booking engine handles automated technician matching and amenity reservations with payment lifecycle orchestration. JPA @PrePersist hooks automate tax and audit-field calculation. Deploys in dual-mode H2/MySQL for portable demos and production environments.",
    highlights: [
      "Three role-isolated portals with JWT-based authentication",
      "Transactional booking engine with automated technician matching",
      "JPA @PrePersist hooks for tax and audit-field automation",
      "Dual-mode H2/MySQL deployment",
    ],
    tech: [
      "Java 17",
      "Spring Boot 3.5",
      "React 19",
      "TypeScript",
      "MySQL",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/bhumika-aga/UrbanNexus",
    liveUrl: "https://urbannexus.onrender.com",
    featured: true,
  },
  {
    id: "mediflow",
    title: "MediFlow",
    tagline: "Mail-order pharmacy on Spring Boot microservices.",
    description:
      "Mail-order pharmacy platform built on a microservices architecture with Spring Boot backend services and a React 18 + TypeScript frontend. Designed for prescription order workflows, inventory management, and customer-facing pharmacy operations.",
    highlights: [
      "Distributed Spring Boot microservices",
      "React 18 + TypeScript frontend",
      "JWT-authenticated order and inventory workflows",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "React 18",
      "TypeScript",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/bhumika-aga/Mail-Order-Pharmacy",
    featured: true,
  },
  {
    id: "healthsync",
    title: "HealthSync",
    tagline: "Hospital management system with insurance claims processing.",
    description:
      "Full-stack hospital management platform on Spring Boot and React with TypeScript. Handles patient records, treatment planning workflows, and insurance claims processing with centralized exception handling. JWT-authenticated role-based access across clinical and administrative users.",
    highlights: [
      "Patient records and treatment planning workflows",
      "Insurance claims processing pipeline",
      "Centralized exception handling across services",
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "JWT"],
    githubUrl: "https://github.com/bhumika-aga/Hospital-Management-System",
    featured: true,
  },
];
