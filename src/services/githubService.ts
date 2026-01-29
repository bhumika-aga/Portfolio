/**
 * GitHub API service for fetching pinned repository data.
 * Only shows pinned/featured projects with their hosted URLs.
 */

import { Project } from "../data/projects";

/**
 * Pinned projects configuration - manually curated from GitHub profile
 * These are the only projects shown on the portfolio
 * 
 * Current pinned repos on GitHub profile:
 * 1. RegulatoryApprovalSystem
 * 2. Mail-Order-Pharmacy
 * 3. Hospital-Management-System
 * 4. MovieReviewApp
 * 5. Examportal-Application
 * 6. Camunda-POC
 */
const PINNED_PROJECTS: Project[] = [
    {
        id: 1,
        title: "RegulatoryApproval - Workflow System",
        description:
            "Enterprise-grade BPMN workflow system for regulatory approvals using Spring Boot 3, Camunda 7, and JWT authentication. Features automated approval workflows, document tracking, and compliance monitoring. Deployed on Render.",
        image:
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        technologies: [
            "Java 17",
            "Spring Boot 3",
            "Camunda 7",
            "PostgreSQL",
            "JWT",
            "Docker",
        ],
        liveUrl: "https://regulatory-approval-system.onrender.com/camunda/app/cockpit/",
        githubUrl: "https://github.com/bhumika-aga/RegulatoryApprovalSystem",
        featured: true,
    },
    {
        id: 2,
        title: "MediFlow - Mail-Order Pharmacy",
        description:
            "Comprehensive, production-ready mail-order pharmacy platform built with modern microservices architecture. Combines Spring Boot backend services with React 18+ TypeScript frontend for healthcare prescription management.",
        image:
            "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
        technologies: [
            "Java",
            "Spring Boot",
            "React 18+",
            "TypeScript",
            "Docker",
            "Microservices",
        ],
        liveUrl: "https://member-portal-xyt4.onrender.com",
        githubUrl: "https://github.com/bhumika-aga/Mail-Order-Pharmacy",
        featured: true,
    },
    {
        id: 3,
        title: "HealthSync - Hospital Management System",
        description:
            "Modern Hospital Management System built with Spring Boot & React. Features patient management, treatment planning, insurance claims processing, JWT authentication, and comprehensive healthcare workflows. Deployed on Render with PostgreSQL.",
        image:
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
        technologies: [
            "Java 17",
            "Spring Boot",
            "React",
            "TypeScript",
            "PostgreSQL",
            "JWT",
        ],
        liveUrl: "https://healthsync-portal.onrender.com",
        githubUrl: "https://github.com/bhumika-aga/Hospital-Management-System",
        featured: true,
    },
    {
        id: 4,
        title: "ReelCritic - Movie Review Platform",
        description:
            "Sophisticated, production-ready full-stack movie review platform combining IMDb's design philosophy with modern web technologies. Built for movie enthusiasts with TMDb API integration and responsive design.",
        image:
            "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
        technologies: [
            "Java 17",
            "Spring Boot",
            "React",
            "TypeScript",
            "MongoDB",
            "TMDb API",
        ],
        liveUrl: "https://reelcriticapp.onrender.com/",
        githubUrl: "https://github.com/bhumika-aga/MovieReviewApp",
        featured: true,
    },
    {
        id: 5,
        title: "ExamPortal - Online Examination System",
        description:
            "Online exam portal system for conducting secure digital examinations. Features question management, timer functionality, automated grading, and comprehensive reporting capabilities.",
        image:
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        technologies: [
            "TypeScript",
            "Spring Boot",
            "Angular",
            "MySQL",
            "JWT",
        ],
        githubUrl: "https://github.com/bhumika-aga/Examportal-Application",
        featured: false,
    },
    {
        id: 6,
        title: "Camunda POC - Workflow Automation",
        description:
            "Proof of concept demonstrating Camunda BPMN workflow engine integration with Spring Boot. Showcases business process automation, task management, and workflow orchestration patterns.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        technologies: [
            "Java",
            "Spring Boot",
            "Camunda BPM",
            "BPMN",
            "REST API",
        ],
        githubUrl: "https://github.com/bhumika-aga/Camunda-POC",
        featured: false,
    },
];

/**
 * Get pinned projects for portfolio display
 * Returns only the curated pinned projects with their hosted URLs
 */
export const fetchGitHubProjects = async (): Promise<Project[]> => {
    // Return pinned projects directly - no API call needed
    return Promise.resolve(PINNED_PROJECTS);
};

/**
 * Export pinned projects for direct access
 */
export const pinnedProjects = PINNED_PROJECTS;
