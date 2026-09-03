"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Gifting() {
  return (
    <section id="gifting" className="py-24 md:py-32 bg-forest text-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
                Give something that <br />
                <span className="text-mango italic">grew somewhere.</span>
              </h2>
              <p className="text-lg text-cream/80 max-w-xl font-sans mb-8">
                Elevate your gifting with our premium mango boxes. Perfect for corporate clients, weddings, festivals, and special family moments.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm uppercase tracking-widest font-bold text-mango">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cream" /> Corporate
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cream" /> Festivals
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cream" /> Weddings
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cream" /> Family
                </div>
              </div>

              <Link href="/shop">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto hover:bg-white transition-colors hover:text-dark">
                  Explore Gifting
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-mango/10 rounded-2xl transform rotate-3" />
            <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm overflow-hidden border border-cream/10">
              <Image
                src="/gift-box.jpg"
                alt="Premium Mango Gift Box"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="font-display text-3xl font-bold text-cream mb-2">The Royal Box</p>
                <p className="text-cream/80 text-sm">Hand-selected premium mangoes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
