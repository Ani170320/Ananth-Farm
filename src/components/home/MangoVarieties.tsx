"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mangoVarieties } from "@/data/mangoes";
import { cn } from "@/lib/utils";

export function MangoVarieties() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="varieties" className="py-24 md:py-32 bg-forest text-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <SectionHeading
          title="Every mango has its own character."
          className="text-cream [&>h2]:text-mango mb-16 md:mb-24"
        />

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row gap-12 h-[600px] lg:h-[700px]">
          {/* Left Navigation */}
          <div className="w-1/3 flex flex-col justify-center space-y-8 pr-8 border-r border-cream/10">
            {mangoVarieties.map((variety, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={variety.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="text-left group relative py-2 pl-4"
                >
                  <span 
                    className={cn(
                      "font-display text-4xl lg:text-5xl transition-all duration-500 inline-block",
                      isActive ? "text-mango font-bold translate-x-4" : "text-cream/40 group-hover:text-cream/80"
                    )}
                  >
                    {variety.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-mango rounded-r-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="w-2/3 relative h-full rounded-[2rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={mangoVarieties[activeIndex].image}
                  alt={mangoVarieties[activeIndex].name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                
                {/* Details Panel */}
                <div className="absolute bottom-0 left-0 w-full p-10 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm"
                  >
                    <div>
                      <span className="block uppercase tracking-widest text-mango/80 text-xs mb-2 font-bold">Taste</span>
                      <span className="font-medium text-cream/90 leading-snug block">{mangoVarieties[activeIndex].taste}</span>
                    </div>
                    <div>
                      <span className="block uppercase tracking-widest text-mango/80 text-xs mb-2 font-bold">Aroma</span>
                      <span className="font-medium text-cream/90 leading-snug block">{mangoVarieties[activeIndex].aroma}</span>
                    </div>
                    <div>
                      <span className="block uppercase tracking-widest text-mango/80 text-xs mb-2 font-bold">Texture</span>
                      <span className="font-medium text-cream/90 leading-snug block">{mangoVarieties[activeIndex].texture}</span>
                    </div>
                    <div>
                      <span className="block uppercase tracking-widest text-mango/80 text-xs mb-2 font-bold">Best Use</span>
                      <span className="font-medium text-cream/90 leading-snug block">{mangoVarieties[activeIndex].bestUse}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout (Carousel style) */}
        <div className="md:hidden space-y-12">
          {mangoVarieties.map((variety) => (
            <motion.div
              key={variety.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h3 className="font-display text-4xl text-mango border-b border-cream/20 pb-4">
                {variety.name}
              </h3>
              
              <div className="w-full relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={variety.image}
                  alt={variety.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
                <div>
                  <span className="block uppercase tracking-widest text-cream/50 text-xs mb-1 font-bold">Taste</span>
                  <span className="font-medium text-cream/90">{variety.taste}</span>
                </div>
                <div>
                  <span className="block uppercase tracking-widest text-cream/50 text-xs mb-1 font-bold">Aroma</span>
                  <span className="font-medium text-cream/90">{variety.aroma}</span>
                </div>
                <div>
                  <span className="block uppercase tracking-widest text-cream/50 text-xs mb-1 font-bold">Texture</span>
                  <span className="font-medium text-cream/90">{variety.texture}</span>
                </div>
                <div>
                  <span className="block uppercase tracking-widest text-cream/50 text-xs mb-1 font-bold">Best Use</span>
                  <span className="font-medium text-cream/90">{variety.bestUse}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
