'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-4 border-b border-zinc-900 bg-zinc-950">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Scarcity / Context Badge */}
        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Course #1 — Autumn 2026 (15 Seats Max)
        </span>

        {/* Core Hook */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 text-white leading-[1.1]">
          Learn Graphic Design From An Active{' '}
          <span className="text-zinc-400 block sm:inline">Creative Director.</span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop learning software tools in isolation. Spend 8 weeks inside an active international agency workflow in Tirana and build a portfolio that actually wins high-paying clients.
        </p>

        {/* Call to Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-sm rounded-lg hover:bg-zinc-200 transition duration-200 shadow-lg shadow-white/5 text-center"
          >
            Apply for a Seat
          </a>
          <a
            href="#curriculum"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-zinc-300 border border-zinc-800 font-medium text-sm rounded-lg hover:bg-zinc-800 hover:text-white transition duration-200 text-center"
          >
            Explore Syllabus
          </a>
        </div>
      </div>
    </section>
  );
}