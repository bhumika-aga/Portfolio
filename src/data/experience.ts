export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    id: "jpmorgan",
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer II",
    location: "Mumbai, India",
    period: "Oct 2024 – Aug 2026",
    bullets: [
      "Owned the architecture and delivery of the Overcharge Dispute capability on an event driven platform of 8+ Spring Boot services, building Spring Boot and Camunda 7 services that processed 10K+ dispute cases a month.",
      "Led the platform's Apache Kafka intake pipeline. Designed and finalized the Avro event schema and defined the event payload contracts for the overcharge flow, enabling asynchronous, decoupled processing.",
      "Modernized legacy Pega workflows into 10+ reusable Camunda BPMN components built on stateless external task workers, reducing migration effort by 40%.",
      "Automated AWS provisioning across 3+ environments with Terraform, making deployments 60% faster. Built an OpenSearch task indexer and defined Splunk field extractions to improve observability.",
      "Delivered React and TypeScript enhancements on a bonds trading platform, including an event tagging feature for historical event tracking and market trend analysis, along with backend fixes and better test coverage.",
      "Resolved 50+ production issues across 20+ releases and set up reusable AI assisted development conventions (Claude, GitHub Copilot) that standardized engineering workflows.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Camunda 7",
      "Kafka",
      "AWS",
      "Terraform",
      "OpenSearch",
      "React",
      "TypeScript",
    ],
  },
  {
    id: "cognizant",
    company: "Cognizant Technology Solutions",
    role: "Software Engineer",
    location: "Mumbai, India",
    period: "Jul 2022 – Jul 2024",
    bullets: [
      "Developed 5+ Spring Boot microservices and 40+ REST APIs supporting scalable BFSI transaction platforms.",
      "Optimized Hibernate/JPA and SQL queries across 20+ endpoints, reducing average API latency by 30%.",
      "Delivered reusable React dashboard components, expanded automated testing with JUnit 5 and Mockito, and performed 150+ code reviews, improving release quality and reducing regression defects.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "React",
      "JUnit",
      "Mockito",
    ],
  },
];
