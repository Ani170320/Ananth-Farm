"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function FarmMap() {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[2/1] bg-cream rounded-3xl overflow-hidden border border-forest/10 shadow-inner flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      
      {/* Decorative Topographic Map Effect using SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <filter id="displacementFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <circle cx="50%" cy="50%" r="40%" fill="none" stroke="var(--color-forest)" strokeWidth="1" filter="url(#displacementFilter)" opacity="0.5"/>
        <circle cx="50%" cy="50%" r="30%" fill="none" stroke="var(--color-forest)" strokeWidth="1" filter="url(#displacementFilter)" opacity="0.5"/>
        <circle cx="50%" cy="50%" r="20%" fill="none" stroke="var(--color-forest)" strokeWidth="1" filter="url(#displacementFilter)" opacity="0.5"/>
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
          className="relative"
        >
          <MapPin size={48} className="text-mango drop-shadow-xl z-10 relative" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-mango/30 rounded-full animate-ping -z-10" />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 bg-white/80 backdrop-blur-sm border border-forest/10 px-6 py-3 rounded-2xl shadow-lg text-center"
        >
          <h4 className="font-display text-xl font-bold text-forest">Bidar, Karnataka</h4>
          <p className="text-sm text-forest/70 font-bold tracking-wider uppercase mt-1">17.922° N, 77.510° E</p>
        </motion.div>
      </div>

      {/* Decorative gradient corners */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-mango/10 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest/10 rounded-full blur-[60px] pointer-events-none" />
    </div>
  );
}
