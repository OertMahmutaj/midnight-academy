'use client';

import React from 'react';

interface SyllabusWeek {
  num: string;
  topic: string;
  focus: string;
  details: string;
}

const WEEKS: SyllabusWeek[] = [
  { num: "WK // 01-02", topic: "Core Typography Systems", focus: "Logotypes & Structural Grid Rules", details: "Master kerning, type selection, optical balance, and vector path precision. Learn why typography dictates 90% of a premium brand's value." },
  { num: "WK // 03-04", topic: "Commercial Brand Architecture", focus: "Corporate Guidelines & Assets", details: "Translate visual strategies into full asset systems. Build complete, responsive brand manuals for international corporate structures." },
  { num: "WK // 05-06", topic: "Industrial Packaging Design", focus: "3D Spatial Layouts & Production Lines", details: "Design for real-world physical dimensions. Master die-lines, material texturing, print finishes, and physical manufacturing setup rules." },
  { num: "WK // 07-08", topic: "The Elite Agency Workflow", focus: "Portfolio Polish & Client Conversion", details: "Construct high-end case studies exactly like this website. Learn how to pitch, contract, and close multi-thousand-euro design deals." }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="px-6 py-24 max-w-6xl mx-auto bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase block mb-4">Program Blueprint</span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-[var(--text-primary)]">The 8-Week Core Modules.</h2>
      </div>

      <div className="border-t border-[var(--border-line)]">
        {WEEKS.map((week, index) => (
          <div key={index} className="heights-grid-border grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12 items-start px-2">
            
            <div className="md:col-span-3">
              <span className="font-mono text-xs text-[var(--text-secondary)] font-semibold">{week.num}</span>
            </div>

            <div className="md:col-span-5">
              <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-1">{week.topic}</h3>
              <p className="text-xs font-mono text-[var(--text-secondary)] tracking-wide">{week.focus}</p>
            </div>

            <div className="md:col-span-4">
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                {week.details}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}