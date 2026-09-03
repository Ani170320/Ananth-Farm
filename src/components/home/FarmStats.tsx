"use client";

import { motion, Variants } from "framer-motion";

const stats = [
  { value: "100+", label: "Mango Trees" },
  { value: "Direct", label: "Farm Harvest" },
  { value: "100%", label: "Seasonal Freshness" },
  { value: "One", label: "Farm, One Story" },
];

export function FarmStats() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-forest text-cream py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-cream/20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="font-display text-4xl md:text-5xl lg:text-6xl text-mango mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base uppercase tracking-widest text-cream/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
