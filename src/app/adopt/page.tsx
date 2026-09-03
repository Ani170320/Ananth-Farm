"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Leaf, Gift, Briefcase, Baby, Smartphone, ArrowRight } from "lucide-react";
import { DashboardPreview } from "@/components/adopt/DashboardPreview";

const TIERS = [
  {
    name: "Seedling",
    price: "₹999",
    period: "/year",
    description: "Perfect for supporting the farm from afar.",
    features: [
      "Digital adoption certificate",
      "Regular farm updates",
      "Name tag on a shared tree",
    ],
    highlight: false,
  },
  {
    name: "Mango Lover",
    price: "₹2,499",
    period: "/year",
    description: "Our most popular personal adoption plan.",
    features: [
      "Your own numbered mango tree",
      "Digital certificate & physical tag",
      "Photos/videos of your tree",
      "1 Box of mangoes from your tree",
    ],
    highlight: true,
  },
  {
    name: "Family Tree",
    price: "₹4,999",
    period: "/year",
    description: "Great for families and mango enthusiasts.",
    features: [
      "Your own mature mango tree",
      "Guaranteed minimum yield (3 Boxes)",
      "Farm visit for 4 people once a year",
      "Personalized updates & photos",
    ],
    highlight: false,
  },
  {
    name: "Premium Tree",
    price: "₹9,999",
    period: "/year",
    description: "The ultimate farm-to-table experience.",
    features: [
      "Our oldest, highest-yielding trees",
      "Premium, priority harvest (5+ Boxes)",
      "Exclusive guided farm experience",
      "First access to special varieties",
    ],
    highlight: false,
  },
];

