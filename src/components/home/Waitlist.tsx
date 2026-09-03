"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Waitlist() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && contact) {
      setSubmitted(true);
      // Here you would typically send the data to an API route
    }
  };

  return (
    <section className="bg-forest py-12 relative overflow-hidden text-cream border-t border-cream/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mango/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12"
        >
          <div className="text-center md:text-left flex-1">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Join the 2027 Harvest Waitlist
            </h2>
            <p className="text-cream/70 text-sm md:text-base max-w-md mx-auto md:mx-0">
              Our mangoes are highly seasonal. Enter your email to be the first to know when the next harvest is ready.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-mango/20 text-mango font-bold text-sm rounded-xl py-3 px-6 text-center border border-mango/30"
              >
                You're on the list! 🥭
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full sm:w-40 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-mango transition-all text-sm"
                />
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Email or Phone Number"
                  required
                  className="w-full sm:w-56 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-mango transition-all text-sm"
                />
                <button
                  type="submit"
                  className="bg-mango text-forest font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-forest transition-colors shadow-lg hover:shadow-xl shrink-0 group text-sm"
                >
                  Join <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
