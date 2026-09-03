import Link from "next/link";
import { Camera, Globe, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const links = {
    explore: [
      { name: "Shop", href: "/shop" },
      { name: "Ripening Guide", href: "/guide" },
      { name: "Mangoes", href: "/#varieties" },
      { name: "Adopt a Tree", href: "/adopt" },
    ],
    more: [
      { name: "Farm Journal", href: "/#journal" },
      { name: "Gifting", href: "/#gifting" },
      { name: "Farm Visit", href: "/#visit" },
      { name: "FAQ", href: "/#faq" },
      { name: "Feedback", href: "/feedback" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-forest text-cream pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/20 shadow-sm">
                <Image src="/logo.jpg" alt="Ananth Farm Logo" fill className="object-cover" />
              </div>
            </div>
            <p className="text-cream/80 mb-6 max-w-xs font-serif italic">
              From Our Trees. Straight to Your Home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-mango transition-colors" aria-label="Instagram">
                <Camera size={20} />
              </a>
              <a href="#" className="hover:text-mango transition-colors" aria-label="Facebook">
                <Globe size={20} />
              </a>
              <a href="#" className="hover:text-mango transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display text-xl mb-6 text-mango">Explore</h4>
            <ul className="space-y-4">
              {links.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors text-sm uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-display text-xl mb-6 text-mango">More</h4>
            <ul className="space-y-4">
              {links.more.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors text-sm uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl mb-6 text-mango">Support & Orders</h4>
            <div className="space-y-6">
              <a href="mailto:anirudh170320@gmail.com" className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-mango/20 transition-colors border border-white/5 group-hover:border-mango/30">
                  <Mail size={18} className="text-mango" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest mb-1 font-bold">Email</p>
                  <p className="text-cream/90 group-hover:text-white transition-colors text-sm">anirudh170320@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+916363739531" className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-mango/20 transition-colors border border-white/5 group-hover:border-mango/30">
                  <Phone size={18} className="text-mango" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest mb-1 font-bold">Phone</p>
                  <p className="text-cream/90 group-hover:text-white transition-colors text-sm">+91 63637 39531</p>
                  <p className="text-xs text-cream/50 mt-0.5">Anirudh Gadgikar</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-mango/20 transition-colors border border-white/5 group-hover:border-mango/30">
                  <MapPin size={18} className="text-mango" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest mb-1 font-bold">Location</p>
                  <p className="text-cream/90 text-sm leading-relaxed mb-2">
                    Ananth Farm<br/>
                    Bidar, Karnataka 585402
                  </p>
                  <a href="https://www.google.com/maps/dir/17.9221198,77.5102846/Ananth+farm,+XHM8%2B438,+Chimkod,+Sultanpur,+Karnataka+585402/@17.9514098,77.498034,12620m/data=!3m2!1e3!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bcebff3f655c6e5:0xf6bd9f0a6f5360e1!2m2!1d77.5652109!2d17.9827774!3e0?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-mango hover:text-white text-xs underline underline-offset-4 transition-colors font-medium">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Contact */}
          <div>
            <h4 className="font-display text-xl mb-6 text-mango">Business & B2B</h4>
            <div className="space-y-6">
              <a href="mailto:anirudh170320@gmail.com?subject=Wholesale/Business Inquiry" className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-mango/20 transition-colors border border-white/5 group-hover:border-mango/30">
                  <Mail size={18} className="text-mango" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest mb-1 font-bold">Bulk Orders</p>
                  <p className="text-cream/90 group-hover:text-white transition-colors text-sm">anirudh170320@gmail.com</p>
                </div>
              </a>
              
              <a href="https://wa.me/916363739531?text=Hello Ananth Farm! I have a wholesale/B2B inquiry." target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-mango/20 transition-colors border border-white/5 group-hover:border-mango/30">
                  <MessageCircle size={18} className="text-mango" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest mb-1 font-bold">WhatsApp B2B</p>
                  <p className="text-cream/90 group-hover:text-white transition-colors text-sm">+91 63637 39531</p>
                  <p className="text-xs text-cream/50 mt-0.5">Anirudh Gadgikar</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} Ananth Farm Mangoes. All rights reserved.</p>
          <div className="flex gap-4">
            {links.legal.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-cream transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
