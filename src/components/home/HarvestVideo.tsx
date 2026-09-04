"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function HarvestVideo() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-dark">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="https://cdn.coverr.co/videos/coverr-sun-shining-through-the-trees-4328/1080p.mp4" 
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-8 cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 group shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-cream text-forest rounded-full flex items-center justify-center shadow-lg group-hover:bg-mango transition-colors duration-300">
            <Play fill="currentColor" size={32} className="ml-2" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream font-bold mb-6 drop-shadow-xl">
            From Blossom to Box.<br/>
            <span className="text-mango italic font-light font-serif">100% Natural.</span>
          </h2>
          
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto font-sans drop-shadow-md">
            Watch our family's journey of cultivating, hand-picking, and carefully packing the season's finest mangoes, with absolutely no chemicals involved.
          </p>
        </motion.div>
      </div>
      
      {/* Disclaimer for placeholder */}
      <div className="absolute bottom-4 right-4 z-20 text-white/40 text-xs font-sans pointer-events-none">
        Placeholder Video. Replace URL with AI Video in src/components/home/HarvestVideo.tsx
      </div>
    </section>
  );
}
