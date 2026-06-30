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
      "Spring Boot · Camunda 7 (BPMN) · Java Task Handlers · Spring Security · Spring Data JPA · Hibernate · REST APIs · Microservices · JWT · RBAC",
  },
  {
    category: "Frontend",
    items: "React · TypeScript · JavaScript · Material-UI · HTML5 · CSS3",
  },
  {
    category: "Databases",
    items: "PostgreSQL · MySQL · Query Optimization",
  },
  {
    category: "Cloud & DevOps",
    items: "AWS · Terraform (IaC) · Docker · GitHub Actions · Jenkins · Maven",
  },
  {
    category: "AI & Testing",
    items: "AI Agents (Claude, GitHub Copilot) · JUnit 5 · Mockito",
  },
];
