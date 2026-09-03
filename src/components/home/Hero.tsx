"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax (Keep this for vertical scroll, remove mouse parallax)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]); 

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-12 bg-dark"
    >
      {/* Scroll Parallax Layer */}
      <motion.div
        style={{ y: scrollY, scale }}
        className="absolute inset-[-10%] z-0"
      >
        {/* Static Layer */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Ananth Farm Mango Orchard"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient - Darker for better contrast */}
          <div className="absolute inset-0 bg-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-transparent to-dark/90" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 md:px-12 text-center text-cream flex flex-col items-center justify-center h-full"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 text-mango drop-shadow-md"
        >
          <span className="text-sm font-bold tracking-widest text-mango uppercase">
            THE 2026 HARVEST
          </span>
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 md:mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] pointer-events-none"
        >
          <span className="block">Pure. Natural.</span>
          <span className="block text-cream/90 italic font-medium">Ananth Farm Mangoes.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mango to-accent italic font-serif font-medium relative inline-block group">Straight from the Farm.</span>
        </motion.h1>

        <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-8 md:mb-10 pointer-events-none">
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-cream font-medium font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Naturally grown. Naturally ripened. Nothing artificial.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-cream/80 font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            No artificial ripening, no added sweeteners, and no artificial flavours just authentic mangoes from our family farm in Bidar, delivered straight to your home.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Link 
            href="/shop"
            className="group relative inline-flex items-center justify-center gap-3 bg-mango text-forest px-6 py-4 md:px-8 md:py-5 rounded-full font-bold uppercase tracking-wider overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(244,185,66,0.3)] w-full sm:w-auto text-sm md:text-base"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Shop the Harvest</span>
          </Link>
          <Link 
            href="/adopt"
            className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 md:px-8 md:py-5 rounded-full font-bold uppercase tracking-wider transition-all hover:bg-white/20 hover:border-white/40 w-full sm:w-auto text-sm md:text-base"
          >
            Adopt a Tree
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
