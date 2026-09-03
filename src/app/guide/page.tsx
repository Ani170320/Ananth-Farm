"use client";

import { motion } from "framer-motion";
import { PackageOpen, Sparkles, Box, Wind, Flame } from "lucide-react";
import Image from "next/image";

export default function GuidePage() {
  const steps = [
    {
      icon: <PackageOpen size={32} />,
      title: "1. The Unboxing",
      description: "When your box arrives, open it immediately. We pack our mangoes raw with natural hay so they don't bruise during transit. The hay is crucial for the ripening process.",
      delay: 0.1
    },
    {
      icon: <Box size={32} />,
      title: "2. Keep them cozy",
      description: "Leave the mangoes nestled in the hay inside the box. Store the box in a dark, warm place at room temperature. Do NOT put them in the refrigerator while they are raw; the cold stops the ripening process and ruins the flavor.",
      delay: 0.2
    },
    {
      icon: <Flame size={32} />,
      title: "3. Watch for the change",
      description: "Over the next 2-4 days, the magic happens. You'll notice the green skin slowly turning into a vibrant yellow-orange (or a pale yellow for Benishan). The skin will begin to yield slightly to gentle pressure.",
      delay: 0.3
    },
    {
      icon: <Wind size={32} />,
      title: "4. The Aroma Test",
      description: "The true sign of a naturally ripened mango is the smell. Bring the stem of the mango to your nose. If you smell a rich, sweet, intoxicating aroma, it is ready to eat.",
      delay: 0.4
    },
    {
      icon: <Sparkles size={32} />,
      title: "5. Chill and Enjoy",
      description: "Once perfectly ripe, you can now transfer them to the refrigerator. A chilled Ananth Farm mango served fresh is an experience like no other. Enjoy the taste of pure, unforced nature.",
      delay: 0.5
    }
  ];

  return (
    <main className="min-h-screen bg-forest text-cream pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-mango/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 relative">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-mango">
            The Art of Ripening
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We never use carbide or forced chemical ripening. Our mangoes arrive raw, allowing you to witness the final stage of nature's work in your own home.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-mango group-hover:bg-mango group-hover:text-forest transition-colors shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-cream/70 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <Image 
                src="/farming-ripening.jpg" 
                alt="Mangoes ripening in hay" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="font-display text-2xl font-bold text-mango italic">
                  "Patience yields the sweetest fruit."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
