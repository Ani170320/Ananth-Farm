"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export function ProductShowcase() {
  const { addToCart, setIsCartOpen } = useCart();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="shop" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="The season's harvest"
          subtitle="Picked from our trees. Packed with care."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-cream rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-mango/20"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-forest text-cream text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                  {product.weight}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-forest mb-2">
                  {product.name}
                </h3>
                <p className="text-dark/70 text-sm mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-forest/10">
                  <span className="font-display font-bold text-xl text-forest">
                    ₹{product.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="transition-transform duration-300 hover:scale-105 active:scale-95"
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        weight: product.weight
                      });
                      setIsCartOpen(true);
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
