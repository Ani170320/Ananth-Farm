"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className={`flex flex-col ${index === 1 ? "md:mt-12" : ""}`}
            >
              <Quote className="text-mango/40 mb-6" size={48} strokeWidth={1} />
              <p className="font-display text-xl md:text-2xl text-forest leading-relaxed mb-8 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-bold text-dark text-sm uppercase tracking-widest">
                  {testimonial.name}
                </p>
                <p className="text-dark/50 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
