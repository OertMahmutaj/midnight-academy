import React from 'react';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  scope: string[];
  metrics: string;
  summary: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "01",
    client: "Mulliri i Vjetër",
    industry: "Retail & Franchise Concept",
    title: "Transforming Albania’s commercial coffee presence for a global generation.",
    scope: ["Brand Strategy", "Visual Identity", "Packaging Systems"],
    metrics: "+42% Brand Recall",
    summary: "Reconstructed a deeply rooted regional identity into a hyper-modern visual ecosystem. Stripped away generic elements to introduce structural, typographic packaging layouts that command physical retail shelves."
  },
  {
    id: "02",
    client: "Delphi Pay Europe",
    industry: "Fintech Interface Platform",
    title: "Engineering a high-density design system to eliminate user onboarding friction.",
    scope: ["UX Architecture", "Design System", "Product Design"],
    metrics: "-34% Funnel Friction",
    summary: "Standardized the digital banking application infrastructure for a cross-border remittance portal. Replaced messy dashboard metrics with crisp typography, drastically scaling transactional clarity."
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 pt-40 pb-24 selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] antialiased transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Section Header */}
        <header className="max-w-3xl mb-20">
          <span className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase block mb-4">Production Archive</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter text-[var(--text-primary)]">
            Case Studies.
          </h1>
        </header>

        {/* The Strict Heights-Style Stacked Rows */}
        <div className="border-t border-[var(--border-line)]">
          {CASE_STUDIES.map((project) => (
            <div 
              key={project.id} 
              className="heights-grid-border grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 items-start px-2"
            >
              {/* Column 1: Metadata Counter (Left) */}
              <div className="md:col-span-3 space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-[var(--text-secondary)] opacity-50">{project.id}</span>
                  <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">{project.client}</h3>
                </div>
                <p className="text-xs font-mono text-[var(--text-secondary)] tracking-wide uppercase">{project.industry}</p>
                <div className="pt-1">
                  <span className="heights-tag">{project.metrics}</span>
                </div>
              </div>

              {/* Column 2: Core Statement & Explanation (Center) */}
              <div className="md:col-span-5 space-y-4">
                <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] leading-snug">
                  {project.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Column 3: Deliverables Scope Grid (Right) */}
              <div className="md:col-span-4 space-y-4 md:text-right">
                <span className="text-[10px] font-mono tracking-wider text-[var(--text-secondary)] block uppercase">Deliverables</span>
                <div className="flex flex-wrap md:justify-end gap-1.5">
                  {project.scope.map((tag, idx) => (
                    <span key={idx} className="heights-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Minimalist Bottom CTA Block */}
        <footer className="mt-32 max-w-3xl border-t border-[var(--border-line)] pt-16">
          <span className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase block mb-4">Next Cohort Setup</span>
          <h4 className="text-2xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">Ready to design at this baseline?</h4>
          <p className="text-[var(--text-secondary)] text-sm max-w-xl mb-8 font-light leading-relaxed">
            We break down the exact tactical workflow mechanisms, typography rules, and strategic presentation blueprints used to create the work displayed above.
          </p>
          <Link href="/#book" className="heights-btn-primary">
            Apply Now
          </Link>
        </footer>

      </div>
    </main>
  );
}