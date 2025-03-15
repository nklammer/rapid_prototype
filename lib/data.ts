import { Project, SDG_GOALS } from './types';

export { SDG_GOALS };

export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "OpenSourceWater",
    description: "Open-source water quality monitoring and management system for communities",
    repoUrl: "https://github.com/example/open-source-water",
    sdgs: [6, 3, 11],
    tags: ["Python", "IoT", "Data Analysis"],
    metrics: {
      stars: 1200,
      contributors: 45,
      lastUpdate: "2024-03-15"
    }
  },
  {
    id: "2",
    name: "SolarConnect",
    description: "Platform connecting rural communities with solar energy solutions",
    repoUrl: "https://github.com/example/solar-connect",
    sdgs: [7, 1, 13],
    tags: ["JavaScript", "React", "Node.js"],
    metrics: {
      stars: 850,
      contributors: 32,
      lastUpdate: "2024-03-10"
    }
  },
  {
    id: "3",
    name: "EduShare",
    description: "Collaborative platform for sharing educational resources globally",
    repoUrl: "https://github.com/example/edu-share",
    sdgs: [4, 10],
    tags: ["TypeScript", "Next.js", "MongoDB"],
    metrics: {
      stars: 2100,
      contributors: 78,
      lastUpdate: "2024-03-18"
    }
  },
  {
    id: "4",
    name: "FoodWaste",
    description: "App connecting food businesses with charities to reduce waste",
    repoUrl: "https://github.com/example/food-waste",
    sdgs: [2, 12],
    tags: ["React Native", "Firebase"],
    metrics: {
      stars: 1500,
      contributors: 55,
      lastUpdate: "2024-03-12"
    }
  }
];