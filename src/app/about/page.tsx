"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FarmMap } from "@/components/about/FarmMap";
import { Leaf, Droplets, Sun, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mango/20 rounded-full blur-[80px] -z-10" />
          <h1 className="font-display text-5xl md:text-6xl text-forest font-bold mb-6">
            Meet the Farmers
          </h1>
          <p className="text-dark/70 text-lg md:text-xl leading-relaxed">
            Ananth Farm is more than just land. It’s a family legacy rooted in the rich soils of Bidar, Karnataka. Built by a father and son, sustained by nature.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/our-story.jpg" 
              alt="Ananth Farm Family" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-display text-3xl font-bold mb-2">Our Roots</h3>
              <p className="text-white/80 max-w-sm">Tending to the orchards generation after generation.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-dark/80"
          >
            <p>
              It all started with a simple belief: <strong className="text-forest">nature knows best</strong>. When we planted our first mango sapling decades ago, we made a promise to never use chemical shortcuts. 
            </p>
            <p>
              Today, Ananth Farm is managed by Anirudh and his father. Every single mango you receive has been watched over by our family. We know which trees yield the sweetest fruit, and we know exactly when the harvest is ready.
            </p>
            
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-forest/10 mt-8">
              <h4 className="font-display text-2xl font-bold text-forest mb-6">Our Philosophy</h4>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-mango/20 p-3 rounded-xl shrink-0"><Leaf size={24} className="text-mango" /></div>
                  <div>
                    <h5 className="font-bold text-forest">100% Natural Farming</h5>
                    <p className="text-sm text-dark/70 mt-1">Zero synthetic pesticides. We use cow dung manure, jeevamrutha, and neem oil.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-mango/20 p-3 rounded-xl shrink-0"><Sun size={24} className="text-mango" /></div>
                  <div>
                    <h5 className="font-bold text-forest">Tree-Ripened, Never Forced</h5>
                    <p className="text-sm text-dark/70 mt-1">We never use carbide. The sun and time do the ripening for us.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-mango/20 p-3 rounded-xl shrink-0"><Droplets size={24} className="text-mango" /></div>
                  <div>
                    <h5 className="font-bold text-forest">Sustainable Water Use</h5>
                    <p className="text-sm text-dark/70 mt-1">Drip irrigation ensures every drop of water is used efficiently.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Location Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold text-forest mb-4">Our Soil. Our Home.</h2>
          <p className="text-dark/70 text-lg">
            Located in the unique red laterite soils of Bidar, Karnataka. The region's dry heat and specific mineral composition give our Benishan and Dashehari mangoes their distinct, intense sweetness.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FarmMap />
        </motion.div>

      </div>
    </main>
  );
}
