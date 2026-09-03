export interface MangoVariety {
  id: string;
  name: string;
  taste: string;
  aroma: string;
  texture: string;
  bestUse: string;
  image: string;
}

export const mangoVarieties: MangoVariety[] = [
  {
    id: "badami",
    name: "Badami",
    taste: "Rich, sweet, and pale yellow pulp",
    aroma: "Distinct tropical fragrance",
    texture: "Buttery and fibreless",
    bestUse: "Eating fresh, milkshakes",
    image: "/mango-badami.jpg",
  },
  {
    id: "benishan",
    name: "Benishan",
    taste: "Pleasantly sweet",
    aroma: "Mild and inviting",
    texture: "Firm, meaty, fibreless",
    bestUse: "Slicing, salads",
    image: "/mango-benishan.jpg",
  },
  {
    id: "kesar",
    name: "Kesar",
    taste: "Intensely sweet, saffron-like",
    aroma: "Strong, distinct sweet scent",
    texture: "Soft, juicy pulp",
    bestUse: "Aamras, desserts",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Mango_kesar_variety.JPG/960px-Mango_kesar_variety.JPG",
  },
  {
    id: "totapuri",
    name: "Totapuri",
    taste: "Tangy and mildly sweet",
    aroma: "Subtle tropical notes",
    texture: "Thick, crisp, chewy",
    bestUse: "Pickles, raw snacks, salads",
    image: "/mango-totapuri-v3.jpg",
  },
  {
    id: "dashehari",
    name: "Dashehari",
    taste: "Extremely sweet and aromatic",
    aroma: "Strong, enticing fragrance",
    texture: "Soft, juicy, fibreless",
    bestUse: "Eating fresh, desserts",
    image: "/mango-dashehari.jpg",
  },
  {
    id: "raspuri",
    name: "Raspuri",
    taste: "Intensely sweet and slightly tart",
    aroma: "Rich, warm aroma",
    texture: "Extremely juicy pulp",
    bestUse: "Juices, Aamras",
    image: "/mango-raspuri.jpg",
  },
  {
    id: "neelum",
    name: "Neelum",
    taste: "Extremely sweet and rich",
    aroma: "Highly floral and fragrant",
    texture: "Smooth, juicy, slight fibre",
    bestUse: "Eating fresh at end of season",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "kalmi",
    name: "Kalmi (Malgova)",
    taste: "Very sweet and juicy",
    aroma: "Mild, pleasing scent",
    texture: "Thick skin, fleshy, fiberless",
    bestUse: "Slicing, sharing",
    image: "/mango-kalmi-v2.jpg",
  },
];
