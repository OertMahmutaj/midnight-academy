import React from 'react';
import Link from 'next/link';

// Strict TypeScript structure for our expert case studies
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  problem: string;
  solution: string;
  deliverables: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "01",
    title: "Rebranding Albania's Premier Specialty Coffee Chain",
    client: "Mulliri i Vjetër (Concept Remaster)",
    category: "Brand Identity & Packaging Systems",
    year: "2025",
    problem: "The client needed to shift from a nostalgic, traditional local coffee aesthetic to an aggressive, modern, third-wave international design footprint to capture a younger demographic.",
    solution: "Developed a custom, razor-sharp vector typography system paired with stark, raw packaging textures. Dropped standard coffee patterns for custom minimalist layouts that stand out immediately on retail shelving units.",
    deliverables: ["Visual Strategy", "Custom Logotype", "Industrial Packaging Layouts", "Brand Guidelines Book"]
  },
  {
    id: "02",
    title: "Scaling Digital Design Architecture for a Fintech Platform",
    client: "Delphi Pay Europe",
    category: "Product UI/UX & Visual Systems",
    year: "2026",
    problem: "A high-volume transactional platform was losing user conversion rates due to complex data visualization graphs and messy interface components on their client onboarding portal.",
    solution: "Stripped away unnecessary styling accents and built a highly strict, minimalist components layout hierarchy. Standardized form user interfaces which reduced conversion friction drops by over 34%.",
    deliverables: ["UX Architecture Blueprint", "Design System Infrastructure", "High-Density Data Visuals"]
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-24 md:py-32 selection:bg-white selection:text-black antialiased">
      {/* Structural Framing Grid Background Accent */}
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <header className="mb-20 border-b border-zinc-900 pb-12 relative">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-4">Executive Track Record</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Selected Agency <br />
            <span className="text-zinc-500">Case Studies.</span>
          </h1>
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
            A raw, deep look inside the execution modules taught at Midnight Academy. We do not design placeholders; we construct elite commercial assets.
          </p>
        </header>

        {/* Asymmetrical Case Studies List Container */}
        <section className="space-y-24">
          {CASE_STUDIES.map((study) => (
            <article key={study.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-900 pb-20 last:border-0 last:pb-0">
              
              {/* Left Identifier Metadata Block */}
              <div className="lg:col-span-4 space-y-6">
                <div className="text-5xl font-black font-mono text-zinc-800 tracking-tighter">
                  {study.id}
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">Project Client</h3>
                  <p className="text-sm font-semibold text-zinc-200">{study.client}</p>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">Core Discipline</h3>
                  <p className="text-sm font-semibold text-zinc-200">{study.category}</p>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">Timeline</h3>
                  <p className="text-sm font-semibold text-zinc-200">Execution / {study.year}</p>
                </div>
              </div>

              {/* Right Context & Strategy Description Block */}
              <div className="lg:col-span-8 space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug text-white">
                  {study.title}
                </h2>
                
                <div className="space-y-4">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-bold">The Strategic Problem</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{study.problem}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-bold">The Design Transformation</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">{study.solution}</p>
                </div>

                {/* Scope Badges */}
                <div className="pt-4">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-500 font-bold mb-3">Deliverables Scope</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.deliverables.map((item, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-zinc-950 border border-zinc-900 text-zinc-400 font-mono text-[11px] rounded-md tracking-wide">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </article>
          ))}
        </section>

        {/* Dynamic Page Footer Navigation Trigger */}
        <div className="mt-24 pt-12 border-t border-zinc-950 text-center">
          <p className="text-zinc-500 text-sm mb-6">Ready to stop guessing and master this direct level of design execution?</p>
          <Link 
            href="/#book" 
            className="inline-block px-8 py-4 bg-white text-black font-bold text-sm rounded-lg hover:bg-zinc-200 transition duration-200"
          >
            Claim 1 of our 15 Seats
          </Link>
        </div>

      </div>
    </main>
  );
}