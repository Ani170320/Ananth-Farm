export interface JournalEntry {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export const journalEntries: JournalEntry[] = [
  {
    id: "flowering-season",
    category: "Farm Life",
    date: "March 15, 2026",
    title: "When the Trees Start Flowering",
    description: "The orchard transforms into a fragrant sea of delicate white blossoms, promising a bountiful harvest in the coming months. Learn how we care for the trees during this crucial time.",
    image: "/journey-2.jpg",
  },
  {
    id: "harvest-day",
    category: "Harvest",
    date: "May 02, 2026",
    title: "A Day at the Mango Farm: Harvest Begins",
    description: "The wait is over. Experience the excitement and careful precision of the first harvest day of the season. See how we hand-pick each mango to ensure perfect ripeness.",
    image: "/journey-4.jpg",
  },
  {
    id: "natural-farming",
    category: "Sustainability",
    date: "June 10, 2026",
    title: "How We Grow Our Mangoes Without Shortcuts",
    description: "Healthy soil makes healthy trees. We walk you through our natural farming practices, from organic composting to water conservation techniques.",
    image: "/farming-water.jpg",
  },
];
