"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-32 bg-mango text-forest text-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-forest to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Your next mango should have a story.
          </h2>
          <p className="text-xl md:text-2xl text-forest/80 font-serif italic mb-12">
            Bring home mangoes that you can trace back to the farm.
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-forest text-cream hover:bg-forest/90 w-full sm:w-auto text-lg px-12 py-6">
              Shop Ananth Farm Mangoes
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
