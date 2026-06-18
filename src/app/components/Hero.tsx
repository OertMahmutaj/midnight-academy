'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="px-6 pt-40 pb-24 border-b border-[var(--border-line)] bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Massive Context Statement */}
        <div className="lg:col-span-8 space-y-8">
          <span className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase block">Midnight Academy</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tighter text-[var(--text-primary)]">
            We don&apos;t teach tools. <br />
            We construct elite commercial designers.
          </h1>
        </div>

        {/* Right Column: Context Paragraph & Actions */}
        <div className="lg:col-span-4 lg:pt-14 space-y-8">
          <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
            Spend 8 weeks inside a strict, production-level studio workflow right here in Tirana. Learn directly from an active Creative Director and engineer a professional footprint that wins client contracts.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#book" className="heights-btn-primary">Apply Now</a>
            <a href="#curriculum" className="heights-btn-secondary">Syllabus</a>
          </div>
        </div>

      </div>
    </section>
  );
}