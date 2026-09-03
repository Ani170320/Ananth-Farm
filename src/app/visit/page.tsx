"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MapPin, Calendar, Users, Phone } from "lucide-react";

export default function VisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "1",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatting the WhatsApp message
    const whatsappNumber = "916363739531"; // The user's provided number
    const text = `Hello Ananth Farm!%0A%0AI would like to book a Farm Visit.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Preferred Date:* ${formData.date}%0A*Number of Guests:* ${formData.guests}%0A*Additional Notes:* ${formData.message}%0A%0APlease let me know the availability!`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest font-bold mb-6">
            Plan Your Farm Visit
          </h1>
          <p className="text-dark/70 text-lg max-w-2xl mx-auto">
            Experience the joy of natural farming. Walk through our mango orchards, learn about sustainable practices, and taste the freshest fruit straight from the tree.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-forest/10">
          
          {/* Left Side: Info & Image */}
          <div className="lg:w-5/12 bg-forest text-cream p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="font-display text-3xl font-bold mb-4">Tour Details</h3>
                <p className="text-cream/80 text-sm leading-relaxed">
                  Our guided tours run exclusively during the harvest season. A typical tour lasts 2-3 hours and includes a farm walk, mango tasting, and a traditional rural meal.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Calendar size={20} className="text-mango" />
                  </div>
                  <div>
                    <h4 className="font-bold">Season</h4>
                    <p className="text-cream/70 text-sm">April to June</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Users size={20} className="text-mango" />
                  </div>
                  <div>
                    <h4 className="font-bold">Group Size</h4>
                    <p className="text-cream/70 text-sm">Families and groups (Min 2, Max 20)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <MapPin size={20} className="text-mango" />
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-cream/70 text-sm">
                      Ananth farm Bidar Karnataka
                    </p>
                    <a href="https://www.google.com/maps/dir/17.9221198,77.5102846/Ananth+farm,+XHM8%2B438,+Chimkod,+Sultanpur,+Karnataka+585402/@17.9514098,77.498034,12620m/data=!3m2!1e3!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bcebff3f655c6e5:0xf6bd9f0a6f5360e1!2m2!1d77.5652109!2d17.9827774!3e0?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-mango hover:text-white underline text-xs mt-1 inline-block transition-colors">
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 w-full h-48 rounded-xl overflow-hidden border-2 border-white/10">
               <Image 
                 src="/realistic-farm-walk.jpg" 
                 alt="Farm walk"
                 fill
                 className="object-cover"
               />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 p-10 md:p-14">
            <h2 className="text-2xl font-bold text-forest mb-2">Book via WhatsApp</h2>
            <p className="text-forest/60 text-sm mb-8">
              Fill out your details below. We'll generate a WhatsApp message for you to send to our team to confirm your booking!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-forest/70 mb-2">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest/70 mb-2">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-forest/70 mb-2">Preferred Date</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest/70 mb-2">Number of Guests</label>
                  <select name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-forest/70 mb-2">Any special requests? (Optional)</label>
                <textarea rows={3} name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:outline-none focus:ring-2 focus:ring-mango bg-transparent text-forest placeholder:text-forest/50 resize-none" placeholder="e.g. We have two children with us..."></textarea>
              </div>

              <Button type="submit" className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] py-4 text-lg font-bold flex items-center justify-center gap-2 transition-colors">
                <Phone size={20} />
                Send Request via WhatsApp
              </Button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
