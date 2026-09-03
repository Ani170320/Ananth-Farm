"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { mangoVarieties } from "@/data/mangoes";
import { products } from "@/data/products";
import { Leaf, ShoppingBag, Gift } from "lucide-react";
import { MangoCareGuide } from "@/components/shop/MangoCareGuide";
import { TasteProfile } from "@/components/shop/TasteProfile";

export default function ShopPage() {
  const { addToCart } = useCart();
  
  // Track selected weight for each variety
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>({});

  const prices: Record<string, number> = {
    "3 KG": 899,
    "5 KG": 1399,
    "10 KG": 2599,
  };

  const handleAddToCart = (variety: any) => {
    const weight = selectedWeights[variety.id] || "3 KG";
    const price = prices[weight];
    
    addToCart({
      id: `${variety.id}-${weight.replace(' ', '').toLowerCase()}`,
      name: `${variety.name} Mangoes`,
      weight: weight,
      description: variety.taste,
      price: price,
      image: variety.image,
    });
  };

  return (
    <main className="min-h-screen bg-cream pt-28 pb-24">
      {/* Compact Shop Header */}
      <div className="container mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-forest/10 pb-6 gap-4">
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-forest font-bold mb-2">
              Fresh Harvest Shop
            </h1>
            <p className="text-dark/70">
              Select your favorite mango varieties. <span className="font-bold text-mango">Minimum order 3 KGs.</span>
            </p>
          </div>
          <div className="bg-forest/5 px-4 py-2 rounded-full text-sm font-bold text-forest flex items-center gap-2">
            <Leaf size={16} className="text-mango" /> 100% Naturally Ripened
          </div>
        </div>
      </div>

      {/* Shop Header removed */}

      <TasteProfile />

      {/* Shop Grid */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mangoVarieties.map((variety, index) => {
            const currentWeight = selectedWeights[variety.id] || "3 KG";
            const currentPrice = prices[currentWeight];

            return (
              <motion.div
                key={variety.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden border border-forest/10 shadow-sm hover:shadow-xl transition-shadow flex flex-col group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-forest/5">
                  <Image
                    src={variety.image}
                    alt={variety.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    In Season
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-2xl text-forest font-bold group-hover:text-mango transition-colors">
                      {variety.name}
                    </h3>
                    <span className="font-bold text-lg text-forest">
                      ₹{currentPrice}
                    </span>
                  </div>
                  
                  <p className="text-dark/60 text-sm mb-6 line-clamp-2 min-h-[40px]">
                    {variety.taste}
                  </p>

                  <div className="mt-auto space-y-4">
                    {/* Weight Selector */}
                    <div className="flex gap-1 bg-forest/5 p-1 rounded-lg">
                      {["3 KG", "5 KG", "10 KG"].map((w) => (
                        <button
                          key={w}
                          onClick={() => setSelectedWeights(prev => ({ ...prev, [variety.id]: w }))}
                          className={`flex-1 text-xs font-bold py-2 rounded-md transition-colors ${
                            currentWeight === w 
                              ? "bg-white text-forest shadow-sm" 
                              : "text-forest/60 hover:text-forest"
                          }`}
                        >
                          {w}
                        </button>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => handleAddToCart(variety)}
                      className="w-full bg-forest text-cream hover:bg-mango hover:text-dark transition-colors font-bold flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={18} /> Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Curated Boxes Grid */}
      <div className="container mx-auto px-6 md:px-12 mt-24">
        <div className="flex items-center gap-4 mb-10 border-b border-forest/10 pb-4">
          <div className="bg-mango/20 p-2 rounded-lg text-mango">
            <Gift size={24} />
          </div>
          <div>
            <h2 className="font-display text-3xl text-forest font-bold">Curated Farm Boxes</h2>
            <p className="text-dark/60 text-sm">Mixed selections handpicked by our farmers.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Custom Build Box Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden border border-mango/30 shadow-[0_4px_20px_rgba(244,185,66,0.15)] hover:shadow-[0_8px_30px_rgba(244,185,66,0.25)] transition-shadow flex flex-col group relative"
          >
            <div className="absolute top-3 right-3 z-10 bg-mango text-forest font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              New
            </div>
            <div className="relative h-48 w-full overflow-hidden bg-forest/5">
              <Image
                src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=800&auto=format&fit=crop"
                alt="Custom Box"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                Custom
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-xl text-forest font-bold group-hover:text-mango transition-colors">
                  Build Your Own Box
                </h3>
              </div>
              
              <p className="text-dark/60 text-sm mb-6 flex-1">
                Can't decide? Create your perfect custom 3kg mix of Benishan, Dashehari, and Raspuri mangoes.
              </p>

              <Link href="/build-box" className="mt-auto block">
                <Button
                  className="w-full bg-mango text-forest hover:bg-forest hover:text-white transition-colors font-bold flex items-center justify-center gap-2"
                >
                  <Gift size={18} /> Start Building
                </Button>
              </Link>
            </div>
          </motion.div>
          {products.filter(p => p.id !== "box-gift").map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden border border-forest/10 shadow-sm hover:shadow-xl transition-shadow flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-forest/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {product.weight}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-forest font-bold group-hover:text-mango transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-bold text-forest">
                    ₹{product.price}
                  </span>
                </div>
                
                <p className="text-dark/60 text-sm mb-6 flex-1">
                  {product.description}
                </p>
                
                <Button
                  onClick={() => addToCart(product)}
                  className="w-full bg-forest text-cream hover:bg-mango hover:text-dark transition-colors font-bold flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} /> Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Gifting Section */}
      <div className="container mx-auto px-6 md:px-12 mt-24">
        <div className="flex items-center gap-4 mb-10 border-b border-forest/10 pb-4">
          <div className="bg-mango/20 p-2 rounded-lg text-mango">
            <Gift size={24} />
          </div>
          <div>
            <h2 className="font-display text-3xl text-forest font-bold">The Art of Gifting</h2>
            <p className="text-dark/60 text-sm">Elegant mango boxes for corporate clients, festivals, and special occasions.</p>
          </div>
        </div>

        {products.filter(p => p.id === "box-gift").map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] overflow-hidden border border-forest/10 shadow-lg flex flex-col md:flex-row items-center gap-0 max-w-6xl mx-auto group"
          >
            <div className="relative w-full md:w-1/2 h-72 md:h-96 bg-forest/5 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream">
                <p className="font-display text-3xl font-bold mb-1">Premium Quality</p>
                <p className="text-sm text-cream/80">Hand-selected flawless mangoes</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-4xl text-forest font-bold group-hover:text-mango transition-colors">
                  {product.name}
                </h3>
                <span className="font-bold text-2xl text-forest bg-mango/10 px-4 py-1 rounded-lg">
                  ₹{product.price}
                </span>
              </div>
              
              <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-forest/5 p-4 rounded-xl">
                  <p className="text-xs uppercase tracking-widest font-bold text-forest/50 mb-1">Packaging</p>
                  <p className="text-forest font-bold">Elegant Wooden Crate</p>
                </div>
                <div className="bg-forest/5 p-4 rounded-xl">
                  <p className="text-xs uppercase tracking-widest font-bold text-forest/50 mb-1">Customization</p>
                  <p className="text-forest font-bold">Personalized Notes</p>
                </div>
              </div>
              
              <Button
                onClick={() => addToCart(product)}
                className="w-full bg-forest text-cream hover:bg-mango hover:text-dark transition-colors font-bold flex items-center justify-center gap-2 h-14 text-lg rounded-full shadow-lg"
              >
                <ShoppingBag size={20} /> Add Gift Box to Cart
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <MangoCareGuide />
      
      {/* Bulk & Custom Orders CTA */}
      <div className="container mx-auto px-6 md:px-12 mt-16">
        <div className="bg-forest rounded-[2rem] p-8 md:p-12 text-cream flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-mango/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Need a Custom or Bulk Order?</h2>
            <p className="text-cream/80 text-lg">
              We offer custom packaging, personalized notes, and special pricing for <span className="text-mango font-bold">10+ orders</span>. Perfect for corporate gifting, weddings, or large family gatherings.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a 
              href="https://wa.me/916363739531?text=Hello Ananth Farm! I am interested in a custom bulk order (10+ boxes)." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-mango text-forest font-bold px-8 py-4 rounded-full inline-block hover:bg-white transition-colors shadow-lg hover:shadow-xl"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
