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
      "Own the architecture and delivery of the Overcharge Dispute capability, building Java services on Spring Boot + Camunda 7 that process 10,000+ dispute cases every month.",
      "Modernized legacy Pega workflows into 10+ reusable Camunda BPMN components implementing business rules, retries, exception handling, and orchestration — reducing migration effort by 40%.",
      "Automated AWS infrastructure provisioning across 3+ environments using Terraform (IaC), cutting deployment time by 60% and improving deployment consistency.",
      "Established reusable context and prompt conventions for AI-assisted development (Claude, GitHub Copilot), standardizing engineering workflows and accelerating legacy modernization.",
      "Resolved 50+ production issues, supported 20+ production releases, and improved service reliability through automated testing.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Camunda 7",
      "AWS",
      "Terraform",
      "PostgreSQL",
      "AI Agents",
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
      "Expanded automated testing with JUnit 5 and Mockito, improving release quality and reducing regression defects.",
      "Performed 150+ code reviews, production deployments, RCA, and cross-team technical collaboration.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "JUnit",
      "Mockito",
    ],
  },
];
