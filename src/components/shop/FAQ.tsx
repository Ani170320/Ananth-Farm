"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you ship outside of Karnataka?",
    answer: "Yes, we ship our mangoes across India using premium courier partners to ensure they arrive fresh and safe.",
  },
  {
    question: "How long does delivery take?",
    answer: "Since we harvest only when you order, please allow 1-2 days for harvesting and packing. Shipping typically takes 2-4 days depending on your location.",
  },
  {
    question: "What if my mangoes arrive damaged?",
    answer: "We take immense care in packing with wooden crates and natural hay. However, if any damage occurs during transit, simply send us a photo on WhatsApp within 24 hours of delivery, and we will issue a replacement or refund.",
  },
  {
    question: "Why do you ship the mangoes raw?",
    answer: "Naturally ripened mangoes are very delicate. Shipping them raw ensures they don't bruise during transport. We provide a detailed ripening guide with every box so you can ripen them perfectly at home.",
  },
  {
    question: "Are your mangoes certified organic?",
    answer: "While we do not have a formal certification, we follow 100% natural farming practices. We do not use any synthetic fertilizers, pesticides, or artificial ripening agents like carbide.",
  },
  {
    question: "How can I provide feedback or suggestions?",
    answer: "We love hearing from you! Your feedback helps us improve our farm and services. Click on the 'Feedback' link in the footer below to share your experience, or navigate directly to /feedback.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#0a1e12] py-32 relative overflow-hidden text-cream">
      {/* Premium Dark Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-mango/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-16 relative">
          <div className="w-16 h-16 bg-white/5 border border-white/10 text-mango rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl backdrop-blur-sm">
            <MessageCircleQuestion size={32} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-4">
            Common Questions
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about ordering, shipping, and caring for your Ananth Farm mangoes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  isActive 
                    ? "bg-white/10 border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)]" 
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={cn(
                    "font-display text-xl font-bold transition-colors duration-300",
                    isActive ? "text-mango" : "text-cream"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500",
                    isActive 
                      ? "bg-mango text-forest rotate-180 shadow-[0_0_15px_rgba(242,183,5,0.4)]" 
                      : "bg-white/10 text-white/70"
                  )}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-cream/80 text-lg leading-relaxed border-t border-white/10 pt-6 bg-black/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
