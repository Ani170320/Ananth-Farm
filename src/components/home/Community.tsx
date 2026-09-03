"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

const photos = [
  { src: "/family-harvest-v2.jpg", alt: "Family holding mango box", caption: "The Sharma Family", rotate: "-rotate-6" },
  { src: "/realistic-mango-farm-walk.jpg", alt: "Walking in the farm", caption: "Farm Visit '25", rotate: "rotate-3" },
  { src: "/gift-box.jpg", alt: "Corporate gifting", caption: "Corporate Orders", rotate: "-rotate-2" },
  { src: "/mango-blossom.jpg", alt: "Mango blossoms", caption: "Spring Blooms", rotate: "rotate-6" },
];

export function Community() {
  return (
    <section className="py-32 bg-[#F9F7F3] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-mango/5 rounded-full blur-[60px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest/5 rounded-full blur-[60px]" />
      
      <div className="container mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest font-bold mb-6">
          The Farm <span className="text-mango italic font-light">Family</span>
        </h2>
        <p className="text-dark/70 text-lg max-w-2xl mx-auto mb-4">
          We don't just have customers, we have an extended family. See the joy our farm brings to homes across the country.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, y: -10 }}
              className={`bg-white p-3 md:p-4 pb-10 md:pb-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 w-[45%] md:w-72 lg:w-80 cursor-pointer border border-dark/5 ${photo.rotate} origin-bottom`}
            >
              <div className="relative w-full aspect-square bg-forest/5 mb-4 overflow-hidden border border-dark/5 shadow-inner">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between px-2">
                <p className="font-serif italic text-forest font-bold text-sm md:text-lg">{photo.caption}</p>
                <Heart size={16} className="text-mango md:w-5 md:h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
