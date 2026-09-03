"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journalEntries } from "@/data/journal";
import { ArrowRight } from "lucide-react";

export function JournalPreview() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="journal" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading
            title="Life at Ananth Farm"
            align="left"
            className="mb-0"
          />
          <a href="#" className="hidden md:flex items-center gap-2 text-forest font-medium hover:text-mango transition-colors group">
            View All Articles
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {journalEntries.map((entry) => (
            <Link key={entry.id} href={`/journal/${entry.id}`} className="block h-full group">
              <motion.div
                variants={cardVariants}
                className="cursor-pointer flex flex-col h-full"
              >
              <div className="relative h-64 md:h-72 overflow-hidden mb-6 rounded-sm">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-forest/60 mb-3">
                <span>{entry.category}</span>
              </div>
              <h3 className="font-display text-2xl text-forest font-bold mb-3 group-hover:text-mango transition-colors">
                {entry.title}
              </h3>
              <p className="text-dark/70 text-sm mb-6 flex-grow">
                {entry.description}
              </p>
              <div className="flex items-center gap-2 text-forest font-medium mt-auto">
                Read Story
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-forest font-medium hover:text-mango transition-colors">
            View All Articles
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
