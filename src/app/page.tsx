import { Hero } from "@/components/home/Hero";
import { FarmStats } from "@/components/home/FarmStats";
import { HarvestVideo } from "@/components/home/HarvestVideo";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { MangoVarieties } from "@/components/home/MangoVarieties";
import { NaturalFarming } from "@/components/home/NaturalFarming";
import { AdoptTree } from "@/components/home/AdoptTree";
import { JournalPreview } from "@/components/home/JournalPreview";
import { FAQ } from "@/components/shop/FAQ";
import { Gifting } from "@/components/home/Gifting";
import { FarmVisit } from "@/components/home/FarmVisit";
import { Waitlist } from "@/components/home/Waitlist";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FarmStats />
      <HarvestVideo />
      <ProductShowcase />
      <MangoVarieties />
      <NaturalFarming />
      <AdoptTree />
      <JournalPreview />
      <FAQ />
      <Gifting />
      <FarmVisit />
      <Waitlist />
      <FinalCTA />
    </>
  );
}
