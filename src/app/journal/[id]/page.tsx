import { journalEntries } from "@/data/journal";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return journalEntries.map((entry) => ({
    id: entry.id,
  }));
}

export default async function JournalEntryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = journalEntries.find((e) => e.id === id);

  if (!entry) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link href="/#journal" className="inline-flex items-center gap-2 text-forest/70 hover:text-mango transition-colors mb-8 font-medium">
          <ArrowLeft size={16} />
          Back to Journal
        </Link>
        
        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-forest/60 mb-6">
          <span>{entry.category}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-mango" />
          <span>{entry.date}</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest font-bold mb-8 leading-tight">
          {entry.title}
        </h1>
        
        <div className="relative h-[40vh] md:h-[60vh] w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image
            src={entry.image}
            alt={entry.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <article className="prose prose-lg md:prose-xl prose-stone max-w-none text-dark/80">
          <p className="text-2xl text-forest/90 font-medium mb-8 leading-relaxed">
            {entry.description}
          </p>
          
          <p className="mb-6">
            Welcome to the deeper dive into {entry.title.toLowerCase()}. 
            At Ananth Farm, we believe that transparency is key to building trust with our community.
            This journal entry gives you an inside look into our daily life and the care that goes into every mango we produce.
          </p>
          
          <p className="mb-6">
            The process starts long before the actual harvest. We carefully monitor the soil quality, ensuring it has all the necessary nutrients. Our sustainable farming practices not only produce better-tasting mangoes but also protect the environment for future generations.
          </p>

          <h2 className="text-3xl text-forest font-display font-bold mt-12 mb-6">Our Commitment</h2>
          <p className="mb-6">
            Everything we do is driven by our passion for quality and sustainability. We never use harmful chemicals, relying instead on natural fertilizers and careful water management. It's a lot of hard work, but when you taste the final product, we think you'll agree it's worth the effort.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-forest/10 mt-12">
            <h3 className="text-xl font-bold text-forest mb-4">Want to experience it yourself?</h3>
            <p className="mb-6 text-dark/70">
              You can adopt a tree or order our premium mangoes directly from the farm during harvest season.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/#adopt" className="bg-mango text-dark px-6 py-3 rounded-full font-bold hover:bg-forest hover:text-white transition-colors">
                Adopt a Tree
              </Link>
              <Link href="/#order" className="bg-forest text-white px-6 py-3 rounded-full font-bold hover:bg-forest/90 transition-colors">
                Order Mangoes
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