export default function AdoptPage() {
  const handleAdoptClick = (tierName: string) => {
    const text = `Hello Ananth Farm!%0A%0AI am interested in the *${tierName}* Adopt a Tree plan.%0A%0APlease let me know how to proceed with the adoption!`;
    window.open(`https://wa.me/916363739531?text=${text}`, '_blank');
  };

  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-mango/20 text-forest px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            <Leaf size={16} /> A Tree at Ananth Farm
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-forest font-bold mb-6 leading-tight">
            Don't just buy mangoes. <br className="hidden md:block" />
            <span className="text-mango italic">Adopt a relationship.</span>
          </h1>
          <p className="text-dark/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            We don't sell trees. We sell the experience of watching nature work. 
            Adopt a particular mango tree, receive regular photo updates of its growth, 
            and eventually taste the mangoes produced by your very own tree.
          </p>
        </motion.div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-32">
        <SectionHeading title="Choose Your Tier" align="center" className="mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-8 relative flex flex-col ${
                tier.highlight 
                  ? "bg-forest text-cream shadow-xl scale-105 z-10 border-none" 
                  : "bg-white text-dark shadow-sm border border-forest/10"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mango text-dark text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-display font-bold mb-2 ${tier.highlight ? "text-mango" : "text-forest"}`}>
                {tier.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={`text-sm ${tier.highlight ? "text-cream/70" : "text-dark/50"}`}>{tier.period}</span>
              </div>
              <p className={`text-sm mb-8 ${tier.highlight ? "text-cream/90" : "text-dark/70"}`}>
                {tier.description}
              </p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className={`mt-1 rounded-full shrink-0 ${tier.highlight ? "text-mango" : "text-forest"}`}>
                      <Leaf size={14} />
                    </div>
                    <span className={tier.highlight ? "text-cream/90" : "text-dark/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.highlight ? "primary" : "outline"}
                className={`w-full ${tier.highlight ? "bg-mango text-dark hover:bg-mango/90" : ""}`}
                onClick={() => handleAdoptClick(tier.name)}
              >
                Select Tier
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Adoption Experience */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <SectionHeading title="The Full Experience" align="center" className="mb-16" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Digital Certificate Mockup */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-cream rounded-3xl p-8 md:p-12 border border-forest/10 shadow-2xl relative overflow-hidden"
              >
                {/* Certificate Border Details */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-mango/30 rounded-2xl pointer-events-none" />
                <div className="absolute top-6 left-6 right-6 bottom-6 border border-forest/10 rounded-xl pointer-events-none" />
                
                <div className="text-center mb-10 relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-forest/20 shadow-sm">
                    <Image src="/logo.jpg" alt="Ananth Farm Logo" fill className="object-cover" />
                  </div>
                  <h3 className="font-display text-3xl text-forest uppercase tracking-widest font-bold">
                    Certificate of Adoption
                  </h3>
                  <p className="text-mango italic mt-2 font-serif text-lg">
                    Ananth Farm
                  </p>
                </div>
                
                <div className="space-y-6 relative z-10 text-center">
                  <p className="text-dark/70 text-sm uppercase tracking-widest font-bold">This certifies that</p>
                  <p className="font-display text-4xl text-forest/50 border-b border-dark/10 pb-4 inline-block px-8 font-bold italic">
                    [Your Name Here]
                  </p>
                  <p className="text-dark/70 text-sm leading-relaxed max-w-sm mx-auto">
                    has officially adopted a mango tree, contributing to natural farming and sustainable agriculture.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-12 relative z-10 border-t border-forest/10 pt-8">
                  <div className="text-center">
                    <p className="text-xs text-dark/50 uppercase font-bold tracking-widest mb-1">Tree Number</p>
                    <p className="font-bold text-forest text-xl">AF-127</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-dark/50 uppercase font-bold tracking-widest mb-1">Variety</p>
                    <p className="font-bold text-forest text-xl">Benishan</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-dark/50 uppercase font-bold tracking-widest mb-1">Tenure</p>
                    <p className="font-bold text-forest text-xl">2026 - 2027</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-dark/50 uppercase font-bold tracking-widest mb-1">Certificate No</p>
                    <p className="font-bold text-forest text-xl">CERT-2026-084</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Harvest Photo */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image 
                    src="/family-harvest-v2.jpg" 
                    alt="Family receiving their mango harvest"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-white font-display text-3xl font-bold mb-2">The Final Reward</h4>
                    <p className="text-white/90">A beautiful box of naturally ripened mangoes from your very own tree, delivered fresh to your family.</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <DashboardPreview />

      {/* Special Programs */}
      <section className="bg-forest py-24 text-cream overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
          <SectionHeading title="More Ways to Adopt" align="center" className="mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Gifting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
            >
              <div className="bg-mango/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-mango">
                <Gift size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Gift a Tree</h3>
              <p className="text-cream/70 text-sm mb-6 leading-relaxed">
                Instead of a generic gift, give someone a living asset. Perfect for birthdays, anniversaries, or Father's Day. They receive a beautiful certificate detailing their adopted tree.
              </p>
              <button onClick={() => handleAdoptClick("Gift a Tree")} className="flex items-center gap-2 text-mango font-bold text-sm hover:text-white transition-colors">
                Enquire about Gifting <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Kids */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
            >
              <div className="bg-mango/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-mango">
                <Baby size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Kids' Program</h3>
              <p className="text-cream/70 text-sm mb-6 leading-relaxed">
                Adopt a tree in your child's name. Every year they receive a growth certificate, photos ("Your tree is flowering!"), and a box of mangoes. A beautiful tradition for 10+ years.
              </p>
              <button onClick={() => handleAdoptClick("Kids Program")} className="flex items-center gap-2 text-mango font-bold text-sm hover:text-white transition-colors">
                Start a Tradition <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Corporate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
            >
              <div className="bg-mango/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-mango">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Corporate Orchard</h3>
              <p className="text-cream/70 text-sm mb-6 leading-relaxed">
                Companies can adopt 10, 50, or 100+ trees. Receive branded tree tags, employee farm visits, and an annual mango harvest for your team. A unique CSR initiative.
              </p>
              <button onClick={() => handleAdoptClick("Corporate Orchard")} className="flex items-center gap-2 text-mango font-bold text-sm hover:text-white transition-colors">
                Corporate Enquiries <ArrowRight size={16} />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* QR Code Experience */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl md:text-5xl text-forest font-bold mb-6">
                That's <span className="italic text-mango">MY</span> tree.
              </h2>
              <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                Every adopted tree is fitted with a physical QR code tag. When you scan it, or visit your digital dashboard, you see the complete, transparent journey of your specific tree.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-forest/10 p-3 rounded-full text-forest">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-forest text-lg">Digital Dashboard</h4>
                    <p className="text-dark/60 text-sm mt-1">Track growth, flowering stages, and fruit development with periodic photo updates uploaded by our farmers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-forest/10 p-3 rounded-full text-forest">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-forest text-lg">Transparent Yields</h4>
                    <p className="text-dark/60 text-sm mt-1">We don't guarantee a fake number. You receive exactly what your tree naturally produces during the season.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="lg:w-1/2 flex justify-center">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative w-[300px] h-[600px] bg-dark rounded-[3rem] border-[8px] border-dark shadow-2xl overflow-hidden"
              >
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-dark rounded-b-xl z-20" />
                
                {/* Screen Content */}
                <div className="w-full h-full bg-cream relative overflow-y-auto overflow-x-hidden pb-10">
                  <div className="h-48 relative">
                    <Image src="/tree-adopt.jpg" alt="Tree" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs font-bold tracking-widest text-mango mb-1">YOUR TREE</p>
                      <h3 className="text-2xl font-display font-bold">AF-127</h3>
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-6">
                    <div>
                      <p className="text-xs text-dark/50 font-bold uppercase mb-1">Variety</p>
                      <p className="font-medium text-forest">Benishan</p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-dark/50 font-bold uppercase mb-3">Status Timeline</p>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 bg-mango rounded-full" />
                            <div className="w-0.5 h-full bg-mango/30" />
                          </div>
                          <div className="pb-4">
                            <p className="font-bold text-sm text-forest">Flowering</p>
                            <p className="text-xs text-dark/50">March 2026</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 bg-dark/20 rounded-full" />
                            <div className="w-0.5 h-full bg-dark/10" />
                          </div>
                          <div className="pb-4">
                            <p className="font-bold text-sm text-dark/40">Fruit Development</p>
                            <p className="text-xs text-dark/40">April 2026</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 bg-dark/20 rounded-full" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-dark/40">Estimated Harvest</p>
                            <p className="text-xs text-dark/40">May 2026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
