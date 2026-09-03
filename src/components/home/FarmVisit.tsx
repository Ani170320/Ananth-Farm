"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function FarmVisit() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Premium background styling */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mango/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-forest/5 text-forest px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <MapPin size={14} /> Open to Public
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest font-bold mb-6">
            Come meet <span className="text-mango italic font-light">the farm.</span>
          </h2>
          <p className="text-dark/70 text-lg max-w-2xl mx-auto">
            Experience the orchard, learn about our natural farming practices, and taste mangoes straight from the tree.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-forest/10"
        >
          <Image
            src="/mango-harvest.jpg"
            alt="Farm Visit at Ananth Farm"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-dark/10" />
          
          <div className="absolute inset-0 flex items-center justify-center p-6">
             <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/20 text-cream max-w-2xl w-full shadow-2xl relative overflow-hidden group hover:bg-white/15 transition-colors duration-500">
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-mango/30 rounded-full blur-[50px] pointer-events-none group-hover:bg-mango/40 transition-colors duration-500" />
                
                <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 relative z-10 text-white">Book a Farm Tour</h3>
                <p className="text-base md:text-lg text-cream/90 mb-8 font-sans relative z-10 max-w-lg mx-auto">
                  Available during harvest season (April - June). Group tours and private family visits available.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-cream/90 mb-10 font-sans relative z-10">
                  <div className="flex items-center gap-2 bg-dark/20 px-5 py-3 rounded-full border border-white/10 shadow-sm">
                    <MapPin size={16} className="text-mango" />
                    <span>Bidar, Karnataka 585402</span>
                  </div>
                  <a href="https://www.google.com/maps/dir/17.9221198,77.5102846/Ananth+farm,+XHM8%2B438,+Chimkod,+Sultanpur,+Karnataka+585402/@17.9514098,77.498034,12620m/data=!3m2!1e3!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bcebff3f655c6e5:0xf6bd9f0a6f5360e1!2m2!1d77.5652109!2d17.9827774!3e0?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-dark/20 hover:bg-dark/40 px-5 py-3 rounded-full border border-white/10 transition-colors group/link shadow-sm">
                    <Navigation size={16} className="text-white group-hover/link:text-mango transition-colors" />
                    <span className="group-hover/link:text-white transition-colors font-medium">Get Directions</span>
                  </a>
                </div>
                <div className="relative z-10">
                  <Link href="/visit">
                    <Button size="lg" className="bg-mango text-forest hover:bg-white hover:text-dark transition-all duration-300 font-bold px-10 py-6 rounded-full shadow-lg hover:shadow-xl text-lg">
                      Plan a Farm Visit
                    </Button>
                  </Link>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
