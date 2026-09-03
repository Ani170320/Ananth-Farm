"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-forest/5"
        >
          <h1 className="font-display text-4xl md:text-5xl text-forest font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-dark/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-forest mb-3">1. Information We Collect</h2>
              <p>
                When you interact with Ananth Farm, we collect information necessary to fulfill your orders and provide a personalized experience. This includes your name, shipping address, phone number, and email address. We do not store sensitive payment information directly on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to process your mango orders, manage your "Adopt a Tree" membership, send you harvest updates, and communicate with you regarding customer support. We may also send occasional updates about the farm, which you can opt out of at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">3. Data Sharing</h2>
              <p>
                We respect your privacy. We do not sell or rent your personal information to third parties. Your data is only shared with trusted partners necessary for our operations, such as courier and delivery services, strictly for the purpose of getting our mangoes to your door safely.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">4. Security</h2>
              <p>
                We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no data transmission over the internet or storage system can be guaranteed to be 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-forest mb-3">5. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Any updates will be posted on this page.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
