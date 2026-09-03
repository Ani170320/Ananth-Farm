"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-forest/5"
        >
          <h1 className="font-display text-4xl md:text-5xl text-forest font-bold mb-8">Terms & Conditions</h1>
          
          <div className="space-y-8 text-dark/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-forest mb-3">1. Introduction</h2>
              <p>
                Welcome to Ananth Farm. By accessing our website and purchasing our products, you agree to be bound by these Terms & Conditions. Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">2. Products and Orders</h2>
              <p>
                Our mangoes are a natural, seasonal product. While we strive to provide accurate descriptions, the size, color, and yield of natural products can vary. All orders are subject to availability and seasonal constraints. We reserve the right to cancel or modify orders if the harvest is impacted by unforeseen natural circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">3. Shipping and Delivery</h2>
              <p>
                We harvest and ship mangoes strictly according to their natural ripening cycles. Estimated delivery times are provided for convenience and are not guaranteed. We are not liable for delays caused by third-party courier services. Please inspect your package upon arrival.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">4. Returns and Replacements</h2>
              <p>
                Due to the perishable nature of our products, we do not accept standard returns. However, if your mangoes arrive significantly damaged, please contact us with photographic evidence within 24 hours of delivery on WhatsApp, and we will arrange a replacement or refund at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">5. "Adopt a Tree" Program</h2>
              <p>
                The "Adopt a Tree" program is a symbolic adoption. You are purchasing the harvest and the experience, not the physical tree or the land. Yields are estimates based on historical data and cannot be absolutely guaranteed due to the unpredictable nature of agriculture.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">6. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at anirudh170320@gmail.com or via WhatsApp at +91 63637 39531.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
