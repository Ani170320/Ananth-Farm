"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Leaf, Camera, Star, MapPin } from "lucide-react";

const features = [
  { icon: Leaf, text: "Digital Certificate" },
  { icon: Camera, text: "Photos & Updates" },
  { icon: Star, text: "Priority Harvest" },
  { icon: MapPin, text: "Farm Visits" },
];

export function AdoptTree() {
  return (
    <section id="adopt" className="py-24 md:py-32 bg-forest relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mango/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-mango/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-mango/20 text-mango px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-mango/20">
                <Leaf size={14} /> The Ultimate Connection
              </div>
              
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6">
                Don&apos;t just buy mangoes. <br />
                <span className="text-mango italic font-light">Adopt a tree.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-cream/70 font-sans mb-10 max-w-xl leading-relaxed">
                Become part of our farm family. Adopt an individual mango tree and experience the rhythm of nature, receiving exclusive benefits, updates, and its full natural harvest.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl"
                  >
                    <div className="bg-mango/20 text-mango p-2 rounded-xl">
                      <feature.icon size={20} />
                    </div>
                    <span className="text-cream/90 font-medium text-sm">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link href="/adopt" className="inline-block">
                <Button size="lg" className="bg-mango text-forest hover:bg-mango/90 px-8 h-14 text-lg rounded-full">
                  Explore Tree Adoption
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Animated Premium Card */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.02, y: -10 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="w-[340px] md:w-[400px] bg-cream rounded-3xl p-5 relative overflow-hidden group shadow-[0_20px_70px_-15px_rgba(251,191,36,0.3)]"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/80 to-white/0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1500 z-20 pointer-events-none" />
              
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-inner">
                <Image
                  src="/tree-adopt.jpg"
                  alt="Mango Tree #047"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-forest uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-mango animate-pulse" />
                  Available
                </div>
              </div>

              <div className="text-center px-4 pb-4">
                <p className="text-xs uppercase tracking-[0.3em] text-forest/40 mb-3 font-bold">
                  Ananth Farm
                </p>
                <h3 className="font-display text-4xl text-forest mb-2 font-bold group-hover:text-mango transition-colors">
                  Tree #047
                </h3>
                <p className="text-forest/60 font-medium text-sm mb-6">
                  Benishan Variety
                </p>
                
                <div className="flex justify-center items-center text-sm font-bold text-forest/70 border-t border-forest/10 pt-6">
                  <span className="bg-forest/5 px-4 py-2 rounded-full">Yield: ~40kg/yr</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
