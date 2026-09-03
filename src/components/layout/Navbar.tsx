"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Mangoes", href: "/#varieties" },
  { name: "Adopt a Tree", href: "/adopt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const pathname = usePathname();
  const isDarkText = isScrolled || pathname !== '/';

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Ensure it runs once on mount in case the page is reloaded halfway down
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsScrolled(window.scrollY > 50);
    }
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cream shadow-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <div
            className={cn(
              "font-display font-bold tracking-wider transition-colors duration-300 flex items-center gap-3",
              isDarkText ? "text-forest" : "text-cream drop-shadow-md"
            )}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/20 shadow-sm transition-transform hover:scale-105">
              <Image src="/logo.jpg" alt="Ananth Farm Logo" fill className="object-cover" />
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:text-mango",
                  isDarkText ? "text-forest" : "text-cream drop-shadow-md"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className={cn(
              "relative p-2 transition-colors duration-300 hover:text-mango",
              isDarkText ? "text-forest" : "text-cream drop-shadow-md"
            )}
            aria-label="Open cart"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-mango text-dark text-xs font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Nav Toggle & Cart */}
        <div className="flex md:hidden items-center gap-4 relative z-50">
          <button
            onClick={() => setIsCartOpen(true)}
            className={cn(
              "relative p-2 transition-colors duration-300",
              mobileMenuOpen || isDarkText ? "text-forest" : "text-cream drop-shadow-md"
            )}
            aria-label="Open cart"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-mango text-dark text-xs font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
          
          <button
            className={cn(
              "p-2 -mr-2 transition-colors duration-300",
              mobileMenuOpen || isDarkText ? "text-forest" : "text-cream drop-shadow-md"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="font-display text-3xl text-forest hover:text-mango transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
