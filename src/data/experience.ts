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
      "Owned the overcharge dispute capability end-to-end — designing the Camunda 7 BPMN workflow, Java External Task Workers, and Spring Boot services resolving credit card customer disputes.",
      "Modernized inter-service communication by building a SOAP-to-REST translation layer and onboarding Kafka SaaS as the asynchronous backbone, decoupling legacy mainframe tiers from new service tiers.",
      "Codified microservice infrastructure as code and rolled out Blue-Green deployment pipelines across dev, UAT, and production — eliminating downtime windows on a regulated platform.",
      "Diagnosed and remediated a P1 production incident in the bonds trading Category Service returning skewed market data, restoring data integrity under live-market time pressure.",
      "Shipped a macroeconomic event-correlation feature on the React-based bonds trading platform, surfacing real-time linkage between global events and securities pricing for desk traders.",
      "Hardened REST endpoints with Spring Security and JWT; authored JUnit suites lifting code coverage past 70%.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Camunda 7",
      "Apache Kafka",
      "Spring Security",
      "AWS",
      "React",
      "Splunk",
      "Dynatrace",
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
      "Tuned Hibernate/JPA query patterns and SQL execution plans, cutting average API latency by 30% and reducing peak-hour database contention.",
      "Delivered reusable ReactJS dashboard components with rigorous JUnit and Mockito coverage across service and component layers.",
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
