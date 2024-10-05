// utils/data.js

export const fetchProjects = async () => {
    const response = await fetch('/data.json'); // Assuming data.json is in the root directory
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const projectsData = await response.json();
    return projectsData;
  };
  