"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { mangoVarieties } from "@/data/mangoes";
import { Plus, Minus, ShoppingBag, Info } from "lucide-react";

const MAX_MANGOES = 12;
const BASE_PRICE = 200; // Base box price
const PRICE_PER_MANGO = 75; 

export default function BuildBoxPage() {
  const { addToCart } = useCart();

  const [box, setBox] = useState<Record<string, number>>(
    Object.fromEntries(mangoVarieties.map((v) => [v.id, 0]))
  );

  const totalMangoes = Object.values(box).reduce((sum, count) => sum + count, 0);
  const totalPrice = totalMangoes > 0 ? BASE_PRICE + (totalMangoes * PRICE_PER_MANGO) : 0;
  const progressPercentage = (totalMangoes / MAX_MANGOES) * 100;

  const updateQuantity = (id: string, delta: number) => {
    setBox(prev => {
      const newQty = prev[id] + delta;
      const newTotal = totalMangoes + delta;
      
      if (newQty < 0 || newTotal > MAX_MANGOES) return prev;
      
      return { ...prev, [id]: newQty };
    });
  };

  const handleAddToCart = () => {
    if (totalMangoes === 0) return;

    const selectedVarietiesDesc = mangoVarieties
      .filter((v) => box[v.id] > 0)
      .map((v) => `${box[v.id]}x ${v.name}`)
      .join(", ");

    const customProduct: Product = {
      id: `custom-box-${Date.now()}`,
      name: "Custom Box",
      weight: "approx 3 KG",
      description: selectedVarietiesDesc,
      price: totalPrice,
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=800&auto=format&fit=crop",
    };

    addToCart(customProduct, 1);
    
    // Reset box after adding
    setBox(Object.fromEntries(mangoVarieties.map((v) => [v.id, 0])));
  };

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mango/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-forest font-bold mb-4">Build Your Box</h1>
          <p className="text-dark/70 text-lg max-w-2xl mx-auto">
            Create your perfect mix. Choose up to {MAX_MANGOES} mangoes for your custom 3kg box.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Varieties */}
          <div className="lg:col-span-2 space-y-6">
            {mangoVarieties.map((variety) => (
              <motion.div 
                key={variety.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-forest/10 flex flex-col sm:flex-row items-center gap-6"
              >
                {/* Image */}
                <div className="w-full sm:w-32 h-32 relative rounded-2xl overflow-hidden shrink-0 bg-forest/5">
                  <Image src={variety.image} alt={variety.name} fill className="object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-display text-2xl font-bold text-forest">{variety.name}</h3>
                  <p className="text-dark/60 text-sm mt-1">{variety.taste}</p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 bg-cream rounded-full p-2 border border-forest/10">
                  <button 
                    onClick={() => updateQuantity(variety.id, -1)}
                    disabled={box[variety.id] === 0}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-forest shadow-sm hover:bg-forest hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-forest"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-bold text-lg w-6 text-center">{box[variety.id]}</span>
                  <button 
                    onClick={() => updateQuantity(variety.id, 1)}
                    disabled={totalMangoes >= MAX_MANGOES}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-forest shadow-sm hover:bg-forest hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-forest"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Box Summary */}
          <div className="lg:col-span-1">
            <div className="bg-forest text-cream rounded-3xl p-8 sticky top-32 shadow-2xl">
              <h3 className="font-display text-3xl font-bold mb-6 text-mango">Your Box</h3>
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2 font-bold tracking-wider uppercase text-cream/70">
                  <span>Capacity</span>
                  <span>{totalMangoes} / {MAX_MANGOES}</span>
                </div>
                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-mango"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  />
                </div>
                {totalMangoes === MAX_MANGOES && (
                  <p className="text-mango text-xs mt-2 font-bold flex items-center gap-1">
                    <Info size={14} /> Box is full!
                  </p>
                )}
              </div>

              {/* Box Contents list */}
              <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                {mangoVarieties.map(
                  (v) =>
                    box[v.id] > 0 && (
                      <div key={v.id} className="flex justify-between">
                        <span>{box[v.id]}x {v.name}</span>
                        <span>₹{box[v.id] * PRICE_PER_MANGO}</span>
                      </div>
                    )
                )}
                {totalMangoes > 0 && <div className="flex justify-between text-white/50 text-sm"><span>Base Box & Packing</span><span>₹{BASE_PRICE}</span></div>}
                
                {totalMangoes === 0 && (
                  <div className="text-center py-8 text-cream/40 italic">
                    Your box is empty. Start adding mangoes!
                  </div>
                )}
              </div>

              {/* Total & Checkout */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex justify-between items-end mb-8">
                  <span className="text-cream/70">Total</span>
                  <span className="text-3xl font-bold text-white">₹{totalPrice}</span>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={totalMangoes === 0}
                  className="w-full flex items-center justify-center gap-3 bg-mango text-forest py-4 rounded-xl font-bold uppercase tracking-widest transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-[0_10px_30px_rgba(244,185,66,0.3)]"
                >
                  <ShoppingBag size={20} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
