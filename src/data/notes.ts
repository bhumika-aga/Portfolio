// Study notes published as separate GitHub Pages sites.
export interface NoteSet {
  id: string;
  title: string;
  meta: string;
  description: string;
  topics: string[];
  url: string;
  repoUrl: string;
}

export const notes: NoteSet[] = [
  {
    id: "system-design-backend",
    title: "System Design: Backend",
    meta: "24 chapters · Java & Spring Boot",
    description:
      "Backend engineering from the request on the wire to Kafka and WebSockets. Each chapter explains one idea from first principles, with diagrams and Java code alongside a Python version.",
    topics: [
      "HTTP & CORS",
      "Auth",
      "API design",
      "Caching",
      "Task queues",
      "Observability",
      "Kafka",
      "WebSockets",
    ],
    url: "https://bhumika-aga.github.io/System-Design-Backend/",
    repoUrl: "https://github.com/bhumika-aga/System-Design-Backend",
  },
  {
    id: "java-lectures",
    title: "Java Lectures",
    meta: "12 deep dives",
    description:
      "How Java and its ecosystem work underneath: HashMap internals, generics and erasure, the memory model and virtual threads, Kafka, Spring and Spring Boot, and scaling to a million users.",
    topics: [
      "Collections",
      "Generics",
      "Concurrency",
      "Kafka",
      "Spring",
      "Spring Boot",
      "Microservices",
    ],
    url: "https://bhumika-aga.github.io/JavaConcepts/",
    repoUrl: "https://github.com/bhumika-aga/JavaConcepts",
  },
  {
    id: "system-design-notebook",
    title: "System Design Notebook",
    meta: "10 chapters · HLD & LLD",
    description:
      "Picture first notes on system design, each with analogies, diagrams and revision questions. Covers protocols, CAP, microservices, scaling and consistent hashing, then works through a URL shortener and a key value store.",
    topics: [
      "Networking",
      "CAP theorem",
      "Microservices",
      "Scaling",
      "Consistent hashing",
      "Estimation",
    ],
    url: "https://bhumika-aga.github.io/CNCSystemDesign/",
    repoUrl: "https://github.com/bhumika-aga/CNCSystemDesign",
  },
  {
    id: "dsa-mastery",
    title: "DSA Mastery",
    meta: "30 lectures · 976 problems",
    description:
      "A structured study plan in Java, from fundamentals through core data structures, problem patterns and four stages of dynamic programming. Every problem is tagged with its pattern.",
    topics: [
      "Recursion",
      "Trees & graphs",
      "Sliding window",
      "Dynamic programming",
      "Tries",
      "Segment trees",
    ],
    url: "https://bhumika-aga.github.io/DSA/",
    repoUrl: "https://github.com/bhumika-aga/DSA",
  },
];
