'use client';

import React from 'react';

export default function Instructor() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto border-b border-[var(--border-line)] bg-transparent transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-3">
          <span className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase block">Direction</span>
          <h2 className="text-2xl font-black uppercase tracking-tight mt-2 text-[var(--text-secondary)]">The Faculty</h2>
        </div>

        <div className="lg:col-span-9 space-y-8">
          <h3 className="text-2xl sm:text-4xl font-black tracking-tighter leading-snug max-w-3xl text-[var(--text-primary)]">
            Led by an active Creative Director managing international client rosters and identity pipelines.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed">
              We believe graphic design cannot be taught effectively by academic professors who haven&apos;t pitched a real client contract in ten years. Midnight Academy was built to serve as an antidote to outdated regional training programs.
            </p>
            <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed">
              You will work directly inside a real agency workflow environment, learning the exact communication mechanics, asset handoffs, and visual strategies used to command premium rates in modern design industries.
            </p>
          </div>

          <div className="pt-8 border-t border-[var(--border-line)] grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-black text-[var(--text-primary)] tracking-tighter">12+</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mt-1">Years Agency Experience</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[var(--text-primary)] tracking-tighter">€50K+</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mt-1">Active Client Budgets</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[var(--text-primary)] tracking-tighter">15 Max</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mt-1">Students Per Cohort</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}