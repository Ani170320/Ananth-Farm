"use client";

import { motion } from "framer-motion";
import { Leaf, Droplet, Sun, Package } from "lucide-react";

const principles = [
  {
    id: "soil",
    icon: Leaf,
    title: "Healthy Soil",
    desc: "Enriched with organic compost.",
  },
  {
    id: "water",
    icon: Droplet,
    title: "Smart Irrigation",
    desc: "Conserving every drop of water.",
  },
  {
    id: "ripening",
    icon: Sun,
    title: "Natural Ripening",
    desc: "No carbide. Ripened on dry hay.",
  },
  {
    id: "packing",
    icon: Package,
    title: "Eco Packing",
    desc: "Responsible, sustainable packaging.",
  },
];

export function NaturalFarming() {
  return (
    <section className="py-12 md:py-16 bg-forest text-cream border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-mango font-bold mb-3">
            Grown with care. Not shortcuts.
          </h2>
          <p className="text-cream/80 text-sm md:text-base max-w-xl mx-auto">
            We believe good mangoes start with healthy trees, responsible farming, and patience.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-mango/10 text-mango rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-white group-hover:text-mango transition-colors">
                  {principle.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
