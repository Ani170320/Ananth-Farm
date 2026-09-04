import { Hero } from "@/components/home/Hero";
import { FarmStats } from "@/components/home/FarmStats";
import { OurStory } from "@/components/home/OurStory";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { MangoVarieties } from "@/components/home/MangoVarieties";
import { FarmJourney } from "@/components/home/FarmJourney";
import { NaturalFarming } from "@/components/home/NaturalFarming";
import { AdoptTree } from "@/components/home/AdoptTree";
import { JournalPreview } from "@/components/home/JournalPreview";
import { FAQ } from "@/components/shop/FAQ";
import { Gifting } from "@/components/home/Gifting";
import { FarmVisit } from "@/components/home/FarmVisit";
import { Waitlist } from "@/components/home/Waitlist";
import { AskAnanthSection } from "@/components/home/AskAnanthSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FarmStats />
      <OurStory />
      <ProductShowcase />
      <MangoVarieties />
      <FarmJourney />
      <NaturalFarming />
      <AdoptTree />
      <JournalPreview />
      <FAQ />
      <Gifting />
      <FarmVisit />
      <Waitlist />
      <AskAnanthSection />
      <FinalCTA />
    </>
  );
}
