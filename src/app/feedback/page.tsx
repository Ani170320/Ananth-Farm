"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageSquareHeart, Star } from "lucide-react";

export default function FeedbackPage() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `*New Feedback from ${name || "a Customer"}*%0A`;
    if (orderId) text += `*Order ID:* ${orderId}%0A`;
    text += `*Rating:* ${rating}/5 Stars ⭐️%0A%0A`;
    text += `*Feedback:*%0A${feedback}`;
    
    window.open(`https://wa.me/916363739531?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24 flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-forest/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-mango/10 rounded-full blur-[60px]" />
          
          <div className="text-center mb-10 relative z-10">
            <div className="w-16 h-16 bg-mango/20 text-mango rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <MessageSquareHeart size={32} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-forest font-bold mb-4">
              We Value Your Feedback
            </h1>
            <p className="text-dark/70 text-lg">
              Tell us about your experience with Ananth Farm. Your feedback goes directly to our family WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            {/* Rating */}
            <div className="flex flex-col items-center mb-8">
              <label className="text-sm font-bold text-forest/70 uppercase tracking-widest mb-4">
                Rate your experience
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star 
                      size={40} 
                      className={star <= rating ? "fill-mango text-mango" : "text-forest/10"} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-forest">Your Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-forest/5 border border-forest/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-mango transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-forest">Order ID (Optional)</label>
                <input 
                  type="text" 
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="e.g. AF-1042"
                  className="w-full bg-forest/5 border border-forest/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-mango transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-forest">Your Feedback</label>
              <textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="How were the mangoes? How was the delivery?"
                rows={5}
                className="w-full bg-forest/5 border border-forest/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-mango transition-all resize-none"
                required
              />
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full bg-mango text-forest hover:bg-[#F2B705] font-bold text-lg h-14 rounded-xl shadow-lg"
            >
              Submit via WhatsApp
            </Button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
