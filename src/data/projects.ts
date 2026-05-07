export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "regulatory-approval",
    title: "Regulatory Approval System",
    description:
      "BPMN-based regulatory approval platform on Camunda 7 using the External Task Worker pattern. Five specialized workers (risk-scoring, compliance, escalation, notification, completion) with SLA enforcement (8h–48h), exponential-backoff retry, and 6-role RBAC synchronized between Spring Security and Camunda Identity Service.",
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Camunda 7",
      "Spring Security",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/bhumika-aga/regulatory-approval-system",
    liveUrl:
      "https://regulatory-approval-system.onrender.com/camunda/app/cockpit",
  },
  {
    id: "urbannexus",
    title: "UrbanNexus",
    description:
      "Multi-portal residential operations platform with role-isolated JWT authentication across Resident, Technician, and SuperAdmin portals. Transactional booking engine with automated technician matching, payment lifecycle orchestration, and JPA @PrePersist hooks for tax and audit-field automation. Dual-mode H2/MySQL deployment.",
    tech: [
      "Java 17",
      "Spring Boot 3.5",
      "React 19",
      "TypeScript",
      "MySQL",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/bhumika-aga/urbannexus",
    liveUrl: "https://urbannexus-platform.onrender.com",
  },
];
