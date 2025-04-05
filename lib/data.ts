import { Project, SDG_GOALS } from './types';

export { SDG_GOALS };

// Mock data until we implement proper server-side data loading
export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Green Energy Monitor",
    description: "Open source platform for monitoring renewable energy systems",
    repoUrl: "https://github.com/example/green-energy-monitor",
    sdgs: [7, 13],
    tags: ["renewable-energy", "monitoring", "sustainability"],
    metrics: {
      stars: 245,
      contributors: 12,
      lastUpdate: "2024-01-15"
    }
  },
  {
    id: "2",
    name: "Clean Water Project",
    description: "Water quality monitoring and filtration system",
    repoUrl: "https://github.com/example/clean-water-project",
    sdgs: [6, 3],
    tags: ["water-quality", "health", "sanitation"],
    metrics: {
      stars: 189,
      contributors: 8,
      lastUpdate: "2024-01-10"
    }
  },
  {
    id: "3",
    name: "Education For All",
    description: "Platform for accessible online education resources",
    repoUrl: "https://github.com/example/education-for-all",
    sdgs: [4, 10],
    tags: ["education", "accessibility", "learning"],
    metrics: {
      stars: 312,
      contributors: 15,
      lastUpdate: "2024-01-20"
    }
  }
];