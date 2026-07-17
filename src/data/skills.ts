export interface SkillRow {
  category: string;
  items: string;
}

export const skills: SkillRow[] = [
  {
    category: "Languages",
    items: "Java · TypeScript · JavaScript · SQL",
  },
  {
    category: "Backend",
    items:
      "Spring Boot · Spring Security · Spring Data JPA · Hibernate · Camunda 7 (BPMN) · Microservices · REST APIs · JWT · RBAC",
  },
  {
    category: "Cloud & DevOps",
    items: "AWS · Terraform (IaC) · Docker · Maven · Jenkins · CI/CD",
  },
  {
    category: "Databases",
    items: "PostgreSQL · MySQL · Query Optimization",
  },
  {
    category: "Testing & Concepts",
    items:
      "JUnit 5 · Mockito · System Design · Distributed Systems · AI-Assisted Development (Claude, Copilot)",
  },
];
