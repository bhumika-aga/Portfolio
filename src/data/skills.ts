export interface SkillRow {
  category: string;
  items: string;
}

export const skills: SkillRow[] = [
  {
    category: "Languages & Databases",
    items: "Java · TypeScript · JavaScript · SQL · PostgreSQL · MySQL",
  },
  {
    category: "Backend",
    items:
      "Spring Boot · Spring Security · Spring Data JPA · Hibernate · Microservices · REST APIs · Camunda 7 (BPMN) · Kafka",
  },
  {
    category: "Frontend",
    items: "React · TypeScript · MUI · HTML5 · CSS3",
  },
  {
    category: "Cloud, DevOps & Observability",
    items:
      "AWS · Docker · Terraform (IaC) · Maven · Jenkins · CI/CD · OpenSearch · Splunk",
  },
  {
    category: "Testing & Concepts",
    items:
      "JUnit · Mockito · System Design · Distributed Systems · AI Assisted Development (Claude, Copilot)",
  },
];
