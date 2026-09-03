"use client";

import { motion } from "framer-motion";
import { Droplets, Sun, Wind, CheckCircle2 } from "lucide-react";

export function MangoCareGuide() {
  return (
    <section className="container mx-auto px-6 md:px-12 mt-32 mb-20">
      <div className="bg-cream rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-forest/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mango/10 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest/5 rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/3" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-forest font-bold mb-4">
            Mango Care & Ripening
          </h2>
          <p className="text-dark/70 text-lg">
            Our mangoes are shipped raw to prevent transport damage. Follow this authentic farm guide to ripen them perfectly at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-mango/20 rounded-2xl flex items-center justify-center text-mango mb-6 shadow-sm">
              <Sun size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold text-forest mb-3">1. Unpack & Breathe</h3>
            <p className="text-dark/70 leading-relaxed">
              Open the box immediately upon arrival. Keep the mangoes in the hay provided, placed in a warm, dry area away from direct sunlight.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-mango/20 rounded-2xl flex items-center justify-center text-mango mb-6 shadow-sm">
              <Wind size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold text-forest mb-3">2. The Waiting Game</h3>
            <p className="text-dark/70 leading-relaxed">
              Check daily. A naturally ripened mango will slightly yield to gentle thumb pressure near the stem and emit a sweet, heavy aroma.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-mango/20 rounded-2xl flex items-center justify-center text-mango mb-6 shadow-sm">
              <Droplets size={32} />
            </div>
            <h3 className="font-display text-2xl font-bold text-forest mb-3">3. Chill & Enjoy</h3>
            <p className="text-dark/70 leading-relaxed">
              Once fully ripe, move them to the refrigerator to pause ripening. Soak in water for 30 mins before eating to reduce natural heat.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 bg-forest rounded-3xl p-8 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 text-cream shadow-xl">
          <div className="w-16 h-16 bg-mango/20 rounded-full flex items-center justify-center text-mango shrink-0">
            <CheckCircle2 size={32} />
          </div>
          <div>
            <h4 className="font-display text-2xl font-bold mb-2">
              Never Refrigerate Raw!
            </h4>
            <p className="text-cream/80 max-w-xl">
              Putting unripened mangoes in the fridge halts the natural ripening process completely. They will remain hard and lose their flavor potential.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
