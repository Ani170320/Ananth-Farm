"use client";

import { motion } from "framer-motion";
import { Leaf, Calendar, Droplet } from "lucide-react";
import Image from "next/image";

const varieties = [
  {
    name: "Benishan (Banganapalli)",
    season: "Late April - Early June",
    sweetness: 85,
    tanginess: 15,
    aroma: 70,
    texture: "Smooth, Fibreless",
    color: "bg-[#FFD700]",
    image: "/mango-benishan.jpg",
  },
  {
    name: "Dashehari",
    season: "June - July",
    sweetness: 95,
    tanginess: 5,
    aroma: 90,
    texture: "Soft, Juicy",
    color: "bg-[#FFA500]",
    image: "/mango-dashehari.jpg",
  },
  {
    name: "Raspuri",
    season: "May - June",
    sweetness: 75,
    tanginess: 40,
    aroma: 100,
    texture: "Fibrous, Extremely Juicy",
    color: "bg-[#FF8C00]",
    image: "/mango-raspuri.jpg",
  },
];

const ProgressBar = ({ label, value, color }: { label: string, value: number, color: string }) => (
  <div className="mb-4">
    <div className="flex justify-between text-[10px] font-bold text-forest/60 mb-1 tracking-widest uppercase">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 w-full bg-forest/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
);

export function TasteProfile() {
  return (
    <section className="container mx-auto px-6 md:px-12 my-20">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-mango/10 rounded-full blur-[40px] -z-10" />
        <h2 className="font-display text-4xl md:text-5xl text-forest font-bold mb-4">
          Mango Tasting Guide
        </h2>
        <p className="text-dark/70 text-lg max-w-2xl mx-auto">
          Not sure which variety to pick? Use our tasting profile to find your perfect mango based on sweetness, texture, and seasonality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {varieties.map((variety, index) => (
          <motion.div
            key={variety.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-[2rem] border border-forest/10 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-forest/5">
              <Image 
                src={variety.image}
                alt={variety.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <h3 className="font-display text-2xl font-bold text-forest mb-3">{variety.name}</h3>
            
            <div className="flex items-center gap-2 text-forest/80 font-bold text-xs mb-8 bg-forest/5 w-fit px-3 py-1.5 rounded-lg border border-forest/10">
              <Calendar size={14} className="text-mango" />
              {variety.season}
            </div>

            <div className="space-y-4 mb-8 flex-1">
              <ProgressBar label="Sweetness" value={variety.sweetness} color={variety.color} />
              <ProgressBar label="Tanginess" value={variety.tanginess} color={variety.color} />
              <ProgressBar label="Aroma" value={variety.aroma} color={variety.color} />
            </div>

            <div className="border-t border-forest/10 pt-5 flex items-center justify-between text-sm font-bold text-forest">
              <span className="flex items-center gap-2 text-forest/60">
                <Leaf size={16} className="text-mango" /> Texture
              </span>
              <span>{variety.texture}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
