"use client";

import { motion } from "framer-motion";
import { TreePine, CalendarDays, Activity, Camera, MapPin, Beaker } from "lucide-react";
import Image from "next/image";

export function DashboardPreview() {
  return (
    <section className="container mx-auto px-6 md:px-12 my-32">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-mango/10 rounded-full blur-[40px] -z-10" />
        <h2 className="font-display text-4xl md:text-5xl text-forest font-bold mb-4">
          Your Farm Member Dashboard
        </h2>
        <p className="text-dark/70 text-lg max-w-2xl mx-auto">
          When you adopt a tree, you get exclusive access to our member portal. Track your tree's health, view recent photos, and countdown to your harvest.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-[#ffffff] to-[#f4f1ea] rounded-[2.5rem] border border-white p-6 md:p-10 shadow-[0_30px_60px_rgba(10,30,10,0.08)] overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-mango/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Mock Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-forest/10 gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-mango/30 to-mango/10 rounded-full flex items-center justify-center text-mango shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)] border border-mango/20">
              <TreePine size={32} />
            </div>
            <div>
              <p className="text-xs font-bold text-forest/50 uppercase tracking-widest mb-1">Adopted Tree</p>
              <h3 className="font-display text-3xl font-bold text-forest">Benishan <span className="text-forest/30 font-light">#402</span></h3>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-forest/5">
            <MapPin size={16} className="text-forest/60" />
            <span className="text-sm font-bold text-forest">Karnataka</span>
          </div>
        </div>

        {/* Mock Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
          
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-mango" size={20} />
              <h4 className="font-bold text-forest">Tree Health</h4>
            </div>
            <p className="text-3xl font-display font-bold text-forest mb-2">Excellent</p>
            <p className="text-xs font-bold text-forest/50 tracking-wider uppercase">Last checked: Today</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <CalendarDays className="text-mango" size={20} />
              <h4 className="font-bold text-forest">Next Harvest</h4>
            </div>
            <p className="text-3xl font-display font-bold text-forest mb-2">May 15th</p>
            <p className="text-xs font-bold text-forest/50 tracking-wider uppercase">Est. yield: 15-20 KGs</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Beaker className="text-mango" size={20} />
              <h4 className="font-bold text-forest">Farming Stage</h4>
            </div>
            <p className="text-3xl font-display font-bold text-forest mb-2">Flowering</p>
            <div className="w-full bg-forest/10 h-2 rounded-full mt-4 overflow-hidden border border-forest/5 relative">
              <div className="w-1/3 h-full bg-gradient-to-r from-mango to-[#F2B705] rounded-full shadow-[0_0_10px_rgba(242,183,5,0.5)]" />
            </div>
          </div>

        </div>

        {/* Mock Recent Updates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm">
            <h4 className="font-bold text-forest mb-6 flex items-center gap-2">
              <Camera size={18} className="text-forest/50" /> Recent Photos
            </h4>
            <div className="flex gap-4">
              <div className="relative w-full h-32 rounded-xl overflow-hidden bg-forest/5 border border-forest/10 shadow-inner">
                <Image src="/mango-blossom.jpg" alt="Blossom" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="relative w-full h-32 rounded-xl overflow-hidden bg-forest/5 border border-forest/10 shadow-inner">
                <Image src="/realistic-farm-walk.jpg" alt="Farm Walk" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl p-6 bg-gradient-to-br from-forest to-[#1a3a28] text-cream relative overflow-hidden shadow-xl border border-[#234d35]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mango/10 rounded-full blur-[20px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-[30px] -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h4 className="font-bold text-mango mb-4">Farmer's Note</h4>
              <p className="text-cream/90 leading-relaxed italic text-sm">
                "The early morning dew has been perfect for the blossoms this week. Tree #402 is showing incredibly strong flower clusters. We've applied a fresh layer of organic compost around the base."
              </p>
              <p className="mt-4 font-bold text-xs tracking-widest uppercase text-white/90">- THE FARMER</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
