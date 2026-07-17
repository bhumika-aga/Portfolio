export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  coursework?: string;
}

export const education: Education[] = [
  {
    id: "upes",
    institution: "University of Petroleum and Energy Studies (UPES)",
    degree: "B.Tech. in Computer Science and Engineering",
    location: "Dehradun, Uttarakhand",
    period: "Jun 2018 – Jun 2022",
    coursework:
      "Data Structures & Algorithms · Operating Systems · Database Management Systems · Computer Networks · Object-Oriented Programming",
  },
];
