"use client";

import { motion } from "framer-motion";
import { QrCode, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const traceSteps = [
  { label: "Farm Location", href: "/#visit" },
  { label: "Tree / Batch", href: "/#adopt" },
  { label: "Mango Variety", href: "/#varieties" },
  { label: "Harvest Date", href: "/#journal" },
];

export function Traceability() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Know where your mango came from."
          subtitle="Every box tells a story. Scan the QR code to trace your mangoes back to their roots."
        />

        <div className="max-w-5xl mx-auto mt-16 bg-cream rounded-2xl overflow-hidden shadow-sm border border-forest/5 flex flex-col md:flex-row">
          {/* Visual Side */}
          <div className="w-full md:w-1/2 p-12 flex flex-col items-center justify-center bg-forest text-cream relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-10 w-48 h-48 bg-white rounded-xl flex items-center justify-center shadow-2xl p-4"
            >
              <div className="w-full h-full border-4 border-forest rounded-lg flex items-center justify-center bg-cream/50 relative overflow-hidden">
                 <QrCode size={120} className="text-forest" strokeWidth={1} />
                 {/* Scanning line animation */}
                 <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1 bg-mango/80 shadow-[0_0_15px_rgba(244,185,66,0.8)]"
                 />
              </div>
            </motion.div>
            
            <p className="mt-8 font-display text-xl tracking-widest text-mango">
              SCAN TO TRACE
            </p>
          </div>

          {/* Steps Side */}
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h3 className="font-display text-2xl text-forest font-bold mb-8">
              What you&apos;ll discover:
            </h3>
            
            <div className="space-y-6">
              {traceSteps.map((step, index) => (
                <Link href={step.href} key={index} className="block">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center group-hover:bg-mango transition-colors duration-300">
                      <ArrowRight size={16} className="text-forest group-hover:text-dark transition-colors" />
                    </div>
                    <span className="font-medium text-lg text-dark/80 group-hover:text-forest transition-colors">{step.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
