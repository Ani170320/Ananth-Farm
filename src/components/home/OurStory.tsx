"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Leaf, Sun } from "lucide-react";

export function OurStory() {
  return (
    <section id="our-farm" className="py-24 md:py-32 overflow-hidden bg-cream relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mango/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Side - Premium Single Image Layout */}
          <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center pl-6 md:pl-0 pr-6 lg:pr-12">
            
            {/* Main large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-forest/10"
            >
              <Image
                src="/realistic-farm-walk.jpg"
                alt="Ananth Farm Mangoes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="absolute top-12 right-0 lg:-right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-forest/5 flex items-center gap-4 z-20"
            >
              <div className="bg-mango/20 p-3 rounded-full text-mango">
                <Sun size={24} />
              </div>
              <div>
                <p className="font-display text-2xl text-forest font-bold leading-none">100%</p>
                <p className="text-dark/60 text-xs font-bold uppercase tracking-widest mt-1">Natural</p>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-forest/5 text-forest px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <Leaf size={14} /> Our Philosophy
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest font-bold leading-tight mb-8">
                More than a mango. <br/>
                <span className="text-mango italic font-light">It's a connection</span> to the farm.
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-dark/70 font-sans mb-10"
            >
              <p className="text-xl text-forest font-medium leading-relaxed">
                At Ananth Farm, we believe the best mangoes aren't simply grown—they're nurtured. Our farm is home to over 100+ mature mango trees, each with its own character, story, and place in our family's journey.
              </p>
              
              <div className="h-px w-12 bg-mango/30 my-8" />
              
              <p className="leading-relaxed">
                We've cultivated mangoes with patience and respect for nature. We believe good mangoes take time. Our mangoes are naturally ripened, with no artificial ripening agents, added sweeteners, or artificial flavours. We let each fruit mature naturally, guided by the sun, soil, and rhythm of the season.
              </p>
              <p className="leading-relaxed">
                That means you can enjoy the simple, authentic taste of a naturally grown and naturally ripened mango—something the whole family, including kids, can enjoy with confidence.
              </p>
              <p className="leading-relaxed font-serif italic text-lg text-dark/60 pt-4 border-l-2 border-mango pl-6">
                "When you enjoy an Ananth Farm mango, you're experiencing more than just a fruit. You're tasting the authenticity of a real Indian family farm."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link href="/visit">
                <Button size="lg" className="bg-forest text-cream hover:bg-mango hover:text-dark transition-all duration-300 font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl">
                  Discover Our Farm
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
