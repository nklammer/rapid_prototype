export type SDGGoal = {
  id: number;
  name: string;
  color: string;
  description: string;
  unUrl: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  repoUrl: string;
  sdgs: number[];
  tags: string[];
  metrics: {
    stars: number;
    contributors: number;
    lastUpdate: string;
  };
};

export const SDG_GOALS: SDGGoal[] = [
  { 
    id: 1, 
    name: "No Poverty", 
    color: "#E5243B",
    description: "End poverty in all its forms everywhere",
    unUrl: "https://www.un.org/sustainabledevelopment/poverty/"
  },
  { 
    id: 2, 
    name: "Zero Hunger", 
    color: "#DDA63A",
    description: "End hunger, achieve food security and improved nutrition",
    unUrl: "https://www.un.org/sustainabledevelopment/hunger/"
  },
  { 
    id: 3, 
    name: "Good Health and Well-Being", 
    color: "#4C9F38",
    description: "Ensure healthy lives and promote well-being for all",
    unUrl: "https://www.un.org/sustainabledevelopment/health/"
  },
  { 
    id: 4, 
    name: "Quality Education", 
    color: "#C5192D",
    description: "Ensure inclusive and equitable quality education",
    unUrl: "https://www.un.org/sustainabledevelopment/education/"
  },
  { 
    id: 5, 
    name: "Gender Equality", 
    color: "#FF3A21",
    description: "Achieve gender equality and empower all women and girls",
    unUrl: "https://www.un.org/sustainabledevelopment/gender-equality/"
  },
  { 
    id: 6, 
    name: "Clean Water and Sanitation", 
    color: "#26BDE2",
    description: "Ensure availability and sustainable management of water",
    unUrl: "https://www.un.org/sustainabledevelopment/water-and-sanitation/"
  },
  { 
    id: 7, 
    name: "Affordable and Clean Energy", 
    color: "#FCC30B",
    description: "Ensure access to affordable and clean energy",
    unUrl: "https://www.un.org/sustainabledevelopment/energy/"
  },
  { 
    id: 8, 
    name: "Decent Work and Economic Growth", 
    color: "#A21942",
    description: "Promote sustained, inclusive and sustainable economic growth",
    unUrl: "https://www.un.org/sustainabledevelopment/economic-growth/"
  },
  { 
    id: 9, 
    name: "Industry, Innovation and Infrastructure", 
    color: "#FD6925",
    description: "Build resilient infrastructure and foster innovation",
    unUrl: "https://www.un.org/sustainabledevelopment/infrastructure-industrialization/"
  },
  { 
    id: 10, 
    name: "Reduced Inequalities", 
    color: "#DD1367",
    description: "Reduce inequality within and among countries",
    unUrl: "https://www.un.org/sustainabledevelopment/inequality/"
  },
  { 
    id: 11, 
    name: "Sustainable Cities and Communities", 
    color: "#FD9D24",
    description: "Make cities inclusive, safe, resilient and sustainable",
    unUrl: "https://www.un.org/sustainabledevelopment/cities/"
  },
  { 
    id: 12, 
    name: "Responsible Consumption and Production", 
    color: "#BF8B2E",
    description: "Ensure sustainable consumption and production patterns",
    unUrl: "https://www.un.org/sustainabledevelopment/sustainable-consumption-production/"
  },
  { 
    id: 13, 
    name: "Climate Action", 
    color: "#3F7E44",
    description: "Take urgent action to combat climate change",
    unUrl: "https://www.un.org/sustainabledevelopment/climate-change/"
  },
  { 
    id: 14, 
    name: "Life Below Water", 
    color: "#0A97D9",
    description: "Conserve and sustainably use marine resources",
    unUrl: "https://www.un.org/sustainabledevelopment/oceans/"
  },
  { 
    id: 15, 
    name: "Life on Land", 
    color: "#56C02B",
    description: "Protect and restore terrestrial ecosystems",
    unUrl: "https://www.un.org/sustainabledevelopment/biodiversity/"
  },
  { 
    id: 16, 
    name: "Peace, Justice and Strong Institutions", 
    color: "#00689D",
    description: "Promote peaceful and inclusive societies",
    unUrl: "https://www.un.org/sustainabledevelopment/peace-justice/"
  },
  { 
    id: 17, 
    name: "Partnerships for the Goals", 
    color: "#19486A",
    description: "Strengthen the means of implementation",
    unUrl: "https://www.un.org/sustainabledevelopment/globalpartnerships/"
  }
];