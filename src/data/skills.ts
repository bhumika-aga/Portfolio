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
      "Spring Boot · Spring Security · Spring Data JPA · Hibernate · REST APIs · Microservices · Camunda 7 (BPMN) · JWT · RBAC",
  },
  {
    category: "Frontend",
    items: "React.js · TypeScript · Material-UI · HTML5 · CSS3",
  },
  {
    category: "Data & Messaging",
    items: "MySQL · MongoDB · Apache Kafka · Event-Driven Architecture",
  },
  {
    category: "Cloud & DevOps",
    items:
      "AWS (ECS, EC2, S3, Route 53) · Docker · Blue-Green Deployment · IaC · GitHub Actions · Jenkins · Maven",
  },
  {
    category: "Observability",
    items: "Splunk · Dynatrace",
  },
  {
    category: "Testing",
    items: "JUnit 5 · Mockito",
  },
];
