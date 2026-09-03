"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  { num: "01", title: "JANUARY", subtitle: "The First Bloom", desc: "Our 100+ mature trees burst into fragrant blossoms. We let the bees do their natural work without any chemical interference.", image: "/mango-blossom.jpg" },
  { num: "02", title: "MARCH", subtitle: "Patient Growth", desc: "The green mangoes begin to form. We rely entirely on the rich soil and natural sunlight, completely avoiding synthetic fertilizers.", image: "/farming-ripening.jpg" },
  { num: "03", title: "MAY", subtitle: "Selective Harvest", desc: "We hand-pick each mango only when it reaches peak maturity on the tree. No early plucking, no artificial ripening agents.", image: "/mango-harvest.jpg" },
  { num: "04", title: "JUNE", subtitle: "Farm to Table", desc: "Packed in premium wooden crates lined with natural hay to ensure safe transport. Delivered straight from our farm to your home.", image: "/gift-box.jpg" }
];

export function FarmJourney() {
  return (
    <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-forest font-bold mb-4">
              The Journey of a <span className="text-mango italic font-light">Real Mango</span>
            </h2>
            <p className="text-dark/70 text-lg max-w-2xl mx-auto font-sans">
              From the first blossom to your dining table, see how patience and nature craft the perfect fruit.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-forest/5 flex flex-col group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-forest font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {step.title}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-mango font-bold text-xs mb-2">STEP {step.num}</div>
                <h3 className="font-display text-xl text-forest font-bold mb-3">{step.subtitle}</h3>
                <p className="text-dark/70 text-sm leading-relaxed flex-1">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
