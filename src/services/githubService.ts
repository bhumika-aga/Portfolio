/**
 * GitHub API service for fetching pinned repository data.
 * Only shows pinned/featured projects with their hosted URLs.
 */

import { Project, projects } from "../data/projects";

/**
 * Get pinned projects for portfolio display
 * Returns only the curated pinned projects with their hosted URLs
 */
export const fetchGitHubProjects = async (): Promise<Project[]> => {
  // Return pinned projects from the centralized data file
  return Promise.resolve(projects.filter((p) => p.featured));
};

/**
 * Export pinned projects for direct access
 */
export const pinnedProjects = projects.filter((p) => p.featured);
