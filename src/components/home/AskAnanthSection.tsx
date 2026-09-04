"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { AskAnanthChat } from "@/components/chat/AskAnanthChat";

export function AskAnanthSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section className="py-24 bg-cream/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-mango/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-forest/5 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="flex-shrink-0 relative">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-forest rounded-full flex items-center justify-center shadow-lg relative z-10">
              <Bot size={48} className="text-mango" />
            </div>
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-mango rounded-full flex items-center justify-center shadow-sm"
            >
              <Sparkles size={20} className="text-dark" />
            </motion.div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mango/20 text-forest text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              <Sparkles size={12} />
              <span>New Feature</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">
              Ask Ananth AI 🌱
            </h2>
            <p className="text-forest/70 text-lg mb-8 max-w-lg">
              Not sure which mango to choose? Have questions about our farm, gifting, tree adoption, or ordering? Chat with your personal mango assistant.
            </p>
            
            <button
              onClick={() => setIsChatOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-forest text-white px-8 py-4 rounded-full font-bold hover:bg-mango hover:text-dark transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <span>Ask Ananth AI</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <AskAnanthChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
}
