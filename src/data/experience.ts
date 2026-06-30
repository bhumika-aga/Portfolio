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
    period: "Oct 2024 – Present",
    bullets: [
      "Own the overcharge dispute capability end-to-end — from analysis through production — building Java task handlers on Camunda 7 (BPMN) and Spring Boot services that resolve 10,000+ credit card dispute cases every month.",
      "Re-platformed legacy Pega dispute workflows into a modern Java + Camunda architecture, using AI agents (Claude, GitHub Copilot) to accelerate analysis and translate existing business rules into reusable task handlers.",
      "Provisioned AWS infrastructure for the modernized dispute platform through a Terraform-based infrastructure-as-code framework, making environments reproducible and auditable.",
      "Delivered React + TypeScript enhancements on a bonds-trading platform, including an event-tagging feature that captures market events for historical tracking and market-trend analysis.",
      "Fixed backend defects across Java 17, Spring Boot, and PostgreSQL services and raised automated test coverage on the bonds-trading platform.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Camunda 7",
      "AWS",
      "Terraform",
      "React",
      "TypeScript",
      "PostgreSQL",
      "AI Agents",
    ],
  },
  {
    id: "cognizant",
    company: "Cognizant",
    role: "Software Engineer",
    location: "Mumbai, India",
    period: "Jul 2022 – Jul 2024",
    bullets: [
      "Built Spring Boot microservices and REST APIs powering high-volume BFSI transaction workflows for enterprise banking clients.",
      "Tuned Hibernate/JPA query patterns and SQL execution plans across 20+ endpoints, cutting average API latency by 30% and reducing peak-hour database contention.",
      "Delivered reusable ReactJS dashboard components wired to backend services and strengthened JUnit and Mockito coverage across service and component layers.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "ReactJS",
      "JUnit",
      "Mockito",
    ],
  },
];
