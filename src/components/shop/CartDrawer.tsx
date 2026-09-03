"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  const freeShippingThreshold = 3000;
  const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);
  const amountLeft = freeShippingThreshold - cartTotal;

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "916363739531";
    let message = "Hello Ananth Farm! I would like to place an order:\n\n";
    
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.product.name} (${item.product.weight}) - ₹${item.product.price * item.quantity}\n`;
    });
    
    message += `\n*Total: ₹${cartTotal}*\n\nPlease let me know the payment details.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-dark/60 backdrop-blur-md z-50 transition-all duration-500"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.8 }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white/80 backdrop-blur-3xl shadow-2xl z-50 flex flex-col border-l border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-forest/10 bg-white/50">
              <h2 className="font-display text-2xl text-forest font-bold flex items-center gap-3">
                <ShoppingBag size={24} className="text-mango" /> Your Harvest
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 bg-white/50 hover:bg-forest/10 rounded-full transition-colors text-forest backdrop-blur-sm"
              >
                <X size={20} />
              </button>
            </div>

            {/* Progress Bar for Free Shipping */}
            {cartItems.length > 0 && (
              <div className="px-6 py-4 bg-forest/5 border-b border-forest/5">
                <div className="flex items-center gap-2 mb-2">
                  <Truck size={16} className={amountLeft <= 0 ? "text-mango" : "text-forest/60"} />
                  <p className="text-sm font-medium text-forest">
                    {amountLeft <= 0 
                      ? "You've unlocked free shipping!" 
                      : `Add ₹${amountLeft} more for free shipping`}
                  </p>
                </div>
                <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-forest/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-full bg-mango transition-all duration-300"
                  />
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {cartItems.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-forest/60"
                >
                  <div className="bg-white/50 p-6 rounded-full mb-6 border border-white">
                    <ShoppingBag size={48} className="text-mango opacity-80" />
                  </div>
                  <p className="text-xl font-display font-bold text-forest mb-2">Your cart is empty</p>
                  <p className="text-sm text-center max-w-[250px] mb-8">Looks like you haven't added any fresh mangoes to your harvest yet.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-forest text-cream px-8 py-3 rounded-full font-bold hover:bg-mango hover:text-dark transition-colors shadow-lg"
                  >
                    Start Shopping
                  </button>
                </motion.div>
              ) : (
                cartItems.map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={item.product.id} 
                    className="flex gap-4 items-center bg-white/60 p-3 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-forest/10 shadow-inner">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-forest truncate">{item.product.name}</h3>
                      <p className="text-xs font-bold text-forest/50 uppercase tracking-widest">{item.product.weight}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3 bg-white/80 border border-forest/10 rounded-full px-2 py-1 shadow-sm backdrop-blur-sm">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:text-mango transition-colors text-forest/70"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center text-forest">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:text-mango transition-colors text-forest/70"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-bold text-forest">₹{item.product.price * item.quantity}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 bg-white/50 hover:bg-red-50 text-forest/40 hover:text-red-500 rounded-full transition-colors shrink-0 shadow-sm"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white/80 backdrop-blur-xl border-t border-white/40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-forest">Total Estimate</span>
                  <span className="text-3xl font-bold text-forest font-display">₹{cartTotal}</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex items-center justify-center bg-forest text-white py-4 rounded-full font-bold hover:bg-mango hover:text-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Checkout via WhatsApp
                </button>
                <p className="text-xs text-forest/50 mt-4 text-center">
                  Secure checkout. Payments are handled via UPI/Bank Transfer after order confirmation.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
