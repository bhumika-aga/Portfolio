export interface Project {
  id: string;
  title: string;
  tagline: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  // Featured projects lead the Projects page (first one gets the large card)
  // and are the ones shown on Home. Order in this list is display order.
  featured?: boolean;
  // Icon key resolved to an MUI icon in the Projects bento grid.
  icon: "workflow" | "pharmacy" | "building" | "hospital" | "exam";
  // Terminal-style lines shown when the project gets the large card.
  terminalLines?: string[];
}

export const projects: Project[] = [
  {
    id: "regulatory-approval-system",
    title: "Regulatory Approval System",
    tagline:
      "A BPMN approval engine on Camunda 7 with SLA enforcement and auditable approval chains.",
    highlights: [
      "Five External Task workers for risk scoring, compliance, escalation, notification and completion",
      "SLAs from 8 to 48 hours with exponential backoff retries and failure recovery",
      "Spring Security and JWT with 6 role RBAC securing 25+ REST APIs",
    ],
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Camunda 7",
      "Spring Security",
      "MySQL",
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
    id: "urbannexus",
    title: "UrbanNexus",
    tagline:
      "An ERP for residential complexes with separate Resident, Technician and SuperAdmin portals.",
    highlights: [
      "Three role isolated portals with JWT authentication and RBAC",
      "Transactional booking engine with automated technician allocation and payment orchestration",
      "25+ REST APIs with audit logging and JPA lifecycle hooks",
    ],
    tech: [
      "Java 17",
      "Spring Boot 3.5",
      "React 19",
      "TypeScript",
      "MySQL",
      "Docker",
    ],
    githubUrl: "https://github.com/bhumika-aga/UrbanNexus",
    liveUrl: "https://urbannexus.onrender.com",
    featured: true,
    icon: "building",
  },
  {
    id: "mediflow",
    title: "MediFlow",
    tagline: "A mail order pharmacy built as five Spring Boot microservices.",
    highlights: [
      "Auth, drugs, refill and subscription services, each with its own database",
      "Stateless JWT (HS512) validated independently by every service",
      "Aggregated Swagger/OpenAPI docs and Docker Compose orchestration",
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
    icon: "pharmacy",
  },
  {
    id: "healthsync",
    title: "HealthSync",
    tagline:
      "Hospital management with patient records, treatment plans and insurance claims.",
    highlights: [
      "Patient records and treatment planning workflows",
      "Insurance claims processing pipeline",
      "Centralized exception handling with role based access",
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/bhumika-aga/Hospital-Management-System",
    liveUrl: "https://healthsync-portal.onrender.com",
    icon: "hospital",
  },
  {
    id: "exam-portal",
    title: "Exam Portal",
    tagline:
      "A timed quiz platform with automated scoring and an admin console.",
    highlights: [
      "JWT authentication for students and admins",
      "Timed quizzes with automated scoring",
      "Admin management of categories, questions and quizzes",
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "JWT"],
    githubUrl: "https://github.com/bhumika-aga/Examportal-Application",
    liveUrl: "https://examportal-app.onrender.com/",
    icon: "exam",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

// Featured first, then everything else, each group in list order.
export const orderedProjects = [
  ...featuredProjects,
  ...projects.filter((p) => !p.featured),
];
