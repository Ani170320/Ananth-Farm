"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <main className="pt-32 pb-24 min-h-screen bg-cream flex items-center justify-center">
        <div className="bg-white p-12 rounded-3xl text-center max-w-lg mx-auto shadow-sm border border-forest/10">
          <div className="w-20 h-20 bg-mango rounded-full flex items-center justify-center mx-auto mb-6 text-dark">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-4xl text-forest font-bold mb-4">Order Confirmed!</h2>
          <p className="text-dark/70 mb-8">
            Thank you for choosing Ananth Farm. We've received your order and will start preparing it right away.
          </p>
          <Link href="/" className="bg-forest text-white px-8 py-3 rounded-full font-bold hover:bg-forest/90 transition-colors">
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="pt-32 pb-24 min-h-screen bg-cream flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl text-forest font-bold mb-4">Your cart is empty</h2>
        <Link href="/shop" className="text-mango underline hover:text-forest transition-colors font-medium">
          Return to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h1 className="font-display text-4xl md:text-5xl text-forest font-bold mb-12">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Form */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-forest/10">
            <h2 className="text-2xl font-bold text-forest mb-6">Delivery Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-forest/70 mb-2">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest/70 mb-2">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-forest/70 mb-2">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-forest/70 mb-2">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-forest/70 mb-2">Delivery Address</label>
                <textarea required rows={3} className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50 resize-none"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-forest/70 mb-2">City</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest/70 mb-2">PIN Code</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" />
                </div>
              </div>

              <div className="pt-6 border-t border-forest/10">
                <Button type="submit" className="w-full bg-forest text-white hover:bg-mango hover:text-dark py-4 text-lg font-bold">
                  Place Order
                </Button>
                <p className="text-xs text-center text-forest/50 mt-4">
                  Payment will be collected securely on delivery or via payment link sent to your phone.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-[400px]">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-forest/10 sticky top-32">
              <h2 className="text-2xl font-bold text-forest mb-6">Order Summary</h2>
              
              <div className="space-y-6 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-forest/10">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      <span className="absolute -top-2 -right-2 bg-mango text-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 text-sm">
                      <h4 className="font-bold text-forest">{item.product.name}</h4>
                      <p className="text-forest/60">{item.product.weight}</p>
                    </div>
                    <p className="font-bold text-forest">₹{item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-forest/10 text-sm">
                <div className="flex justify-between text-forest/70">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-forest/70">
                  <span>Shipping</span>
                  <span>Calculated next step</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-forest pt-4 border-t border-forest/10">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
