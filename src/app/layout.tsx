import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ananth Farm Mangoes | From Our Trees. Straight to Your Home.",
  description: "Naturally grown mangoes, carefully harvested from our farm and delivered directly to you. Adopt a tree, trace your mango, and experience farm-direct freshness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="font-sans bg-cream text-dark flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <WhatsAppWidget />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
